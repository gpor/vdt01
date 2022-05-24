<template>
  <div
    class="vd-l-pagemodal"
    @click="closeModal"
  >
    <div
      class="vd-l-pagemodal__window"
      @click.stop
    >
      <component
        :is="isComponent"
        v-bind="data"
        @close="closeModal"
      ></component>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'PageModal',
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapGetters([
      'getPageModalComponentName',
    ]),
    isComponent: function() {
      return () => import(`@/components/modals/${this.getPageModalComponentName}`)
    },
  },
  methods: {
    ...mapActions([
      'closeModal',
    ]),
  },
}
</script>