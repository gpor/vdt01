<template>
  <p
    class="vd-t-status"
    :class="'vd-t-status__'+slug"
  >
    {{ status.title }}
  </p>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'StatusTag',
  props: {
    slug: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      status: this.getStatus()(this.slug),
    }
  },
  methods: {
    ...mapGetters([
      'getStatus',
    ]),
  },
}
</script>