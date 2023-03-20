<template>
<div>
    <AppHeader :posts="true"  />
  <div class="container px-4 px-lg-5">
            <div class="row gx-4 gx-lg-5 justify-content-center">
                <div v-if="data?.new_posts" class="col-md-10 col-lg-8 col-xl-7">
                    <!-- Post preview-->
                    <div v-for="item of data?.new_posts" :key="item.id" class="post-preview">
                        <NuxtLink :to="'blogs/'+item.id">
                            <h2 class="post-title">{{ item.title }}</h2>
                            <!-- <h3 class="post-subtitle" v-html="item.blogcontent"> </h3> -->
                        </NuxtLink>
                        <p class="post-meta">
                            Posted by
                            <a target="_blank" href="https://www.linkedin.com/in/alpayabbaszade/">Alpay Abbaszade</a>
                            {{ item.date }}
                        </p>
                        <hr class="my-4" />
                    </div>
                    <!-- Divider-->
                    <!-- <hr class="my-4" /> -->
                    <!-- Pager-->
                    <!-- <div class="d-flex justify-content-end mb-4"><a class="btn btn-primary text-uppercase" href="#!">Older Posts →</a></div> -->
                </div>
            </div>
        </div>
</div>
</template>

<script setup lang="ts">


import {postTypes} from 'types/posts'

definePageMeta({
  layout : "default",
});

const runtimeConfig = useRuntimeConfig();
const base_url = runtimeConfig.public.apiUrl;

// const { data, pending, error, refresh } = await useAsyncData(
//   'mountains',
//   () => $fetch(base_url + 'data'),{
//     server : false
//   }
// );

const {data, error} = await useAsyncData(
    'posts',
    async () => {
      const result = {
        new_posts: {} as postTypes,
      }
      result.new_posts = await $fetch('https://publisist.az/api/dataAuthor');
      return result;
    }
);


</script>