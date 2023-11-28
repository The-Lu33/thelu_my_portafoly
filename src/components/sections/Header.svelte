<script>
  import { language } from "../../store/lang";
  import Line from "./Line.svelte";
</script>

<section class="principal_header" id="principal_header">
  <div class="image_container">
    <img alt="imagens" src="./image/0.jpg" class="image_logo_the_lu" />
    <img alt="imagens" src="./image/iam.png" class="iam" />
  </div>
  <article class="presentation_container">
    <h3 class="tittle_secundary">{$language === "es" ? "Soy" : "I AM"}</h3>

    <h2 class="tittle_firts" translate="no">Luisangel</h2>
    <!-- <hr class="line_firts" /> -->
    <span class="line">
      <Line />
    </span>
    <span>
      <p class="paragraph_firt stack" translate="no">Full Stack Developer</p>
      <p class="paragraph_firt design" translate="no">Designer ux/ui</p>
    </span>
    <div class="buttons_sociales">
      <button class="button_social button_linkedin">
        <!-- svelte-ignore security-anchor-rel-noreferrer -->
        <a href="https://www.linkedin.com/in/luisangel-tapia/" target="_blank"
          ><img alt="imagens" src="./image/linkedin.svg" /></a
        >
      </button>
      <button class="button_social button_github">
        <!-- svelte-ignore security-anchor-rel-noreferrer -->
        <a href="https://github.com/The-Lu33" target="_blank">
          <img alt="imagens" src="./image/github.svg" />
        </a>
      </button>
    </div>
  </article>
</section>

<style>
  .principal_header {
    display: grid;
    flex-direction: column;
    align-items: center;
    /* margin-top: 3rem; */
    margin-bottom: 3rem;
  }
  .image_container {
    padding: 1rem 1.5rem;
    display: grid;
    grid-template-rows: 128px 72px auto;
    grid-template-columns: 100px 100px auto;
    min-width: 360px;
    height: 330px;
    margin: 0 auto;
    margin-bottom: 45px;
  }
  .image_logo_the_lu,
  .iam {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
  }
  .image_logo_the_lu {
    grid-row-start: 1;
    grid-column-start: 2;
    box-shadow:
      inset 20px 20px 50px var(--box-shadow-top),
      inset -20px -20px 50px var(--box-shadow-button);
  }
  .iam {
    grid-column-start: 1;
    grid-row: 2;

    box-shadow:
      20px -20px 40px var(--box-shadow-top),
      -1px 1px 50px var(--box-shadow-button);
  }
  .presentation_container {
    text-align: center;
    color: var(--text);
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
  }
  .tittle_secundary {
    font-size: 25px;
    font-weight: 400;
  }
  .tittle_firts {
    font-size: 50px;
    font-weight: 400;
    text-shadow:
      -15px -15px 30px rgba(102, 102, 102, 0.2),
      15px 15px 30px rgba(255, 255, 255, 0.1);
  }
  .line {
    width: 200px;
    border: none;
  }
  .paragraph_firt {
    font-weight: 400;
    font-size: 22px;
    padding: 0 60px;
    margin-bottom: 2rem;
  }
  .stack{
    margin-bottom: 0;
  }
  .buttons_sociales {
    width: 360px;
    /* padding: 0 50px; */
    display: flex;
    justify-content: space-evenly;
    margin: 0 auto;
    margin-bottom: 1rem;
  }
  .button_social {
    width: 60px;
    height: 60px;
    background: var(--background);
    border: none;
    border-radius: 50%;
    box-shadow:
      5px 5px 10px var(--box-shadow-top),
      -5px -5px 10px var(--box-shadow-button);
    cursor: pointer;
  }
  .button_social:hover {
    box-shadow:
      5px 5px 10px var(--red),
      -5px -5px 10px var(--rosa-light);
  }
  .buttons_sociales img {
    width: 80%;
    height: 80%;
    padding: 5%;
  }
  @media screen and (min-width: 744px) {
    .principal_header {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: 30px 1fr auto;
      height: 100vh;
    }
    .image_container {
      grid-column: 2/2;
      grid-row: 1/3;
    }
    .presentation_container {
      grid-column: 1/2;
      grid-row: 2/3;
    }
    .buttons_sociales {
      grid-column: 1/2;
      grid-row: 3/3;
    }
    .image_container {
      padding: 0;
    }
    .image_logo_the_lu,
    .iam {
      width: 250px;
      height: 250px;
    }
    .iam {
      grid-column: 0/1;
      grid-row: 2/3;
    }
    .image_logo_the_lu {
      grid-column: 2/3;
      grid-row: 1/2;
    }
    .tittle_secundary {
      font-size: 2rem;
    }
    .tittle_firts {
      font-size: 75px;
    }
    .line {
      width: 250px;
    }
    .paragraph_firt {
      font-size: 1.5rem;
      padding: 0 5rem;
    }
  }
  @media screen and (min-width: 992px) {
    .principal_header {
      display: grid;
    }

    .image_container {
      padding: 0;
      grid-template-columns: 150px 150px auto;
      grid-template-rows: 150px 150px auto;
    }
    .image_logo_the_lu,
    .iam {
      width: 320px;
      height: 320px;
    }
    .iam {
      grid-column: 0/1;
      grid-row: 2/3;
    }
    .image_logo_the_lu {
      grid-column: 2/3;
      grid-row: 1/2;
    }
    .tittle_secundary {
      font-size: 2rem;
    }
    .tittle_firts {
      font-size: 75px;
    }
    .line {
      width: 250px;
    }
    .paragraph_firt {
      font-size: 1.5rem;
      padding: 0 5rem;
    }
  }
</style>
