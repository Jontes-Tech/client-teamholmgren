<script lang="ts">
  import { _ } from "svelte-i18n";
</script>

<main>
  <div class="text-white md:p-10">
    <p class="text-xl bg-green-800 p-10 md:rounded md:shadow-md">
      {$_("infotext")}
    </p>
    <div class="bg-zinc-900 p-10 mt-5 md:rounded-lg md:shadow-md">
      <h2 class="text-2xl">{$_("competencies")}:</h2>
      <div class="mt-6 sm:columns-2 p-5">
        <div>
          <li>{$_("competencies01")}</li>
          <li>{$_("competencies02")}</li>
          <li>{$_("competencies03")}</li>
          <li>{$_("competencies04")}</li>
          <li>{$_("competencies05")}</li>
          <li>{$_("competencies06")}</li>
          <li>{$_("competencies07")}</li>
          <li>{$_("competencies08")}</li>
          <li>{$_("competencies09")}</li>
          <li>{$_("competencies10")}</li>
          <li>{$_("competencies11")}</li>
        </div>
        <div>
          <li>{$_("competencies12")}</li>
          <li>{$_("competencies13")}</li>
          <li>{$_("competencies14")}</li>
          <li>{$_("competencies15")}</li>
          <li>{$_("competencies16")}</li>
          <li>{$_("competencies17")}</li>
          <li>{$_("competencies18")}</li>
          <li>{$_("competencies19")}</li>
          <li>{$_("competencies20")}</li>
          <li>{$_("competencies21")}</li>
          <li>{$_("competencies22")}</li>
          <li>{$_("competencies23")}</li>
        </div>
      </div>
    </div>
    <section class="p-6 md:p-12 text-center md:text-left">
      <div class="flex justify-center">
        <div class="max-w-6xl">
          <div class="block p-6 rounded-lg shadow-lg bg-zinc-900 m-4">
            <div class="md:flex md:flex-row">
              <div
                class="md:w-96 w-36 flex justify-center items-center mb-6 lg:mb-0 mx-auto md:mx-0"
              >
                <img
                  src="/img/martin-forest.webp"
                  class="rounded-full shadow-md"
                  alt="Martin Holmgren in a forest with a smile on his face."
                />
              </div>
              <div class="md:ml-6">
                <p class="text-white mb-6">
                  {$_('summaryText')}
                </p>
                <p class="font-semibold text-xl mb-2 text-gray-400">Martin Holmgren</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</main>
