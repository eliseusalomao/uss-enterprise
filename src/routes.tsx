import { BrowserRouter, Routes as Pages, Route } from 'react-router-dom'
import { Bridge } from './bridge'
import { ScienceStation } from './science-station'

export function Routes () {
    return (
        <BrowserRouter>
            <Pages>
                <Route path='/' element={<Bridge />} />
                <Route path='/science-station' element={<ScienceStation />} />
            </Pages>
        </BrowserRouter>
    )
}