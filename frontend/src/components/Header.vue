<template>
  <header class="navbar">
    <div class="nav-inner">
      <div class="brand">
        <img src="@/assets/images/tigray-hero.svg" alt="Tigray Flag" />
        <span>ITRC</span>
      </div>

      <nav class="links">
        <RouterLink v-for="item in links" :key="item" :to="getLink(item)" class="link">
          {{ item.toUpperCase() }}
        </RouterLink>
      </nav>

      <RouterLink to="/search" class="search-link">
        <span class="search-text">SEARCH</span>
        <span class="search-icon">🔍</span>
      </RouterLink>
    </div>
  </header>
</template>

<script setup>
const links = ["Home", "About", "Resources", "Projects", "News", "Get Involved"]

const getLink = (item) => {
  const linkMap = {
    Home: "/",
    About: "/about",
    Resources: "/search",
    Projects: "/projects",
    News: "/news",
    "Get Involved": "/get-involved"
  }
  return linkMap[item] || "/"
}
</script>

<style scoped>
.navbar {
  background: #3c1f62;
  color: white;
  padding: 12px 30px;
}
.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  max-width: 1200px;
  margin: 0 auto;
}
.brand {
  display: flex;
  align-items: center;
  gap: 12px;
}
.brand img {
  width: 36px;
  height: 36px;
  object-fit: contain;
}
.brand span {
  font-size: 1.05rem;
  font-weight: 700;
  letter-spacing: 0.08em;
}
.links {
  display: flex;
  align-items: center;
  gap: 22px;
  flex-wrap: wrap;
}
.link {
  color: rgba(255, 255, 255, 0.82);
  text-decoration: none;
  font-size: 0.95rem;
  letter-spacing: 0.1em;
  transition: color 0.2s ease;
}
.link:hover {
  color: #ffffff;
}
.search-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: rgba(255, 255, 255, 0.88);
  text-decoration: none;
  font-size: 0.95rem;
  letter-spacing: 0.12em;
}
.search-icon {
  font-size: 0.95rem;
}
</style>
