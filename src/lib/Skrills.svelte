<script>
	import About from './About.svelte';
  import Skillbar from "./Skillsbars.svelte";

  const skillLevels = [
    { skill: "Frontend Developer", percent: 90, delTime: 0 },
    { skill: "Backend Developer", percent: 65, delTime: 400 },
    { skill: "Desiguer UX/UI", percent: 80, delTime: 700 },
    { skill: "Web Desiguer", percent: 75, delTime: 1000 },
  ];



 
</script>




  <section class="container_sk" id="section_skrills">
    <div  class="section_skrills">
      <div class="container_tittle">
        <h2 class="tittle_skrills tittles">SKills</h2>
        <hr class="line" />
      </div> 
      <div class="skills">
        {#each skillLevels as { skill, percent, delTime }}
        <Skillbar {skill} {percent} {delTime} />
        {/each}
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


  .container_sk{
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .section_skrills {
    width: 350px;
    height: 350px;
    border-radius: 50px;
    background: #161616;
    box-shadow: 30px 30px 60px #090909, -30px -30px 60px #232323;
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
    .section_skrills{
      background: none;
    box-shadow: none;
    height: 80vh;
    width: 100%;
    margin: 0 auto;
    flex-direction: row-reverse;
    justify-content: space-evenly;
    align-items: center;
    }
    .skills{
      width: 350px;
    height: 350px;
    border-radius: 50px;
    background: #161616;
    box-shadow: 30px 30px 60px #090909, -30px -30px 60px #232323;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    }
    .tittles{
      font-size: 50px
    }
  }
  

</style>
