import axios from 'axios'

const state = {
  videos: [],
  tasks: [],
  statuses: [],
}

const getters = {
  getVideos: state => state.videos,
  getTasks: state => state.tasks,
  getStatuses: state => state.statuses,
  getStatus: state => slug => state.statuses.find(s => s.slug === slug),
}

const actions = {
  fetchVideosAndTasks({ commit }) {
    const requests = [
      {
        promise: axios('http://localhost:3000/videos'),
        mutator: 'setVideos',
      },
      {
        promise: axios('http://localhost:3000/tasks'),
        mutator: 'setTasks',
      },
      {
        promise: axios('http://localhost:3000/statuses'),
        mutator: 'setStatuses',
      },
    ]
    Promise.all(requests.map(r => r.promise)).then(res => {
      requests.forEach((req, i) => {
        commit(req.mutator, res[i].data)
      })
    })
  },
  setTaskApproved({ commit }, { task, approved }) {
    axios.patch('http://localhost:3000/tasks/'+task.id, { approved })
      .then(res => {
        task.approved = approved;
      })
  },
}

const mutations = {
  setVideos: (state, videos) => {
    state.videos = videos
  },
  setTasks: (state, tasks) => {
    state.tasks = tasks
  },
  setStatuses: (state, statuses) => {
    state.statuses = statuses
  },
}


export default {
  state,
  getters,
  actions,
  mutations,
}
