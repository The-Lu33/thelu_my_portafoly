<script>
	let active = false;
  let btnNabvar = () => {
    active = !active;
  };
  let y;

</script>
 
 <svelte:window bind:scrollY={y} />


<nav class="nav"  class:show_nav={y >= 60}>
  <h2 class="tittle_nabvar">The Lú</h2>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div on:click={btnNabvar} class="btn__Nabvar">
    <span class="line1" class:active_line1={active} />
    <span class="line2" class:active_line2={active} />
    <span class="line3" class:active_line3={active} />
  </div>
  <div class="menu_responsive" class:active_menu_responsive={active}>
    <ul>
      <li>
        <a href="#principal_header">home</a>
        <hr class="line" />
      </li>
      <li>
        <a href="#section_about">About Me</a>
        <hr class="line" />
      </li>
      <li>
        <a href="#section_skrills">Skills</a>
        <hr class="line" />
      </li>
      <li>
        <a href="#techonologies_container">Tecnologies</a>
        <hr class="line" />
      </li>
      <li>
        <a href="#briefcase_container">Brifcase</a>
        <hr class="line" />
      </li>
      <li>
        <a href="#contact">Contac</a>
        <hr class="line" />
      </li>
    </ul>
  </div>
</nav> 


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
  .show_nav{
    background: rgba(22, 22, 22, 0.9);
    border-radius: 0 0 1rem 1rem;
  }
  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 0.5rem;
    font-size: 1.5rem;
    transition: all 0.5s ease;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    /* background-color: #7c1773; */
  }
  h2 {
    color: var(--white-text);
    font-size: 1.5rem;
    font-weight: 400;
    margin-left: 1rem;
  }
  .btn__Nabvar {
    width: 30px;
    height: 25px;
    cursor: pointer;
  }
  .btn__Nabvar span {
    display: block;
    height: 2px;
    margin-top: 5px;
    transform-origin: 0px 100%;
    transition: all 300ms;
  }
  .line1 {
    background-color: var(--red);
  }
  .line2 {
    background-color: var(--rosa-light);
    width: 75%;
    margin-left: 25%;
  }
  .line3 {
    background-color: var(--morado-light);
  }

  .active_line1 {
    transform: rotate(90deg);
  }
  .active_line2 {
    transform: rotate(90deg) translate(-50%, -0);
  }
  .active_line3 {
    transform: rotate(90deg) translate(-14px, -16px);
  }
  .menu_responsive {
    display: flex;
    width: 100%;
    height: 100vh;
    right: -100%;
    top: 0;
    align-items: center;
    position: absolute;
    flex-direction: column;
    text-align: center;
    margin-top: 47px;
    transition: all 1000ms;
    background-color: rgba(22, 22, 22, 0.9);
  }
  .active_menu_responsive {
    right: 0;
  }
 
  .menu_responsive ul li a {
    color: var(--white-p);
    font-size: 25px;
    font-weight: 400;
    text-decoration: none;
    cursor: pointer;
  }
  .menu_responsive ul li hr {
    margin-bottom: 1.5rem;
  }
  .menu_responsive ul li {
    list-style: none;
  }
  @media screen and (min-width: 744px) {
    .btn__Nabvar {
      display: none;
    }
    .tittle_nabvar {
      position: absolute;
    }
    .menu_responsive {
      background: none;
      height: 3rem;
      margin-top: 0;
      justify-content: center;
      align-items: flex-end;
      left: 0;
      position: relative;
    }
    .menu_responsive ul {
      display: flex;
      position: fixed;
    }
    .menu_responsive ul li a {
      font-size: 1rem;
      font-weight: 400;
      padding: 0 0.5rem;
      margin: 0 0.25rem;
    }
    .menu_responsive ul li a:hover {
      border-radius: 20px;
      box-shadow: 5px 5px 10px var(--red), -5px -5px 10px var(--rosa-light);
      transform: scale(1.1);
      cursor: pointer;
    }

    .menu_responsive ul li hr {
      display: none;
    }
    @media screen and (min-width: 992px) {
      .menu_responsive ul li a {
        font-size: 1rem;
        font-weight: 400;
        padding: 0 0.5rem;
      }
      .menu_responsive ul li a:hover {
        border-radius: 20px;
        box-shadow: 5px 5px 10px var(--red), -5px -5px 10px var(--rosa-light);
        transform: scale(1.1);
        cursor: pointer;
      }
    }
  }
</style>
