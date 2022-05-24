<template>
  <div class="vd-c-videopreview">
    <h2>{{ video.title }}</h2>
    <button
      type="button"
      @click="$emit('close')"
    >
      Done
    </button>
  </div>
</template>

<script>

export default {
  name: 'VideoPreview',
  props: {
    video: {
      type: Object,
      required: true,
    },
  },
}
</script>