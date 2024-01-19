<template>
  <router-view></router-view>
  <footer class="bg-white rounded-lg dark:bg-gray-900 m-4">
      <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div class="sm:flex sm:items-center sm:justify-between">
              <router-link to="/" href="" class="flex items-center">
                  <img src="./assets/img/state-of-liberty.webp" class="mr-3 h-6 sm:h-9" alt="State of Liberty" />
                  <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">The American Dream</span>
              </router-link>
              <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                  <li>
                      <router-link to="me" class="hover:underline me-4 md:me-6">About Me</router-link>
                  </li>
                  <li>
                    <button data-modal-target="default-modal" data-modal-toggle="default-modal" class="block font-medium rounded-lg text-sm text-center me-4 hover:underline" type="button">
                        Privacy Policy
                    </button>                  
                </li>
                  <div id="default-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                    <div class="relative p-4 w-full max-w-2xl max-h-full">
                        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                                    Privacy Policy
                                </h3>
                                <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                    </svg>
                                    <span class="sr-only">Close modal</span>
                                </button>
                            </div>
                            <div class="p-4 md:p-5 space-y-4">
                                <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                    As the European Union prepares to enforce new consumer privacy laws for its citizens, The American Dream is committed to ensuring the protection of your privacy. In anticipation of these changes, we have updated our Privacy Policy to align with the upcoming regulations.
                                </p>
                                <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                    We encourage you to review the updated Privacy Policy to understand your rights and how your information is handled. These changes will come into effect on 24-12-2052.
                                </p>
                            </div>
                            <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                                <button data-modal-hide="default-modal" type="button" class="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">I've read it</button>
                            </div>
                        </div>
                    </div>
                </div>
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
<script>
    import 'flowbite/dist/flowbite.css';
    import '../node_modules/flowbite/dist/flowbite.css';
</script>