<script>
    import { Carousel } from 'flowbite-svelte';
    // ./imageData/+server.js has the following
    export const images = [
      {
        alt: 'Cosmic timetraveler',
        src: 'https://source.unsplash.com/random/1000x1000?sig=1',
        title: 'cosmic-timetraveler-pYyOZ8q7AII-unsplash.com'
      },
      {
        alt: 'Cristina Gottardi',
        src: 'https://source.unsplash.com/random/1000x1000?sig=2',
        title: 'cristina-gottardi-CSpjU6hYo_0-unsplash.com'
      },
      {
        alt: 'Johannes Plenio',
        src: 'https://source.unsplash.com/random/1000x1000?sig=4',
        title: 'johannes-plenio-RwHv7LgeC7s-unsplash.com'
      },
      {
        alt: 'Mark Harpur',
        src: 'https://source.unsplash.com/random/1000x1000?sig=5',
        title: 'mark-harpur-K2s_YE031CA-unsplash'
      },
    ];
</script>

<div class="">
    <Carousel {images} duration="2000" />
</div>