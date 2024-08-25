<template>
  <div>
    <div
      class="bg-[length:5px_5px] backdrop-saturate-50  backdrop-blur-[8px] bg-white/80 dark:bg-gray-900/75 dark:border-gray-800"
      w-full h-80px px-20px border-b-1.5px border-solid f-c-c justify-between fixed bg-auto z-20 px-38px>

      <div hover:drop-shadow-xl dark:text-gray-100><img src="./assets/vue.svg" tag="logo" alt=""></div>

      <div dark:text-gray-100>{{ t('content') }}</div>

      <div  w-30 flex justify-around>
        <button dark:text-gray-100 icon-btn @click="toggleDark()" title="主题颜色切换">
          <div i="carbon-sun dark:carbon-moon" />
        </button>
        <button icon-btn dark:text-gray-100 title="语言切换" @click="toggleLocales()">
          <div i-carbon-language />
        </button>
        <RouterLink icon-btn dark:text-gray-100 to="/" title="首页">
          <div i-carbon-api />
        </RouterLink>
        <RouterLink icon-btn dark:text-gray-100 to="/markdown" title="MarkDown" data-test-id="about">
          <div i-carbon-dicom-overlay />
        </RouterLink>
      </div>
    </div>
    <div pt-100px px-38px>
      <h1 text-pink text-20px>Get your in the game.</h1>
      <h1 text-60px dark:text-gray-100>Get your in the game.</h1>
      <div bg-amber dark:bg-cyan h-200px></div>
      <div h-1000px>
        <RouterView />
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
useHead({
  title: 'Bienao',
  meta: [
    {
      name: 'description',
      content: 'My page description',
    },
  ],
});

const isDark =  useDark()

const toggleDark =useToggle(isDark)

import { availableLocales, loadLanguageAsync } from '~/modules/i18n';

const { t, locale } = useI18n();

async function toggleLocales() {
  // change to some real logic
  const locales = availableLocales;
  const newLocale = locales[(locales.indexOf(locale.value) + 1) % locales.length];
  await loadLanguageAsync(newLocale);
  locale.value = newLocale;
}
</script>

<style scoped>
.home-right:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
