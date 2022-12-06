<template>
    <div class="container px-5 mx-auto mt-5">
      <div class="max-w-3xl mx-auto text-container">
        <div v-html="post.title.rendered" class="font-medium leading-tight text-3xl mt-0 mb-2 text-black-500"></div>
        <img
          v-if="post?._embedded['wp:featuredmedia']['0']?.source_url"
          :src="post._embedded['wp:featuredmedia']['0'].source_url"
          class="h-14"
          alt="section-image"
          width="auto"
        />
        <div v-html="post.content.rendered"></div>
      </div>
    </div>
  </template>
  
  <script setup>  
  const { id } = useRoute().params;
  const runtimeConfig = useRuntimeConfig()
  const uri = `${runtimeConfig?.api?.url}/${id}?_embed`;
  const { data: post } = await useFetch(uri, { key: id });
  const { metaTags } = parseYoastHead(post.value.yoast_head_json);

  function generateMetaTags(metaTags){
    let tags = {}
    if(metaTags?.twitter_misc){
      tags = {
        title: post.value.title.rendered,
        meta: [
            { name: 'description', content: metaTags.description},
            { name: 'article_published_time', content: metaTags?.article_published_time},
            { name: 'article_modified_time', content: metaTags?.article_modified_time},
            { name: 'author', content: metaTags?.author},
            { name: 'twitter_card', content: metaTags?.twitter_card},
            { name: 'robots', content: metaTags?.robots},
            { property: 'og_locale', content: metaTags?.og_locale},
            { property: 'og_type', content: metaTags?.og_type},
            { property: 'og_title', content: metaTags?.og_title},
            { property: 'og_description', content: metaTags?.og_description},
            { property: 'og_url', content: metaTags?.og_url },
            { property: 'og_site_name', content: metaTags?.og_site_name}
        ],
        link: [
            { rel: "canonical", href: metaTags.canonical}
        ]
      }

      Object.keys(metaTags.twitter_misc).forEach(function (item, index){
        tags.meta.push({ name: `twitter:label${index}`, content: item})
        tags.meta.push({ name: `twitter:data${index}`, content: Object.values(metaTags.twitter_misc)[index]})
      })
    }

    return tags;
  }


  useHead(generateMetaTags(metaTags))

  function parseYoastHead(newYoast) {
    if (!newYoast) {
      return {
        loaded: false,
      };
    }
    const { title, robots, schema, ...metas } = newYoast;
    const metaTags = {};
    Object.assign(metaTags, metas, {
      robots: Object.values(robots).join(", "),
    });
    const schemaString = handleYoastUri(JSON.stringify(schema));
    return {
      title,
      metaTags,
      schemaString,
      loaded: true,
    };
  }

  function handleYoastUri(string) {
    return string.replace("SERVER_DOMAIN", "FRONTEND_DOMAIN");
  }

  </script>
  