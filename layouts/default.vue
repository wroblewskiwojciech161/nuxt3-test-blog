<template>
    <!-- navigation section -->
    <section class="py-3 bg-green-500">
      <div class="container px-4 mx-auto">
        <nav>
          <div class="flex justify-between items-center">
            <a class="text-lg font-medium" href="/">
              <img
                class="h-14"
                src="../assets/icons/logo.svg"
                alt=""
                width="auto"
              />
            </a>
            <div class="hidden lg:block">
              <a
                class="inline-block py-3 px-8 text-sm text-white leading-normal bg-slate-900 hover:bg-gray-400 font-medium rounded transition duration-200"
                href="/"
                >Home</a
              >
            </div>
          </div>
        </nav>
      </div>
      <div
        class="hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50"
      >
        <div class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
        <nav
          class="relative flex flex-col py-6 px-6 w-full h-full bg-white border-r overflow-y-auto"
        >
          <div class="flex items-center mb-8">
            <a class="mr-auto text-2xl font-medium leading-none" href="/">
              <img
                class="h-7"
                src="../assets/icons/logo.svg"
                alt=""
                width="auto"
              />
            </a>
            <button class="navbar-close">
              <svg
                class="h-6 w-6 text-gray-500 cursor-pointer hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewbox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div class="mt-auto">
            <div class="pt-6">
              <a
                class="block py-3 text-sm text-center text-white leading-normal bg-red-400 hover:bg-red-300 font-medium rounded transition duration-200"
                href="/"
                >Home</a
              >
            </div>
            <p class="mt-6 mb-4 text-sm text-center text-gray-500">
              <span>© 2022 All rights reserved.</span>
            </p>
          </div>
        </nav>
      </div>
    </section>

    <!-- page content-->
    <div>
      <slot />
    </div>
  
    <!-- footer -->
    <section class="py-10 lg:py-20">
      <div class="container mx-auto px-4 mb-12 md:mb-20">
        <div class="max-w-2xl mx-auto text-center">
          <a
            class="inline-block mb-8 text-gray-900 text-lg font-semibold"
            href="#"
          >
            <img class="h-7" src="../assets/icons/logo.svg" alt="" width="auto" />
          </a>
          <div class="flex justify-center">
            <a
              class="flex justify-center items-center w-10 h-10 mr-4 bg-gray-50 rounded-full"
              href="#"
            >
              <svg
                class="text-gray-500"
                width="7"
                height="12"
                viewbox="0 0 7 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.0898 11.8182V6.51068H5.90537L6.17776 4.44164H4.0898V3.12086C4.0898 2.52201 4.25864 2.1139 5.13515 2.1139L6.25125 2.11345V0.26283C6.05824 0.238228 5.39569 0.181824 4.62456 0.181824C3.01431 0.181824 1.9119 1.14588 1.9119 2.91594V4.44164H0.0908203V6.51068H1.9119V11.8182H4.0898Z"
                  fill="currentColor"
                ></path>
              </svg>
            </a>
            <a
              class="flex justify-center items-center w-10 h-10 mr-4 bg-gray-50 rounded-full"
              href="#"
            >
              <svg
                class="text-gray-500"
                width="13"
                height="11"
                viewbox="0 0 13 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.5455 2.09728C12.0904 2.29892 11.6022 2.43566 11.0892 2.49671C11.613 2.18304 12.014 1.6855 12.204 1.09447C11.7127 1.38496 11.1703 1.59589 10.5924 1.71023C10.1296 1.21655 9.47138 0.909058 8.74128 0.909058C7.34059 0.909058 6.20489 2.04475 6.20489 3.44467C6.20489 3.64322 6.2273 3.83714 6.27057 4.02257C4.16298 3.91671 2.29411 2.90696 1.0433 1.37259C0.824652 1.74653 0.700269 2.18225 0.700269 2.64736C0.700269 3.52734 1.14837 4.30379 1.82825 4.75805C1.41259 4.74415 1.02166 4.62981 0.67942 4.43975V4.47142C0.67942 5.69983 1.55399 6.72504 2.71362 6.95837C2.50116 7.01554 2.27712 7.04722 2.04534 7.04722C1.88156 7.04722 1.72318 7.031 1.56788 7.00009C1.89081 8.00831 2.8272 8.74148 3.93663 8.76158C3.06902 9.44146 1.97504 9.84552 0.786814 9.84552C0.582087 9.84552 0.38043 9.83316 0.181885 9.81076C1.30445 10.5316 2.63716 10.9519 4.06952 10.9519C8.73514 10.9519 11.2854 7.0874 11.2854 3.73595L11.2769 3.4076C11.7752 3.05219 12.2063 2.60564 12.5455 2.09728Z"
                  fill="currentColor"
                ></path>
              </svg>
            </a>
            <a
              class="flex justify-center items-center w-10 h-10 mr-4 bg-gray-50 rounded-full"
              href="#"
            >
              <svg
                class="text-gray-500"
                width="14"
                height="14"
                viewbox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.06713 0.454529H9.9328C11.9249 0.454529 13.5456 2.07519 13.5455 4.06715V9.93282C13.5455 11.9248 11.9249 13.5454 9.9328 13.5454H4.06713C2.07518 13.5454 0.45459 11.9249 0.45459 9.93282V4.06715C0.45459 2.07519 2.07518 0.454529 4.06713 0.454529ZM9.9329 12.3839C11.2845 12.3839 12.3841 11.2844 12.3841 9.93282H12.384V4.06714C12.384 2.71563 11.2844 1.61601 9.93282 1.61601H4.06715C2.71564 1.61601 1.61609 2.71563 1.61609 4.06714V9.93282C1.61609 11.2844 2.71564 12.384 4.06715 12.3839H9.9329ZM3.57148 7.00005C3.57148 5.10947 5.10951 3.5714 7.00005 3.5714C8.8906 3.5714 10.4286 5.10947 10.4286 7.00005C10.4286 8.89056 8.8906 10.4285 7.00005 10.4285C5.10951 10.4285 3.57148 8.89056 3.57148 7.00005ZM4.75203 6.99998C4.75203 8.23951 5.76054 9.24788 7.00004 9.24788C8.23955 9.24788 9.24806 8.23951 9.24806 6.99998C9.24806 5.76036 8.23963 4.75191 7.00004 4.75191C5.76046 4.75191 4.75203 5.76036 4.75203 6.99998Z"
                  fill="currentColor"
                ></path>
              </svg>
            </a>
            <a
              class="flex justify-center items-center w-10 h-10 bg-gray-50 rounded-full"
              href="#"
            >
              <svg
                class="text-gray-500"
                width="12"
                height="12"
                viewbox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.8 0H1.2C0.54 0 0 0.54 0 1.2V10.8C0 11.46 0.54 12 1.2 12H10.8C11.46 12 12 11.46 12 10.8V1.2C12 0.54 11.46 0 10.8 0ZM3.6 10.2H1.8V4.8H3.6V10.2ZM2.7 3.78C2.1 3.78 1.62 3.3 1.62 2.7C1.62 2.1 2.1 1.62 2.7 1.62C3.3 1.62 3.78 2.1 3.78 2.7C3.78 3.3 3.3 3.78 2.7 3.78ZM10.2 10.2H8.4V7.02C8.4 6.54002 7.98 6.12 7.5 6.12C7.02 6.12 6.6 6.54002 6.6 7.02V10.2H4.8V4.8H6.6V5.52C6.9 5.04 7.56 4.68 8.1 4.68C9.24 4.68 10.2 5.64 10.2 6.78V10.2Z"
                  fill="currentColor"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <p class="text-center text-sm text-gray-500 pt-8 px-4 border-t">
        All rights reserved ©Kodefix 2022
      </p>
    </section>
  </template>
  