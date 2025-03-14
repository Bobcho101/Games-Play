import { useState } from "react";

export default function useForm(initValues) {
    const [values, setValues] = useState(initValues);
    
    const changeHandler = (e) => {
        setValues((curValues) => ({
            ...curValues,
            [e.target.name]: e.target.value
        }));
    };
    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(values);  
    };
    
    return [values, changeHandler, onSubmitHandler];
}