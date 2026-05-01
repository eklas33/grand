<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#6C2BD9] via-[#7a46f9] to-[#3e1bb4] px-4 py-10 text-white">
    <div class="w-full max-w-2xl rounded-[2rem] border border-white/10 bg-white/10 p-10 shadow-2xl backdrop-blur-xl">
      <div class="space-y-6 text-center">
        <div class="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white/15 text-3xl text-white shadow-lg shadow-black/20">
          ✓
        </div>
        <h1 class="text-4xl font-bold tracking-tight">Registration complete!</h1>
        <p class="mx-auto max-w-xl text-base text-white/80">
          Your account has been created successfully. You can now continue to your dashboard to explore resources, upload content, and manage your profile.
        </p>
        <div class="grid gap-4 sm:grid-cols-2">
          <RouterLink
            to="/dashboard"
            class="inline-flex items-center justify-center rounded-full bg-white px-6 py-4 text-sm font-semibold text-[#4b00d9] shadow-lg shadow-white/20 transition hover:bg-white/90"
          >
            Go to Dashboard
          </RouterLink>
          <RouterLink
            to="/support"
            class="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Contact Support
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
