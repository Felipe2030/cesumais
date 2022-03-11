<template>
    <div class="container_login">
        <div class="container_login_card">
            <div class="container_login_card_image">
                <img src="../assets/mesa_escritorio.png" alt="mesa escritorio">
            </div>
            <div class="container_login_card_button">
                <div class="logo">
                    <img src="../assets/logo_cesumais.png" alt="logo cesumais">
                </div>
                <div class="microsofit">
                    <a href="/home">
                        <img src="../assets/botao_microsoft.png" alt="botao de login">
                    </a>
                </div>
                <div class="decrition">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper libero sit amet elit interdum porttitor. Donec tincidunt porttitor tincidunt. Phasellus eu lorem id ipsum finibus eleifend vitae a mauris.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
    .container_login {
        width: 100%;
        height: 100vh;
        background: #035674;
    }

    .container_login_card {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        width: calc(100% - 38%);
        height: calc(100% - 10%);
        background: #FFF;
        border-radius: 10px;
        display: flex;
    }

    .container_login_card_image {
        width: 40%;
        height: 100%;
    }

    .container_login_card_image img {
        width: 100%;
        height: 100%;
    }

    .container_login_card_button {
        width: 60%;
        height: 100%;
        display: flex;
        justify-content: start;
        align-items: center;
        flex-direction: column;
    }

    .container_login_card_button .logo {
        padding: 110px 0px 42px 0px;
    }

    .container_login_card_button .logo img {
        width: 287.21px;
        height: 130.18px;
    }

    .container_login_card_button .microsofit {
        padding: 0px 0px 50px 0px;
    }

    .container_login_card_button .microsofit a img {
        width: 267.14px;
        height: 51px;
    }

    .container_login_card_button .decrition {
        padding: 0px 40px 0px 40px;
    }

    .container_login_card_button .decrition p {
        font-size: 1em;
        font-weight: 500;
        font-family: Arial, Helvetica, sans-serif;
        line-height: 1.3;
        text-align: left;
    }

    @media only screen and (max-width: 1280px) {
        .container_login_card {
           width: calc(100% - 14%);
           height: calc(100% - 4%);
        }
    }

    @media only screen and (max-width: 920px) {
        .container_login_card_image {
            display: none;
        }

        .container_login_card_button {
            width: 100%;
            height: 100%;
        }
    }
</style>