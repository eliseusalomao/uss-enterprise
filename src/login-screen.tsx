import { ChangeEvent, useState } from "react";
import { Panel } from "./panel";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";

interface User {
    name: string
    password: string
}

export function LoginScreen ({ handlePanel, setIsLoggedIn }: { handlePanel: () => void, setIsLoggedIn: (log: boolean) => void }) {
    const [logInUser, setLogInUser] = useState({} as User)

    function handleForm (input: ChangeEvent<HTMLInputElement>) {
        const { target } = input
        setLogInUser((prev) => ({
            ...prev,
            [target.name]: target.value,
        }))
    }

    async function handleLogin () {
        try {
            const getUserQuery = query(collection(db, 'crew_members'),
                where("name", "==", logInUser.name),
                where("password", "==", logInUser.password)
            )
            const getUserData = await getDocs(getUserQuery)
            if (getUserData.docChanges()[0].doc.data()) setIsLoggedIn(true)
        } catch {
            throw new Error('You do not have permission on the Enterprise!')
        }
    }

    return (
        <Panel>
            <div className="h-full w-full fixed inset-0 bg-black font-pc text-yellow-500 flex justify-center items-center">
                <div className="h-[720px] w-[720px]">
                    <div className="text-3xl flex justify-between">
                        <h1>Login</h1>
                        <button onClick={handlePanel}>X</button>
                    </div>
                    <div className="flex flex-col gap-7 py-4 text-lg">
                        <input name="name" value={logInUser.name} className="w-full bg-transparent outline-none" type="text" placeholder="Login" onChange={e => handleForm(e)} />
                        <input name="password" value={logInUser.password} className="w-full bg-transparent outline-none" type="text" placeholder="Senha" onChange={e => handleForm(e)} />
                        <button onClick={handleLogin}>Login</button>
                    </div>
                </div>
            </div>
        </Panel>
    )
}