<template>
  <router-view></router-view>
  <footer class="bg-white rounded-lg dark:bg-gray-900 m-4">
      <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div class="sm:flex sm:items-center sm:justify-between">
              <a href="" class="flex items-center">
                  <img src="./assets/img/state-of-liberty.webp" class="mr-3 h-6 sm:h-9" alt="State of Liberty" />
                  <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">The American Dream</span>
              </a>
              <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                  <li>
                      <router-link to="me" class="hover:underline me-4 md:me-6">About Me</router-link>
                  </li>
                  <li>
                      <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
                  </li>
                  <li>
                      <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
                  </li>
                  <li>
                      <router-link to="contact" class="hover:underline">Contact</router-link>
                  </li>
              </ul>
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="" class="hover:underline">The American Dream™</a>. All Rights Reserved.</span>
      </div>
  </footer>
</template>