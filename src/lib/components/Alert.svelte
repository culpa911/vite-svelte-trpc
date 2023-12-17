<script>
    import { Alert } from 'flowbite-svelte';
    import { InfoCircleSolid } from 'flowbite-svelte-icons';
    import { fly } from 'svelte/transition';
</script>

<Alert border color="blue" dismissable>
    <InfoCircleSolid slot="icon" class="w-4 h-4" />
    <span class="font-medium">Feature Updated!</span>
    New AI Chat <b>Beta</b> feature has been released
</Alert>