<template>
<div>
<AppHeader :posts="false" :title="data?.new_posts.title" :image="data?.new_posts.img"/>
    <article class="mb-4">
            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-md-10 col-lg-8 col-xl-7" v-html="data?.new_posts.blogcontent">
                    </div>
                </div>
            </div>
        </article>
</div>
</template>

<script setup lang="ts">

import {postTypes} from 'types/posts'
import { useRoute } from 'vue-router';

definePageMeta({
  layout : "default",
});


const route = useRoute();
const runtimeConfig = useRuntimeConfig();
const base_url = runtimeConfig.public.apiUrl;

const {data, error} = await useAsyncData(
    'posts',
    async () => {
      const result = {
        new_posts: {} as postTypes,
      }
      result.new_posts = await $fetch('https://publisist.az/api/data/'+ route.params.id);
      return result;
    }
);






</script>