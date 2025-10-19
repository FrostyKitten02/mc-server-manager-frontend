<script lang="ts">
    import { Route } from 'tinro';
    import Homepage from "./lib/pages/Homepage.svelte";
    import {authState} from "./lib/stores/authState.js";
    import ServersPage from "./lib/pages/ServersPage.svelte";
    import LoginPage from "./lib/pages/LoginPage.svelte";
</script>

<nav>
    <a href="/">Home</a>
    {#if !$authState.loggedIn}
        <a href="/login">Login</a>
    {:else}
        <a href="/servers">Servers</a>
    {/if}
</nav>

<main>
    <Route path="/">
        <Homepage />
    </Route>
    <Route path="/login">
        <LoginPage />
    </Route>
    <Route path="/servers">
        <ServersPage />
    </Route>
</main>

<style>
    nav {
        display: flex;
        justify-content: center;
        gap: 8px;
        padding: 0.5rem 1rem;
        background-color: var(--color-secondary);
        align-items: center;
    }

    nav a {
        color: var(--color-background);
        text-decoration: none;
        font-weight: bold;
        font-size: 1.25rem;
        padding: 16px 16px;
        border-radius: 16px;
        transition: background-color 0.2s, color 0.2s;
    }

    nav a:hover {
        background-color: var(--color-accent);
        color: var(--color-secondary);
    }
</style>
