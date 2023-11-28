<script>
  import { language } from "./../store/lang.js";
  import Nabvar from "../components/sections/Nabvar.svelte";
  import About from "../components/sections/About.svelte";
  import Skrills from "../components/sections/Skrills.svelte";
  import Techonologies from "../components/sections/Techonologies.svelte";
  import Briefcase from "../components/sections/Briefcase.svelte";
  import Contact from "../components/sections/Contact.svelte";
  import Footer from "../components/sections/Footer.svelte";
  import { onMount } from "svelte";
  import Header from "../components/sections/Header.svelte";
  import { theme } from "../store/theme";

  onMount(() => {
    theme.subscribe((value) => {
      if (value === "dark") {
        document.documentElement.style.setProperty(
          "--background",
          "var(--color-dark)"
        );
        document.documentElement.style.setProperty(
          "--box-shadow-top",
          "var(--box-shadow-top-dark)"
        );
        document.documentElement.style.setProperty(
          "--box-shadow-button",
          "var(--box-shadow-button-dark)"
        );
        document.documentElement.style.setProperty("--text", "#f5f5f5");

        document.documentElement.style.setProperty("--text-p", "#f5f5f5eb");
      } else {
        document.documentElement.style.setProperty(
          "--background",
          "var(--color-light)"
        );
        document.documentElement.style.setProperty(
          "--box-shadow-top",
          "var(--box-shadow-top-light)"
        );
        document.documentElement.style.setProperty(
          "--box-shadow-button",
          "var(--box-shadow-button-light)"
        );
        document.documentElement.style.setProperty("--text", "#161616");
        document.documentElement.style.setProperty("--text-p", "#161616");
      }
    });
  });

  // language
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
    --text: #f5f5f5;
    --text-p: #f5f5f5eb;

    --color-light: #e0e0e0;
    --box-shadow-top-light: #bebebe;
    --box-shadow-button-light: #ffffff;
    --background: #161616;
    --color-dark: #161616;
    --box-shadow-top-dark: #090909;
    --box-shadow-button-dark: #232323;
  }
  :global(*) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :global(body) {
    background-color: var(--background);
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
    color: var(--text);
    font-weight: 400;
    white-space: nowrap;
    width: 12ch;
    border-right: 4px solid var(--text);
    animation:
      typing 2s steps(12),
      blink 0.5s infinite step-end alternate;
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
