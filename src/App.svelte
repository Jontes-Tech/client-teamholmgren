<script lang="ts">
  import { _, locale } from "svelte-i18n";
  import Main from "./lib/Main.svelte";
  import Contact from "./lib/Contact.svelte";
  import Info from "./lib/Info.svelte";
  import Offer from "./lib/Offer.svelte"
  let page = document.location.hash;
  window.onpopstate = function (event) {
    page = document.location.hash;
  };
</script>

<div class="flex flex-col">
  <!-- Navbar -->
  <nav class="flex items-center justify-between flex-wrap bg-neutral-800 p-6">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <svg
        width="32"
        height="32"
        viewBox="0 0 332.86679 305.78818"
        version="1.1"
        id="SVGRoot"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        xmlns="http://www.w3.org/2000/svg"
      >
        <sodipodi:namedview
          id="namedview71"
          pagecolor="#ffffff"
          bordercolor="#000000"
          borderopacity="0.25"
          inkscape:showpageshadow="2"
          inkscape:pageopacity="0.0"
          inkscape:pagecheckerboard="0"
          inkscape:deskcolor="#d1d1d1"
          inkscape:document-units="px"
          showgrid="true"
          inkscape:zoom="0.25"
          inkscape:cx="967.5"
          inkscape:cy="967.5"
          inkscape:window-width="1499"
          inkscape:window-height="1209"
          inkscape:window-x="0"
          inkscape:window-y="0"
          inkscape:window-maximized="0"
          inkscape:current-layer="layer1"
        >
          <inkscape:grid type="xygrid" id="grid77" />
        </sodipodi:namedview>
        <defs id="defs66">
          <linearGradient id="linearGradient1191">
            <stop
              style="stop-color:#677821;stop-opacity:1;"
              offset="0"
              id="stop1187"
            />
            <stop
              style="stop-color:#ccff00;stop-opacity:1"
              offset="1"
              id="stop1189"
            />
          </linearGradient>
          <linearGradient
            xlink:href="#linearGradient1191"
            id="linearGradient1193"
            x1="431.82404"
            y1="457.3465"
            x2="32.149734"
            y2="-8.6576805"
            gradientUnits="userSpaceOnUse"
          />
        </defs>
        <g id="layer1" transform="translate(-83.437874,-93.282997)">
          <path
            style="fill:url(#linearGradient1193);fill-opacity:1;fill-rule:evenodd;stroke:#000000"
            id="path1125"
            d="m 245.84856,230.23009 c 5.71274,4.54081 -3.44855,9.98223 -7.63041,9.59973 -11.86589,-1.08532 -15.48614,-15.69655 -11.97249,-25.18121 6.38701,-17.24095 27.96648,-21.69214 43.26115,-14.18272 22.69722,11.14394 28.10087,40.56856 16.37133,61.58195 -15.76657,28.24571 -53.34677,34.61687 -80.06892,18.55531 -33.8571,-20.35007 -41.20232,-66.24368 -20.73988,-98.68379 24.92445,-39.51393 79.23042,-47.83813 117.40298,-22.92704 45.20589,29.50099 54.51324,92.2896 25.11762,136.2104 C 293.50557,346.1291 222.18033,356.42325 172.49562,322.51465 115.8247,283.83815 104.54049,203.93251 142.98553,148.4688 186.26366,86.032522 274.78646,73.755314 336.0435,116.75677 c 68.22001,47.88935 81.49289,145.06108 33.91768,212.12498 -52.51003,74.02024 -158.35866,88.29122 -231.2422,36.12694 -79.835419,-57.1399 -95.106776,-171.69047 -38.33966,-250.4057"
            transform="translate(17.581265,2.4252126)"
          />
        </g>
      </svg>
      <a href="/#home" class="font-semibold text-xl tracking-tight"
        >TEAM Holmgren</a
      >
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
          href="/#home"
          class="inline-block text-sm px-4 py-2 text-white border-white mt-4 lg:mt-0"
          >{$_("home")}</a
        >
        <a
          href="/#info"
          class="inline-block text-sm px-4 py-2 text-white border-white mt-4 lg:mt-0"
          >{$_("information")}</a
        >
        <a
          href="/#offer"
          class="inline-block text-sm px-4 py-2 text-white border-white mt-4 lg:mt-0"
          >{$_("offer")}</a
        >
        <a
          href="/#contact"
          class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
          >{$_("contactUs")}</a
        >
      </div>
    </div>
  </nav>
  <!-- End of Navbar -->
  {#if page === "#contact"}
    <Contact />
  {:else if page === "#info"}
    <Info />
  {:else if page === "#offer"}
    <Offer/>
  {:else}
    <Main />
  {/if}
</div>
