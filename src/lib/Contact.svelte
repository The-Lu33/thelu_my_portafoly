<script>
  //your script here
</script>

<section class="contact_container" id="contact">
  <div class="container_tittle">
    <h2 class="tittle_contact tittles">Contact</h2>
    <hr class="line" />
  </div>
  <div class="contact_image_container">
    <a href="mailto:luiseducol13@gmail.com" target="_blank">
      <img src="./image/email.svg" alt="email" />
    </a>
  </div>
  <div class="cv_download_container ">
    <a href="./document/cv-global.pdf" download class="dowload_cv">
      <h2 class="text_cv">cv download</h2>
      <div>

        <img src="./image/bxs-cloud-download.svg" alt="dowmload_cv" />
      </div>
    </a>
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
  .contact_container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }

  .contact_image_container,.cv_download_container {
    width: 150px;
    height: 150px;
    background: #161616;
    box-shadow: -15px -15px 30px #232323, 15px 15px 30px #090909;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;

    margin-bottom: 3.5rem;
    margin-top: 2.5rem;
  }
  .contact_image_container:hover,.cv_download_container:hover {
        border-radius: 20px;
        box-shadow: 5px 5px 10px var(--red), -5px -5px 10px var(--rosa-light);
        transform: scale(1.1);
        cursor: pointer;
      }
  .contact_image_container img, .cv_download_container img {
    width: 90px;
    height: 70px;
  }
  .dowload_cv {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  .text_cv{
    color: var(--white-text);
    font-size: 1rem;
    text-decoration: none;
  }
  .cv_download_container>a{
    text-decoration: none;
  }
  @media screen and (min-width: 768px) {
    .tittles {
      font-size: 50px;
    }
    .text_cv{
      font-size: 2remw;
    }
    .contact_container {
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
    }
    .contact_image_container, .cv_download_container {
      width: 250px;
      height: 250px;
    }
    .contact_image_container img, .cv_download_container img {
      width: 180px;
      height: 120px;
    }
  }
</style>
