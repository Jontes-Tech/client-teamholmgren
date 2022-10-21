<script lang="ts">
  import { _, locale } from "svelte-i18n";
  import Main from "./lib/pages/Main.svelte";
  import Contact from "./lib/pages/Contact.svelte";
  import Info from "./lib/pages/Info.svelte";
  import Offer from "./lib/pages/Offer.svelte";
  import Footer from "./lib/components/Footer.svelte";
  let page = document.location.hash;
  window.onpopstate = function (event) {
    page = document.location.hash;
  };
</script>

<div class="flex flex-col min-h-screen">
  <!-- Navbar -->
  <nav class="flex items-center justify-between flex-wrap bg-neutral-800 p-6">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <a href="/#home" class="font-semibold text-xl tracking-tight"
        ><img
          class="h-10"
          alt="logo of Team Holmgren"
          src="/img/logo.webp"
        /></a
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
  <div class="grow h-full">
    {#if page === "#contact"}
      <Contact />
    {:else if page === "#info"}
      <Info />
    {:else if page === "#offer"}
      <Offer />
    {:else}
      <Main />
    {/if}
  </div>

  <Footer/>
</div>
