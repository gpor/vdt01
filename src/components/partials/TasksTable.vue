<template>
  <table class="vd-l-table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Created</th>
        <th>Due date</th>
        <th>Status</th>
        <th>&nbsp;</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="task in tasks"
        :key="task.id"
      >
        <td>{{ task.name }}</td>
        <td>{{ task.created }}</td>
        <td>{{ task.dueDate }}</td>
        <td>
          <StatusTag :slug="task.status" />
        </td>
        <td>
          <button
            type="button"
            @click="setTaskApproved({ task, approved: ! task.approved })"
          >
            {{ task.approved ? 'Un-approve' : 'Approve' }}
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import StatusTag from './StatusTag.vue'
import { mapActions } from 'vuex'

export default {
  name: 'TasksTable',
  components: {
    StatusTag,
  },
  props: {
    tasks: {
      type: Array,
      required: true,
    },
  },
  methods: {
    ...mapActions([
      'setTaskApproved',
    ]),
  },
}
</script>