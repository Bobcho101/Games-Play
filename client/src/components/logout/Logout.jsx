import { useNavigate } from "react-router";
import localStorageUtils from "../../utils/localStorageUtils";
import { useLogout } from "../../hooks/useAuth";


export default function Logout() {
    const navigate = useNavigate();
    const [ logout ] = useLogout();
    const isUser = localStorageUtils.isUser();

    const logoutHandler = async () => {
        if(isUser){
            const accessToken = localStorageUtils.getUserAccessToken();
            const res = await logout(accessToken);

            if(res.error){
                return alert('A guest cannot logout!')
            }

            localStorageUtils.clearUserData();
            navigate('/');
        }
    };

    logoutHandler();
    

}