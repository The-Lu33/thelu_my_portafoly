<script>
  import { Motion } from 'svelte-motion';
  import Line from './Line.svelte';
</script>

<section
  class="section_about"
  id="section_about"
>
  <div class="container_tittle">
    <h2 class="tittle_about tittles">About Me</h2>
    <span class="line">
      <Line />
    </span>
  </div>
  <div class="container_p">
    <p class="paragraph_about">
      I am a full stack developer, a retailer committed to work in search of new
      learning, working to obtain the best experience for development, a team or
      solo worker, sociable and also prepared to lead if necessary. himself a
      committed programmer and prepared to give the best of himself every day.
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
    color: var(--white-text);
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
    color: var(--white-p);
    font-weight: 400;
    font-size: 1rem;
    text-align: center;
    padding: 1rem;
  }
  .container_p {
    width: 350px;
    height: 250px;
    border-radius: 30px;
    background: #161616;
    box-shadow: 15px 15px 30px #090909, -15px -15px 30px #232323;
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
