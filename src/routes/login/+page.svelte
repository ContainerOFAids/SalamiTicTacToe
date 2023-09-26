<script lang="ts">
    import { enhance } from "$app/forms";
    import type { ActionData } from "./$types";
    export let form: ActionData;
</script>

<div class="topbar">
    <!-- <button class="topbar-button" onclick="window.location.href='http://localhost:5173';">Home</button>
    <button class="topbar-button" onclick="window.location.href='http://localhost:5173/login?/logout';">Log in</button>
    <button class="topbar-button">TicTacToe</button>
    <button class="topbar-button" onclick="window.location.href='http://localhost:5173/sessions';">Sessions</button> -->
    <a href="/" class="navBtn">Home</a>
    <a href="/login?/logout" class="navBtn">Login</a>
    <a href="/sessions" class="navBtn">sessions</a>
    <a href="/" class="navBtn">TicTacToe</a>
</div>

<form method="post" action="?/login" use:enhance>
    <div class="box-menu">
        <label for="name"></label>
        <input type="text" name="username" class="input-login" placeholder="username" required>
        <input type="password" placeholder="password" class="input-login" required name="password">
        <button class="button-login">login</button>
        <!-- <button class="button-login">Register</button> -->

    
    
        {#if form?.username}
            <span style="color: red;">{form.username}</span>
        {/if}
    </div>
</form>

<style>
    .box-menu {
        width: 400px;
        height: 300px;
        background-color: #4C6875;
        border-radius: 10px;
        border: 5px 5px black;
        display: flex;
        /* justify-content: center; */
        align-items: center;
        /* justify-content: space-evenly; */
        padding-top: 10%;
        flex-direction: column;
        box-shadow: 10px 10px #1f1f1f;
        margin-top: 100px;
        
    }
    /* .topbar-button {
        background-color: #4C6875;
        color: #1f1f1f;
        border: none;
        font-size: larger;
        border-radius: 7px;
        margin-right: 10px;
        height: 40px;
        
        
    }
    .topbar-button:hover {
        background-color: #394e56;
    } */
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
    .input-login {
        border-radius: 3px;
        border: none;
        text-align: center;
        width: 200px;
        height: 30px;
        font-size: larger;
        background-color: #3d3d3d;
        margin-top: 10px;
        
    }
    .button-login:hover {
        background-color: rgb(156, 224, 54);
    }
    .button-login {
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
    .button-login:active {
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
    }
    :global(body) {
        display: flex;
        align-items: center;
        flex-direction: column;


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
    }
    
</style>