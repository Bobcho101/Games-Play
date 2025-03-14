import useForm from "../../hooks/useForm";

export default function Create() {
    const [formValues, changeFormValuesHandler, submitFormHandler] = useForm({
        'title': '', 
        'category': '', 
        'maxLevel': '',
        'imageUrl': '',
    });


    return (
        <>
            <section id="create-page" className="auth">
                <form onSubmit={submitFormHandler} id="create">
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
                    <textarea name="summary" id="summary" defaultValue={""} />
                    <input className="btn submit" type="submit" defaultValue="Create Game" />
                    </div>
                </form>
            </section>

        </>
    );
}