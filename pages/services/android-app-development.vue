<template>
  <div>
    <section class="px-20 pt-64 pb-48 bg-gray-800 bg-cover" :style="{ backgroundImage: `url(${bgImages.heroimage})`}">
      <div class="container">
        <div class=" w-96 max-w-2xl text-white space-y-1">
          <h1 class="text-3xl  font-bold ">Android App Development</h1>
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
            <img src="../services/androiddevelopmentImages/servicespics-1.jpg" class="rounded-lg w-full" alt="computer pic">
            <h1 class="text-3xl font-bold max-w-full w-full">Mobile Apps We Develop</h1>
            <div class="text-gray-500 space-y-5">
              <p>Mobile app development services are aimed at building iOS & Android applications that effectively complement or substitute web solutions. Having delivered 35+ mobile app development projects so far, <span class="text-red-800">GeekyRush</span> ensures app success by delivering striking UI, secure app code, and resilient back ends.</p>
              <p>We promise any integration is automated and can be easily managed by yourself!</p>
            </div>
           </div>
          </div>
          <div class="col-span-7">
            <div class="grid grid-cols-2 gap-5">
             <div class="space-y-5">
                <div class="space-y-3">
                  <img src="./androiddevelopmentImages/data-analytics.svg" class="h-20 rounded-full" alt="">
                  <h1 class="text-xl font-bold">Field service and mobile BI</h1>
                  <p class="text-gray-500 text">Prospects can calculate products and services, which gives you a better knowledge of what they want and what you can offer.</p>
                </div>
                <div class="space-y-3">
                  <img src="./androiddevelopmentImages/iptv.svg" class="h-20 rounded-full" alt="">
                  <h1 class="text-xl font-bold">IPTV and SVOD apps</h1>
                  <p class="text-gray-500 text">Prospects can calculate products and services, which gives you a better knowledge of what they want and what you can offer.</p>
                </div>
                <div class="space-y-3">
                  <img src="./androiddevelopmentImages/shopping-cart.svg" class="h-20 rounded-full" alt="">
                  <h1 class="text-xl font-bold">mCommerce apps</h1>
                  <p class="text-gray-500 text">Prospects can calculate products and services, which gives you a better knowledge of what they want and what you can offer.</p>
                </div>
                <div class="space-y-3">
                  <img src="../services/androiddevelopmentImages/ar.svg" class="h-20 rounded-full" alt="">
                  <h1 class="text-xl font-bold">Augmented reality apps</h1>
                  <p class="text-gray-500 text">Prospects can calculate products and services, which gives you a better knowledge of what they want and what you can offer.</p>
                </div>
                <div class="space-y-3">
                  <img class="h-20 rounded-full" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAGvklEQVRoge2Z34tdVxXHP2vvfe6dH5lpYifGJLQpNpq2CQmWRBQRrDYP7UsLEYT+Aa2W+lCovqj1JYJt9aGkGKggSPFBgiCoSIj4AzE6NmlLbdIUjSbEpmYmmWRu5t47c87Za/lwzp05M52m3pkz9SUL1uwze+291/qutdf+deEm3aRVkdQ5WOvlr+wg4WFztl+ErYjcVkjsgsHbonIM4+ejew6/VZfOWgBce+WJvc7HZwj2eZyCs2JksYVGJgVHAZXjZOHro5944U+r1b0qAHbi0aTl/fOS2JcJKnjwQ3cShnbhB+5EwkbA0Ow/xLl/ELunid1zEA2iM8vcD0bT+KTsfTH7wAFMH3/yQ7Iu/Rkhfo6guMGPkIx8GtfYhLhhxA2AJIBiOgfawXQGzSbIZv6Kzk4U0cj871Q5sH734asfGAA78WhyPQlHaeh9BMUPfxQ/dBfODyF+GNwgIg2QABhYiuksph1M2xDb5N2/EzvnIDrI/B9HuHy/7DyS9muLWwmAVpI8T6L3ESJuaDO+uRGki0kXo43ZDGbXMWuVPIPRBumAzGIyi2vcihv8MHiFJH52ho3fX4ktfUdg+tXH90li4zSiSGMAP3QbEgaRMIS4QXADpfcTCv8YEDFLQWcxm8W0C7GDZR3i3NtYmkLmTVO3b/3uwyf7sSf0C0AczxQJq0gyWHreCkNNwTKQBlgAKf1jESMDSTGbBboYXUw6SGhgcQ5URYL7LrC/L3v6aXz95ON3W9NO04wQDNccRpIBJAwU8955jGmUa8BM4XVAJAEZQRhFbAQ0x6wLsYtlXSydxXIPmYdZd1c/+0RfETAnD+O1WN9dLOY1SjFFJrE4DS4WjSv7gKFgc5hdBnOIjSLWLKYTXXBSjqng/UPAs/+rTX0lsTn7As7AGSIGModxHdVLmF0FqRiPVXsWLIBoESW7UjjA9RxSyMXp/f3Y1FcExHM7YixisopxFeOXTk7r/Sm9LbHMEZl3iIlh3m5fMwDA5nmlIgtJ+p6ZVAIxKUsW+lAZZ9F4snXtAAi24OX5j3cbvWy9LC6lGrKKIwTtx6T+NjKTdzBXdBNZxggph6x825I6W6aUXhsH6i6uGQBROYdRLDwqBcN8js7LqqXJkv/L7yoIFUylbGPn1gxAVPkt5sAcZoKpw6zKHhOH4TGWyPAF9+QmFS4jZQ4Iv1kzAF6av0I9EMACogExX2FXlDgEj0jJ9Oocor7ksq8GxEI5pkeUX68ZgJE933sDdS9jDtSzUPqiVA9akfUYt7jNfH3R19SV/dxfRnYeOt2PTX2fhYjhMLnuQyKmDskjoOANtDfJWXwbg3K+U8kJKY7SFY7RHe7XnL6P0yP+/E+I4TwxgHrMAmgoPVt+WwBNirLKS9tpwMpSLFxYn2Q/XXMAsvNIajE8JzFB8gSJCeQJkjeQmJRc5kessPbqyrZ5AvPtE8iS78jHDs2tOQCA0XTbi5Yn/7SY0GONCZolWB6wGMpyQW55wPKybR7Q2CjrApaFs+u6d/xoJbasCIDsfSxz0X+bvAF5ArEBsfCoxQaWN7HYpJAXbLFZyqrtSxnJ07L3sRVd7Ff1KnH9tYOvmbc9+DKJXe9UucxhDhY2NnUQAXVYxqu37Hn63pXa0P8qVKFo8Ws+No+aqqD6bgBVEPPGlzuuunIlyr6xGhtW/bDVOnnwz4j7VHH0qTxoLV1GYeFxqwQh6PGRe7/5mdXoX1EOVCn49FlTxaJimWGpYSnYnGBpyXM9ppDniqmSZ7PPrVZ/PU+L49/6t0h/53jQC7d88mBfl5flaFU50COJ7T+Ae6SvPs5+X4fuWgDoXOeHkD2y+B58IxIgWdG6v9xItdDVY1/8heWdB830hnkl4lTC8C837D/yUB16a/194IEHHjyxbdsd7Njxce65Zxe7d+9kbGyMiYlJzp49y+uv/43x8XFeeunHe+vSuepVqEpm9r73WbP+7rzvR7XkQI+2bNm6rtVq3X3mzBkuXbrEmTNvMjw8TKvV4urVKSYmJhkaGnyjTp21AhgbG0vb7Rk2bhxj8+YtbN++ndHRUaamrnDx4js458jzfMU/ZixHtQK4fPkKnU6bNE1pt7u02935CExNXWFycgLnfJ0q647ArbTbzfeMQKORkOd5nSrrBdBqTZ+/dm16z40i4H3yrzp11gpg06ZNeO9vGAERqXXprhXAxMTkRLvdbqVpOrpcBKampq44l1yqU2et3ujRgQNfOrRjx/Yndu3axYYN6zl16hRHjx574dixo1+tW1etG1mPOp3WU2DjlarxENxTa6HrJv2/6b+/ypPGoK0a/gAAAABJRU5ErkJggg==">
                  <h1 class="text-xl font-bold">Anything you can imagine</h1>
                  <p class="text-gray-500 text">Prospects can calculate products and services, which gives you a better knowledge of what they want and what you can offer.</p>
                </div>
             </div>
             <div class="space-y-5 pt-12">
                <div class="space-y-3">
                  <img src="./androiddevelopmentImages/booking.svg" class="h-20 rounded-full" alt="servicecalculator">
                  <h1 class="text-xl font-bold">Booking and ticketing apps</h1>
                  <p class="text-gray-500 text">Prospects can calculate products and services, which gives you a better knowledge of what they want and what you can offer.</p>
                </div>
                <div class="space-y-3">
                  <img src="./androiddevelopmentImages/communication.svg" class="h-20 rounded-full" alt="">
                  <h1 class="text-xl font-bold">Messaging and VoIP apps</h1>
                  <p class="text-gray-500 text">We create ecommerce solutions for B2C, B2B and marketplace business models. We can smoothly integrate an ecommerce component into your operating web app or launch a new ecommerce presence.</p>
                </div>
                <div class="space-y-3">
                  <img src="./androiddevelopmentImages/telemedicine-app.svg" class="h-20 rounded-full" alt="">
                  <h1 class="text-xl font-bold">Telemedicine Apps</h1>
                  <p class="text-gray-500 text">We create ecommerce solutions for B2C, B2B and marketplace business models. We can smoothly integrate an ecommerce component into your operating web app or launch a new ecommerce presence.</p>
                </div>
                <div class="space-y-3">
                  <img src="./androiddevelopmentImages/customer-portal-green.svg"  class="h-20 rounded-full"  alt="">
                  <h1 class="text-xl font-bold">Patient and hospital apps</h1>
                  <p class="text-gray-500 text">Prospects can calculate products and services, which gives you a better knowledge of what they want and what you can offer.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-black px-10 py-20">
      <div class="container space-y-10">

        <div class="lg:max-w-3xl text-center mx-auto space-y-2">
          <h1 class="text-3xl text-white font-bold">Our Mobile Application Development Services<span class="text-red-400 text-xl">.</span></h1>
          <p class="text-gray-400">GeekyRush welcomes possibilities to assist in specific development stages as well as to provide full-cycle mobile app implementation. Our mobile app development services include:</p>
        </div>

        <div class="grid lg:grid-cols-4 gap-5">
          <div class="space-y-5">
            <h2 class="text-white text-2xl font-bold">Mobile consulting<span class="text-red-400">.</span></h2>
            <p class="text-gray-400 text-sm">Our consultants assist with app concept finalization, advise on platform/device compatibility, plan activities, and <span class="font-bold text-white">optimize costs.</span></p>
          </div>
          <div class="space-y-5">
            <h2 class="text-white text-2xl font-bold">Mobile UX and UI design<span class="text-red-400">.</span></h2>
            <p class="text-gray-400 text-sm">GeekyRush’s designers create slick and intuitive interfaces that <span class="font-bold text-white">ensure conversion, engagement, </span>and easy <span class="font-bold text-white">adoption.</span></p>
          </div>
          <div class="space-y-5">
            <h2 class="text-white text-2xl font-bold">Mobile app development<span class="text-red-400">.</span></h2>
            <p class="text-gray-400 text-sm">Having completed <span class="font-bold text-white">350+</span> projects, our developers create and deploy  <span class="font-bold text-white">fast, stable</span> & high-performing mobile apps.</p>
          </div>
          <div class="space-y-5">
            <h2 class="text-white text-2xl font-bold">Back end development<span class="text-red-400">.</span></h2>
            <p class="text-gray-400 text-sm">Our back-end developers build <span class="font-bold text-white">robust </span>and <span class="font-bold text-white">secure</span> mobile back ends to ensure <span class="font-bold text-white">smooth </span>and <span class="font-bold text-white">quick </span>data sync and transfer.</p>
          </div>
          <div class="space-y-5">
            <h2 class="text-white text-2xl font-bold">Mobile app integration<span class="text-red-400">.</span></h2>
            <p class="text-gray-400 text-sm">Well-versed in a wide range of APIs, we guarantee <span class="font-bold text-white">seamless integration </span>with back ends and any third-party software.</p>
          </div>
          <div class="space-y-5">
            <h2 class="text-white text-2xl font-bold">Maintenance and support<span class="text-red-400">.</span></h2>
            <p class="text-gray-400 text-sm">GeekyRush offers post-launch <span class="font-bold text-white">L0-L3 support</span>, compliance, security, and performance management & <span class="font-bold text-white">app evolution.</span></p>
          </div>
          <div class="space-y-5">
            <h2 class="text-white text-2xl font-bold">Mobile app modernization<span class="text-red-400">.</span></h2>
            <p class="text-gray-400 text-sm">Our developers skillfully <span class="font-bold text-white">convert websites into mobile apps</span>, redesign architectures, and <span class="font-bold text-white">refactor</span> code in new tech.</p>
          </div>
          <div class="space-y-5">
            <h2 class="text-white text-2xl font-bold">Web development<span class="text-red-400">.</span></h2>
            <p class="text-gray-400 text-sm">GeekyRush is ready to <span class="font-bold text-white">complement </span>your mobile app with a web app, web <span class="font-bold text-white">portal, online store</span> or <span class="font-bold text-white">SaaS.</span></p>
          </div>

        </div>

      </div>
    </section>
    
   
    <!-- We use what tech companies use  -->
    <section class="px-10 py-20 bg-slate-100">
      <div class="container  px-10 space-y-7">
        <div class="space-y-2 text-center">
          <h1 text>Our <span class="text-red-800">Tech Stack</span></h1>
          <h1 class="text-4xl font-bold">We use what tech companies use 🚀</h1>
          <p class="text-gray-500">Our background is from tech companies and that is what we use for our clients. Most agencies rely on slow <br> and insecure technology like android application, IOS application etc. Sounds familiar?</p>
          <p class="text-gray-500">We keep improving and learning new tools, do you need a custom integration we are glad to find a way to<br>help you and expand our stack.</p>
        </div>
        <div class="grid grid-cols-6 justify-items-center gap-10">
          <div class="space-y-16">
            <img class="h-14 w-24" src="./androiddevelopmentImages/cocoa-touch.svg" alt="">
            <img class="h-16 w-28" src="./androiddevelopmentImages/eclipse-full.svg" alt="">
            <img class="h-14 w-24" src="./androiddevelopmentImages/ios-sdk.svg" alt="">
            <img class="h-16 w-20" src="./androiddevelopmentImages/java-logo-vertical.svg" alt="">
            <img class="h-14 w-24" src="./androiddevelopmentImages/kotlin.svg" alt="">
          </div>
          <div class="space-y-16">
            <img class="h-14 w-24" src="./androiddevelopmentImages/swift.svg" alt="">
            <img class="h-14 w-24" src="./androiddevelopmentImages/xcode.svg" alt="">
            <img class="h-14 w-24" src="./androiddevelopmentImages/firebase.svg" alt="">
            <img class="h-14 w-24" src="./androiddevelopmentImages/flutter-logo.svg" alt="">
            <img class="h-14 w-24" src="./androiddevelopmentImages/c-sharp-logo.svg" alt="">
          </div>
          <div class="space-y-16">
            <img class="h-14 w-24" src="./androiddevelopmentImages/android_studio-full.svg" alt="">
            <img class="h-14 w-24" src="./androiddevelopmentImages/css.svg" alt="">
            <img class="h-14 w-24" src="./androiddevelopmentImages/go-logo-blue-small.svg" alt="">
            <img class="h-14 w-24" src="./androiddevelopmentImages/sqlite-logo.svg" alt="">
            <img class="h-14 w-24" src="./androiddevelopmentImages/google-cloud-sql-1.svg" alt="">
          </div>
          <div class="space-y-16">
            <img class="h-14 w-24" src="./androiddevelopmentImages/html.svg" alt="">
            <img class="h-14 w-24" src="./androiddevelopmentImages/javascript-logo.svg" alt="">
            <img class="h-14 w-24" src="./androiddevelopmentImages/intellij-idea.svg" alt="">
            <img class="h-14 w-24" src="./androiddevelopmentImages/netbeans-full.svg" alt="">
            <img class="h-14 w-24" src="./androiddevelopmentImages/node-js-logo-small.svg" alt="">
          </div>
          <div class="space-y-16">
            <img class="h-14 w-24" src="./androiddevelopmentImages/python_1.svg" alt="">
            <img class="h-14" src="./androiddevelopmentImages/php-logo-small.svg" alt="">
            <img class="h-14 w-24" src="./androiddevelopmentImages/jenkins.svg" alt="">
            <img class="h-14 w-24" src="./androiddevelopmentImages/kubernetes-logo.svg" alt="">
            <img class="h-14 w-24" src="./androiddevelopmentImages/google-maps.svg" alt="">
          </div>
          <div class="space-y-16">
            <img class="h-12" src="./androiddevelopmentImages/cordova-logo.svg" alt="">
            <img class="h-16" src="./androiddevelopmentImages/react-native-logo.svg" alt="">
            <img class="h-14 w-24" src="./androiddevelopmentImages/apple-maps.svg" alt="">
            <img class="h-14 w-24" src="./androiddevelopmentImages/html.svg" alt="">
            <img class="h-14 w-24" src="./androiddevelopmentImages/rest-api.svg" alt="">
          </div>
        </div>
      </div>
    </section>
    <!-- FAQ -->
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