// src/services/api.ts
import axios from "axios"
import { registerInterceptors } from "./interceptors"

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '/api',
  timeout: 10000,
  headers: {
    "Content-Type": "application/json"
  }
})

registerInterceptors(api)