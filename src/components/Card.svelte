<script>
  let project = {
    title: "Mi Proyecto",
    description: "Esta es la descripción de mi proyecto.",
    image: "./image/switmer.png",
    technologies: ["Svelte", "JavaScript", "CSS"],
    link: "https://mi-proyecto.com",
  };
</script>

<div class="card">
  <h2>{project.title}</h2>
  <img src={project.image} alt={project.title} />
  <p>{project.description}</p>
  <div class="technologies">
    {#each project.technologies as tech}
      <span>{tech}</span>
    {/each}
  </div>
  <div class="c_link">
    <a href={project.link} class="link">Ver Proyecto</a>
  </div>
</div>

<style>
  .card {
    width: 300px;
    height: 400px;
    background:var(--background);
    box-shadow: -15px -15px 30px var(--box-shadow-button), 15px 15px 30px var(--box-shadow-top);
    border-radius: 15px;
    padding: 20px;
    text-align: center;
    transition: all 0.2s ease-in-out;
    color: #333;
  }

  .card:hover {
    transform: scale(1.02);
    box-shadow: 0px 20px 25px -5px rgba(0, 0, 0, 0.1),
      0px 10px 10px -5px rgba(0, 0, 0, 0.04);
  }

  .card img {
    width: 100%;
    height: auto;
    border-radius: 10px;
    object-fit: cover;
    margin-bottom: 15px;
    box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.1);
  }

  .technologies {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }

  .technologies span {
    background-color: #ddd;
    padding: 5px;
    border-radius: 5px;
    font-size: 0.8em;
  }

  .c_link{
    margin-top: 1rem;
  }
  .link {
    margin-top: 2rem;
    text-decoration: none;
    color: #333;
    border-radius: 5px;
    padding: 10px;
    background-color: #ddd;
    transition: 0.2s all ease-in-out;
  }

  .link:hover {
    background-color: #bbb;
  }
</style>
