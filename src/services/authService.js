import axios from '../utils/axios'

class AuthService {
    signIn = (email, password) => {
        return new Promise((resolve, reject) => {
            axios.post('/api/home/login', { email, password })
                .then((response) => {
                    if (response.data.user) {
                        this.setToken('JWT')
                        resolve(response.data.user)
                    } else {
                        reject(response.data.error)
                    }
                })
                .catch((err) => {
                    reject(err)
                })
        })
    }

    signInWithToken = () => {
        return new Promise((resolve, reject) => {
            axios.post('/api/home/me')
                .then(response => {
                    if (response.data.user) {
                        resolve(response.data.user)
                    } else {
                        reject(response.data.error)
                    }
                })
                .catch(error => {
                    reject(error)
                })
        })
    }

    signOut = () => {
        this.removeToken()
    }

    setToken = (token) => {
        localStorage.setItem("acccessToken", token)
    }

    getToken = () => localStorage.getItem("acccessToken")

    removeToken = () => localStorage.removeItem("acccessToken")

    isAuthenticated = () => !!this.getToken()
}

const authService = new AuthService()

export default authService