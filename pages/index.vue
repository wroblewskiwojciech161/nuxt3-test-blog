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
              <div class="mb-2 lg:mb-4 text-base text-gray-500" v-html="trimText(post.content.rendered)"></div>
              <NuxtLink :to="`/posts/${post.id}`">
                <div class="text-md font-medium hover:no-underline mb-2 lg:mb-4" href="#">Read more</div>
              </NuxtLink>
              <img v-if="post._embedded['wp:featuredmedia']['0'].source_url" :src="post._embedded['wp:featuredmedia']['0'].source_url"/>
            </div>
          </div>
        </div>
      </section>
  </div>
</template>

<script setup>
  const runtimeConfig = useRuntimeConfig()
  const { data } = await useFetch(`${runtimeConfig.api.url}?_embed`)
  const shortDescriptionLength = 180;
  function trimText(text){
    return text.substring(0,shortDescriptionLength)+"...";
  }
</script>

