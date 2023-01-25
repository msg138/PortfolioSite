import React, {createContext, ReactNode, useContext, useState} from "react";

export interface PageContext {
    // Null assumes home
    pageGroup: string | null;
    // Null assumes pageGroup landing page.
    page: string | null;

    setPageGroup: (pageGroup: string | null) => void;
    setPage: (page: string | null) => void;
}

export const pageContext = createContext<PageContext>({
    pageGroup: null,
    page: null,
    setPageGroup: () => {},
    setPage: () => {},
});

export const PageContextProvider = ({ children }: { children: ReactNode }) => {
    const [pageGroup, setPageGroup] = useState<string | null>(null);
    const [page, setPage] = useState<string | null>(null);

    return (
        <pageContext.Provider
            value={{
                pageGroup,
                page,
                setPageGroup,
                setPage,
            }}
        >
            {children}
        </pageContext.Provider>
    );
};

export const usePageContext = () => {
    const pageContextValue = useContext(pageContext);

    return pageContextValue;
};