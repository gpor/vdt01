<template>
  <div id="app">
    <PageHeader />
    <router-view />
    <transition name="fade">
      <PageModal
        v-if="getPageModalComponentName"
        :data="getPageModalData"
      />
    </transition>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import PageHeader from './components/partials/PageHeader'
import PageModal from './components/partials/PageModal'

export default {
  name: 'App',
  components: {
    PageHeader,
    PageModal,
  },
  computed: {
    ...mapGetters([
      'getPageModalComponentName',
      'getPageModalData',
    ]),
  },
}
</script>

