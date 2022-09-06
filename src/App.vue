<template>
  <div>
    <router-link to="/"><h1 class="main_title">동환이의 영화 추천!</h1></router-link>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
    body{
      width: 100%;
    }
    .main_title{
      text-align: center;
    }
</style>
