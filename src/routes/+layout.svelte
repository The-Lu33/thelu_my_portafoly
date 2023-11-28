<script>
  import Nabvar from "../components/sections/Nabvar.svelte";
  import "./app.css";

 
</script>

<div class="app" >
  <Nabvar />
  <main>
    <slot />
  </main>
</div>

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
</style>
