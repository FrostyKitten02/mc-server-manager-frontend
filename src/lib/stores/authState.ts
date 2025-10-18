import {writable} from "svelte/store";

export interface Session {
    loggedIn: boolean,
    user: string
}

function persistentWritable<T>(key: string, initial: T) {
    const stored = localStorage.getItem(key);
    const data = stored ? JSON.parse(stored) : initial;

    const store = writable<T>(data);

    store.subscribe((value) => {
        localStorage.setItem(key, JSON.stringify(value));
    });

    return store;
}

export const authState = persistentWritable<Session>("session", {loggedIn: false, user: "NONE"})
