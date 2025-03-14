import { useState } from "react";
import createGame from "../utils/gamesUtils";

export default function useForm(initValues) {
    const [values, setValues] = useState(initValues);
    
    const changeHandler = (e) => {
        setValues((curValues) => ({
            ...curValues,
            [e.target.name]: e.target.value
        }));
    };
    const onSubmitHandler = async () => {
        await createGame(values);
    };
    
    return [values, changeHandler, onSubmitHandler];
}