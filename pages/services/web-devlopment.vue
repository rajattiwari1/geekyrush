<template>
  <div>
    <section class="px-20 pt-64 pb-48 bg-gray-800 bg-cover" :style="{ backgroundImage: `url(${bgImages.heroimage})`}">
      <div class="container">
        <div class=" w-96 max-w-2xl text-white space-y-3">
          <h1 class="text-4xl  font-bold ">Web Development</h1>
          <p class="text-xl font-semibold">Leave us a little info, and we’ll be in touch.</p>
          <div class="inline-block  ">
            <nuxt-link to="/" class="btn btn-primary">View our work</nuxt-link>
          </div>
        </div>
      </div>
    </section>  
    <section class="px-10 py-20 bg-slate-100">
      <div class="container px-10">
        <div class="grid grid-cols-12 gap-20"> 
          <div class="col-span-5">
           <div class="space-y-5 ">
            <img src="~/assets/images/servicespics-1.jpg" class="rounded-lg w-full" alt="computer pic">
            <h1 class="text-3xl font-bold max-w-full w-full">More than just a static <br>website</h1>
            <div class="text-gray-500 space-y-5">
             <p>Websites can be more than just informative, sometimes a boost can stand you from competitors and this level of customization makes us a better option from our competitors.</p>
             <p>We promise any integration is automated and can be easily managed by yourself!</p>
            </div>
           </div>
          </div>
          <div class="col-span-7">
            <div class="grid grid-cols-2 gap-5">
             <div class="space-y-5">
                <div class="space-y-3">
                  <img src="../services/web-devlopmentImage/servicesCalculator.png" class="h-20 rounded-full" alt="servicecalculator">
                  <h1 class="text-xl font-bold">Quote Calculator</h1>
                  <p class="text-gray-500 text">Prospects can calculate products and services, which gives you a better knowledge of what they want and what you can offer.</p>
                </div>
                <div class="space-y-3">
                  <img src="../services/web-devlopmentImage/ecommerce-yellow.svg" class="h-20 rounded-full" alt="">
                  <h1 class="text-xl font-bold">e-commerce website</h1>
                  <p class="text-gray-500 text">We create ecommerce solutions for B2C, B2B and marketplace business models. We can smoothly integrate an ecommerce component into your operating web app or launch a new ecommerce presence.</p>
                </div>
                <div class="space-y-3">
                  <img class="h-20 rounded-full" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAEZ0lEQVRoge3Y32tbZRzH8fdz0nZNujZt58Sta2WTiQiCF/5gCDo2nAgiwxtlAxGd/8OYQ+cYbojOCxWc80aQ3QiCgsPRjVbETZx6oV4IbnOUbh3WtsmapmmT8/14kZPY7LQuOUm1sHxvknPOk/O8Puf7HE4SaFazmtWsZt3K5aoZNP70i53tbq7foX4n6wP6Dfow9QLdSN0S3aBORCsSoITEKiQEs07KSQA2h9w0kEKWkkg5NC5pDGPE4Y/mfV3JWedI/7lPZyMFSD+1a3PM0x6c2wFsBJIARRhIAgEIpGB3sK+ID16K4yvHLLZvic+hCUkX8fWVtfDB2m9Ojd00QGbnrhcQ7wOJigP/NV4K5iqPmTSz59d+f/rLJQNkdu7ejnQKiK0wPCqeY8bz2NJ77vQvJZpX6dShFYwH0eEXbP+iHcg+s3uD+Rqp6MrKwpeO5zKrrWfj8HCuogPm655o+OD8EnkZBbPlxANq77xuG0vMcgDn2BTtyhePZf0CuQfuJ3vfvWT8PGa2HPjitsXuLlFbFpg3Rbnypfdzvs+dr+/DtbaSPnWGqfeOkcjM0ua8xuIlfNi8eAdqwlcuEZNwra0AJJ/YzoaPj5Hf8mDQDTUMH2yHA2C2Piq+PGZBtfT20PfGq3S9tpd0YhVz8huDFzjUHwogud668KoMUKqubY/S/8lx8lseIlPIY+VzR8MjgbE2HAB1Nxq/sBsbjhwgeXAf6UScnPnR8Qjh3xYKgOioC3+TEABd2x9j4MRH+I88TKZQwGS14yUwtzocALXVg6/CDwTdePMgyUP7SXckyJvVhi/O3R4OILXVh68yQVDJx7cycOI42UQC1YIvHgsHqBtfm39B1YwHlA8FAM3Xha92DQWVHhxi5LmXiE/P4GrBF7dTpfOUn8SIeYLWRMNXF6AwMcnY4aPY0Ld0eg7PURu+OP9iATQDdEXFV9OA9OAQ44ffITGdIe5VfsWoAY+k6+EAMCVpXWT8vwQoTEwxdvhtbPgsSc/hcPXgQZoKBZBssoyoGb+0Pj04zPiRoySmZ0h4Xu03bBi/xBIyXcW56PgbMpSv+tdnSXoeHq5BeHDiWiiAw/tDiv5jBAnN53FtraRODjLx1rvEZ2ZIeLF/AA3AI+E7XQwFMOdfwkprsza8JOKeY3TvAZSbRz/8RJfn8PAajhfCK3BpkSUUuwR+JDwS7S5G4ex5QLR4XiWogXgkTK7cgfKDzC/ot2C2mvHFdSlaXHBFlhGPyGVjqcuhAGuGPxsFvouCv2GC5cTjTJ9vvnBhLhSgSNYrEoWVikfKOK9waKG5IkDPmS+GEHswsisOb5rwsWfvuPjzrwvNi/65m9r25F1m3suY24FsE5D8n/CTGL87OBkz78PbL5+/dqO1qr/X/9y6dXXMjw9gfp98r885DUi2DrQG0YMpKVM3TnFERwBqR8QDfFbSXHCzZ3xp1kkpnEs7s5Rhf2EaQ27EoVHDrpBhZP3VH7PV+JrVrGY1q1m3bv0NDRMeqgk0OuwAAAAASUVORK5CYII=">
                  <h1 class="text-xl font-bold">Youtube Channels</h1>
                  <p class="text-gray-500 text">Prospects can calculate products and services, which gives you a better knowledge of what they want and what you can offer.</p>
                </div>
              </div>

              <div class="space-y-5">
                <div class="space-y-3">
                  <img class="h-20 rounded-full" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAEZ0lEQVRoge3Y32tbZRzH8fdz0nZNujZt58Sta2WTiQiCF/5gCDo2nAgiwxtlAxGd/8OYQ+cYbojOCxWc80aQ3QiCgsPRjVbETZx6oV4IbnOUbh3WtsmapmmT8/14kZPY7LQuOUm1sHxvknPOk/O8Puf7HE4SaFazmtWsZt3K5aoZNP70i53tbq7foX4n6wP6Dfow9QLdSN0S3aBORCsSoITEKiQEs07KSQA2h9w0kEKWkkg5NC5pDGPE4Y/mfV3JWedI/7lPZyMFSD+1a3PM0x6c2wFsBJIARRhIAgEIpGB3sK+ID16K4yvHLLZvic+hCUkX8fWVtfDB2m9Ojd00QGbnrhcQ7wOJigP/NV4K5iqPmTSz59d+f/rLJQNkdu7ejnQKiK0wPCqeY8bz2NJ77vQvJZpX6dShFYwH0eEXbP+iHcg+s3uD+Rqp6MrKwpeO5zKrrWfj8HCuogPm655o+OD8EnkZBbPlxANq77xuG0vMcgDn2BTtyhePZf0CuQfuJ3vfvWT8PGa2HPjitsXuLlFbFpg3Rbnypfdzvs+dr+/DtbaSPnWGqfeOkcjM0ua8xuIlfNi8eAdqwlcuEZNwra0AJJ/YzoaPj5Hf8mDQDTUMH2yHA2C2Piq+PGZBtfT20PfGq3S9tpd0YhVz8huDFzjUHwogud668KoMUKqubY/S/8lx8lseIlPIY+VzR8MjgbE2HAB1Nxq/sBsbjhwgeXAf6UScnPnR8Qjh3xYKgOioC3+TEABd2x9j4MRH+I88TKZQwGS14yUwtzocALXVg6/CDwTdePMgyUP7SXckyJvVhi/O3R4OILXVh68yQVDJx7cycOI42UQC1YIvHgsHqBtfm39B1YwHlA8FAM3Xha92DQWVHhxi5LmXiE/P4GrBF7dTpfOUn8SIeYLWRMNXF6AwMcnY4aPY0Ld0eg7PURu+OP9iATQDdEXFV9OA9OAQ44ffITGdIe5VfsWoAY+k6+EAMCVpXWT8vwQoTEwxdvhtbPgsSc/hcPXgQZoKBZBssoyoGb+0Pj04zPiRoySmZ0h4Xu03bBi/xBIyXcW56PgbMpSv+tdnSXoeHq5BeHDiWiiAw/tDiv5jBAnN53FtraRODjLx1rvEZ2ZIeLF/AA3AI+E7XQwFMOdfwkprsza8JOKeY3TvAZSbRz/8RJfn8PAajhfCK3BpkSUUuwR+JDwS7S5G4ex5QLR4XiWogXgkTK7cgfKDzC/ot2C2mvHFdSlaXHBFlhGPyGVjqcuhAGuGPxsFvouCv2GC5cTjTJ9vvnBhLhSgSNYrEoWVikfKOK9waKG5IkDPmS+GEHswsisOb5rwsWfvuPjzrwvNi/65m9r25F1m3suY24FsE5D8n/CTGL87OBkz78PbL5+/dqO1qr/X/9y6dXXMjw9gfp98r885DUi2DrQG0YMpKVM3TnFERwBqR8QDfFbSXHCzZ3xp1kkpnEs7s5Rhf2EaQ27EoVHDrpBhZP3VH7PV+JrVrGY1q1m3bv0NDRMeqgk0OuwAAAAASUVORK5CYII=">
                  <h1 class="text-xl font-bold">Online Payments</h1>
                  <p class="text-gray-500 text">Prospects can calculate products and services, which gives you a better knowledge of what they want and what you can offer.</p>
                </div>
                <div class="space-y-3">
                  <img class="h-20 rounded-full" src="data:image/png;base64,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">
                  <h1 class="text-xl font-bold">Contact Forms</h1>
                  <p class="text-gray-500 text">Prospects can calculate products and services, which gives you a better knowledge of what they want and what you can offer.</p>
                </div>
                <div class="space-y-3">
                  <img class="h-20 rounded-full" src="data:image/png;base64,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">
                  <h1 class="text-xl font-bold">Anything you can imagine</h1>
                  <p class="text-gray-500 text">Prospects can calculate products and services, which gives you a better knowledge of what they want and what you can offer.</p>
                </div>
             </div>
            </div>
          </div>
        </div>
      </div>
    </section >
    <section class="bg-black px-10 py-20">
      <div class="container space-y-10">

        <div class="lg:max-w-3xl text-center mx-auto space-y-2">
          <h1 class="text-3xl text-white font-bold">Our Mobile Application Development Services<span class="text-red-400 text-xl">.</span></h1>
          <p class="text-gray-400">GeekyRush welcomes possibilities to assist in specific development stages as well as to provide full-cycle Website implementation. Our Website development services include:</p>
        </div>

        <div class="grid lg:grid-cols-3 gap-5">
          <div class="space-y-5">
            <div class="flex justify-center items-center">
              <img src="../services/androiddevelopmentImages/servicesba.svg" class="h-14 rounded-full " alt=""> 
            </div>
            <p class="text-gray-400 text-xl">Insightful business analysis for spot-on concept creation</p>
          </div>
          <div class="space-y-5">
            <div class="flex justify-center items-center">
              <img src="../services/androiddevelopmentImages/servicesux.svg" class="h-14 rounded-full " alt=""> 
            </div>
            <p class="text-gray-400 text-xl">Intuitive UX to minimize the bounce rate or user errors</p>
          </div>
          <div class="space-y-5">
            <div class="flex justify-center items-center">
              <img src="../services/androiddevelopmentImages/servicesui.svg" class="h-14 rounded-full " alt=""> 
            </div>
            <p class="text-gray-400 text-xl">Modern UI to raise engagement and conversions</p>
          </div>
          <div class="space-y-5">
            <div class="flex justify-center items-center">
              <img src="../services/androiddevelopmentImages/servicesperformance.svg" class="h-14 rounded-full " alt=""> 
            </div>
            <p class="text-gray-400 text-xl">Fail-proof performance for rewarding digital experience</p>
          </div>
          <div class="space-y-5">
            <div class="flex justify-center items-center">
              <img src="../services/androiddevelopmentImages/servicesupdates.svg" class="h-14 rounded-full " alt=""> 
            </div>
            <p class="text-gray-400 text-xl">Timely updates to keep your web solution on-stream and on-trend</p>
          </div>
          <div class="space-y-5">
            <div class="flex justify-center items-center">
              <img src="../services/androiddevelopmentImages/servicesintegration_bg.svg" class="h-14 rounded-full " alt=""> 
            </div>
            <p class="text-gray-400 text-xl">Smooth integration to streamline workflows</p>
          </div>

         </div>

      </div>
    </section>
    <!-- We use what tech companies use  -->
    <section class="px-10 py-20 bg-slate-100">
     <div class="container px-10 space-y-7">
       <div class="space-y-2 text-center">
        <h1>Our <span class="text-red-800">Tech Stack</span></h1>
        <h1 class="text-4xl font-bold">We use what tech companies use 🚀</h1>
        <p class="text-gray-500">Our background is from tech companies and that is what we use for our clients. Most agencies rely on slow <br> and insecure technology like WordPress, shared servers, FTP, etc. Sounds familiar?</p>
        <p class="text-gray-500">We keep improving and learning new tools, do you need a custom integration we are glad to find a way to<br>help you and expand our stack.</p>
       </div>
     
       <div class="grid grid-cols-6 justify-items-center gap-10">
        <div class="space-y-16">
         <img class="h-14" src="./web-devlopmentImage/github.svg" alt="">
         <img class="h-14" src="./web-devlopmentImage/ghost.svg" alt="">
         <img class="h-14" src="./web-devlopmentImage/html-5.svg" alt="">
         <img class="h-14" src="./web-devlopmentImage/webflow.svg" alt="">
         <img class="h-14" src="./web-devlopmentImage/prismic.svg" alt="">

        </div>
        <div class="space-y-16">
          <img class="h-14" src="./web-devlopmentImage/nextjs.svg" alt="">
          <img class="h-14" src="./web-devlopmentImage/css3.svg" alt="">
          <img class="h-14" src="./web-devlopmentImage/gitkraken.svg" alt="">
          <img class="h-14" src="./web-devlopmentImage/zapier.svg" alt="">
          <img class="h-14" src="./web-devlopmentImage/slack.svg" alt="">
        </div>
        <div class="space-y-16">
          <img class="h-14" src="./web-devlopmentImage/logo_google_analytics.svg" alt="">
          <img class="h-14" src="./web-devlopmentImage/javascript.svg" alt="">
          <img class="h-14" src="./web-devlopmentImage/calendly.png" alt="">
          <img class="h-14" src="./web-devlopmentImage/vsc.svg" alt="">
          <img class="h-14" src="./web-devlopmentImage/canva (1).svg" alt="">
       </div>
        <div class="space-y-16">
         <img class="h-14" src="./web-devlopmentImage/vue.svg" alt="">
         <img class="h-14" src="./web-devlopmentImage/conversion-ai.png" alt="">
         <img class="h-14" src="./web-devlopmentImage/loom.png" alt="">
         <img class="h-14" src="./web-devlopmentImage/webflow.svg" alt="">
         <img class="h-14" src="./web-devlopmentImage/saas.svg" alt="">
        </div>
        <div class="space-y-16">
          <img class="h-14" src="./web-devlopmentImage/miro.svg" alt="">
          <img class="h-14" src="./web-devlopmentImage/nodejs.svg" alt="">
          <img class="h-14" src="./web-devlopmentImage/clickup.svg" alt="">
          <img class="h-14" src="./web-devlopmentImage/notion.svg" alt="">
          <img class="h-14" src="./web-devlopmentImage/shopify.svg" alt="">
         </div>
        <div class="space-y-16">
          <img class="h-12" src="./web-devlopmentImage/aws.svg" alt="">
          <img class="h-16" src="./web-devlopmentImage/react.svg" alt="">
         <img class="h-14" src="./web-devlopmentImage/gcp.svg" alt="">
         <img class="h-14" src="./web-devlopmentImage/usepastel.png" alt="">
         <img class="h-14" src="./web-devlopmentImage/zoom2.svg" alt="">

        </div>
      </div>
    
    </div>
   </section>
   <!--FAQ -->
   <section class="px-10 py-20 bg-slate-200">
     <div class="container ">
      <div class="text-center space-y-3 pb-7">
        <h1 class="font-semibold text-lg">Frequently <span class="text-red-800">Asked Questions</span></h1>
        <p class="font-bold text-3xl">Want to ask something us?</p>
      </div>
       <div class="grid grid-cols-2 gap-5 ">
       
          <div v-for="(faq, index) in faqs" :key="index" class="bg-white rounded-lg">
            <div @click="activeFaq = activeFaq == index ? null : index" class="flex items-center gap-2 py-3 cursor-pointer">
              <svg v-if="activeFaq == index" class="h-6 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              <svg v-else class="h-6 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
              <h3 class="text-xl font-bold">{{ faq.title }}</h3>
            </div>
            <div v-if="activeFaq == index" class=" pl-8 py-2 font-semibold text-lg">{{ faq.description }}</div>
     
        </div>
       </div>
     </div>
   </section>

  </div>
</template> 

<script>
 import heroimage from '~/assets/images/servicesbgpic.jpg'
 

 export default {
  
  data() {
    return {
      bgImages:{
        heroimage,
    
      },
      activeFaq: null,
      faqs: [
        {
          title: 'How long does it take to build a website?',
          description: 'Every project has their own requirements but usually it takes 1 to 4 weeks to build a website from start to finish, providing we have all the information and images from you.'
        },
        {
          title: 'How much SEO services cost?',
          description: 'If you will only wish to make changes very infrequently, then usually is better that Lazzo to carry out these changes for you calculating the development hours. If you need bigger and more frequent updates we can provide a CMS (Content Management System) in which you can update individual products/pages or particular sections of your website. Also we can help you with tech support via tickets or email support in info@lazzo.io and we will be here for you.'
        },
        {
          title: 'Where is your company located?',
          description: 'We are a remotely based company. However, we would be meeting you online anytime you need!'
        },
        {
          title: 'Does your SEO works for all search engines?',
          description: 'Yes, we work on all search engines to get your site optimised. Google is the most widely used search engine but we also work on other search engines like Bing, Yahoo, Baidu, Yandex, Ask, and DuckDuckGo.'
        },
        {
          title: 'What does an SEO agency do?',
          description: 'SEO agency performs an SEO audit on your website first. Then, it helps you optimize your website efficiently to help you flood with traffic and let your business grow.'
        },
        {
          title: 'Why should I buy your SEO services?',
          description: 'Nowadays, one having just a few months of experience argues to be the best professional SEO expert. Before hiring these such SEO experts, you need to verify their claims. We are a group of highly skilled SEO professionals who understand what needs to be fixed and help your business grow.'
        },
        {
          title: 'How much time is required to rank a website on google?',
          description: 'Well, it depends on the website. Google takes time for a website to settle and perform organically as it only ranks websites that are relevant and have authority. You need to earn the top spot by allocating resources. But, still, a rough figure will be somewhere between six months and a year.'
        },
        {
          title: 'What should be my ideal pagespeed score?',
          description: 'You should aim for as high as possible. It all depends on your competitors, what score they have. If your competitor has a score of 80/100 and you have 85/100, you will be prioritised. '
        },
      ]
    }
  }

 }



</script>