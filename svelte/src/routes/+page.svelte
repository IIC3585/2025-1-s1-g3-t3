<script>
    // import Calculator from "./Calculator_antiguo.svelte";
    import Calculator from './Calculator.svelte';
    import Header from "./Header.svelte";
</script>

<div class="container">
    <div class="content">
        <Header/>
        <Calculator/>
    </div>
</div>

<style>
    .container {
        position: relative; 
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        padding: 20px;
        text-align: center;
        overflow: hidden; 
    }

    .content {
        position: relative;
        z-index: 2; 
        width: 100%;
    }

    .container::before,
    .container::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        width: 200%;
        height: 200%;
        background: conic-gradient(
            from 0deg,
            #ff9aa2,
            #ffb7b2,
            #ffdac1,
            #e2f0cb,
            #a2e4ff,
            #c9afff,
            #ffb7b2,
            #ff9aa2
        );
        transform: translate(-50%, -50%);
        animation: rotate 8s linear infinite;
        filter: blur(50px);
        opacity: 0.8;
        z-index: 1; 
    }

    .container::after {
        width: 180%;
        height: 180%;
        animation: rotate-reverse 10s linear infinite;
        opacity: 0.6;
    }

    @keyframes rotate {
        0% { transform: translate(-50%, -50%) rotate(0deg); }
        100% { transform: translate(-50%, -50%) rotate(360deg); }
    }

    @keyframes rotate-reverse {
        0% { transform: translate(-50%, -50%) rotate(0deg); }
        100% { transform: translate(-50%, -50%) rotate(-360deg); }
    }
</style>