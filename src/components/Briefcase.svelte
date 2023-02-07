<script>
  import { hslide } from "./hslide.js";
  let slides = [
    { id: 1, img: "./image/yourshops.jpg",link:'https://www.behance.net/gallery/156432395/YourShpos' },
    { id: 2, img: "./image/item1.png",link:"https://rick-and-morty-by-vale-luis.netlify.app/" },
    { id: 3, img: "./image/0.jpg" },
  ];
  let car = 0;
  function changeSlide(slide) {
    car = slide;
  } 
  const change = (num, min, max) => Math.min(Math.max(num, min), max);
  const transition_args = {
    duration: 700,
    delay: 10,
  };
  function next(e) {
    car = change(car + 1, 0, slides.length - 1);
  }
  function prev(e) {
    car = change(car - 1, 0, slides.length - 1);
  }
  const arrowLeft = 37;
  const arrowRight = 39;
  function handlechange(e) {
    if (e.keyCode === arrowLeft) {
      prev();
    }
    if (e.keyCode === arrowRight) {
      next();
    }
  }
</script>

<section class="briefcase_container" id="briefcase_container">
  <div class="container_tittle">
    <h2 class="tittle_briefcase tittles">Briefcase</h2>
    <hr class="line" />
  </div>
  <div class="briefcase_carrusel">
    <div class="container_slide">
      <div class="slide_wal">
        {#each slides as slide, id}
          {#if id === car}
          <a class="link" href={slides[car].link} target="_black">
          
            <img
            src={slides[car].img}
              alt="slide"
              class="slide_img"
              in:hslide={transition_args}
              out:hslide={transition_args}
              />
            </a>
          {/if}
        {/each}
      </div>

      <button on:click={() => prev()} class="arrow left" id="arrow_left arrow"
        >&#9664;</button
      >
      <button on:click={() => next()} class="arrow rigth" id="arrow_rigth arrow"
        >&#9654;</button
      >
    </div>
  </div>
</section>

<style>
  .line {
    border: none;
    height: 5px;
    border-radius: 5px;

    background: radial-gradient(
      100% 3841599.97% at 0% -500.09%,
      #7c1773 6.77%,
      #c60842 52.08%,
      #db0414 100%
    );
  }
  .tittles {
    font-size: 25px;
    color: var(--white-text);
    font-weight: 400;
  }
  .briefcase_container {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }
  .briefcase_carrusel {
    position: relative;
    margin-top: 2.5rem;
  }
  .container_slide {
    width: 250px;
    height: 250px;
    border-radius: 25px;
    box-shadow: -25px -25px 50px #232323, 25px 25px 50px #090909;
    transition: all 0.5s ease;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .link {
    width: 100%;
    height: 100%;
  }
  .slide_wal {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 95%;
    height: 90%;
  }
  .slide_img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 1rem;
  }
  .slide_img:hover {
    transform: scale(1.1);
  }
  .arrow {
    z-index: 20;
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: none;
    background-color: #161616;
    box-shadow: -1.5px -1.5px 3px rgba(35, 35, 35, 0.25),
      1.5px 1.5px 3px rgba(9, 9, 9, 0.25);
    position: absolute;
    font-weight: bold;
    margin: 0 auto;
    background: radial-gradient(
      120% 12000% at 120% 0%,
      var(--red) 0%,
      var(--morado-light) 100%
    );
    background-clip: About;
    -webkit-background-clip: text;
    color: transparent;
    font-size: 20px;
  }
  .arrow:hover {
    cursor: pointer;
    box-shadow: 2px 2px 6px var(--red), -2px -2px 6px var(--rosa-light);
    transform: scale(1.1);
  }
  .left {
    left: -3rem;
    top: calc(50% - 20px);
  }
  .rigth {
    right: -3rem;
    top: calc(50% - 20px);
  }
  @media screen and (min-width: 768px) {
    .tittles {
      font-size: 50px;
    }
    .container_slide {
      width: 350px;
      height: 350px;
    }
    .briefcase_container {
      height: 100vh;
      margin-bottom: 5rem;
    }
    .left {
      left: -4rem;
      top: calc(50% - 20px);
    }
    .rigth {
      right: -4rem;
      top: calc(50% - 20px);
    }
  }
</style>
