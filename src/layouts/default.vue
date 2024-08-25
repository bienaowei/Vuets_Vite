<template>
    <main
      px-4 py-10
      text="text-center gray-700 dark:gray-200"
    >
    <TheCounter  initial="1" />
      <RouterView />
      default
      <div mx-auto mt-5 text-center text-30px opacity-50>
        [Default Layout]
      </div>
    </main>
  </template>