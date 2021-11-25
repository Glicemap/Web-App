import React, { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const PatientFilterContext = createContext();

export default function PatientFilterProvider({ children }) {
    const [patientFilter, setPatientFilter] = useLocalStorage("patientFilter", {"from":"", "to":""});

    return (
        <PatientFilterContext.Provider value={{ patientFilter, setPatientFilter }}>
            {children}
        </PatientFilterContext.Provider>
    );
}

export function usePatientFilter() {
    const context = useContext(PatientFilterContext);
    if (context === undefined) throw new Error("usePatientFilter must be used within a PatientFilterProvider");
    const { patientFilter, setPatientFilter } = context;
    return { patientFilter, setPatientFilter };
}