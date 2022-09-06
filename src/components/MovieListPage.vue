<template>
    <div class="container">
        <a :href="this.$movieList[$route.params.movieId].src" target="_blank">
            <img :src="this.$movieList[$route.params.movieId].img" class="movie_img">
        </a><br />
        <span class="title">
            제목 <span style="color: red; font-size:40px; font-weight: bold;">|</span> 
            {{this.$movieList[this.$route.params.movieId].name}} 
            <span style="font-size: 20px; font-weight: bold; color: green;">상영중</span>
        </span>
        <hr />
        <p class="movie_premiere">
            <span style="color: rgb(143, 143, 143); font-size: 20px; font-weight: bold;">개봉일</span>
            {{this.$movieList[this.$route.params.movieId].premiere}} 
        </p>
        <p class="movie_premiere">
            <span style="color: rgb(143, 143, 143); font-size: 20px; font-weight: bold;">장르</span>
            {{this.$movieList[this.$route.params.movieId].Genre}}
        </p>
        <p class="movie_grade">
            <span style="font-weight: bold;">평점</span>
            {{this.$movieList[this.$route.params.movieId].grade}}
            <img src="https://iconarchive.com/download/i81329/icons8/christmas-flat-color/star.ico" style="width: 16px;">
        </p>
        <p class="cast">
            <span style="font-weight: bold; font-size: 23px;">출연진</span>
            {{this.$movieList[this.$route.params.movieId].cast}}
        </p>
        <p class="cast">
            <span style="font-weight: bold; font-size: 23px;">줄거리</span>
            {{this.$movieList[this.$route.params.movieId].plot}}
        </p>

    </div>
</template>

<script>
export default {
    
}
</script>

<style>
    .container{
        background-color: #fff;
        margin: 0 auto;
        width: 550px;
        height: 800px;
        border: 3px solid #000;
        border-radius: 5%;
        padding: 20px 50px;
        text-align: center;
    }
    .movie_img{
        border: #000 solid 2px;
        border-radius: 20px;
        width: 130px;
    }
    .title{
        padding: 10px 0;
        display: block;
        margin: 0px;
        font-size: 30px;
        font-weight: bold;
    }
    .movie_premiere{
        width: 200px;
        margin: 10px 0;
        display: inline-block;
        font-size: 16px;
        font-weight: bold;
    }
    .movie_grade{
        width: 200px;
        margin: 10px 0 0 0;
        display: inline-block;
        font-size: 20px;
    }
    .cast{
        font-size: 20px;
    }
</style>