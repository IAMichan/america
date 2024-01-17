<template>
    <header class="w-full">
        <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
            <div class="flex flex-wrap justify-between items-center mx-auto">
                <a href="" class="flex items-center">
                    <img src="../assets//img/state-of-liberty.webp" class="mr-3 h-6 sm:h-9" alt="State of Liberty" />
                    <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">The American Dream</span>
                </a>
                <div class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                    <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                        <li>
                            <a class="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white" aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="#city's" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-400 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Popular City's</a>
                        </li>
                        <li>
                            <a href="#parks" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-400 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Popular National Parks</a>
                        </li>
                        <li>
                            <a href="#history" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-400 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">History</a>
                        </li>
                        <li>
                            <routerLink to="/me" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-400 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">About me</routerLink>
                        </li>
                    </ul>
                </div>
                <button id="mega-menu-dropdown-button" data-dropdown-toggle="mega-menu-dropdown" class="flex lg:hidden items-center justify-between w-full py-2 px-3 font-medium text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-orange-600 md:p-0 dark:text-white md:dark:hover:text-orange-500 dark:hover:bg-gray-700 dark:hover:text-orange-500 md:dark:hover:bg-transparent dark:border-gray-700">
                    Menu <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                            </svg>
                </button>
                <div id="mega-menu-dropdown" class="absolute z-10 hidden grid-cols-2 text-sm w-52 bg-white border border-gray-100 rounded-lg shadow-md dark:border-gray-700 md:grid-cols-3 dark:bg-gray-700">
                    <div class="p-4 pb-0 text-gray-900 md:pb-4 dark:text-white">
                        <ul class="space-y-4" aria-labelledby="mega-menu-dropdown-button">
                            <li>
                                <a href="#city's" class="text-gray-500 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-500">
                                    Popular City's
                                </a>
                            </li>
                            <li>
                                <a href="#parks" class="text-gray-500 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-500">
                                    Popular National Parks
                                </a>
                            </li>
                            <li>
                                <a href="#history" class="text-gray-500 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-500">
                                    History
                                </a>
                            </li>
                            <li>
                                <router-link to="/me" class="text-gray-500 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-500">
                                    About me
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </header>
    <div class="lg:grid grid-cols-2 h-full ">
        <div class="grid justify-center m-5 items-center">
            <div class="mt-24 mx-16">
                <h1 class="text-7xl font-bold mb-5">Let's discover America</h1>
                <h5 class="text-md mb-5">The land of much. City's, Landscapes, Culture</h5>
                <a href="#city's">
                <button class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mt-5">
                    Discover America 
                </button>
                </a>
            </div>
            <a href="#city's">
                <div class="hidden md:flex w-full justify-center">
                    <div class="flex items-center justify-center rounded-full h-12 w-12 bg-orange-200 hover:bg-orange-300 animate-bounce">
                        <svg class="h-10 w-10 text-black"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
                        </svg>
                    </div>
                </div>
            </a>
        </div>
        <div class="hidden lg:block">
            <img class="rounded-bl-xl" alt="" src="../assets/img/antelope1.jpg" />
        </div>
    </div>
    <div id="city's" class="bg-orange-100 mx-12 rounded-3xl">
        <h1 class="flex text-4xl font-bold mt-20 w-full justify-center pt-4">Popular&nbsp;<a class="underline">City's</a></h1>
        <div class="grid grid-cols-1 lg:grid-cols-3 mt-10 justify-content-center w-full mb-10 pb-6">
            <div class="grid justify-center m-5">
                <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a>
                        <img class="rounded-t-lg" src="../assets/img/las-vegas.jpg" alt="" />
                    </a>
                    <div class="p-5">
                        <a>
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Las Vegas</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Las Vegas is a city in the Mojave Desert in the US state of Nevada. Las Vegas was founded in 1905 and officially became a city in 1911. Las Vegas is best known for its extravagant hotels and casinos.</p>
                    </div>
                </div>
            </div>
            <div class="grid justify-center m-5">
                <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a>
                        <img class="rounded-t-lg" src="../assets/img/san-francisco.jpg" alt="" />
                    </a>
                    <div class="p-5">
                        <a>
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">San Fransisco</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">San Francisco is a city in the American state of California and the heart of the San Francisco Bay Area. San Francisco is the fourth largest city in California, after Los Angeles, San Diego and San Jose. It is also the only city in California that coincides with a county: officially it is called the City and County of San Francisco</p>
                    </div>
                </div>
            </div>
            <div class="grid justify-center m-5">
                <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a>
                        <img class="rounded-t-lg" src="../assets/img/los-angeles.jpg" alt="" />
                    </a>
                    <div class="p-5">
                        <a>
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Los Angeles</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Los Angeles, officially the City of Los Angeles and often abbreviated to L.A., is a large and expansive city on the west coast of the United States. It is the largest city in the state of California and the second largest in the United States.</p>
                    </div>
                </div>
            </div>
        </div>
        <div id="more1" class="hidden">
            <div class="grid grid-cols-1 lg:grid-cols-3 mt-10 justify-content-center w-full mb-10 pb-6">
                <div class="grid justify-center m-5">
                    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a>
                            <img class="rounded-t-lg" src="../assets/img/new-york.jpg" alt="" />
                        </a>
                        <div class="p-5">
                            <a>
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">New York</h5>
                            </a>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">New York is the largest city in the United States of America. Thanks to its leading and influential role in trade, finance, media, public relations, art, fashion and education, it is considered one of the most important world cities.</p>
                        </div>
                    </div>
                </div>
                <div class="grid justify-center m-5">
                    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a>
                            <img class="rounded-t-lg" src="../assets/img/phoenix.jpeg" alt="" />
                        </a>
                        <div class="p-5">
                            <a>
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Phoenix</h5>
                            </a>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Phoenix is ​​the capital of the state of Arizona in the southwestern United States of America. The city, with a population of 1,615,017, is the largest in the state and the fifth largest in the country. Phoenix is ​​the only capital of an American state with more than a million inhabitants.</p>
                        </div>
                    </div>
                </div>
                <div class="grid justify-center m-5">
                    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a>
                            <img class="rounded-t-lg" src="../assets/img/miami.jpg" alt="" />
                        </a>
                        <div class="p-5">
                            <a>
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Miami</h5>
                            </a>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Miami is a vibrant and culturally diverse city located in the southeastern part of the United States, in the state of Florida. Known for its stunning beaches, lively nightlife, and rich cultural scene, Miami is a major hub for tourism, commerce, and international trade.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <button id="more" ref="more" @click="showMore" class="flex w-full justify-center bg-orange-200 hover:bg-orange-300 text-black font-bold py-2 px-4 rounded-b-md mb-10">
            Discover more city's
        </button>
    </div>
    <div id="parks" class="bg-white mx-12 ">
        <h1 class="flex text-4xl font-bold mt-20 w-full justify-center">Popular&nbsp;<a class="underline">National Parks</a></h1>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-10 justify-content-center w-full mb-12">
            <div class="grid justify-center m-5">
                <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md shadow-orange-100 dark:bg-gray-800 dark:border-gray-700">
                <a>
                    <img class="rounded-t-lg" src="../assets/img/zion.jpg" alt="" />
                </a>
                <div class="p-5">
                    <a>
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Zion</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Zion National Park is a nature reserve in the United States. It became a National Monument in 1909, and a National Park in 1919, in 1937 the park was expanded to include Kolob. This park was named "Zion" by Mormon pioneers in 1860.</p>
                </div>
                </div>
            </div>
            <div class="grid justify-center m-5">
                <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md shadow-orange-100 dark:bg-gray-800 dark:border-gray-700">
                <a>
                    <img class="rounded-t-lg" src="../assets/img/joshua.jpg" alt="" />
                </a>
                <div class="p-5">
                    <a>
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Josua Tree</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Joshua Tree National Park is a national park in southern California, United States, east of the area between Los Angeles and San Diego. Its dimensions are approximately 100 km from east to west, and 50 km from north to south.</p>
                </div>
                </div>
            </div>
            <div class="grid justify-center m-5">
                <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md shadow-orange-100 dark:bg-gray-800 dark:border-gray-700">
                <a>
                    <img class="rounded-t-lg" src="../assets/img/grand.jpg" alt="" />
                </a>
                <div class="p-5">
                    <a>
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Grand Canyon</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">The Grand Canyon National Park or Grand Canyon National Park, located in the state of Arizona, is one of the oldest national parks in the United States. The park includes the Grand Canyon, a deep and steep gorge carved by water erosion from the Colorado River and its tributaries</p>
                </div>
                </div>
            </div>
        </div>
        <div id="more2" class="hidden">
            <div class="grid grid-cols-1 lg:grid-cols-3 mt-10 justify-content-center w-full mb-10 pb-6">
                <div class="grid justify-center m-5">
                    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md shadow-orange-100 dark:bg-gray-800 dark:border-gray-700">
                        <a>
                            <img class="rounded-t-lg" src="../assets/img/bryce.jpg" alt="" />
                        </a>
                        <div class="p-5">
                            <a>
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Bryce Canyon</h5>
                            </a>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Bryce Canyon is a natural wonder located in southwestern Utah, USA. Unlike traditional canyons formed by a river cutting through rock, Bryce Canyon is famous for its unique geological structures known as hoodoos.</p>
                        </div>
                    </div>
                </div>
                <div class="grid justify-center m-5">
                    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md shadow-orange-100 dark:bg-gray-800 dark:border-gray-700">
                        <a>
                            <img class="rounded-t-lg" src="../assets/img/yosemite.jpg" alt="" />
                        </a>
                        <div class="p-5">
                            <a>
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Yosemite</h5>
                            </a>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Yosemite National Park, located in the Sierra Nevada mountain range in California, is a pristine and iconic destination known for its breathtaking natural beauty. Designated as a UNESCO World Heritage Site, Yosemite is renowned for its granite cliffs, towering waterfalls, diverse ecosystems, and rich biological diversity.</p>
                        </div>
                    </div>
                </div>
                <div class="grid justify-center m-5">
                    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md shadow-orange-100 dark:bg-gray-800 dark:border-gray-700">
                        <a>
                            <img class="rounded-t-lg" src="../assets/img/sequoia.webp" alt="" />
                        </a>
                        <div class="p-5">
                            <a>
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Sequoia</h5>
                            </a>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Sequoia National Park, situated in the southern Sierra Nevada mountain range in California, is a spectacular natural haven renowned for its towering sequoia trees, rugged mountain landscapes, and diverse ecosystems. Here's a glimpse into the wonders of Sequoia National Park</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex w-full justify-center">
            <button id="more2" ref="more2" @click="showMore2"  class="flex justify-center bg-orange-200 hover:bg-orange-300 text-black font-bold py-2 px-4 rounded mb-10">
                Discover more parks
            </button>
        </div>
    </div>
    <div id="history" class="bg-no-repeat bg-cover bg-orange-100 mx-12 rounded-3xl mb-12">
        <h1 class="flex text-5xl text-black font-bold mt-20 w-full justify-center py-12">History of America</h1>
        `<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center px-12">
            <div>
                <img class="max-w-full rounded-t-lg" src="../assets/img/history-1.jpg" alt="">
                <h5 class="bg-black text-white p-2 rounded-b-lg text-lg mb-4">1. Colonial Settlement, 1600s - 1763</h5>
            </div>
            <div>
                <img class="max-w-full rounded-t-lg" src="../assets/img/history-2.jpg" alt="">
                <h5 class="bg-black text-white p-2 rounded-b-lg text-lg lg:mb-10">2. The American Revolution, 1763 - 1783</h5>
            </div>
            <div>
                <img class="max-w-full rounded-t-lg" src="../assets/img/history-3.jpg" alt="">
                <h5 class="bg-black text-white p-2 rounded-b-lg text-lg mb-4">3. The New Nation, 1783 - 1815</h5>
            </div>
            <div>
                <img class=" max-w-full rounded-t-lg" src="../assets/img/history-4.jpg" alt="">
                <h5 class="bg-black text-white p-2 rounded-b-lg text-lg mb-4">4. National Expansion and Reform, 1815 - 1880</h5>
            </div>
            <div>
                <img class="lg:-mt-12 max-w-full rounded-t-lg" src="../assets/img/history-5.jpg" alt="">
                <h5 class="bg-black text-white p-2 rounded-b-lg text-lg mb-4">5. Civil War and Reconstruction, 1861-1877</h5>
            </div>
            <div>
                <img class="lg:-mt-14 max-w-full rounded-t-lg" src="../assets/img/history-6.jpg" alt="">
                <h5 class="bg-black text-white p-2 rounded-b-lg text-lg mb-4">6. Rise of Industrial America, 1876-1900</h5>
            </div>
            <div>
                <img class="max-w-full rounded-t-lg" src="../assets/img/history-7.jpg" alt="">
                <h5 class="bg-black text-white p-2 rounded-b-lg text-lg mb-4">7. Progressive Era to New Era, 1900-1929</h5>
            </div>
            <div>
                <img class="lg:-mt-20 max-w-full rounded-t-lg" src="../assets/img/history-8.jpg" alt="">
                <h5 class="bg-black text-white p-2 rounded-b-lg text-lg mb-4">8. Great Depression and World War II, 1929-1945</h5>
            </div>
            <div>
                <img class=" lg:-mt-24 max-w-full rounded-t-lg" src="../assets/img/history-9.jpg" alt="">
                <h5 class="bg-black text-white p-2 rounded-b-lg text-lg mb-4">9.The Post War United States, 1945-1968</h5>
            </div>
        </div>`
    </div>
</template>

<script>
    export default {
        name: 'Home',
        data() {
            return {
                isMoreVisible: false,
                isMoreVisible2: false,
            };
        },
        methods: {
            showMore() {
                this.isMoreVisible = !this.isMoreVisible;
                if (this.isMoreVisible) {
                this.$refs.more.innerText = 'Show less';
                document.getElementById('more1').classList.remove('hidden');
                } else {
                this.$refs.more.innerText = 'Discover more city\'s';
                document.getElementById('more1').classList.add('hidden');
                }
            },
            showMore2() {
                this.isMoreVisible2 = !this.isMoreVisible2;
                if (this.isMoreVisible2) {
                this.$refs.more2.innerText = 'Show less';
                document.getElementById('more2').classList.remove('hidden');
                } else {
                this.$refs.more2.innerText = 'Discover more parks';
                document.getElementById('more2').classList.add('hidden');
                }
            }
        }
    }
import { initFlowbite } from 'flowbite';
</script>