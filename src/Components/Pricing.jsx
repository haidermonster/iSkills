import React from 'react'

function Pricing() {
  return (
    <>

      <section class="bg-black py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12">
            <h2 class="text-4xl font-extrabold text-white sm:text-5xl">
              Pricing Plans
            </h2>
            <p class="mt-4 text-xl text-gray-400">
              Simple, transparent pricing for your business needs.
            </p>
          </div>

          <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* <!-- Free Plan --> */}
            <div class="bg-gray-800 rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
              <div class="mb-8">
                <h3 class="text-2xl font-semibold text-white">Free</h3>
                <p class="mt-4 text-gray-400">Get started with our basic features.</p>
              </div>
              <div class="mb-8">
                <span class="text-5xl font-extrabold text-white">$0</span>
                <span class="text-xl font-medium text-gray-400">/mo</span>
              </div>
              <ul class="mb-16 space-y-4 text-gray-400">
                <li class="flex items-center">
                  <svg class="h-6 w-6 text-red-600 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>1 user account</span>
                </li>
                <li class="flex items-center">
                  <svg class="h-6 w-6 text-red-600 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>10 transactions per month</span>
                </li>
                <li class="flex items-center">
                  <svg class="h-6 w-6 text-red-600 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Basic support</span>
                </li>
              </ul>
              <a href="#" class="block w-full py-3 px-6 text-center rounded-md text-white font-medium bg-gradient-to-r from-rose-500 to-red-600 hover:from-rose-600 hover:to-red-600">
                Sign Up
              </a>
            </div>

            {/* <!-- Starter Plan --> */}
            <div class="bg-gray-800 rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
              <div class="mb-8">
                <h3 class="text-2xl font-semibold text-white">Starter</h3>
                <p class="mt-4 text-gray-400">Perfect for small businesses and startups.</p>
              </div>
              <div class="mb-8">
                <span class="text-5xl font-extrabold text-white">$49</span>
                <span class="text-xl font-medium text-gray-400">/mo</span>
              </div>
              <ul class="mb-16 space-y-4 text-gray-400">
                <li class="flex items-center">
                  <svg class="h-6 w-6 text-red-600 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>5 user accounts</span>
                </li>
                <li class="flex items-center">
                  <svg class="h-6 w-6 text-red-600 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>100 transactions per month</span>
                </li>
                <li class="flex items-center">
                  <svg class="h-6 w-6 text-red-600 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Standard support</span>
                </li>
              </ul>
              <a href="#" class="block w-full py-3 px-6 text-center rounded-md text-white font-medium bg-gradient-to-r from-rose-500 to-red-600 hover:from-rose-600 hover:to-red-600">
                Get Started
              </a>
            </div>

            {/* <!-- Pro Plan --> */}
            <div class="bg-gray-800 rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
              <div class="mb-8">
                <h3 class="text-2xl font-semibold text-white">Pro</h3>
                <p class="mt-4 text-gray-400">Ideal for growing businesses and enterprises.</p>
              </div>
              <div class="mb-8">
                <span class="text-5xl font-extrabold text-white">$99</span>
                <span class="text-xl font-medium text-gray-400">/mo</span>
              </div>
              <ul class="mb-14 space-y-4 text-gray-400">
                <li class="flex items-center">
                  <svg class="h-6 w-6 text-red-600 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Unlimited user accounts</span>
                </li>
                <li class="flex items-center">
                  <svg class="h-6 w-6 text-red-600 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Unlimited transactions</span>
                </li>
                <li class="flex items-center">
                  <svg class="h-6 w-6 text-red-600 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Priority support</span>
                </li>
                <li class="flex items-center">
                  <svg class="h-6 w-6 text-red-600 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Advanced analytics</span>
                </li>
              </ul>
              <a href="#" class="block w-full py-3 px-6 text-center rounded-md text-white font-medium bg-gradient-to-r from-rose-500 to-red-600 hover:from-rose-600 hover:to-red-600">
                Get Started
              </a>
            </div>

            <div class="bg-gray-800 rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
              <div class="mb-8">
                <h3 class="text-2xl font-semibold text-white">Enterprise</h3>
                <p class="mt-4 text-gray-400">Tailored for large-scale deployments and custom needs.</p>
              </div>
              <div class="mb-8">
                <span class="text-5xl font-extrabold text-white">Custom</span>
              </div>
              <ul class="mb-8 space-y-4 text-gray-400">
                <li class="flex items-center">
                  <svg class="h-6 w-6 text-red-600 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Dedicated infrastructure</span>
                </li>
                <li class="flex items-center">
                  <svg class="h-6 w-6 text-red-600 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Custom integrations</span>
                </li>
                <li class="flex items-center">
                  <svg class="h-6 w-6 text-red-600 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Dedicated support team</span>
                </li>
                <li class="flex items-center">
                  <svg class="h-6 w-6 text-red-600 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Premium SLAs</span>
                </li>
              </ul>
              <a href="#" class="block w-full py-3 px-6 text-center rounded-md text-white font-medium bg-gradient-to-r from-rose-500 to-red-600 hover:from-rose-600 hover:to-red-600">
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </section>


    </>
  )
}

export default Pricing