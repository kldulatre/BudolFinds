<template>
    <div class="flex items-center justify-evenly md:invisible shadow h-12 w-full border bg-white fixed bottom-0">
        <IconsHome/>
        <IconsCommunity/>
        <IconsPlus/>
        <div class="inline-block relative">
            <IconsNotifs class="z-0"/>
            <span class="absolute top-0.5 right-0.5 block h-1 w-1 rounded-full ring-4 ring-red-400 bg-green-600"></span>
        </div>
        <IconsUser/>
    </div>
</template>