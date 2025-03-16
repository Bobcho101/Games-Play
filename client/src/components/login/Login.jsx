import { Link } from "react-router";
import useForm from "../../hooks/useForm";

export default function Login() {
    const [formValues, changeFormValues] = useForm({
        'email': '',
        'password': '',
    });

    const formSubmitHandler = (e) => {
        e.preventDefault();
        
    }

    return (
        <>
            <section id="login-page" className="auth">
                <form onSubmit={formSubmitHandler} id="login">
                    <div className="container">
                    <div className="brand-logo" />
                    <h1>Login</h1>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Sokka@gmail.com"
                        onChange={changeFormValues}
                    />
                    <label htmlFor="login-pass">Password:</label>
                    <input type="password" id="login-password" name="password" onChange={changeFormValues} />
                    <input type="submit" className="btn submit" defaultValue="Login" />
                    <p className="field">
                        <span>
                        If you don&apos;t have profile click <Link to={'/register'}>here</Link>
                        </span>
                    </p>
                    </div>
                </form>
            </section>
        </>
    );
}