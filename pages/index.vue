<template>
   <div>
     <section class="px-10 pt-52 pb-32">
      
        <div class="container space-y-6">
          <h1 class="text-6xl font-bold text-center">Creative digital <span class="text-red-800">Agency</span><br>for mindful brands :)</h1>
          <p class="text-lg font-semibold text-center">Working on your ideas to draw a smile on the face of your users world wide</p>
          <button class="btn btn-primary mx-auto">Start a project<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class=" h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" /></svg></button>
        </div>
     
      </section>

      <section class="px-10 py-20 bg-gray-50">

        <div class="container">

          <div class="grid grid-cols-4 gap-10">

            <div class="text-center ">
              <h2 class="flex gap-1 items-center  justify-center"><span class="text-5xl font-semibold">4</span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg></h2>
              <p class="text-gray-600">Years of experience</p>
            </div>
            
            <div class="text-center">
              <h2 class="flex gap-1 items-center justify-center"><span class="text-5xl font-semibold">60</span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg></h2>
              <p class="text-gray-600">Satisfied Clients</p>
            </div>

            <div class="text-center">
              <h2 class="flex gap-1 items-center justify-center"><span class="text-5xl font-semibold">98</span><img src="../assets/images/percentage.svg" class="w-10 h-10" alt="logo"></h2>
              <p class="text-gray-600">Success Projects </p>
            </div>

            <div class="text-center">
              <h2 class="flex gap-1 items-center justify-center"><span class="text-5xl font-semibold">5</span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg></h2>
              <p class="text-gray-600">Award Gained</p>
            </div>

          </div>

        </div>
    
      </section>

      <section id="services" class="px-10 py-20 bg-red-800">

        <div class="container space-y-10">

          <h2 class="text-3xl font-bold text-white text-center">Our Services</h2>

          <div class="grid grid-cols-3 gap-10">
            <Nuxt-link to="/services/web-devlopment" class="p-5 bg-white/50 rounded-lg space-y-2 hover:bg-white/80">
              <img src="../assets/images/serviceWebdevelopment.svg" class="h-8 w-8" alt="logo">
              <h1 class="text-xl  font-bold">Web Development</h1>
              <p class="text-sm">We develop website on highly optimized codes. We have in expertise team of developers with the expertise on the demanding technologies, frameworks, tools.</p>
            </Nuxt-link>
            <Nuxt-link to="/services/web-design" class="p-5 bg-white/50 rounded-lg space-y-2 hover:bg-white/80">
              <img src="../assets/images/serviceUIux.svg" class="w-8 h-8" alt="logo">
              <h1 class="text-xl font-bold ">Web Design</h1>
              <p class="text-sm">Design your website with best with the best User Interaction Technologies like Adobe XD, Figma. We have in best team member of Designing who have great expertise on Designing website from scratch to end.</p>
            </Nuxt-link>
            <Nuxt-link to="/services/video-editing" class="p-5 bg-white/50 rounded-lg space-y-2 hover:bg-white/80">
              <img src="../assets/images/servicesVedioediting.svg" class="w-8 h-8" alt="logo">
              <h1 class="text-xl font-bold">Video Editing</h1>
              <p class="text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and it to make a type specimen book.</p>
            </Nuxt-link>
            <nuxt-link to="/services/android-app-development" class="p-5 bg-white/50  rounded-lg space-y-2 hover:bg-white/80">
              <img src="../assets/images/serviceAndroiddevelopment.svg" class="w-8 h-8" alt="logo">
              <h1 class="text-xl font-bold">Android App Development</h1>
              <p class="text-sm">Android app development services comprise design, development, and enhancement of mobile software that runs on all supported Android OS versions. Targeting Android with native, hybrid, and cross-platform development, ScienceSoft always guarantees sustainable and seamless mobile experience.</p>
            </nuxt-link>
            <nuxt-link to="/services/logo-designing" class="p-5 bg-white/50  rounded-lg space-y-2 hover:bg-white/80">
              <img src="../assets/images/geekyrush svg.svg" class="h-8 w-20" alt="logo">
              <h1 class="text-xl font-bold">Logo Designing</h1>
              <p class="text-sm">Our logo design service is for multiple industries such as, real estate, education, financial institutions, food, hospitality, information technology, fashion and more. We also provide custom logo design service.</p>
            </nuxt-link>
            <nuxt-link to="/services/content-writing" class="p-5 bg-white/50 rounded-lg space-y-2 hover:bg-white/80">
              <img src="../assets/images/serviceContentWriting.svg" class="h-8 w-8" alt="logo">
              <h1 class="text-xl font-bold">Content Writing</h1>
              <p class="text-sm">We Provides Content Writing to satisfy all your corporate content requirements under a single roof. it includes blog writing for websites, web content writing, marketing material content, research articles,press releases, product descriptions, etc</p>
            </nuxt-link>
          
          </div>
        </div>
     </section>

     <!-- Testimonials -->
     <section class="px-10 py-20 bg-white">
      
      <div class="container space-y-10">
        <div class="text-center space-y-2">
          <h2 class="text-3xl font-bold">Testimonials</h2>
          <p class="text-gray-600">See what our customers say about us!</p>
        </div>
        <div class="grid grid-cols-3 gap-10">
         
          <div v-for="n in 6" :key="n">
            <div class="p-5 bg-gray-100 rounded-lg shadow space-y-5">
              <div class="flex items-center gap-3">
                <img class="h-10 rounded-full border bg-white" src="https://avatars.dicebear.com/api/avataaars/male/rajat.svg" alt="">
                <div>
                  <h3 class="font-semibold">Rajat Tiwari</h3>
                  <p class="text-xs text-gray-600">Founder at GeekyRush</p>
                </div>
              </div>
              <div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and it to make a type specimen book.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
     </section>
 
    </div>
</template>
