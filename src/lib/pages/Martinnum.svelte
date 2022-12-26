<script lang="ts">
  import { _ } from "svelte-i18n";
</script>
<main class="flex items-center justify-center h-screen">
  <div class="bg-neutral-900 p-4 shadow-lg rounded">
    <img class="h-64 w-full object-cover" alt="Martin kindly looking at you, inviting you to call him" src="/img/martin-fancy.webp">
    <p class="text-gray-400 text-2xl">{$_('call_me_at')}</p>
    <h1 class="text-white text-4xl">+46 70 542 90 02</h1>
  </div>
</main>
