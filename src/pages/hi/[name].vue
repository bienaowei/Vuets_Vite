<script setup lang="ts">
const props = defineProps<{ name: string }>()
const router = useRouter()
const user = useUserStore()

watchEffect(() => {
  user.setNewName(props.name)
})
</script>

<template>
  <div text-center>
    <div text-4xl >
      <div i-carbon-pedestrian inline-block />
    </div>
    <p >
      {{props.name}}
    </p>

    
    <div>
      <button
        m="3 t6" text-sm btn
        @click="router.back()"
      >
        返回
      </button>
    </div>
  </div>
</template>
