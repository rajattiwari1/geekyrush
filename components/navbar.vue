<template>
  <div>
    <div class="grid grid-cols-12 gap-10 items-center px-10 py-5 bg-white">
      <div class="col-span-4">
       <div class="flex items-center justify-start">
       <nuxt-link to="/"  > <img src="../assets/images/geekyrush svg.svg" class="h-10" alt=""></nuxt-link>
       </div>
     </div>

     <div class="col-span-8">
      <div class="flex items-center justify-end gap-6 px-10   text-lg font-semibold ">
        <nuxt-link to="/" class="flex justify-center items-center   hover:bg-gray-100 h-10 px-3">Home</nuxt-link>
        <a href="/#services" class="flex justify-center items-center  hover:bg-gray-100 h-10 px-3">Services</a>
        <nuxt-link to="/blog" class=" flex justify-center items-center  hover:bg-gray-100 h-10 px-3">Blog</nuxt-link>
        <nuxt-link to="/about" class=" flex justify-center items-center  hover:bg-gray-100 h-10 px-3">About Us</nuxt-link>
        <nuxt-link to="/contact" class="flex justify-center items-center   hover:bg-gray-100 h-10 px-3">Contact Us</nuxt-link>
      </div>
     </div>
    
    </div>
  </div> 
</template>