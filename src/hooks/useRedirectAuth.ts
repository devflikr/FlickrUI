import { useLocation } from 'react-router-dom';

export interface RedirectAuthParams {
    path?: "signin" | "signup" | "authchooser";
    app?: string;
    redirect?: string;
}

function useRedirectAuth({ app, path, redirect }: RedirectAuthParams) {

    const location = useLocation();

    return () => {
        app = app || document.querySelector("title")?.getAttribute("app") || undefined;
        window.location.href = `https://accounts.devflikr.com/${path || ""}?app=${encodeURIComponent(app || "DevFlikr.com")}&redirect=${encodeURIComponent(redirect || `${window.location.origin}${location.pathname}`)}`;
    };
}

export default useRedirectAuth;