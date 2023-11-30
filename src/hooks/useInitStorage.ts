import { useEffect, useState } from 'react';

import { useAuthUsers } from 'react-devflikrauth-hooks';
import { User, setCurrentAuthIndex } from 'devflikrauth';

import { useSearchParams } from 'react-router-dom';

export const INTI_STORAGE_KEY = "devflikr-auth-user-session";

function useInitStorage(storage: "localStorage" | "sessionStorage" = "sessionStorage"): [user: User | null, loading: boolean, error: unknown] {

    const bucket = window[storage];

    const [sudoUsers, loading, error] = useAuthUsers();

    const [user, setUser] = useState<User | null>(null);

    const [searchParams] = useSearchParams();

    useEffect(() => {
        if (loading) return;

        if (!sudoUsers.length) {
            setUser(null);
            return;
        }

        let authIndex = parseInt(searchParams.get("auth") || "");

        if (Number.isNaN(authIndex) && bucket.getItem(INTI_STORAGE_KEY) !== null && !Number.isNaN(parseInt(bucket.getItem(INTI_STORAGE_KEY) || "0"))) {
            authIndex = parseInt(bucket.getItem(INTI_STORAGE_KEY) || "0");
        }

        if (Number.isNaN(authIndex)) authIndex = 0;

        if (authIndex >= sudoUsers.length) authIndex = 0;

        setTimeout(() => {
            setUser(sudoUsers[authIndex]);
            setCurrentAuthIndex(authIndex);
        }, 10);

        bucket.setItem(INTI_STORAGE_KEY, authIndex + "");

    }, [bucket, loading, searchParams, sudoUsers]);

    return [user, loading, error];
}

export default useInitStorage;