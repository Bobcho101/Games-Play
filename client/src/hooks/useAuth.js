const baseUrl = "http://localhost:3030/users";

const useRegister = () => {
    const register = async (userValues) => {
        try {
            const res = await fetch(`${baseUrl}/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userValues)
            });

            if (!res.ok) {
                throw new Error(`User does not exist!`);
            }

            const data = await res.json();
            return data;
        } catch (err) {
            console.log(err.message);
            return {error: err.message};
        } 
    }
    return [register];
}


const useLogin = () => {
    const login = async (userValues) => {
        try {
            const res = await fetch(`${baseUrl}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userValues)
            });

            if (!res.ok) {
                throw new Error(`User does not exist!`);
            }

            const data = await res.json();
            return data;
        } catch (err) {
            console.log(err.message);
            return {error: err.message};
        } 
    }
    return [login];
}



export {
    useLogin,
    useRegister,
}