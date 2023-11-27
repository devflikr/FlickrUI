import { useEffect, useState } from 'react';

export interface HeaderAppsType {
    icon: string;
    name: string;
    link: string;
    target?: "_blank" | "_self" | "_parent" | "_top";

}

export const savedDevFlikrApps: HeaderAppsType[] = [
    {
        icon: "https://myaccount.devflikr.com/favicon.svg",
        name: "Manage Account",
        link: "https://myaccount.devflikr.com",
    },
    {
        icon: "https://devnote.devflikr.com/favicon.svg",
        name: "DevNote",
        link: "https://devnote.devflikr.com",
    },
];

function useHeaderApps(): [apps: HeaderAppsType[], loading: boolean, error: unknown] {
    const [apps, setApps] = useState<HeaderAppsType[]>(savedDevFlikrApps);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<unknown>();

    useEffect(() => {
        fetch("https://api.devflikr.com/devflikr/devflikr-apps.json").then(res => res.json()).then((data: HeaderAppsType[]) => {
            setApps(data);
        }).catch((e) => {
            setError(e);
            console.error(e);
        }).finally(() => {
            setLoading(false);
        });
    }, []);

    return [apps, loading, error];
}

export default useHeaderApps;