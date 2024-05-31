import { Panel } from "./panel"

import { db } from '../firebase'
import { addDoc, collection } from 'firebase/firestore'

import { ChangeEvent, useState } from "react"

interface CrewMember {
    name: string
    patent: string
    password: string
    race: string
    age: string
    position: string
}

export function Computer ({ handlePanel }: { handlePanel: () => void }) {
    const [newCrewMember, setNewCrewMember] = useState({} as CrewMember)

    function handleForm (input: ChangeEvent<HTMLInputElement>) {
        const { target } = input
        setNewCrewMember((prev) => ({
            ...prev,
            [target.name]: target.value,
        }))
    }

    async function registerCrewMember () {
        const data: CrewMember = {
            name: newCrewMember.name,
            patent: newCrewMember.patent,
            password: newCrewMember.password,
            race: newCrewMember.race,
            age: newCrewMember.age,
            position: newCrewMember.position,
        }

        await addDoc(collection(db, "crew_members"), {
            ...data
        })
    }

    return (
        <Panel>
            <div className="h-full w-full fixed inset-0 bg-black font-pc text-yellow-500 flex justify-center items-center">
                <div className="h-[720px] w-[720px]">
                    <div className="text-3xl flex justify-between">
                        <h1>Cadastrar membro</h1>
                        <button onClick={handlePanel}>X</button>
                    </div>
                    <div className="flex flex-col gap-7 py-4 text-lg">
                        <input name="name" value={newCrewMember.name} className="w-full bg-transparent outline-none" type="text" placeholder="Nome" onChange={e => handleForm(e)} />
                        <input name="patent" value={newCrewMember.patent} className="w-full bg-transparent outline-none" type="text" placeholder="Patente" onChange={e => handleForm(e)} />
                        <input name="password" value={newCrewMember.password} className="w-full bg-transparent outline-none" type="text" placeholder="password" onChange={e => handleForm(e)} />
                        <input name="race" value={newCrewMember.race} className="w-full bg-transparent outline-none" type="text" placeholder="Raça" onChange={e => handleForm(e)} />
                        <input name="age" value={newCrewMember.age} className="w-full bg-transparent outline-none" type="text" placeholder="Idade" onChange={e => handleForm(e)} />
                        <input name="position" value={newCrewMember.position} className="w-full bg-transparent outline-none" type="text" placeholder="Cargo" onChange={e => handleForm(e)} />
                        <button onClick={registerCrewMember}>Cadastrar</button>
                    </div>
                </div>
            </div>
        </Panel>
    )
}