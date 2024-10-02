import {ReactElement, useEffect, useState} from "react";
import AuthRepository from "../Repositories/AuthRepository.ts";
import User from "../models/User.ts";
import {UserContext, SetUserContext} from "../UserContext.ts";

export default function UserProvider(
    props: {
        children: ReactElement
        authRepository: AuthRepository
    }
) {
    const [user, setUser] = useState<User | null>(null)

    useEffect(() => {
        props.authRepository.getUser()
            .then( user => {
                setUser(user)
            })
            .catch( error => console.log(error))
    }, []);

    return (
        <UserContext.Provider value={user}>
            <SetUserContext.Provider value={setUser}>
                {props.children}
            </SetUserContext.Provider>
        </UserContext.Provider>
    )
}