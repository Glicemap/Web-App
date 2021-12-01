import React, { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const ListFilterContext = createContext();

export default function ListFilterProvider({ children }) {
    const [listFilter, setListFilter] = useLocalStorage("listFilter", {"name":"", "from":"", "to":"", "frequency":""});

    return (
        <ListFilterContext.Provider value={{ listFilter, setListFilter }}>
            {children}
        </ListFilterContext.Provider>
    );
}

export function useListFilter() {
    const context = useContext(ListFilterContext);
    if (context === undefined) throw new Error("useListFilter must be used within a ListFilterProvider");
    const { listFilter, setListFilter } = context;
    return { listFilter, setListFilter };
}