<template>
  <main class="vd-l-dashboard">
    <section class="vd-l-dashboard__section">
      <div class="vd-l-container">
        <h2>Latest Projects</h2>
        <VideosGrid
          :videos="getVideos"
        />
      </div>
    </section>
    <section class="vd-l-dashboard__section">
      <div class="vd-l-container">
        <h2>Your Tasks</h2>
        <TasksTable
          :tasks="getTasks"
        />
      </div>
    </section>
  </main>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import VideosGrid from './partials/VideosGrid.vue'
import TasksTable from './partials/TasksTable.vue'

export default {
  name: 'PageDashboard',
  components: {
    TasksTable,
    VideosGrid,
  },
  props: {
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'getVideos',
      'getTasks',
    ]),
  },
  created() {
    this.fetchVideosAndTasks()
  },
  methods: {
    ...mapActions([
      'fetchVideosAndTasks',
    ]),
  },
}
</script>
