<script lang="ts">
  import { _, locale } from "svelte-i18n";
</script>

<div class="flex flex-col min-h-screen">
  <!-- Navbar -->
  <nav class="flex items-center justify-between flex-wrap bg-slate-500 p-6">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <svg
        class="fill-current h-8 w-8 mr-2"
        width="54"
        height="54"
        viewBox="0 0 54 54"
        xmlns="http://www.w3.org/2000/svg"
        ><path
          d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"
        /></svg
      >
      <span class="font-semibold text-xl tracking-tight">TEAM Holmgren</span>
    </div>
    <div class="text-sm lg:flex-grow">
      <select
        class="form-select appearance-none
    block
    px-3
    py-1.5
    text-base
    font-normal
    text-gray-700
    bg-white bg-clip-padding bg-no-repeat
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        bind:value={$locale}
      >
        <option value="se">🇸🇪</option>
        <option value="en">🇬🇧</option>
      </select>
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow" />
      <div>
        <a
          href="#contact"
          class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
          >{$_("contactUs")}</a
        >
      </div>
    </div>
  </nav>
  <!-- End of Navbar -->
  <main class="font-jost hyphens-manual flex-grow pb-12">
    <!-- Page -------------------------------------------------------------------------------------------------------->
    <div
      class="p-3 mx-auto my-auto bg-gray-100 border-4 border-gray-700 print:border-0 page print:max-w-letter print:max-h-letter print:mx-0 print:my-o lg:h-letter md:max-w-letter md:h-letter xsm:p-8 sm:p-9 md:p-16 lg:mt-6 rounded-2xl print:bg-white"
    >
      <!-- Name ---------------------------------------------------------------------------------------------------->
      <header
        class="inline-flex items-baseline justify-between w-full mb-3 align-top border-b-8"
      >
        <div class="block">
          <h1 class="mb-0 text-5xl font-bold text-gray-750">TEAM Holmgren</h1>
          <!--Location --------------------------------------------------------------------------------------------------------->

          <h3
            class="m-0 mt-2 ml-2 font-semibold text-md text-gray-550 leading-snugish"
          >
            Rankhyttan 50, 791 92 Falun, {$_("sweden")}
          </h3>
        </div>
      </header>

      <!-- Column -------------------------------------------------------------------------------------------------->
      <div
        class="col-gap-16 md:col-count-2 print:col-count-2 md:h-letter-col-full print:h-letter-col-full col-fill-balance"
      >
        <!-- Contact Information ------------------------------------------------------------------------------------->
        <section class="pb-4 mt-4 first:mt-0">
          <!-- To keep in the same column -------------------------------------------------------------------------->
          <div class="break-inside-avoid">
            <h3><b>M</b>artin</h3>
            <img
              alt="Martin Holmgren from TEAM Holmgren speaking at a confrerence"
              class="rounded w-64 shadow-lg"
              src="/martin.jpeg"
            />
            <section class="pb-2 mb-2 border-b-2 break-inside-avoid">
              <ul class="list-inside pr-7">
                <li
                  class="mt-1 leading-normal transition duration-100 ease-in text-gray-550 text-md hover:text-gray-700"
                >
                  <a href="mailto:martin@teamholmgren.com" class="group">
                    <span
                      class="mr-8 text-lg font-semibold text-gray-700 leading-snugish"
                    >
                      {$_("emailAddr")}:
                    </span>
                    martin@teamholmgren.com
                    <span
                      class="inline-block font-normal transition duration-100 ease-in text-gray-550 print:text-black group-hover:text-gray-700"
                    >
                      ↗
                    </span>
                  </a>
                </li>
                <li
                  class="mt-1 leading-normal transition duration-100 ease-in text-gray-550 text-md hover:text-gray-700"
                >
                  <span
                    class="mr-8 text-lg font-semibold text-gray-700 leading-snugish"
                  >
                    CV:
                  </span>
                  <a href="/cv/en/martin.pdf">English</a>
                  <span
                    class="inline-block font-normal transition duration-100 ease-in text-gray-550 print:text-black group-hover:text-gray-700"
                  >
                    ↗
                  </span>
                  <a href="/cv/se/martin.pdf">Svenska</a>
                  <span
                    class="inline-block font-normal transition duration-100 ease-in text-gray-550 print:text-black group-hover:text-gray-700"
                  >
                    ↗
                  </span>
                </li>
                <li
                  class="mt-1 leading-normal transition duration-100 ease-in text-gray-550 text-md hover:text-gray-700"
                >
                  <a href="tel:+46705429002">
                    <span
                      class="mr-5 text-lg font-semibold text-gray-700 leading-snugish"
                    >
                      {$_("phoneNum")}:
                    </span>
                    (+46) 70-5429002
                  </a>
                </li>
              </ul>
            </section>
          </div>
        </section>
        <!--Summary ---------------------------------------------------------------------------------------------------------->
        <section class="pb-2mt-4 border-b-4 first:mt-0">
          <!-- To keep in the same column -->
          <div class="break-inside-avoid">
            <h2
              class="mb-2 text-lg font-bold tracking-widest text-gray-700 print:font-normal"
            >
              {$_("summary")}
            </h2>

            <section class="mb-2 break-inside-avoid">
              <p class="mt-2 leading-normal text-gray-700 text-md">
                {$_("summaryText")}
              </p>
            </section>
          </div>
        </section>
        <section class="mb-2 break-inside-avoid">
          <header>
            <h3 class="text-lg font-semibold text-gray-650 leading-snugish">
              {$_("job2bemade")}
            </h3>
          </header>
          <ul class="list-disc mt-2.1 text-md text-gray-700 leading-normal">
            <li>
              {$_('jobl1')}
            </li>
            <li>
              {$_('jobl2')}
            </li>
            <li>
              {$_('jobl3')}
            </li>
            <li>
              {$_('jobl4')}
            </li>
            <li>
              {$_('jobl5')}
            </li>
          </ul>
        </section>
        <section class="mb-2 break-inside-avoid">
          <header>
            <h3 class="text-lg font-semibold text-gray-650 leading-snugish">
              {$_("possibilities")}
            </h3>
          </header>
          <ul class="list-disc mt-2.1 text-md text-gray-700 leading-normal">
            <li>{$_('offer1')}</li>
            <li>{$_('offer2')}</li>
            <li>{$_('offer3')}</li>
            <li>{$_('offer4')}</li>
            <li>{$_('offer5')}</li>
          </ul>
        </section>
      </div>
    </div>
  </main>
  <!-- Footer -->
  <footer class="bg-gray-200 text-center lg:text-left">
    <div
      class="text-gray-700 text-center p-4
    object-bottom"
      style="background-color: rgba(0, 0, 0);"
    >
      © 2022 Copyright Jonatan Holmgren freelancing for Team Holmgren AB
    </div>
  </footer>
  <!-- End of footer -->
</div>
