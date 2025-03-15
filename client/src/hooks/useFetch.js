import { useEffect, useState } from "react";

const useFetch = (url, fetchingOneGame = false) => {
    const [data, setData] = useState(fetchingOneGame ? {} : []);

   useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setData(fetchingOneGame ? data : Object.entries(data));
            }).catch((err) => {     
                console.log(err.message);
            })
    }, [url]);
    
    return [data];
}
export default useFetch;