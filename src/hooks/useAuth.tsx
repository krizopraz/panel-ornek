import * as React from 'react'
const AuthContext = React.createContext({user:{name:null,token:null}})

function useAuthHook() {
    const [user, setUser] = React.useState<{name:string|null,token:string|null}>({name:null,token:null})

    return {
        user,
        login() {
            return new Promise((res) => {
                setUser({name:'test',token:'token'})
                res('')
            })
        },
        logout() {
            return new Promise((res) => {
                setUser({name:null,token:null})
                res('')
            })
        },
    }
}

export function AuthProvider ({ children }) {
    const auth = useAuthHook()

    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

export default function useAuth() {
    return React.useContext(AuthContext)
}