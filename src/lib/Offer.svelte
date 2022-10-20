<script lang="ts">
    import { _ } from "svelte-i18n";
  </script>
  
  <main class="font-jost hyphens-manual flex-grow pb-12 m-10">
    <div class='text-white whitespace-pre-line m-10'>
        <h2 class='text-2xl'>{$_('job2bemade')}</h2>
        <li>{$_('jobl1')}</li>
        <li>{$_('jobl2')}</li>
        <li>{$_('jobl3')}</li>
        <li>{$_('jobl4')}</li>
        <li>{$_('jobl5')}</li>
    </div>
    <div class='text-white whitespace-pre-line m-10'>
        <h2 class='text-2xl'>{$_('offer')}</h2>
        <li>{$_('offer2')}</li>
        <li>{$_('offer3')}</li>
        <li>{$_('offer4')}</li>
        <li>{$_('offer5')}</li>
    </div>
    <h3 class='text-white m-10'>{$_('call2action')}</h3>
    <img class='w-96' alt='Martin Holmgren in a fancy suit speaking' src='/img/martin-speaking.webp'>
  </main>
  