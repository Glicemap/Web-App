import React, { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const LoginCodeContext = createContext();

export default function LoginCodeProvider({ children }) {
    const [loginCode, setLoginCode] = useLocalStorage("loginCode", "");

    return (
        <LoginCodeContext.Provider value={{ loginCode, setLoginCode }}>
            {children}
        </LoginCodeContext.Provider>
    );
}

export function useLoginCode() {
    const context = useContext(LoginCodeContext);
    if (context === undefined) throw new Error("useLoginCode must be used within a LoginCodeProvider");
    const { loginCode, setLoginCode } = context;
    return { loginCode, setLoginCode };
}