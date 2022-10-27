<template>
  <div>
    <section class="px-20 pt-64 pb-48 bg-gray-800 bg-cover" :style="{ backgroundImage: `url(${bgImages.heroimage})`}">
      <div class="container">
        <div class=" w-96 max-w-2xl text-white space-y-1">
          <h1 class="text-3xl  font-bold ">Web Design</h1>
          <p class="text-lg font-semibold">Leave us a little info, and we’ll be in touch.</p>
          <div class="inline-block pt-3">
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
            <h1 class="text-3xl font-bold max-w-full w-full">More than just a website <br>design</h1>
            <div class="text-gray-500 space-y-5">
             <p>Web design services comprise the processes of user interface (UI) and user experience (UX) design of any web-based solution. In each of its web design projects, ScienceSoft shrewdly balances the technology, visual aesthetics and business objectives, bringing you fast-loading, impactful and high-converting online experiences.</p>
            </div>
           </div>
          </div>
          <div class="col-span-7">
            <div class="grid grid-cols-2 gap-5">
             <div class="space-y-5">
                <div class="space-y-3">
                  <img src="../services/web-devlopmentImage/servicesCalculator.png" class="h-20 rounded-full" alt="servicecalculator">
                  <h1 class="text-xl font-bold">UI Design</h1>
                  <p class="text-gray-500 text">UI design services are aimed at creating visually appealing, brand strengthening digital interfaces that attract and retain users. ScienceSoft delivers UI solutions that are tailored individually to your audience, reflect customer values, as well as effectively back up your business objectives.</p>
                </div>
                <div class="space-y-3">
                  <img src="../services/web-devlopmentImage/ecommerce-yellow.svg" class="h-20 rounded-full" alt="">
                  <h1 class="text-xl font-bold">SaaS UI design</h1>
                  <p class="text-gray-500 text">User interface design for software-as-a-service is targeted at creating neat visual representations of SaaS products’ functionality. Within the SaaS UI design offer, ScienceSoft delivers striking SaaS interfaces that quickly click with the audience, making for easy brand recognition and high customer retention.</p>
                </div>
                <div class="space-y-3">
                  <img class="h-20 rounded-full" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAEZ0lEQVRoge3Y32tbZRzH8fdz0nZNujZt58Sta2WTiQiCF/5gCDo2nAgiwxtlAxGd/8OYQ+cYbojOCxWc80aQ3QiCgsPRjVbETZx6oV4IbnOUbh3WtsmapmmT8/14kZPY7LQuOUm1sHxvknPOk/O8Puf7HE4SaFazmtWsZt3K5aoZNP70i53tbq7foX4n6wP6Dfow9QLdSN0S3aBORCsSoITEKiQEs07KSQA2h9w0kEKWkkg5NC5pDGPE4Y/mfV3JWedI/7lPZyMFSD+1a3PM0x6c2wFsBJIARRhIAgEIpGB3sK+ID16K4yvHLLZvic+hCUkX8fWVtfDB2m9Ojd00QGbnrhcQ7wOJigP/NV4K5iqPmTSz59d+f/rLJQNkdu7ejnQKiK0wPCqeY8bz2NJ77vQvJZpX6dShFYwH0eEXbP+iHcg+s3uD+Rqp6MrKwpeO5zKrrWfj8HCuogPm655o+OD8EnkZBbPlxANq77xuG0vMcgDn2BTtyhePZf0CuQfuJ3vfvWT8PGa2HPjitsXuLlFbFpg3Rbnypfdzvs+dr+/DtbaSPnWGqfeOkcjM0ua8xuIlfNi8eAdqwlcuEZNwra0AJJ/YzoaPj5Hf8mDQDTUMH2yHA2C2Piq+PGZBtfT20PfGq3S9tpd0YhVz8huDFzjUHwogud668KoMUKqubY/S/8lx8lseIlPIY+VzR8MjgbE2HAB1Nxq/sBsbjhwgeXAf6UScnPnR8Qjh3xYKgOioC3+TEABd2x9j4MRH+I88TKZQwGS14yUwtzocALXVg6/CDwTdePMgyUP7SXckyJvVhi/O3R4OILXVh68yQVDJx7cycOI42UQC1YIvHgsHqBtfm39B1YwHlA8FAM3Xha92DQWVHhxi5LmXiE/P4GrBF7dTpfOUn8SIeYLWRMNXF6AwMcnY4aPY0Ld0eg7PURu+OP9iATQDdEXFV9OA9OAQ44ffITGdIe5VfsWoAY+k6+EAMCVpXWT8vwQoTEwxdvhtbPgsSc/hcPXgQZoKBZBssoyoGb+0Pj04zPiRoySmZ0h4Xu03bBi/xBIyXcW56PgbMpSv+tdnSXoeHq5BeHDiWiiAw/tDiv5jBAnN53FtraRODjLx1rvEZ2ZIeLF/AA3AI+E7XQwFMOdfwkprsza8JOKeY3TvAZSbRz/8RJfn8PAajhfCK3BpkSUUuwR+JDwS7S5G4ex5QLR4XiWogXgkTK7cgfKDzC/ot2C2mvHFdSlaXHBFlhGPyGVjqcuhAGuGPxsFvouCv2GC5cTjTJ9vvnBhLhSgSNYrEoWVikfKOK9waKG5IkDPmS+GEHswsisOb5rwsWfvuPjzrwvNi/65m9r25F1m3suY24FsE5D8n/CTGL87OBkz78PbL5+/dqO1qr/X/9y6dXXMjw9gfp98r885DUi2DrQG0YMpKVM3TnFERwBqR8QDfFbSXHCzZ3xp1kkpnEs7s5Rhf2EaQ27EoVHDrpBhZP3VH7PV+JrVrGY1q1m3bv0NDRMeqgk0OuwAAAAASUVORK5CYII=">
                  <h1 class="text-xl font-bold">UX Design</h1>
                  <p class="text-gray-500 text">User experience design services focus on building smooth interaction flows between users and software. ScienceSoft’s comprehensive approach to UX design ensures superior user satisfaction, resulting in maximized use of features and higher dwell time of all types of web and mobile software.</p>
                </div>
              </div>

              <div class="space-y-5">
                <div class="space-y-3">
                  <img class="h-20 rounded-full" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAEZ0lEQVRoge3Y32tbZRzH8fdz0nZNujZt58Sta2WTiQiCF/5gCDo2nAgiwxtlAxGd/8OYQ+cYbojOCxWc80aQ3QiCgsPRjVbETZx6oV4IbnOUbh3WtsmapmmT8/14kZPY7LQuOUm1sHxvknPOk/O8Puf7HE4SaFazmtWsZt3K5aoZNP70i53tbq7foX4n6wP6Dfow9QLdSN0S3aBORCsSoITEKiQEs07KSQA2h9w0kEKWkkg5NC5pDGPE4Y/mfV3JWedI/7lPZyMFSD+1a3PM0x6c2wFsBJIARRhIAgEIpGB3sK+ID16K4yvHLLZvic+hCUkX8fWVtfDB2m9Ojd00QGbnrhcQ7wOJigP/NV4K5iqPmTSz59d+f/rLJQNkdu7ejnQKiK0wPCqeY8bz2NJ77vQvJZpX6dShFYwH0eEXbP+iHcg+s3uD+Rqp6MrKwpeO5zKrrWfj8HCuogPm655o+OD8EnkZBbPlxANq77xuG0vMcgDn2BTtyhePZf0CuQfuJ3vfvWT8PGa2HPjitsXuLlFbFpg3Rbnypfdzvs+dr+/DtbaSPnWGqfeOkcjM0ua8xuIlfNi8eAdqwlcuEZNwra0AJJ/YzoaPj5Hf8mDQDTUMH2yHA2C2Piq+PGZBtfT20PfGq3S9tpd0YhVz8huDFzjUHwogud668KoMUKqubY/S/8lx8lseIlPIY+VzR8MjgbE2HAB1Nxq/sBsbjhwgeXAf6UScnPnR8Qjh3xYKgOioC3+TEABd2x9j4MRH+I88TKZQwGS14yUwtzocALXVg6/CDwTdePMgyUP7SXckyJvVhi/O3R4OILXVh68yQVDJx7cycOI42UQC1YIvHgsHqBtfm39B1YwHlA8FAM3Xha92DQWVHhxi5LmXiE/P4GrBF7dTpfOUn8SIeYLWRMNXF6AwMcnY4aPY0Ld0eg7PURu+OP9iATQDdEXFV9OA9OAQ44ffITGdIe5VfsWoAY+k6+EAMCVpXWT8vwQoTEwxdvhtbPgsSc/hcPXgQZoKBZBssoyoGb+0Pj04zPiRoySmZ0h4Xu03bBi/xBIyXcW56PgbMpSv+tdnSXoeHq5BeHDiWiiAw/tDiv5jBAnN53FtraRODjLx1rvEZ2ZIeLF/AA3AI+E7XQwFMOdfwkprsza8JOKeY3TvAZSbRz/8RJfn8PAajhfCK3BpkSUUuwR+JDwS7S5G4ex5QLR4XiWogXgkTK7cgfKDzC/ot2C2mvHFdSlaXHBFlhGPyGVjqcuhAGuGPxsFvouCv2GC5cTjTJ9vvnBhLhSgSNYrEoWVikfKOK9waKG5IkDPmS+GEHswsisOb5rwsWfvuPjzrwvNi/65m9r25F1m3suY24FsE5D8n/CTGL87OBkz78PbL5+/dqO1qr/X/9y6dXXMjw9gfp98r885DUi2DrQG0YMpKVM3TnFERwBqR8QDfFbSXHCzZ3xp1kkpnEs7s5Rhf2EaQ27EoVHDrpBhZP3VH7PV+JrVrGY1q1m3bv0NDRMeqgk0OuwAAAAASUVORK5CYII=">
                  <h1 class="text-xl font-bold">Responsive Web Design</h1>
                  <p class="text-gray-500 text">Responsive web design services ensure a web solution’s adaptive behavior to the screen size it is displayed on. Following the mobile-first strategy, ScienceSoft translates the functionality of your web solution into intuitive, smoothly functioning, and highly converting digital experience.</p>
                </div>
                <div class="space-y-3">
                  <img class="h-20 rounded-full" src="data:image/png;base64,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">
                  <h1 class="text-xl font-bold">Responsive Web App Design</h1>
                  <p class="text-gray-500 text">Responsive web application design services are aimed at adapting web apps for the screens of mobile devices. ScienceSoft takes this service goal further: we create mobile-first web experiences that resonate with the mobile users’ specific needs and easily match the quality of native mobile apps.</p>
                </div>
                <div class="space-y-3">
                  <img class="h-20 rounded-full" src="data:image/png;base64,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">
                  <h1 class="text-xl font-bold">Ecommerce Website design</h1>
                  <p class="text-gray-500 text">Ecommerce website design and development services help create superior ecommerce experience to win demanding modern consumers.At ScienceSoft, ecommerce developers craft custom storefronts and digital solutions for back-office ecommerce operations.</p>
                </div>
             </div>
            </div>
          </div>
        </div>
      </div>
    </section >
    <section class="px-10 py-20 bg-slate-100">
      <div class="container px-10 text-center space-y-3">
        <h1 class="text-3xl font-bold">Why You Should Invest in Web Design</h1>
        <p >Almost 79% of users say that the combination of a web solution’s look, feel, and performance defines their impression of a company behind it. In other words, whether you make sales via the internet or not, your online representation is critical to the success of your business. By investing in web design, you invest directly in your commercial future.</p>
      </div>
    </section>
    <section class="bg-black px-10 py-20">
      <div class="container space-y-10">

        <div class="lg:max-w-5xl text-center mx-auto space-y-2">
          <h1 class="text-3xl text-white font-bold">Our Web Design Services<span class="text-red-400 text-xl">.</span></h1>
          <p class="text-gray-400">While providing the option of one-off web design, we also suggest continuous design support services that enable non-stop evolution of your ever-growing web solution. Working in close cooperation with your team, we gradually introduce improvements and changes based on regular user surveys and A/B testing, thus ensuring superior user experience.</p>
        </div>

        <div class="grid lg:grid-cols-3 gap-5">
          <div class="space-y-2">
           <h1 class="text-white text-2xl font-bold">Ecommerce website design</h1>
           <p class="text-gray-400 text-sm">Fresh and elegant ecommerce design to drive your store’s customer lifetime value and facilitate up/cross selling.</p>
           <div class="inline-block">
             <nuxt-link to="/contact" class="btn btn-primary mx-auto">GET MY ECOMMERCE DESIGN</nuxt-link>
            </div>
          </div>
          <div class="space-y-2">
            <h1 class="text-white text-2xl font-bold">B2C website / portal design</h1>
            <p class="text-gray-400 text-sm">Customer-centric design that makes for higher dwell time and a lower user error rate as well as enhances user engagement.</p>
            <div class="inline-block">
             <nuxt-link to="/contact" class="btn btn-primary mx-auto">GET MY B2C DESIGN</nuxt-link>
            </div>
          </div>
          <div class="space-y-2">
            <h1 class="text-white text-2xl font-bold">B2B website / portal design</h1>
            <p class="text-gray-400 text-sm">Industry-specific design to increase the frequency of email subscriptions, pre-registrations for future services, and quote/demo requests.</p>
            <div class="inline-block">
             <nuxt-link to="/contact" class="btn btn-primary mx-auto">GET MY B2B DESIGN</nuxt-link>
            </div>
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
       
       <div class="grid grid-cols-4 justify-items-center gap-10">
         <div class="space-y-16">
           <img class="h-14" src="./web-devlopmentImage/github.svg" alt="">
           <img class="h-14" src="./web-devlopmentImage/ghost.svg" alt="">
         </div>
         <div class="space-y-16">
           <img class="h-14" src="./web-devlopmentImage/nextjs.svg" alt="">
           <img class="h-14" src="./web-devlopmentImage/css3.svg" alt="">
         </div>
         <div class="space-y-16">
           <img class="h-14" src="./web-devlopmentImage/logo_google_analytics.svg" alt="">
           <img class="h-14" src="./web-devlopmentImage/javascript.svg" alt="">
         </div>
         <div class="space-y-16">
           <img class="h-14" src="./web-devlopmentImage/vue.svg" alt="">
           <img class="h-14" src="./web-devlopmentImage/conversion-ai.png" alt="">
         </div>
       </div>
     </div>
   </section>
   
  </div>
</template>

<script>
  import heroimage from '~/assets/images/servicesbgpic.jpg'

  export default{
   
    data() {
    return {
      bgImages:{
        heroimage,
    
      },
    }

  }
}
</script>