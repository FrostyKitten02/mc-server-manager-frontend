<script lang="ts">
    import type {ServerDto} from "../client/model";
    import ServerCard from "../components/ServerCard.svelte";

    const servers: ServerDto[] = [
        {
            id: 1,
            name: "GTNH",
            mcVersion: "1.7.10",
            modpack: "Greg Tech: New Horizons",
            modpackVersion: "2.8.0",
            logsUrl: "TODO"
        }
    ]
</script>

<div class="servers">
    {#each servers as server}
        <ServerCard server={server} />
    {/each}
</div>

<style>
    .servers {
        padding-top: 16px;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
</style>