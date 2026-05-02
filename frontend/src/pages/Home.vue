<template>
  <section class="hero-image-only">
    <div class="hero-wrap">
      <img
        src="@/assets/images/hero-reference.png"
        alt="Tigray Resource Center hero section"
        class="hero-image"
      />

      <nav class="hero-hotspots" aria-label="Main navigation">
        <RouterLink to="/" class="replace-about-visible">Home</RouterLink>
        <RouterLink to="/" class="spot spot-home"><span class="sr-only">Home</span></RouterLink>
        <RouterLink to="/search" class="spot spot-resources"><span class="sr-only">Resources</span></RouterLink>
        <RouterLink to="/news" class="spot spot-news"><span class="sr-only">News &amp; Updates</span></RouterLink>
        <RouterLink to="/events" class="spot spot-events"><span class="sr-only">Events</span></RouterLink>
        <RouterLink to="/login" class="spot spot-involved"><span class="sr-only">Get Involved</span></RouterLink>
        <RouterLink to="/support-us" class="spot spot-support"><span class="sr-only">Support Us</span></RouterLink>
      </nav>
    </div>

  </section>
</template>

<script setup>
</script>

<style scoped>
.hero-image-only {
  width: 100vw;
  max-width: 100vw;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
  background: transparent;
  display: block;
  overflow-x: clip;
}

.hero-wrap {
  position: relative;
  width: 100vw;
  max-width: none;
}

.hero-image {
  display: block;
  width: 100vw;
  height: auto;
  max-width: none;
  filter: none;
  image-rendering: -webkit-optimize-contrast;
}

.hero-hotspots {
  position: absolute;
  inset: 0;
}

.replace-about-visible {
  position: absolute;
  top: 2.35%;
  left: 27.7%;
  width: 8.8%;
  height: 4.8%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-weight: 600;
  font-size: clamp(0.5rem, 0.73vw, 0.8rem);
  color: #0d1138;
  background: #f3eef9;
  border-radius: 0;
  z-index: 2;
}

.spot {
  position: absolute;
  display: block;
  border-radius: 6px;
}

.spot:focus-visible {
  outline: 2px solid rgba(124, 74, 224, 0.95);
  outline-offset: 1px;
  background: rgba(255, 255, 255, 0.2);
}

.spot-home { top: 2.3%; left: 27.7%; width: 7.8%; height: 4.8%; }
.spot-resources { top: 2.3%; left: 36.5%; width: 8.9%; height: 4.8%; }
.spot-news { top: 2.3%; left: 46.7%; width: 12.7%; height: 4.8%; }
.spot-events { top: 2.3%; left: 60.9%; width: 6.1%; height: 4.8%; }
.spot-involved { top: 2.3%; left: 67.8%; width: 10.4%; height: 4.8%; }
.spot-support { top: 1.6%; left: 88.2%; width: 9.3%; height: 6.7%; }


.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}

@media (max-width: 768px) {
  .hero-image-only {
    overflow-x: hidden;
  }

  .replace-about-visible {
    top: 1.95%;
    left: 27.2%;
    width: 9.8%;
    height: 5.1%;
    font-size: clamp(0.45rem, 1.2vw, 0.64rem);
  }

  .spot-home { top: 2%; left: 27.2%; width: 8.5%; height: 5.1%; }
  .spot-resources { top: 2%; left: 36.6%; width: 9.2%; height: 5.1%; }
  .spot-news { top: 2%; left: 47%; width: 12.9%; height: 5.1%; }
  .spot-events { top: 2%; left: 61%; width: 6.2%; height: 5.1%; }
  .spot-involved { top: 2%; left: 68%; width: 10.8%; height: 5.1%; }
  .spot-support { top: 1.4%; left: 88%; width: 9.8%; height: 7.1%; }

}

@media (max-width: 640px) {
  .hero-image-only {
    width: 100%;
  }

  .hero-wrap {
    width: 100%;
  }

  .replace-about-visible {
    display: none;
  }

  .hero-hotspots {
    display: none;
  }

}
</style>
