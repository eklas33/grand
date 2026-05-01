<template>
  <section class="bg-gray-50 py-16 px-6 md:px-20">
    <div class="grid md:grid-cols-2 gap-10 items-center">
      <!-- LEFT CONTENT -->
      <div>
        <h1 class="text-4xl md:text-5xl font-extrabold text-purple-900 leading-tight">
          EMPOWERING RESEARCH <br />
          THROUGH SHARED <br />
          KNOWLEDGE
        </h1>

        <p class="mt-6 text-gray-600 text-lg">
          A centralized repository for Tigray's academic, institutional,
          and research resources. Connect, attract, collaborate, and contribute
          to the growth of our intellectual community.
        </p>

        <div class="mt-8 flex gap-4 flex-wrap">
          <RouterLink
            to="/search"
            class="bg-purple-700 hover:bg-purple-800 text-white px-6 py-3 rounded-lg font-semibold inline-block"
          >
            Explore Resources
          </RouterLink>

          <RouterLink
            to="/register"
            class="border border-gray-400 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 inline-block"
          >
            Join as Institution
          </RouterLink>

          <RouterLink
            to="/login"
            class="bg-white border border-purple-700 text-purple-700 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 inline-block"
          >
            Login
          </RouterLink>
        </div>
      </div>

      <!-- RIGHT IMAGE -->
      <div class="flex justify-center">
        <img
          src="@/assets/images/tigray-hero.svg"
          alt="Tigray resource illustration"
          class="w-full max-w-md rounded-3xl shadow-xl shadow-purple-100"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
</script>
