"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
    return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

const Providers = ({ children}:{children:React.ReactNode}) => {
    const [mounted, setMounted] = React.useState<boolean>(false)

    React.useEffect(() => {
        setMounted(true)
    }, [])
    
    if (!mounted) {
        return <>{children}</>
    }
    return (<ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem
        disableTransitionOnChange
    >

        {children}

    </ThemeProvider>)
}

export default Providers;