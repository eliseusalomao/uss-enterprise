import { useNavigate } from 'react-router-dom'
import bridge from './scenes/bridge.png'

export function Bridge () {
    const redirect = useNavigate()

    function goToScienceStation () {
        redirect('/science-station')
    }

    return (
        <div className="font-medium text-white">
            <div className="relative overflow-hidden h-lvh">
                <img className="w-full h-full object-cover" src={bridge} alt="" />
                <div className="absolute top-[412px] right-[280px] border-solid border-2 border-white" >
                    <button className="bg-green-600 p-2 m-1" onClick={goToScienceStation}>Conversar com o Oficial de Ciências</button>
                </div>
                <div className="absolute top-[612px] left-[380px] border-solid border-2 border-white">
                    <button className="bg-green-600 p-2 m-1 disabled:opacity-70 hover:cursor-not-allowed" disabled>Conversar com equipe de navegação</button>
                </div>
            </div>
        </div>
    )
}