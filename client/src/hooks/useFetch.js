import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [pending, setPending] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setPending(true);
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setData(Object.values(data));
                setPending(false);
            }).catch((err) => {     
                setError(err.message);
                setPending(false);
            }).finally(() => setPending(false))
    }, [url])

    return [data, pending, error];
}

export default useFetch;