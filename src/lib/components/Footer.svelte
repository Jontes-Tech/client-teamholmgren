<script lang="ts">
  import { _ } from 'svelte-i18n'
</script>
<footer
  class="p-4 bg-neutral-800 rounded-t-lg shadow md:flex md:items-center md:justify-between md:p-6"
>
  <span class="text-sm sm:text-center text-gray-400"
    >© 2022 Team Holmgren AB. All Rights Reserved. Developed by <a
      class="hover:underline"
      href="https://jontes.page">Jonatan Holmgren</a
    >.
  </span>
  <ul
    class="flex flex-wrap items-center mt-3 text-s text-gray-400 sm:mt-0"
  >
    <li>
      <a href="/cv/{$_('lang')}/martin.pdf" class="mr-4 hover:underline md:mr-6 "
        >Martin CV</a
      >
    </li>
  </ul>
</footer>
