import {writable} from "svelte/store";
import type {JwtPayload} from "jwt-decode";

export interface Session {
    loggedIn: boolean
    jwt?: string,
    jwtDecoded?: JwtToken
}

export interface JwtToken extends JwtPayload {
    user: JwtUser
}

export interface JwtUser {
    email?: string,
    name?: string,
    firstName?: string,
    lastName?: string
}

function isLoggedIn(session: Session): boolean {
    return !!session?.jwt;
}

function persistentWritable<T>(key: string, initial: T) {
    const stored = localStorage.getItem(key);
    const data = stored ? JSON.parse(stored) : initial;

    data.loggedIn = isLoggedIn(data)

    const store = writable<T>(data);

    store.subscribe((value) => {
        localStorage.setItem(key, JSON.stringify(value));
    });

    return store;
}


export const authState = persistentWritable<Session>("session", {loggedIn: false})
