<template>
  <header class="navbar">
    <div class="nav-inner">
      <RouterLink to="/" class="brand">
        <img src="@/assets/images/tigray-hero.svg" alt="Tigray Flag" />
        <span>ITRC</span>
      </RouterLink>

      <nav class="links">
        <RouterLink v-for="item in links" :key="item.label" :to="item.to" class="link">
          {{ item.label.toUpperCase() }}
        </RouterLink>
      </nav>

      <RouterLink to="/support-us" class="support-btn">Support Us</RouterLink>
    </div>
  </header>
</template>

<script setup>
const links = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Resources', to: '/search' },
  { label: 'News & Updates', to: '/news' },
  { label: 'Events', to: '/events' },
  { label: 'Get Involved', to: '/get-involved' }
]
</script>

<style scoped>
.navbar {
  background: #3c1f62;
  color: white;
  padding: 10px 18px;
}
.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  max-width: 1280px;
  margin: 0 auto;
  min-height: 52px;
}
.brand {
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 0 0 auto;
  text-decoration: none;
  color: #fff;
}
.brand img {
  width: 32px;
  height: 32px;
  object-fit: contain;
}
.brand span {
  font-size: 0.95rem;
  font-weight: 700;
  letter-spacing: 0.06em;
}
.links {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  flex: 1 1 100%;
  min-width: 0;
}
.link {
  color: rgba(255, 255, 255, 0.82);
  text-decoration: none;
  font-size: 0.78rem;
  letter-spacing: 0.04em;
  white-space: nowrap;
  transition: color 0.2s ease;
}
.link:hover {
  color: #ffffff;
}
.support-btn {
  text-decoration: none;
  color: #fff;
  background: #6e38cf;
  border-radius: 8px;
  padding: 7px 12px;
  font-size: 0.76rem;
  font-weight: 600;
  white-space: nowrap;
}
.support-btn:hover {
  background: #5f2dbd;
}
@media (max-width: 900px) {
  .navbar {
    padding: 9px 12px;
  }

  .nav-inner {
    flex-wrap: wrap;
    row-gap: 10px;
  }

  .links {
    order: 3;
    flex: 1 0 100%;
    justify-content: flex-start;
    gap: 12px;
    overflow-x: auto;
    padding-bottom: 2px;
  }

  .links::-webkit-scrollbar {
    height: 0;
  }

  .link {
    font-size: 0.74rem;
  }

  .support-btn {
    margin-left: auto;
  }
}

@media (max-width: 480px) {
  .brand span {
    font-size: 0.82rem;
  }

  .brand img {
    width: 28px;
    height: 28px;
  }

  .support-btn {
    font-size: 0.7rem;
    padding: 6px 10px;
  }

}
</style>
