<script lang="ts">
  import { _ } from "svelte-i18n";
</script>

<main class="font-jost hyphens-manual flex-grow pb-12 mt-5">
  <div class="flex items-center justify-center">
    <div class="bg-neutral-900 font-semibold text-center rounded-3xl border border-neutral-800 drop-shadow-2xl p-10 max-w-xs">
      <img class='mb-10' alt='logo of Team Holmgren' src='/img/logo.svg'>
      <img class="mb-3 w-32 h-32 rounded-full shadow-lg mx-auto" src="/img/martin-fancy.webp" alt="Martin Holmgren">
      <h1 class="text-xl text-gray-200"> Martin Holmgren</h1>
      <h3 class="text-lg text-gray-400 "> {$_('martin-work')}</h3>
      <p class="text-sm text-gray-400 mt-4">{$_('mainpage-quote1')} </p>
      <p class="text-sm text-gray-400 mt-4">{$_('mainpage-quote2')} </p>
      <button on:click={() => window.location.href = '/#info'} class="bg-green-900 px-8 py-2 mt-8 rounded-3xl text-gray-100 font-semibold racking-wide">{$_('readmore')}</button>
    </div>
  </div>
</main>
