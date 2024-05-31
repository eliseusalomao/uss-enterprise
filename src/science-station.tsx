import { useNavigate } from 'react-router-dom'
import sciencestation from './scenes/sciencestation.png'
import { useState } from 'react'
import { Computer } from './computer'

export function ScienceStation () {
    const [isPanelOpen, setIsPanel] = useState(false)
    const redirect = useNavigate()

    function returnToBridge () {
        redirect('/')
    }

    function handlePanel () {
        setIsPanel((prev) => !prev)
    }

    return (
        <div className="font-medium text-white">
            <div className="relative overflow-hidden h-lvh w-lvw">
                <img className="h-lvh w-full" src={sciencestation} alt="" />
                <div className="absolute top-[412px] right-[280px] border-solid border-2 border-white">
                    <button className="bg-green-600 p-2 m-1" onClick={handlePanel}>Cadastrar membro</button>
                </div>
                <div className="absolute top-[412px] left-[280px] border-solid border-2 border-white">
                    <button className="bg-green-600 disabled:opacity-70 disabled:cursor-not-allowed p-2 m-1" disabled>Consultar planetas</button>
                </div>
                <div className="absolute top-[912px] left-[280px] border-solid border-2 border-white">
                    <button className="bg-green-600 p-2 m-1" onClick={returnToBridge}>Voltar a ponte de comando</button>
                </div>
            </div>
            {isPanelOpen && (
                <Computer screen="register" handlePanel={handlePanel} />
            )}
        </div>
    )
}