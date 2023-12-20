<script>
  import Card from "../components/Card.svelte";
  import Carousel from "../components/Carousel.svelte";
</script>

<div class="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-16 lg:py-8">
  <div
    class="block lg:hidden mb-4">
    <!-- <img alt="nature" class="h-[32rem] w-full object-cover object-center"
      src="https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2717&amp;q=80" />
  -->
    <Carousel/>
  </div>
    <div class="text-jutify">
      <h2
        class="mb-4 block font-sans text-3xl md:text-4xl font-semibold leading-[1.3] tracking-normal text-blue-gray-900 antialiased uppercase">
        <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-800">
          energy solution
        </span>
      </h2>
      <p class="block font-sans text-base text-justify font-normal leading-relaxed text-gray-700">
        Can you help me out? you will get a lot of free exposure doing this
        can my website be in english?. There is too much white space do less
        with more, so that will be a conversation piece can you rework to
        make the pizza look more delicious other agencies charge much lesser
        can you make the blue bluer?.
      </p>

      <br>
      <button
        class="select-none rounded-lg border border-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:scale-95 hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85]"
        type="button"
        >
          get started
      </button>
    </div>
    <div
      class="hidden lg:block shadow-md">
      <!-- <img alt="nature" class="h-[32rem] w-full object-cover object-center"
        src="https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2717&amp;q=80" />
     -->
     <Carousel/>
    </div>
</div>

<div class="grid grid-cols-4 pt-8">
  <Card/>

</div>


