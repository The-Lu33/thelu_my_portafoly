<script>
//your script here
</script>
<footer>
    <h2 class="tittle_footer">Made with  <span><img src="./image/svelte.svg" class="icon" alt="icono"></span>  with lots of  <span>❤️</span> by The Lú</h2>
  </footer>
<style>
footer {
  text-align: center;
  display: flex;
    justify-content: center;
    height: 2rem;
  width: 100%;
}
footer > h2 {
  font-size: 0.75rem;
  font-weight: 400;
  color: var(--white-p);

}
.icon{

  width: 12px;
}
img:hover{
  filter: drop-shadow(0 0 2em #ff3e00aa);

}
@media screen and (min-width: 744px){
  footer > h2 {
    font-size: 1rem;
  }
  .icon{

width: 1rem;
}
}
</style>
