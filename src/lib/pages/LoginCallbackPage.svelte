<script lang="ts">
    import { router } from 'tinro';
    import {authState, type JwtToken} from "../stores/authState";
    import {jwtDecode} from "jwt-decode";

    $: query = new URLSearchParams($router.query);
    $: token = query.get('token');
    $: if (!!token) {
        authState.set({
            loggedIn: true,
            jwt: token,
            jwtDecoded: jwtDecode<JwtToken>(token)
        })
    }
    //TODO: err msg!
</script>

<div>
    <p>
        Login Successful
    </p>
</div>