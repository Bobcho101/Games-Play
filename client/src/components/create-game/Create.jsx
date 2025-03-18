import { useNavigate } from "react-router";
import useForm from "../../hooks/useForm";
import createGame from "../../utils/gamesUtils";
import localStorageUtils from "../../utils/localStorageUtils";

export default function Create() {
    const navigate = useNavigate();
    const [formValues, changeFormValuesHandler] = useForm({
        'title': '', 
        'category': '', 
        'maxLevel': '',
        'imageUrl': '',
        'summary': '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = Object.fromEntries(new FormData(e.currentTarget));
        const accessToken = localStorageUtils.getUserAccessToken();
        const result = await createGame(formData, accessToken);


        if(result.error){
            return alert("Game wasn't created! Try again!");
        }

        return navigate('/games');
    };


    return (
        <>
            <section id="create-page" className="auth">
                <form onSubmit={handleSubmit} id="create">
                    <div className="container">
                    <h1>Create Game</h1>
                    <label htmlFor="title">Legendary title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Enter game title..."
                        value={formValues.title}
                        onChange={changeFormValuesHandler}
                    />
                    <label htmlFor="category">Category:</label>
                    <input
                        type="text"
                        id="category"
                        name="category"
                        placeholder="Enter game category..."
                        value={formValues.category}
                        onChange={changeFormValuesHandler}
                    />
                    <label htmlFor="maxLevel">MaxLevel:</label>
                    <input
                        type="number"
                        id="maxLevel"
                        name="maxLevel"
                        min={1}
                        placeholder={1}
                        value={formValues.maxLevel}
                        onChange={changeFormValuesHandler}
                    />
                    <label htmlFor="imageUrl">Image:</label>
                    <input
                        type="text"
                        id="imageUrl"
                        name="imageUrl"
                        placeholder="Upload a photo..."
                        value={formValues.imageUrl}
                        onChange={changeFormValuesHandler}
                    />
                    <label htmlFor="summary">Summary:</label>
                    <textarea name="summary" id="summary" defaultValue={formValues.summary} onChange={changeFormValuesHandler}  />
                    <input className="btn submit" type="submit" defaultValue="Create Game" />
                    </div>
                </form>
            </section>

        </>
    );
}