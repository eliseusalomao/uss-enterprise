import ReactDOM from 'react-dom'

export function Panel ({ children }: { children: React.ReactNode }) {
    const panel = document.getElementById('panel')!
    return ReactDOM.createPortal(children, panel)
}