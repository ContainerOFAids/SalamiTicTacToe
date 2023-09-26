<script lang="ts">
    export let data;

    
</script>

<div class="topbar">
    
    <a href="/" class="navBtn">Home</a>
    <a href="/login?/logout" class="navBtn">Login</a>
    <a href="/sessions" class="navBtn">sessions</a>
    <a href="/" class="navBtn">TicTacToe</a>
</div>
<div class="div-menu">
    <h1>välkommen {data.username}</h1>

    <nav>
        <a href="/login">Log In</a>
    </nav>

    <form action="/login?/logout" method="post">
        <button>logout:()</button>
    </form>



    <nav>
        <a href="/sessions">sessioner</a>
    </nav>  
</div>


<style>
    
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
    .div-menu {
        width: 700px;
        height: 400px;
        background-color: #4C6875;
        border-radius: 10px;
        margin-top: 20px;
        box-shadow: 10px 10px #1f1f1f;
        display: flex;
        flex-direction: column;
        align-items: center;
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
    }
</style>