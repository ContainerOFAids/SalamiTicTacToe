<script lang="ts">
    import { enhance } from "$app/forms";
    import { page } from "$app/stores";
    import type { PageData } from "./$types";
    
    
    export let data : PageData;
</script>
<div class="topbar">
    
    <a href="/" class="navBtn">Home</a>
    <a href="/login?/logout" class="navBtn">Login</a>
    <a href="/sessions" class="navBtn">sessions</a>
    <a href="/" class="navBtn">TicTacToe</a>
</div>
<div class="div">
    <h1>välkommen till session: {$page.params.session}</h1>
    
    <form action="?/message" method="post" use:enhance>
        <h1>messages:</h1>
        <input type="text" name="message">
        <button>write</button>
    
    </form>
    <div class="msg-background">
        {#each data.messages as msg}
            
                <div class="msg-div">{msg}</div>
            
        {/each}
    </div>
</div>

<style>
    .div {
        background-color: #4C6875;
        border-radius: 10px;
        width: 75vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 40px;
    }
    .msg-background {
        background-color:#282828;
        width: 55vw;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-bottom: 40px;
        padding-bottom: 5px;
        margin-top: 30px;
        overflow-y: scroll;
        scroll-behavior: auto;
        overflow-x: hidden;
        max-height: 50vh;
        
        
    }
    .msg-div {
        background-color: #394e56;
        margin-top: 5px;
        min-width: 10vw;
        max-width: fit-content;
        height: 70px;
        min-height: 70px;
        border-radius: 5px;
        padding-right: 10px;
        padding-left: 10px;
        display: flex;
        align-items: center;
        margin-left: 5px;
        font-size: x-large;
        
    }
    .topbar {
        width: 100vw;
        height: 50px;
        background-color:#4C6875;
        display: flex;
        align-items: center;
        padding-left: 10px;
        margin-top: -8px;
        box-shadow: 5px 5px black;
        margin-bottom: none;
    }
    .navBtn {
        font-size: larger;
        width: fit-content;
        height: 40px;
        border-radius: 7px;
        color: #1f1f1f;
        font-size: x-large;
        text-align: center;
        text-decoration: none;
        display: flex;
        align-items: center;

        padding-right: 5px;
        padding-left: 5px;
    }
    .navBtn:hover {
        background-color: #394e56;
    }
    :global(body) {
        display: flex;
        flex-direction: column;
        align-items: center;
        
        --s: 100px; /* control the size */
        --c1: #394e56;
        --c2: #282828;
        
        --_g: 
            var(--c2) 6%  14%,var(--c1) 16% 24%,var(--c2) 26% 34%,var(--c1) 36% 44%,
            var(--c2) 46% 54%,var(--c1) 56% 64%,var(--c2) 66% 74%,var(--c1) 76% 84%,var(--c2) 86% 94%;
        background:
            radial-gradient(100% 100% at 100% 0,var(--c1) 4%,var(--_g),#0008 96%,#0000),
            radial-gradient(100% 100% at 0 100%,#0000, #0008 4%,var(--_g),var(--c1) 96%)
            var(--c1);
        background-size: var(--s) var(--s);

        overflow: hidden;
    }
    ::-webkit-scrollbar {
        display: none;
    }
</style>