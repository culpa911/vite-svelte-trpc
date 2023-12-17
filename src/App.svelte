<script>
  import "./app.css"
  import Navbar from './lib/basic-component/Navbar.svelte';
  import Home from './lib/home/Home.svelte';
  import AddNavbar from './lib/basic-component/Add-Navbar.svelte';
  import BottonAi from "./lib/components/Botton-AI.svelte";
  import Alert from "./lib/components/Alert.svelte";
</script>

<main class="bg-white dark:bg-blue-gray-900">
  <AddNavbar/>
  <Navbar/>
  <body class="lg:mx-16 mx-8">
    <div class="py-8">
      <Alert/>
    </div>

    <Home/>
    
    <div class="absolute bottom-4 right-8 lg:right-16">
      <BottonAi/>
    </div>
  </body>
</main>