<template>
  <div>
    <section class="px-20 pt-64 pb-48 bg-gray-800 bg-cover" :style="{ backgroundImage: `url(${bgImages.heroimage})`}">
      <div class="container">
        <div class=" w-96 max-w-2xl text-white space-y-1">
          <h1 class="text-3xl  font-bold ">Logo Designing</h1>
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
           <div class="space-y-5 pt-14">
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
                  <h1 class="text-xl font-bold">Logo Design</h1>
                  <p class="text-gray-500 text">UI design services are aimed at creating visually appealing, brand strengthening digital interfaces that attract and retain users. ScienceSoft delivers UI solutions that are tailored individually to your audience, reflect customer values, as well as effectively back up your business objectives.</p>
                </div>
                <div class="space-y-3">
                  <img src="../services/web-devlopmentImage/ecommerce-yellow.svg" class="h-20 rounded-full" alt="">
                  <h1 class="text-xl font-bold">Logo & Business Card Design</h1>
                  <p class="text-gray-500 text">User interface design for software-as-a-service is targeted at creating neat visual representations of SaaS products’ functionality. Within the SaaS UI design offer, ScienceSoft delivers striking SaaS interfaces that quickly click with the audience, making for easy brand recognition and high customer retention.</p>
                </div>
                <div class="space-y-3">
                  <img src="../services/web-devlopmentImage/ecommerce-yellow.svg" class="h-20 rounded-full" alt="">
                  <h1 class="text-xl font-bold">Products Packaging Design</h1>
                  <p class="text-gray-500 text">User interface design for software-as-a-service is targeted at creating neat visual representations of SaaS products’ functionality. Within the SaaS UI design offer, ScienceSoft delivers striking SaaS interfaces that quickly click with the audience, making for easy brand recognition and high customer retention.</p>
                </div>
                
              </div>

              <div class="space-y-5"> 
                <div class="space-y-3">
                  <img class="h-20 rounded-full" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAEZ0lEQVRoge3Y32tbZRzH8fdz0nZNujZt58Sta2WTiQiCF/5gCDo2nAgiwxtlAxGd/8OYQ+cYbojOCxWc80aQ3QiCgsPRjVbETZx6oV4IbnOUbh3WtsmapmmT8/14kZPY7LQuOUm1sHxvknPOk/O8Puf7HE4SaFazmtWsZt3K5aoZNP70i53tbq7foX4n6wP6Dfow9QLdSN0S3aBORCsSoITEKiQEs07KSQA2h9w0kEKWkkg5NC5pDGPE4Y/mfV3JWedI/7lPZyMFSD+1a3PM0x6c2wFsBJIARRhIAgEIpGB3sK+ID16K4yvHLLZvic+hCUkX8fWVtfDB2m9Ojd00QGbnrhcQ7wOJigP/NV4K5iqPmTSz59d+f/rLJQNkdu7ejnQKiK0wPCqeY8bz2NJ77vQvJZpX6dShFYwH0eEXbP+iHcg+s3uD+Rqp6MrKwpeO5zKrrWfj8HCuogPm655o+OD8EnkZBbPlxANq77xuG0vMcgDn2BTtyhePZf0CuQfuJ3vfvWT8PGa2HPjitsXuLlFbFpg3Rbnypfdzvs+dr+/DtbaSPnWGqfeOkcjM0ua8xuIlfNi8eAdqwlcuEZNwra0AJJ/YzoaPj5Hf8mDQDTUMH2yHA2C2Piq+PGZBtfT20PfGq3S9tpd0YhVz8huDFzjUHwogud668KoMUKqubY/S/8lx8lseIlPIY+VzR8MjgbE2HAB1Nxq/sBsbjhwgeXAf6UScnPnR8Qjh3xYKgOioC3+TEABd2x9j4MRH+I88TKZQwGS14yUwtzocALXVg6/CDwTdePMgyUP7SXckyJvVhi/O3R4OILXVh68yQVDJx7cycOI42UQC1YIvHgsHqBtfm39B1YwHlA8FAM3Xha92DQWVHhxi5LmXiE/P4GrBF7dTpfOUn8SIeYLWRMNXF6AwMcnY4aPY0Ld0eg7PURu+OP9iATQDdEXFV9OA9OAQ44ffITGdIe5VfsWoAY+k6+EAMCVpXWT8vwQoTEwxdvhtbPgsSc/hcPXgQZoKBZBssoyoGb+0Pj04zPiRoySmZ0h4Xu03bBi/xBIyXcW56PgbMpSv+tdnSXoeHq5BeHDiWiiAw/tDiv5jBAnN53FtraRODjLx1rvEZ2ZIeLF/AA3AI+E7XQwFMOdfwkprsza8JOKeY3TvAZSbRz/8RJfn8PAajhfCK3BpkSUUuwR+JDwS7S5G4ex5QLR4XiWogXgkTK7cgfKDzC/ot2C2mvHFdSlaXHBFlhGPyGVjqcuhAGuGPxsFvouCv2GC5cTjTJ9vvnBhLhSgSNYrEoWVikfKOK9waKG5IkDPmS+GEHswsisOb5rwsWfvuPjzrwvNi/65m9r25F1m3suY24FsE5D8n/CTGL87OBkz78PbL5+/dqO1qr/X/9y6dXXMjw9gfp98r885DUi2DrQG0YMpKVM3TnFERwBqR8QDfFbSXHCzZ3xp1kkpnEs7s5Rhf2EaQ27EoVHDrpBhZP3VH7PV+JrVrGY1q1m3bv0NDRMeqgk0OuwAAAAASUVORK5CYII=">
                  <h1 class="text-xl font-bold">Brand Name & Logo Design</h1>
                  <p class="text-gray-500 text">Responsive web design services ensure a web solution’s adaptive behavior to the screen size it is displayed on. Following the mobile-first strategy, ScienceSoft translates the functionality of your web solution into intuitive, smoothly functioning, and highly converting digital experience.</p>
                </div>
                <div class="space-y-3">
                  <img class="h-20 rounded-full" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAEZ0lEQVRoge3Y32tbZRzH8fdz0nZNujZt58Sta2WTiQiCF/5gCDo2nAgiwxtlAxGd/8OYQ+cYbojOCxWc80aQ3QiCgsPRjVbETZx6oV4IbnOUbh3WtsmapmmT8/14kZPY7LQuOUm1sHxvknPOk/O8Puf7HE4SaFazmtWsZt3K5aoZNP70i53tbq7foX4n6wP6Dfow9QLdSN0S3aBORCsSoITEKiQEs07KSQA2h9w0kEKWkkg5NC5pDGPE4Y/mfV3JWedI/7lPZyMFSD+1a3PM0x6c2wFsBJIARRhIAgEIpGB3sK+ID16K4yvHLLZvic+hCUkX8fWVtfDB2m9Ojd00QGbnrhcQ7wOJigP/NV4K5iqPmTSz59d+f/rLJQNkdu7ejnQKiK0wPCqeY8bz2NJ77vQvJZpX6dShFYwH0eEXbP+iHcg+s3uD+Rqp6MrKwpeO5zKrrWfj8HCuogPm655o+OD8EnkZBbPlxANq77xuG0vMcgDn2BTtyhePZf0CuQfuJ3vfvWT8PGa2HPjitsXuLlFbFpg3Rbnypfdzvs+dr+/DtbaSPnWGqfeOkcjM0ua8xuIlfNi8eAdqwlcuEZNwra0AJJ/YzoaPj5Hf8mDQDTUMH2yHA2C2Piq+PGZBtfT20PfGq3S9tpd0YhVz8huDFzjUHwogud668KoMUKqubY/S/8lx8lseIlPIY+VzR8MjgbE2HAB1Nxq/sBsbjhwgeXAf6UScnPnR8Qjh3xYKgOioC3+TEABd2x9j4MRH+I88TKZQwGS14yUwtzocALXVg6/CDwTdePMgyUP7SXckyJvVhi/O3R4OILXVh68yQVDJx7cycOI42UQC1YIvHgsHqBtfm39B1YwHlA8FAM3Xha92DQWVHhxi5LmXiE/P4GrBF7dTpfOUn8SIeYLWRMNXF6AwMcnY4aPY0Ld0eg7PURu+OP9iATQDdEXFV9OA9OAQ44ffITGdIe5VfsWoAY+k6+EAMCVpXWT8vwQoTEwxdvhtbPgsSc/hcPXgQZoKBZBssoyoGb+0Pj04zPiRoySmZ0h4Xu03bBi/xBIyXcW56PgbMpSv+tdnSXoeHq5BeHDiWiiAw/tDiv5jBAnN53FtraRODjLx1rvEZ2ZIeLF/AA3AI+E7XQwFMOdfwkprsza8JOKeY3TvAZSbRz/8RJfn8PAajhfCK3BpkSUUuwR+JDwS7S5G4ex5QLR4XiWogXgkTK7cgfKDzC/ot2C2mvHFdSlaXHBFlhGPyGVjqcuhAGuGPxsFvouCv2GC5cTjTJ9vvnBhLhSgSNYrEoWVikfKOK9waKG5IkDPmS+GEHswsisOb5rwsWfvuPjzrwvNi/65m9r25F1m3suY24FsE5D8n/CTGL87OBkz78PbL5+/dqO1qr/X/9y6dXXMjw9gfp98r885DUi2DrQG0YMpKVM3TnFERwBqR8QDfFbSXHCzZ3xp1kkpnEs7s5Rhf2EaQ27EoVHDrpBhZP3VH7PV+JrVrGY1q1m3bv0NDRMeqgk0OuwAAAAASUVORK5CYII=">
                  <h1 class="text-xl font-bold">Logo & Brand Identify Design</h1>
                  <p class="text-gray-500 text">User experience design services focus on building smooth interaction flows between users and software. ScienceSoft’s comprehensive approach to UX design ensures superior user satisfaction, resulting in maximized use of features and higher dwell time of all types of web and mobile software.</p>
                </div>
                <div class="space-y-3">
                  <img class="h-20 rounded-full" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAEZ0lEQVRoge3Y32tbZRzH8fdz0nZNujZt58Sta2WTiQiCF/5gCDo2nAgiwxtlAxGd/8OYQ+cYbojOCxWc80aQ3QiCgsPRjVbETZx6oV4IbnOUbh3WtsmapmmT8/14kZPY7LQuOUm1sHxvknPOk/O8Puf7HE4SaFazmtWsZt3K5aoZNP70i53tbq7foX4n6wP6Dfow9QLdSN0S3aBORCsSoITEKiQEs07KSQA2h9w0kEKWkkg5NC5pDGPE4Y/mfV3JWedI/7lPZyMFSD+1a3PM0x6c2wFsBJIARRhIAgEIpGB3sK+ID16K4yvHLLZvic+hCUkX8fWVtfDB2m9Ojd00QGbnrhcQ7wOJigP/NV4K5iqPmTSz59d+f/rLJQNkdu7ejnQKiK0wPCqeY8bz2NJ77vQvJZpX6dShFYwH0eEXbP+iHcg+s3uD+Rqp6MrKwpeO5zKrrWfj8HCuogPm655o+OD8EnkZBbPlxANq77xuG0vMcgDn2BTtyhePZf0CuQfuJ3vfvWT8PGa2HPjitsXuLlFbFpg3Rbnypfdzvs+dr+/DtbaSPnWGqfeOkcjM0ua8xuIlfNi8eAdqwlcuEZNwra0AJJ/YzoaPj5Hf8mDQDTUMH2yHA2C2Piq+PGZBtfT20PfGq3S9tpd0YhVz8huDFzjUHwogud668KoMUKqubY/S/8lx8lseIlPIY+VzR8MjgbE2HAB1Nxq/sBsbjhwgeXAf6UScnPnR8Qjh3xYKgOioC3+TEABd2x9j4MRH+I88TKZQwGS14yUwtzocALXVg6/CDwTdePMgyUP7SXckyJvVhi/O3R4OILXVh68yQVDJx7cycOI42UQC1YIvHgsHqBtfm39B1YwHlA8FAM3Xha92DQWVHhxi5LmXiE/P4GrBF7dTpfOUn8SIeYLWRMNXF6AwMcnY4aPY0Ld0eg7PURu+OP9iATQDdEXFV9OA9OAQ44ffITGdIe5VfsWoAY+k6+EAMCVpXWT8vwQoTEwxdvhtbPgsSc/hcPXgQZoKBZBssoyoGb+0Pj04zPiRoySmZ0h4Xu03bBi/xBIyXcW56PgbMpSv+tdnSXoeHq5BeHDiWiiAw/tDiv5jBAnN53FtraRODjLx1rvEZ2ZIeLF/AA3AI+E7XQwFMOdfwkprsza8JOKeY3TvAZSbRz/8RJfn8PAajhfCK3BpkSUUuwR+JDwS7S5G4ex5QLR4XiWogXgkTK7cgfKDzC/ot2C2mvHFdSlaXHBFlhGPyGVjqcuhAGuGPxsFvouCv2GC5cTjTJ9vvnBhLhSgSNYrEoWVikfKOK9waKG5IkDPmS+GEHswsisOb5rwsWfvuPjzrwvNi/65m9r25F1m3suY24FsE5D8n/CTGL87OBkz78PbL5+/dqO1qr/X/9y6dXXMjw9gfp98r885DUi2DrQG0YMpKVM3TnFERwBqR8QDfFbSXHCzZ3xp1kkpnEs7s5Rhf2EaQ27EoVHDrpBhZP3VH7PV+JrVrGY1q1m3bv0NDRMeqgk0OuwAAAAASUVORK5CYII=">
                  <h1 class="text-xl font-bold">Food Products Packaging</h1>
                  <p class="text-gray-500 text">User experience design services focus on building smooth interaction flows between users and software. ScienceSoft’s comprehensive approach to UX design ensures superior user satisfaction, resulting in maximized use of features and higher dwell time of all types of web and mobile software.</p>
                </div>
             </div>
            </div>
          </div>
        </div>
      </div>
    </section >
    <!-- more services -->
    <section class="bg-black px-10 py-20">
      <div class="container space-y-10">

        <div class="lg:max-w-5xl text-center mx-auto space-y-2">
          <h1 class="text-3xl text-white font-bold">Our LOGO Design Services<span class="text-red-400 text-xl">.</span></h1>
          <p class="text-gray-400">While providing the option of one-off web design, we also suggest continuous design support services that enable non-stop evolution of your ever-growing web solution. Working in close cooperation with your team, we gradually introduce improvements and changes based on regular user surveys and A/B testing, thus ensuring superior user experience.</p>
        </div>

        <div class="grid lg:grid-cols-3 gap-7 ">
          <div class="space-y-3">
            <div class="flex justify-start gap-4">
              <img src="./logodesignImages/brochuredesign.png" class="h-14" alt="">
              <h1 class="text-3xl text-yellow-600">Brochure<br>Design</h1>
            </div>
            <div class="inline-block items-center">
             <nuxt-link to="/contact" class="btn btn-services uppercase">GET MY Brochure DESIGN</nuxt-link>
            </div>
          </div>
          <div class="space-y-3">
            <div class="flex justify-start gap-4">
              <img src="./logodesignImages/businesscard.png" class="h-14" alt="">
              <h1 class="text-3xl text-red-500">Business Card<br>Design</h1>
            </div>
            <div class="inline-block items-center">
             <nuxt-link to="/contact" class="btn btn-services2 uppercase">GET MY Business Card DESIGN</nuxt-link>
            </div>
          </div>
          <div class="space-y-3">
            <div class="flex justify-start gap-4">
              <img src="./logodesignImages/cosmeticpakaging.png" class="h-14" alt="">
              <h1 class="text-3xl text-blue-800">Cosmetics<br>Packaging</h1>
            </div>
            <div class="inline-block items-center">
             <nuxt-link to="/contact" class="btn btn-services3 uppercase">GET MY Cosmetics Packaging</nuxt-link>
            </div>
          </div>
          <div class="space-y-3">
            <div class="flex justify-start gap-4">
              <img src="./logodesignImages/foodproductpakkaging.png" class="h-14" alt="">
              <h1 class="text-3xl text-purple-800/90">Food Products<br>Packaging</h1>
            </div>
            <div class="inline-block items-center">
             <nuxt-link to="/contact" class="btn btn-services4 uppercase">GET MY Food Products Packaging</nuxt-link>
            </div>
          </div>
          <div class="space-y-3">
            <div class="flex justify-start gap-4">
              <img src="./logodesignImages/socialmediadesign.png" class="h-14" alt="">
              <h1 class="text-3xl text-pink-600 ">social media<br>Design</h1>
            </div>
            <div class="inline-block items-center">
             <nuxt-link to="/contact" class="btn btn-services5 uppercase">GET MY social media Design</nuxt-link>
            </div>
          </div>
          <div class="space-y-3">
            <div class="flex justify-start gap-4">
              <img src="./logodesignImages/stationorydesgin.png" class="h-14" alt="">
              <h1 class="text-3xl text-sky-700">stationory<br>Design</h1>
            </div>
            <div class="inline-block items-center">
             <nuxt-link to="/contact" class="btn btn-services6 uppercase">GET MY stationory desgin </nuxt-link>
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