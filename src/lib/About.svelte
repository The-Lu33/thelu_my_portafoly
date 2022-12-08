<script>
  //your script here
</script>

<main>
  <section class="section_about" id="section_about">
    <div class="container_tittle">
      <h2 class="tittle_about tittles">About Me</h2>
      <hr class="line" />
    </div>
    <div class="container_p">
      <p class="paragraph_about">
        Junior programmer hungry for success, hard working and always trying to
        find the most innovative way possible, always taking each task or
        project to its maximum expression. In fact, a junior programmer with few
        experiences but with great expectations about the technological world.
      </p>
    </div>
  </section>
</main>

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
  }
  @media screen and (min-width: 744px) {
    .section_about {
      width: 100%;
      height: 80vh;
      justify-content: space-evenly;
      flex-direction: row;
      align-items: center;
      gap: 2rem;
    }

    .tittles {
      font-size: 50px;
    }
    .section_about .line {
      width: 250px;
    }
    .paragraph_about {
      width: 360px;
      height: 162px;
      margin: 0 1rem;
      font-size: 20px;
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
      width: 360px;
      height: 162px;
      margin: 0 1rem;
      font-size: 20px;
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
