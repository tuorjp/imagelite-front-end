import { AccessToken, Credentials, User, UserSessionToken } from './user.resources'

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
}

export const useAuth = () => new AuthService()