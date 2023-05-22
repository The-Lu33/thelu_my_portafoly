<script>
  import IntersectionObserver from 'svelte-intersection-observer';
  import { backInOut } from 'svelte/easing';
  import { tweened } from 'svelte/motion';

  let progress = tweened(30, {
    delay: 20,
    duration: 1000,
    easing: backInOut
  });
  let element;
  let intersecting;
  $: intersecting ? progress.set(99) : progress.set(50);
</script>

<!-- {intersecting ? 'Element is in view' : 'Element is not in view'} -->

<!--  -->
<IntersectionObserver
  {element}
  bind:intersecting
>
  <hr
    class:intersecting
    bind:this={element}
    class="line"
    style={`width: ${$progress}%;`}
  />
</IntersectionObserver>

<!--  -->
<style>
  .line {
    border: none;
    height: 5px;
    border-radius: 5px;
    margin: auto;

    background: radial-gradient(
      100% 3841599.97% at 0% -500.09%,
      #7c1773 6.77%,
      #c60842 52.08%,
      #db0414 100%
    );
  }
</style>
