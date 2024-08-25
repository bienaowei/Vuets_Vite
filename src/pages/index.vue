<template>
    <div f-c-c my-3>
      <img src="../../public/vite.svg" alt="">
    </div>
    <TheInput
      v-model="name"
      placeholder="whats-your-name"
      autocomplete="false"
      @keydown.enter="go"
    />
    <label class="hidden" for="input">whats-your-name</label>

    <div>
      <button m-3 text-sm btn :disabled="!name" @click="go">
        点击
      </button>
    </div>
</template>
<script lang="ts" setup>
defineOptions({
  name: 'IndexPage',
});
const user = useUserStore();
const name = ref(user.savedName);

const router = useRouter();
function go() {
  if (name.value) router.push(`/hi/${encodeURIComponent(name.value)}`);
}
</script>
<route lang="yaml">
    meta:
      layout: home
</route>