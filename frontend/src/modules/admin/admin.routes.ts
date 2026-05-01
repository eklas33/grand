export default [
  {
    path: '/admin',
    name: 'admin-dashboard',
    component: () => import('./pages/AdminDashboard.vue'),
    meta: { 
      requiresAuth: true,
      requiresAdmin: true 
    }
  }
]
