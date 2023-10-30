<script>
  //your script here
  import Nabvar from "../components/sections/Nabvar.svelte";
  import About from "../components/sections/About.svelte";
  import Skrills from "../components/sections/Skrills.svelte";
  import Techonologies from "../components/sections/Techonologies.svelte";
  import Briefcase from "../components/sections/Briefcase.svelte";
  import Contact from "../components/sections/Contact.svelte";
  import Footer from "../components/sections/Footer.svelte";
  import { onMount } from "svelte";
  import Header from "../components/sections/Header.svelte";

  let load = false;
  onMount(() => {
    setTimeout(() => {
      load = true;
    }, 3000);
  });
</script>

{#if !load}
  <div class="loader_container">
    <span class="load">!Hello World..!</span>
  </div>
{/if}
<main>
  <div class="div">
    <Header />
  </div>
  <div class="div">
    <About />
  </div>
  <div class="div">
    <Skrills />
  </div>
  <div class="div">
    <Techonologies />
  </div>
  <div class="div">
    <Briefcase />
  </div>
  <div class="div">
    <Contact />
  </div>
  <div class="div">
    <Footer />
  </div>
</main>

<!-- -->
<style>
  @import url("https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap");
  :global(:root) {
    --red: #db0414;
    --rosa-light: #c60842;
    --rosa-dark: #ac0e65;
    --morado-light: #7c1773;
    --morado-dark: #331f36;
    --white-text: #f5f5f5;
    --white-p: #f5f5f5eb;

    --fond: #161616;
  }
  :global(*) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :global(body) {
    background-color: var(--fond);
    font-family: "Permanent Marker", cursive;
    transition: all 0.5s ease;
    animation: all 0.5s ease;
  }
  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  .loader_container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.852);
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  .load {
    display: block;
    font-size: 2rem;
    color: var(--white-text);
    font-weight: 400;
    white-space: nowrap;
    width: 12ch;
    border-right: 4px solid var(--white-text);
    animation: typing 2s steps(12), blink 0.5s infinite step-end alternate;
    transition: all 0.5s ease;
    overflow: hidden;
  }
  @keyframes typing {
    from {
      width: 0;
    }
  }
  @keyframes blink {
    50% {
      border-color: transparent;
    }
  }
  main {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: auto;
    scroll-snap-type: y mandatory;
    scroll-snap-align: center;
  }
  .div {
    scroll-snap-align: start;
  }
</style>
