<template>
    <div class="container-home-conteudo-session-card">
        <div class="container-home-conteudo-session-card-texto">
            <span>{{ title }}</span>
        </div>
        <div class="container-home-conteudo-session-card-imagem">
            <img :src="image">
        </div>
        <div class="container-home-conteudo-session-card-link">
            <a :href="link">ACESSAR</a>
        </div>
    </div>
</template>

<script>
export default {
  name: 'CardComponent',
  props: ['image','link','title']
}
</script>

<style>

.container-home-conteudo-session-card{
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 280px;
    height: 230px;
    background: #FFFFFF;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.15);
    border-radius: 4px;
    margin: 14px;
}
.container-home-conteudo-session-card-texto{
    display: flex;
    justify-content: center;
    padding: 16px;
}
.container-home-conteudo-session-card-texto span{
    font-family: Ubuntu;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 20px;
    letter-spacing: 0.25px;
    color: #053A5A;
}
.container-home-conteudo-session-card-imagem{
    width: 200px;
    height: 80px;
    margin: 18px 0px;
}
.container-home-conteudo-session-card-imagem img {
    width: 100%;
    height: 100%;
}
.container-home-conteudo-session-card-link{
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
}
.container-home-conteudo-session-card-link a{
    font-family: Ubuntu;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.25px;
    color: #053A5A;
    padding: 20px;
    text-decoration: none;
}
</style>