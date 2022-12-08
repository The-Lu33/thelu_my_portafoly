<script>
	//your script here
	import Nabvar from "./lib/Nabvar.svelte";
	import Header from "./lib/Header.svelte";
	import About from "./lib/About.svelte";
	import Skrills from "./lib/Skrills.svelte";
	import Techonologies from "./lib/Techonologies.svelte";
	import Briefcase from "./lib/Briefcase.svelte";
	import Contact from "./lib/Contact.svelte";
	import Footer from "./lib/Footer.svelte";
	import { onMount } from "svelte";
  
  
	let load = false;
	onMount(() => {
	  setTimeout(() => {
		load = true;
	  }, 4000);
	});
  
   
  </script>
  
  {#if !load}
	<div class="loader_container">
	  <span class="load">!Hello World!...</span>
	</div>
  {/if}
  <header>
	<Nabvar />
	<Header />
  </header>
   <main>
	
	<About />
	<Skrills />
	<Techonologies />
	<Briefcase />
	<Contact />
</main>
  <Footer />
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
  </style>
  