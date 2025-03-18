import { Link, useNavigate } from "react-router";
import useForm from "../../hooks/useForm";
import { useRegister } from "../../hooks/useAuth";
import localStorageUtils from "../../utils/localStorageUtils";

export default function Register({setIsUser}) {
    const navigate = useNavigate();
    const [ register ] = useRegister();
    const [formValues, changeFormValues] = useForm({
        'email': '',
        'password': '',
        'confirm-password': '',
    });


    const formSubmitHandler = async (e) => {
        e.preventDefault();
        if(formValues.password !== formValues['confirm-password']){
            return alert('Password mismatched!')
        }
        const response = await register(formValues);
        if(response.error){
            formValues.password = '';
            alert('Wrong email or password!');
        }     
        
        localStorageUtils.setUserData(response);
        setIsUser(true);
        return navigate('/');
    }

    return (
        <>
            <section id="register-page" className="content auth">
                <form onSubmit={formSubmitHandler} id="register">
                    <div className="container">
                    <div className="brand-logo" />
                    <h1>Register</h1>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="maria@email.com"
                        onChange={changeFormValues}
                    />
                    <label htmlFor="pass">Password:</label>
                    <input type="password" name="password" id="register-password" onChange={changeFormValues} />
                    <label htmlFor="con-pass">Confirm Password:</label>
                    <input type="password" name="confirm-password" id="confirm-password" onChange={changeFormValues} />
                    <input className="btn submit" type="submit" defaultValue="Register" />
                    <p className="field">
                        <span>
                        If you already have profile click <Link to={'/login'}>here</Link>
                        </span>
                    </p>
                    </div>
                </form>
            </section>
        </>
    );
}