<template>
  <div class="min-h-screen bg-gray-50 py-12">
    <div class="mx-auto max-w-3xl rounded-3xl border border-gray-200 bg-white p-10 shadow-xl">
      <div class="mb-8 space-y-3 text-center">
        <p class="text-sm font-semibold uppercase tracking-[0.24em] text-trc">Contact Support</p>
        <h1 class="text-4xl font-bold text-gray-900">Need help?</h1>
        <p class="mx-auto max-w-2xl text-base leading-7 text-gray-600">
          If you have trouble registering, logging in, or using the dashboard, our support team is ready to assist you.
        </p>
      </div>

      <div class="grid gap-6 md:grid-cols-2">
        <div class="rounded-3xl border border-gray-100 bg-gray-50 p-6">
          <h2 class="mb-3 text-lg font-semibold text-gray-900">Support channels</h2>
          <p class="text-sm text-gray-600">Reach us through any of the following options:</p>
          <ul class="mt-6 space-y-4 text-sm text-gray-700">
            <li>
              <span class="font-semibold text-gray-900">Email:</span>
              <a href="mailto:support@trcplatform.org" class="text-trc hover:underline">support@trcplatform.org</a>
            </li>
            <li>
              <span class="font-semibold text-gray-900">Phone:</span>
              <a href="tel:+251912345678" class="text-trc hover:underline">+251 912 345 678</a>
            </li>
            <li>
              <span class="font-semibold text-gray-900">Office hours:</span>
              Mon–Fri, 9:00 AM – 6:00 PM EAT
            </li>
          </ul>
        </div>

        <div class="rounded-3xl border border-gray-100 p-6">
          <h2 class="mb-3 text-lg font-semibold text-gray-900">Quick assistance</h2>
          <p class="text-sm text-gray-600">If your registration failed, please verify your form details and ensure the backend server is running.</p>
          <div class="mt-6 space-y-4 text-sm text-gray-700">
            <p><span class="font-semibold">Example fixes:</span></p>
            <ul class="list-inside list-disc space-y-2">
              <li>Check your email and password fields.</li>
              <li>Confirm the backend server is available at <span class="font-medium">http://localhost:3000</span>.</li>
              <li>Clear browser cache and retry registration.</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <RouterLink to="/login" class="inline-flex items-center justify-center rounded-full border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50">
          Back to Login
        </RouterLink>
        <RouterLink to="/register" class="inline-flex items-center justify-center rounded-full bg-trc px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#4d20d9]">
          Retry Registration
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
