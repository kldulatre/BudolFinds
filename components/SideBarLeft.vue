<template>
  <ul class="sticky top-16 p-6">
    <li class="flex space-x-2 items-center hover:bg-gray-200 p-4 pl-6 mb-2 rounded-full">
      <IconsHome />
      <span>Home</span>
    </li>
    <li class="flex space-x-2 items-center hover:bg-gray-200 p-4 pl-6 mb-2 rounded-full">
      <IconsCommunity />
      <span>Community</span>
    </li>
    <li class="flex space-x-2 items-center hover:bg-gray-200 p-4 pl-6 mb-2 rounded-full">
        <IconsNotifs />
        <span>Notifications</span>
      <div class="flex justify-center items-center bg-red-400 text-white w-6 h-6 rounded-full text-xs">12</div>
    </li>
    <li class="flex space-x-2 items-center hover:bg-gray-200 p-4 pl-6 mb-2 rounded-full">
      <IconsUser />
      <span>Profile</span>
    </li>
    <li class="flex space-x-2 items-center hover:bg-gray-200 p-4 pl-7 mb-2 rounded-full">
      <IconsLogout />
      <span>Logout</span>
    </li>
    <li class="flex space-x-2 items-center justify-center p-4 pl-6 mt-6 rounded-full bg-green-300 hover:bg-green-400">
      <IconsPlus />
      <span>Create Post</span>
    </li>
  </ul>
</template>