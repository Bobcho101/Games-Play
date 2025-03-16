import { useEffect, useState } from "react";

const useFetch = (url, fetchingOneGame = false) => {
    const [data, setData] = useState(fetchingOneGame ? {} : []);
    
   useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
        fetch(url, { signal })
            .then((res) => res.json())
            .then((data) => {
                setData(fetchingOneGame ? data : Object.entries(data));
            }).catch((err) => {     
                console.log(err.message);
            })

        return () => {  
            controller.abort(); 
        };
    }, [url, fetchingOneGame]);
    
    return [data];
}
export default useFetch;