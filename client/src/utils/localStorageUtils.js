export default{
    isUser(){
        return localStorage.getItem('accessToken') ? true : false;
    },
    setUserData(response){
        localStorage.setItem('accessToken', response.accessToken);
        localStorage.setItem('email', response.email);
        localStorage.setItem('uid', response._id);
    },
    clearUserData(){
        localStorage.clear();
    },
    getUserAccessToken(){
        return localStorage.getItem('accessToken');
    },
}