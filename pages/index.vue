<template>
  <div class="antialiased bg-body text-body font-body">
      <section class="py-20">
        <div class="container px-4 mx-auto">
          <div class="flex flex-wrap -mx-4 -mb-12 lg:-mb-16">
             <div v-for="post in data" class="w-full md:w-1/2 lg:w-1/3 px-4 mb-12 lg:mb-16">
              <span class="inline-block mb-4 text-xs text-gray-500">{{post.date}}</span>
              <NuxtLink :to="`/posts/${post.id}`">
                <h2 class="mb-4 text-3xl font-semibold font-heading" v-html="post.title.rendered"> </h2>
              </NuxtLink>
              <p class="mb-4 lg:mb-8 text-base text-gray-500"> {{post.slug }}</p>
              <img :src="post.yoast_head_json.twitter_image"/>
            </div>
          </div>
        </div>
      </section>
  </div>
</template>

<script setup>

const { data } = await useFetch(process.env.API_URL)
  
</script>

