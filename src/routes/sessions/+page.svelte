<script lang="ts">
    import { enhance } from '$app/forms';
    import type { PageData } from './$types';
    
    export let data: PageData;
    export let form;

    
    
    $: sessions = data.sessions;
</script>
<div class="topbar">
    
    <a href="/" class="navBtn">Home</a>
    <a href="/login?/logout" class="navBtn">Login</a>
    <a href="/sessions" class="navBtn">sessions</a>
    <a href="/" class="navBtn">TicTacToe</a>
</div>
<div class="menubackground">
    <h1>sessions</h1>

    <ul>
        {#each sessions as [session, messages]}
            <div class="sessiondiv">
                <h2>{session}</h2>
                <a href="/sessions/{session}" class="join-button">join</a>
            </div>
            
        {/each}
    </ul>

    <h1>New session</h1>
    <form action="?/create" method="post" use:enhance>
        <input type="text" name="sessionName" id="" class="input">
        <button class="buttoninput">create</button>
        {#if form?.sessionName} 
            <span>{form.sessionName}</span>
        {/if}
    </form>
</div>
<style>
    .menubackground {
        width: 25%;
        /* height: 400px; */
        background-color: #4C6875;
        margin-top: 60px;
        border-radius: 10px;
        padding-left: 40px;
        min-height: 400px;
        max-height: fit-content;
        padding-bottom: 50px;
    }
    .sessiondiv {
        width: 170px;
        height: 80px;
        background-color:#282828;
        border-radius: 5px;
        margin-top: 10px;
        
    }
    .join-button {
        width: 100px;
        height: 60px;
        text-align: center;
        background-color:#4C6875;
        text-decoration: none;
    }
    .input {
        border-radius: 3px;
        border: none;
        text-align: center;
        width: 200px;
        height: 30px;
        font-size: larger;
        background-color: #3d3d3d;
        margin-top: 10px;
        
    }
    .buttoninput:hover {
        background-color: rgb(156, 224, 54);
    }
    .buttoninput {
        transition: 0.1s;
        width: 90px;
        height: 30px;
        background-color: greenyellow;
        border-radius: 5px;
        margin-top: 10px;
        border: none;
        box-shadow: 3px 3px grey;
        font-size: larger;
    }
    .buttoninput:active {
        transform: translate(3px,3px);
        box-shadow: none;
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

        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        overflow-x: hidden;
        
    }
    
</style>