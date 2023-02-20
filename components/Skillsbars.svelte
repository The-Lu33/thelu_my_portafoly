<script>
  import IntersectionObserver from "svelte-intersection-observer";
  import { tweened } from "svelte/motion";
  import { backInOut } from "svelte/easing";
  

  export let skill;
  export let percent;
  export let delTime;
  
  

  const progress = tweened(30, {
    delay: delTime,
    duration: 2000,
    easing: backInOut,
  }); 
 export let element;
 export let intersecting;
$:intersecting && progress.set(percent);


</script>
<!-- {intersecting ? "Element is in view" : "Element is not in view"} -->

<IntersectionObserver  element={element}
bind:intersecting={intersecting}
once>
<h2 class="skill">{skill}</h2>
<div  class:intersecting={intersecting} class="container">
  <div bind:this={element} class="skills" style="width: {$progress}%" />
</div>
</IntersectionObserver>

<style>
  .container {
    width: 250px;
    height: 1rem;
    margin-top: 0.2rem;
    border-radius: 45px;
    background: #161616;
    box-shadow: 2px 2px 3px #090909, -2px -2px 3px #232323;
  }

  h2 {
    top: 26%;
    left: 15px;
    margin-top: 1.5rem;
    color: var(--white-text);
    font-size: 1rem;
    font-weight: 400;
  }

  .skills {
    border: none;
    height: 100%;
    border-radius: 5px;
    width: 10%;
    background: radial-gradient(
      100% 3841599.97% at 0% -500.09%,
      #7c1773 6.77%,
      #c60842 52.08%,
      #db0414 100%
    );
  }
</style>
