<script>
    import { Drawer, Button, CloseButton } from 'flowbite-svelte';
    import { InfoCircleSolid, ArrowRightOutline } from 'flowbite-svelte-icons';
    import { sineIn } from 'svelte/easing';
    let hidden1 = true;
    let transitionParams = {
      x: -320,
      duration: 200,
      easing: sineIn
    };
  </script>
  
  <div class="text-center">
    <button on:click={() => (hidden1 = false)} class="relative flex items-center gap-4 uppercase transition-all p-4 rounded-lg text-sm bg-gradient-to-tr from-blue-700 to-blue-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] active:shadow-none"
    type="button">
    AI CHAT
    <span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
        </svg> 
    </span>
    </button>
  </div>
  
  <Drawer transitionType="fly" {transitionParams} bind:hidden={hidden1} id="sidebar1" class="w-full md:w-1/3">
    <div class="flex items-center">
      <h5 id="drawer-label" class="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400">
        <InfoCircleSolid class="w-4 h-4 me-2.5" />AI Assistant
      </h5>
      <CloseButton on:click={() => (hidden1 = true)} class="mb-4 dark:text-white" />
    </div>
    <p class="mb-6 text-sm text-gray-500 dark:text-gray-400">
      Supercharge your hiring by taking advantage of our <a href="/" class="text-primary-600 underline dark:text-primary-500 hover:no-underline"> limited-time sale </a>
      for Flowbite Docs + Job Board. Unlimited access to over 190K top-ranked candidates and the #1 design job board.
    </p>
    <div class="grid grid-cols-2 gap-4">
      <Button color="light" href="/">Learn more</Button>
      <Button href="/" class="px-4">Get access <ArrowRightOutline class="w-3.5 h-3.5 ms-2" /></Button>
    </div>
  </Drawer>