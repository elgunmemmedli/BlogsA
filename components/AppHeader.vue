<template>
          <header v-if="posts" class="masthead" style="background-image: url('assets/img/home-bg.jpg')">
            <div class="container position-relative px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-md-10 col-lg-8 col-xl-7">
                        <div class="site-heading">
                            <h1>Blog Səhifəsi</h1>
                            <span class="subheading">Bütün yazılar <a href="https://publisist.az/" target="_blank">publisist.az</a> saytında  </span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <header v-else class="masthead" :style="{ backgroundImage: `url('https://muellif.publisist.az/${image}')`}">
            <div class="container position-relative px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-md-10 col-lg-8 col-xl-7">
                        <div class="site-heading">
                            <h2>{{ title }}</h2>
                            <!-- <span class="subheading">A Blog Theme by Start Bootstrap</span> -->
                        </div>
                    </div>
                </div>
            </div>
        </header>
</template>

<script setup lang="ts">

const props = withDefaults(defineProps<{
   posts : boolean,
   image : string,
   title : string
}>(), {
    posts: true,
    image: '',
    title : ''
});

</script>