<template>
  <div class="min-h-screen bg-gray-100">
    <NavBar />
    <div class="container mx-auto flex justify-center items-start bg-white min-h-screen">
      <SideBarLeft class="w-4/12 hidden md:block"/>
      <Nuxt class="w-full md:w-8/12" />
    </div>
    <Footer />
  </div>
</template>

<style scoped>
.container {
  max-width: 935px;
}
</style>