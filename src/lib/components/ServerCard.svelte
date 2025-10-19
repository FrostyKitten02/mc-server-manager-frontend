<script lang="ts">
    import type {ServerDto} from "../client/model";

    export let server: ServerDto;
</script>

<div class="server-card">
    <h2 class="server-name">{server.name ?? "Unnamed Server"}</h2>
    <p><strong>MC Version:</strong> {server.mcVersion ?? "N/A"}</p>
    <p>
        <strong>Modpack:</strong> {server.modpack ?? "N/A"}
        {server.modpackVersion ? ` v${server.modpackVersion}` : ""}
    </p>
</div>

<style>
    .server-card {
        background-color: var(--color-background);
        color: var(--color-secondary);
        border: 1px solid var(--color-accent);
        border-radius: 8px;
        padding: 16px;
        width: 250px;
        box-shadow: 0 2px 6px rgba(0,0,0,0.1);
    }

    .server-name {
        margin: 0 0 8px 0;
        color: var(--color-primary);
    }
</style>