<script>
  import Line from "./Line.svelte";
  import { hslide } from "../hslide";
  import { language } from "../../store/lang";
  let slides = [
    {
      id: 0,
      img: "./image/yourshops-courier.png",
      link: "https://www.behance.net/gallery/156432395/YourShpos",
      description: `${
        $language === "en"
          ? "I design logo and also manage a retail sales network or importer of fashion items such as clothing for women, men and children, watches, lingerie etc."
          : "Diseño logotipo y también administro una red de ventas al por menor o importador de artículos de moda como ropa para mujer, hombre y niño, relojes, lencería etc."
      }`,
      tec: ["nextjs.svg", "postgresql.svg"],
    },
    // {
    //   id: 1,
    //   img: "./image/switmer.png",
    //   description:
    //     "Create a web app for the sale of streaming services with a payment gateway such as PayPal and Binance. ",
    //   tec: ["nextjs.svg", "mongodb.svg"],
    // },
    {
      id: 2,
      img: "./image/ecommerce_react.png",
      link: "https://ecommerce-thelu.netlify.app/",
      description: `${
        $language === "en"
          ? "Make an ecommerce with cart and purchase option. It also has filtered in addition to login and registration all done with Reactjs using some framework such as react-router or Redux."
          : "Realiza un ecommerce con carrito y opción de compra. También se ha filtrado, además del inicio de sesión y el registro, todo realizado con Reactjs utilizando algún marco como reaccionar-router o Redux."
      }`,
      tec: ["react.svg", "postgresql.svg"],
    },
    {
      id: 3,
      img: "./image/rickyandmorty.jpg",
      link: "https://rick-and-morty-by-vale-luis.netlify.app/",
      description:
        "I made a team of two people a landing page of the Rick and Morty api where we also have filtering and details of each persaje according to their universe, in addition to knowing how many species there are in that universe according to the number of their respective universe.",
      tec: ["react.svg"],
    },
    {
      id: 5,
      img: "./image/ecommerceapi.png",
      link: "https://ecommerceapi-es4b.onrender.com/api/v1/docs/#/",
      description:
        "I made a restapi of an ecommerce with flow of users, products and orders, also a database made in postgresql using an ORM as sequelize. ",
      tec: ["nextjs.svg", "mongodb.svg"],
    },
    {
      id: 4,
      img: "./image/pokedex.png",
      link: "https://pkedex-thelu.netlify.app/",
      description:
        "We perform in pair pokedex of the PokeApi with filters and detailing each pokemon that there are in addition to agragar styles for each pokemon q there are.",
      tec: ["react.svg"],
    },
  ];

  let car = 0;
  function changeSlide(slide) {
    car = slide;
  }
  const change = (num, min, max) => Math.min(Math.max(num, min), max);
  const transition_args = {
    duration: 700,
    delay: 2,
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
    <h2 class="tittle_briefcase tittles">
      {$language === "en" ? "Briefcase" : "Proyectos"}
    </h2>
    <span class="line">
      <Line />
    </span>
  </div>
  <div class="briefcase_carrusel">
    <div class="container_slide">
      <div class="slide_wal">
        {#each slides as slide, id}
          {#if id === car}
            <div class="img_container" transition:hslide={"{duration: 500}"}>
              <a class="link" href={slides[car].link} target="_black">
                <img src={slides[car].img} alt="slide" class="slide_img" />
              </a>
              <div class="tec_container">
                {#each slide.tec as tec, index}
                  <div class="box_skill">
                    <img
                      src={`./image/${slide.tec[index]}`}
                      alt={slide.tec[index]}
                      class="icon_skill"
                    />
                  </div>
                {/each}
              </div>
            </div>
          {/if}
        {/each}
      </div>

      <button on:click={() => prev()} class="arrow left" id="arrow_left arrow"
        >&#9664;</button
      >
      <button on:click={() => next()} class="arrow right" id="arrow_right arrow"
        >&#9654;</button
      >
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
    box-shadow:
      -25px -25px 50px var(--box-shadow-button),
      25px 25px 50px var(--box-shadow-top);
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
    position: relative;
    width: 95%;
    height: 90%;
  }
  .slide_img {
    width: 100%;
    height: 100%;
    object-fit: unset;
    border-radius: 1rem;
  }
  .tec_container {
    display: flex;
    flex-wrap: wrap;
  }

  .slide_wal:hover {
    visibility: visible;
    opacity: 1;
  }
  .img_container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
    background-color: var(--background);
    box-shadow:
      -1.5px -1.5px 3px rgba(35, 35, 35, 0.25),
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
    box-shadow:
      2px 2px 6px var(--red),
      -2px -2px 6px var(--rosa-light);
    transform: scale(1.1);
  }
  .left {
    left: -3rem;
    top: calc(50% - 20px);
  }
  .right {
    right: -3rem;
    top: calc(50% - 20px);
  }
  .box_skill {
    height: 50px;
    width: 50px;
    margin: 1rem;
    border-radius: 10px;
    background: var(--background);
    box-shadow:
      3px 3px 6px var(--box-shadow-top),
      -3px -3px 6px var(--box-shadow-button);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .box_skill:hover {
    box-shadow:
      5px 5px 10px var(--red),
      -5px -5px 10px var(--rosa-light);
    transform: scale(1.1);
  }

  .icon_skill {
    width: 80%;
    height: 60%;
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
    .right {
      right: -4rem;
      top: calc(50% - 20px);
    }
  }
  @media screen and (min-width: 1000px) {
    .container_slide {
      width: 450px;
      height: 450px;
    }
    .briefcase_container {
      height: 100vh;
      margin-bottom: 5rem;
    }

    /* .left {
      left: -4rem;
      top: calc(50% - 20px);
    }
    .right {
      right: -4rem;
      top: calc(50% - 20px);
    } */
  }
</style>
