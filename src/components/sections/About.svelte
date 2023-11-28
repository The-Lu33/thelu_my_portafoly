<script>
  import { Motion } from "svelte-motion";
  import Line from "./Line.svelte";
  import { language } from "../../store/lang.js";
</script>

<section class="section_about" id="section_about">
  <div class="container_tittle">
    <h2 class="tittle_about tittles">
      {$language === "en" ? "About" : "Sobre Mi"}
    </h2>
    <span class="line">
      <Line />
    </span>
  </div>
  <div class="container_p">
    <p class="paragraph_about">
      {$language === "en"
        ? `I am a committed and passionate Full Stack developer, always willing to give my best in each project. My goal is to develop high-quality software that improves people's lives and makes the world a better place. I hope to have the opportunity to work with you!`
        : `soy un Desarrollador Full Stack comprometido y apasionado, siempre dispuesto a dar lo mejor de mí en cada proyecto. Mi objetivo es desarrollar software de alta calidad que mejore la vida de las personas y haga del mundo un lugar mejor. ¡Espero tener la oportunidad de trabajar contigo!`}
    </p>
  </div>
</section>

<style>
  .line {
    border: none;
    /* height: 5px;
    border-radius: 5px;

    background: radial-gradient(
      100% 3841599.97% at 0% -500.09%,
      #7c1773 6.77%,
      #c60842 52.08%,
      #db0414 100%
    );
    */
  }
  .tittles {
    font-size: 25px;
    color: var(--text);
    font-weight: 400;
  }
  .section_about {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    width: 340px;
    height: 100vh;
    margin: 0 auto;
    margin-bottom: 7.75rem;
  }

  .section_about .line {
    width: 150px;
    margin-bottom: 30px;
  }
  .paragraph_about {
    color: var(--text-p);
    font-weight: 400;
    font-size: 1rem;
    text-align: center;
    padding: 1rem;
  }
  .container_p {
    width: 350px;
    height: 250px;
    border-radius: 30px;
    background: var(--background);
    box-shadow:
      15px 15px 30px var(--box-shadow-top),
      -15px -15px 30px var(--box-shadow-button);
    display: flex;
    justify-items: center;
    align-items: center;
  }
  .container_tittle {
    z-index: 10;
    margin-bottom: 2rem;
  }
  @media screen and (min-width: 744px) {
    .section_about {
      width: 100%;
      justify-content: space-evenly;
      flex-direction: row;
      align-items: center;
      gap: 2rem;
    }
    .container_p {
      width: 450px;
      height: 450px;
    }

    .tittles {
      font-size: 50px;
    }
    .section_about .line {
      width: 250px;
    }
    .paragraph_about {
      margin: 0 1rem;
      font-size: 1.5rem;
      grid-row: 2/3;
      grid-column: 2/3;
    }
    .section_about .container_tittle {
      grid-row: 2/2;
      grid-column: 1/2;
      margin: 0 2rem;
    }

    .section_about .container_tittle h2 {
      font-size: 50px;
    }
  }
  @media screen and (min-width: 992px) {
    .tittles {
      font-size: 50px;
    }
    .section_about .line {
      width: 250px;
    }
    .paragraph_about {
      margin: 0 1rem;
      /* font-size; */
      grid-row: 2/3;
      grid-column: 2/3;
    }
    .section_about .container_tittle {
      grid-row: 2/2;
      grid-column: 1/2;
      margin: 0 2rem;
    }

    .section_about .container_tittle h2 {
      font-size: 50px;
    }
  }
</style>
