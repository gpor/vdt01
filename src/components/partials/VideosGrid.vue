<template>
  <div class="vd-l-grid">
    <article
      v-for="video in videos"
      :key="video.id"
      class="vd-l-grid__cell vd-c-video"
    >
      <div class="vd-c-video__thumb">
        <img
          :src="video.img.src"
        />
        <div class="vd-c-video__thumb--overlay">
          <div>
            <button
              type="button"
              @click="openModal({ componentName: 'VideoPreview', data: { video } })"
            >
              View
            </button>
          </div>
          <aside>
            <div>
              <p>{{ video.videoCount }}</p>
              <p>Videos</p>
            </div>
          </aside>
        </div>
      </div>
      <div class="vd-c-video__meta">
        <h3>{{ video.title }}</h3>
        <table class="vd-c-meta">
          <tr>
            <td>Producer:</td>
            <td>{{ video.producer.name }}</td>
          </tr>
          <tr>
            <td>Date:</td>
            <td>{{ video.date.f }}</td>
          </tr>
        </table>
      </div>
    </article>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'VideosGrid',
  props: {
    videos: {
      type: Array,
      required: true,
    },
  },
  methods: {
    ...mapActions([
      'openModal',
    ]),
  },
}
</script>