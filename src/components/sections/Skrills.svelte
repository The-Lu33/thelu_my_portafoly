<script>
  import { language } from "../../store/lang";
  import Line from "./Line.svelte";
  import Skillbar from "./Skillsbars.svelte";

  const skillLevels = [
    { skill: "Frontend Developer", percent: 90, delTime: 10 },
    { skill: "application developer", percent: 80, delTime: 10 },
    { skill: "Backend Developer", percent: 65, delTime: 10 },
    { skill: "Desiguer UX/UI", percent: 80, delTime: 10 },
    { skill: "Web Desiguer", percent: 75, delTime: 10 },
  ];
  const skillLevelsES = [
    { skill: "Frontend Developer", percent: 90, delTime: 10 },
    { skill: "application developer", percent: 80, delTime: 10 },
    { skill: "Backend Developer", percent: 65, delTime: 10 },
    { skill: "Desiguer UX/UI", percent: 80, delTime: 10 },
    { skill: "Web Desiguer", percent: 75, delTime: 10 },
  ];
  let skills;
  $: skills = $language === "en" ? skillLevels : skillLevelsES;
  console.log(skills)
</script>

<section class="container_sk" id="section_skrills">
  <div class="section_skrills">
    <div class="container_tittle">
      <h2 class="tittle_skrills tittles">
        {$language === "en" ? "SKills" : "Habilidades"}
      </h2>
      <span class="line">
        <Line />
      </span>
    </div>

    <div class="skills">
      {#each skills as { skill, percent, delTime }}
        <Skillbar {skill} {percent} {delTime} />
      {/each}
    </div>
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
    ); */
  }

  .tittles {
    font-size: 25px;
    color: var(--text);
    font-weight: 400;
  }

  .container_sk {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .section_skrills {
    width: 350px;
    height: 450px;
    border-radius: 50px;
    background: var(--background);
    box-shadow:
      30px 30px 60px var(--box-shadow-top),
      -30px -30px 60px var(--box-shadow-button);
    margin: 0 auto;
    margin-top: 5rem;
    padding: 5px 0;
    margin-bottom: 7.75rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  @media (min-width: 768px) {
    .section_skrills {
      background: none;
      box-shadow: none;
      height: 80vh;
      width: 100%;
      margin: 0 auto;
      flex-direction: row-reverse;
      justify-content: space-evenly;
      align-items: center;
    }
    .skills {
      width: 450px;
      height: 450px;
      border-radius: 50px;
      background: var(--background);
      box-shadow:
        30px 30px 60px var(--box-shadow-top),
        -30px -30px 60px var(--box-shadow-button);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .tittles {
      font-size: 50px;
    }
  }
</style>
