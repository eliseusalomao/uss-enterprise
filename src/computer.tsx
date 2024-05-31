import { useState } from "react";
import { LoginScreen } from "./login-screen";
import { RegisterScreen } from "./register-screen";

export function Computer ({ handlePanel, screen }: { handlePanel: () => void, screen: string }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    return (
        <div>
            {isLoggedIn ? (
                (screen == 'register') && <RegisterScreen handlePanel={handlePanel} />
            ) : <LoginScreen handlePanel={handlePanel} setIsLoggedIn={setIsLoggedIn} />}
        </div>
    )
}