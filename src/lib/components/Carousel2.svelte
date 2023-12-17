<script>
    import Carousel from 'svelte-carousel'
</script>
  
<Carousel
  autoplayDuration={0}
  duration={5000}
  autoplay
  timingFunction="linear"
  dots={false}
  arrows={false}
  swiping={false}
    >
  {#each colors as { color, text } (color)}
    <Color {color} {text} />
  {/each}
</Carousel>