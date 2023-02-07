<script>
  //your script here
</script>

<section class="techonologies_container" id="techonologies_container">
  <div class="container_tittle">
    <h2 class="tittle_techonologies tittles">Technologies</h2>
    <hr class="line" />
  </div>
  <div class="technologies_skills">
    <div class="box_skill">
      <a href="https://developer.mozilla.org/es/docs/Web/JavaScript" target="_black">
        <img src="./image/js.svg" alt="" class="icon_skill" />
      </a>
    </div>
    <div class="box_skill">
      <a href="https://developer.mozilla.org/es/docs/Web/HTML" target="_black">
        <img
          src="./image/html5.svg"
          alt="icon_techonologies"
          class="icon_skill"
        />
      </a>
    </div>
    <div class="box_skill">
      <a href="https://developer.mozilla.org/es/docs/Web/CSS" target="_black">
        <img
          src="./image/css3-alt.svg"
          alt="icon_techonologies"
          class="icon_skil"
        />
      </a>
    </div>
    <!-- svelte-ignore security-anchor-rel-noreferrer -->

    <div class="box_skill">
      <a href="https://nodejs.org/en/" target="_black">
        <img
          src="./image/node-js.svg"
          alt="icon_techonologies"
          class="icon_skil"
        />
      </a>
    </div>
    <!-- svelte-ignore security-anchor-rel-noreferrer -->

    <div class="box_skill">
      <a href="https://es.reactjs.org/" target="_black">
        <img
          src="./image/react.svg"
          alt="icon_techonologies"
          class="icon_skil"
        />
      </a>
    </div>
    <div class="box_skill">
      <!-- svelte-ignore security-anchor-rel-noreferrer -->
      <a href="https://www.figma.com/" target="_black">
        <img src="./image/figma.svg" alt="Figma" class="icon_skill" />
      </a>
    </div>
    <!-- svelte-ignore security-anchor-rel-noreferrer -->
    <div class="box_skill">
      <a href="https://svelte.dev/" target="_black">
        <img src="./image/svelte.svg" alt="svelte" class="icon_skill" />
      </a>
    </div>
    <div class="box_skill">
      <a href="https://tailwindcss.com/">
        <img src="./image/tailwind.svg" alt="photosop" class="icon_skill" />
      </a>
    </div>
    <div class="box_skill">
      <a href="www.adobe.com/la/products/photoshop">
        <img src="./image/ph.svg" alt="photosop" class="icon_skill" />
      </a>
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
    grid-template-rows: repeat(3, 1fr);
  }
  .box_skill {
    height: 70px;
    width: 70px;
    margin: 1.25rem;
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
