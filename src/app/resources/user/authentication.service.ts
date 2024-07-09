import { AccessToken, Credentials, User, UserSessionToken } from './user.resources'
import jwt from 'jwt-decode'

class AuthService {
    baseURL: string = 'http://localhost:8080/v1/users';
    static AUTH_PARAM: string = '_auth';

    async authentication(credentials: Credentials): Promise<AccessToken> {
        const response = await fetch(this.baseURL + '/auth', {
            method: 'POST',
            body: JSON.stringify(Credentials),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if(response.status === 401) {
            throw new Error('User or password incorrect')
        }

        return await response.json()
    }

    async save(user: User): Promise<void> {
        const response = await fetch(this.baseURL, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        console.log('auth.save', response)

        if(response.status === 409) {
            const responseError = await response.json()
            throw new Error(responseError.error)
        }
    }

    async initSession(token: AccessToken) {
        if(token?.accessToken) {
            const decodedToken: any = jwt(token.accessToken)
            
            console.log('DECODED-TK', decodedToken)
            
            const userSessionToken: UserSessionToken = { 
                accessToken: token.accessToken,
                email: decodedToken.sub,
                name: decodedToken.name,
                expiration: decodedToken.exp
            }

            this.setUserSession(userSessionToken)
        }
    }

    setUserSession(userSessionToken: UserSessionToken) {
        localStorage.setItem(AuthService.AUTH_PARAM, JSON.stringify(userSessionToken))
    }
}

export const useAuth = () => new AuthService()