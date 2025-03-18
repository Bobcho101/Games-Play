export default{
    isUser(){
        localStorage.getItem('accessToken') ? true : false;
    },
    setUserData(response){
        localStorage.setItem('accessToken', response.accessToken);
        localStorage.setItem('email', response.email);
    }
}