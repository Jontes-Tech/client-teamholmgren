<script lang="ts">
  import { _ } from "svelte-i18n";
</script>

<main class="font-jost hyphens-manual flex-grow pb-12 m-10">
  <div class="text-white whitespace-pre-line m-10 lists">
    <h2 class="text-2xl">{$_("job2bemade")}</h2>
    <ul class="list-disc list-outside">
      <li>{$_("jobl1")}</li>
      <li>{$_("jobl2")}</li>
      <li>{$_("jobl3")}</li>
      <li>{$_("jobl4")}</li>
      <li>{$_("jobl5")}</li>
    </ul>
  </div>
  <div class="text-white whitespace-pre-line m-10">
    <h2 class="text-2xl">{$_("offer")}</h2>
    <ul class="list-disc list-outside">
      <li>{$_("offer2")}</li>
      <li>{$_("offer3")}</li>
      <li>{$_("offer4")}</li>
      <li>{$_("offer5")}</li>
    </ul>
  </div>
  <h3 class="text-white m-10">{$_("call2action")}</h3>
  <div class='p-5 bg-green-800 w-96 text-white rounded-lg font-semibold shadow-xl text-center'>
    <img
      class="rounded mb-1"
      alt="Martin Holmgren in a fancy suit speaking"
      src="/img/martin-speaking.webp"
    />
    <p>Martin Holmgren</p>
  </div>
</main>
