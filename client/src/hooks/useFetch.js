import { useEffect, useState } from "react";

const useFetchAllGames = (url) => {
    const [data, setData] = useState([]);
    
   useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
        fetch(url, { signal })
            .then((res) => res.json())
            .then((data) => {
                setData(data);
            }).catch((err) => {     
                console.log(err.message);
            })

        return () => {  
            controller.abort(); 
        };
    }, [url]);
    
    return [data];
}

const useFetchOneGame = (url) => {
    const [data, setData] = useState({});
    
    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
        fetch(url, { signal })
            .then((res) => res.json())
            .then((data) => {
                setData(data);
            }).catch((err) => {     
                console.log(err.message);
            })

        return () => {  
            controller.abort(); 
        };
    }, [url]);

    return [data];
}

const useCreateGame = (url) => {

}

export {
    useFetchAllGames,
    useFetchOneGame,
};