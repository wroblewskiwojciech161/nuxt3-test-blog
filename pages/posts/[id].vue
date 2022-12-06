<template>
    <div class="container px-5 mx-auto mt-5">
        <div class="max-w-2xl mx-auto">
            <div class="mb-3 font-light text-gray-500 dark:text-gray-400" v-html="post.content.rendered"></div>
        </div>
    </div>
</template>

<script setup>
    import { onMounted } from 'vue';
    const {id} = useRoute().params
    const uri = `${process.env.API_URL}/${id}`
    const { data: post} = await useFetch(uri, { key: id})

    const newYoast = post.yoast_head_json;
    function parseYoastHead(newYoast) {
        if (!newYoast) {
            return {
            loaded: false
            }
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
        return string.replace(
            "SERVER_DOMAIN",
            "FRONTEND_DOMAIN"
        );
    }

    onMounted(()=>{
        console.log("no halo")
        
    })
</script>

<style scoped>
</style>