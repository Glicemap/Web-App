import React, { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const PatientCodeContext = createContext();

export default function PatientCodeProvider({ children }) {
    const [patientCode, setPatientCode] = useLocalStorage("patientCode", "");

    return (
        <PatientCodeContext.Provider value={{ patientCode, setPatientCode }}>
            {children}
        </PatientCodeContext.Provider>
    );
}

export function usePatientCode() {
    const context = useContext(PatientCodeContext);
    if (context === undefined) throw new Error("usePatientCode must be used within a PatientCodeProvider");
    const { patientCode, setPatientCode } = context;
    return { patientCode, setPatientCode };
}