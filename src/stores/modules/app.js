import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppStore = defineStore('app', () => {
  const token = ref(null) // 用户token
  const system = ref(null) // 系统细心
  const capsule = ref(null) // 胶囊信息
  return { token, system, capsule }
}, {
  unistorage: true
})
