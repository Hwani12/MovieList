<template>
  <div>
    <!-- <router-link to="title">
      {{this.$movieList[movieId].name}}
    </router-link> -->
    <div class="movie_box">
      <ol>
        <li v-for="(movie, idx) in this.$movieList" :key="idx">
          <router-link :to="{ name: 'title', params:{ movieId : idx, }}">
            {{movie.name}}
          </router-link>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  body{
    background-color: #f1f1f1;
  }
  ol, li{
    font-size: 30px;
  }
  a{
    text-decoration: none;
    color: black;
    font-weight: bold;
  }
  a:hover{
    cursor: pointer;
    color: blue;
  }
  .movie_box{

    background-color: #fff;
    /* border: 3px solid blueviolet; */
    border-radius: 50px;
    width: 400px;
    margin: 40px auto;
    padding: 20px 40px;
    line-height: 45px;
  }
</style>