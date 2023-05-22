<script>
  import { Motion } from 'svelte-motion';
  import IntersectionObserver from 'svelte-intersection-observer';
  import Line from './Line.svelte';

  let element;
  let intersecting;

  const dataTec = [
    { img: './image/js.svg', title: 'js', link: '' },
    { img: './image/AWS.svg', title: 'aws', link: '' },
    { img: './image/figma.svg', title: 'figma', link: '' },
    { img: './image/node-js.svg', title: 'node-js', link: '' },
    { img: './image/react.svg', title: 'react', link: '' },
    { img: './image/nextjs.svg', title: 'nextjs', link: '' },
    { img: './image/xd.svg', title: 'xd', link: '' },
    { img: './image/mongodb.svg', title: 'mongodb', link: '' },
    { img: './image/postgresql.svg', title: 'postgresql', link: '' },
    { img: './image/tailwind.svg', title: 'tailwind', link: '' },
    { img: './image/ph.svg', title: 'ph', link: '' },
    { img: './image/svelte.svg', title: 'svelte', link: '' }
  ];

  let i = 10;
  $: t = [0, 360][i];
  $: intersecting ? (i = 0) : (i = 1);
</script>

<!-- {intersecting ? 'Element is in view' : 'Element is not in view'} -->
<div class="code-fence">
  <header class:intersecting />
</div>
<section
  class="techonologies_container"
  id="techonologies_container"
>
  <div class="container_tittle">
    <h2 class="tittle_techonologies tittles">Technologies</h2>
    <span class="line">
      <Line />
    </span>
  </div>
  <div class="technologies_skills">
    {#each dataTec as tec}
      <IntersectionObserver
        {element}
        bind:intersecting
      >
        <Motion
          animate={{ rotate: [t - 360, t, 0] }}
          transition={{ duration: 3, times: [0, 0.2, 1] }}
          let:motion
        >
          <div
            use:motion
            bind:this={element}
          >
            <div class="box_skill">
              <a
                href={tec.link}
                target="_black"
              >
                <img
                  src={tec.img}
                  alt={tec.title}
                  class="icon_skill"
                />
              </a>
            </div>
          </div>
        </Motion>
      </IntersectionObserver>
    {/each}
  </div>
</section>

<style>
  .line {
    border: none;
    /* height: 5px; */
    /* border-radius: 5px; */

    /* background: radial-gradient(
      100% 3841599.97% at 0% -500.09%,
      #7c1773 6.77%,
      #c60842 52.08%,
      #db0414 100%
    ); */
  }
  .tittles {
    font-size: 25px;
    color: var(--white-text);
    font-weight: 400;
  }
  .techonologies_container {
    width: 300px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
  }

  .technologies_skills {
    margin-top: 2.5rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 1fr);
  }
  .box_skill {
    height: 70px;
    width: 70px;
    margin: 1rem;
    border-radius: 10px;
    background: #161616;
    box-shadow: 7px 7px 14px #090909, -7px -7px 14px #232323;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .box_skill:hover {
    box-shadow: 5px 5px 10px var(--red), -5px -5px 10px var(--rosa-light);
    transform: scale(1.1);
  }
  .box_skill a {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .icon_skill {
    width: 80%;
    height: 60%;
  }
  @media screen and (min-width: 744px) {
    .tittles {
      font-size: 50px;
    }
    .techonologies_container {
      width: 100%;
      height: 100vh;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      margin: 0 auto;
      margin-bottom: 5rem;
    }
    .technologies_skills {
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: repeat(3, 1fr);
    }
    .box_skill {
      margin: 1.25rem;
    }
  }
  @media screen and (min-width: 1024px) {
    .techonologies_container {
      width: 100%;
      height: 100vh;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      margin: 0 auto;
    }
    .box_skill {
      height: 80px;
      width: 80px;
    }
  }
</style>
