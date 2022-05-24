<template>
  <header
    class="vd-c-pageheader"
  >
    <div class="vd-l-container">
      <nav>
        <router-link
          v-slot="{ href, route, navigate, isExactActive }"
          to="/"
          custom
        >
          <a
            v-bind="$attrs"
            :href="href"
            :data-fullpath="route.fullPath"
            :class="{'-current': isExactActive}"
            @click="navigate"
          >
            {{ route.meta.title }}
          </a>
        </router-link>
      </nav>
      <button
        type="button"
        @click="toggleDarkTheme"
      >
        {{ darkThemeOn ? 'Light theme' : 'Dark theme' }}
      </button>
    </div>
  </header>
</template>

<script>

export default {
  name: 'PageHeader',
  data() {
    return {
      darkThemeOn: false,
    }
  },
  methods: {
    toggleDarkTheme() {
      this.darkThemeOn = ! this.darkThemeOn
      if (this.darkThemeOn) {
        document.body.classList.add('dark-theme')
      } else {
        document.body.classList.remove('dark-theme')
      }
    },
  },
}
</script>