<script lang="ts">
  import { _ } from "svelte-i18n";
</script>

<main class="font-jost hyphens-manual flex-grow pb-12 m-10">
  <p class="text-white whitespace-pre-line ">
    {$_("billingAdress")}: 
      TEAM Holmgren Consulting AB
      Rankhyttan 50
      791 92 Falun

    {$_("organisationNumber")}: 559404-6798
    
    {$_("phoneNum")}:
    <a class="no-underline hover:underline font-bold" href="tel:46705429002"
      >+46 70 542 90 02</a
    >

    Mail:
    <a
      class="no-underline hover:underline font-bold"
      href="mailto:martin@teamholmgren.com">martin@teamholmgren.com</a
    >
  </p>
  <img
    src="./img/road.webp"
    alt="alttext"
    class="w-full h-80 object-cover rounded-lg shadow-lg"
  />
</main>
