import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                console.log(Object.entries(data));
                
                setData(Object.entries(data));
            }).catch((err) => {     
                console.log(err.message);
            })
    }, [url])

    return [data];
}

export default useFetch;