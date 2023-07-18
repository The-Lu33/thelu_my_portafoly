<script>
  let active = false;
  let btnNabvar = () => {
    active = !active;
  };
  let y;
</script>

<svelte:window bind:scrollY={y} />

<nav
  class="nav"
  class:show_nav={y >= 60}
  class:active_menu_responsive_nav={active}
>
  <h2
    class="tittle_nabvar"
    translate="no"
  >
    The Lú
  </h2>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- <div
    on:click={btnNabvar}
    class="btn__Nabvar"
  >
    <span
      class="line1"
      class:active_line1={active}
    />
    <span
      class="line2"
      class:active_line2={active}
    />
    <span
      class="line3"
      class:active_line3={active}
    />
  </div>
  <div
    class="menu_responsive"
    class:active_menu_responsive={active}
  >
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
        <a href="#contact">Contact</a>
        <hr class="line" />
      </li>
    </ul>
  </div> -->
</nav>

<style>
   .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1rem;
    font-size: 1.5rem;
    transition: all 0.5s ease;
    position: absolute;
    overflow: hidden;
    top: 0;
    width: 100%;
    z-index: 100;

    /* background-color: #7c1773; */
  }
  h2 {
    color: var(--white-text);
    font-size: 1.5rem;
    font-weight: 400;
    margin-left: 1rem;
  }
</style>