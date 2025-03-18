import { useNavigate } from "react-router";
import localStorageUtils from "../../utils/localStorageUtils";
const baseUrl = "http://localhost:3030/users";

export default function Logout({setIsUser}) {
    const navigate = useNavigate();
    const isUser = localStorageUtils.isUser();

    const logoutHandler = async () => {
        if(isUser){
            const accessToken = localStorageUtils.getUserAccessToken();

            try {
                const res = await fetch(`${baseUrl}/logout`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-Authorization': accessToken, 
                    },
                });

                if (!res.ok) {
                    throw new Error(`A guest cannot logout!`);
                }
                return res;
            } catch (err) {
                console.log(err.message);
            } 

            localStorageUtils.clearUserData();
            setIsUser(false);
            return navigate('/');
        }
    };

    logoutHandler();
    

}