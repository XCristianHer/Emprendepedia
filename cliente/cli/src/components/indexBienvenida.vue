<template>
    <div class="container">
        <span class="big-circle"></span>
        <div class="form">
            <div class="contact-form">
                <br>
                <h3 class="title">
                    <center>EMPRESA EMPRENDIMIENTO</center>
                </h3>
                <!-- <img src="../assets/imagen11.jpg"> -->
                <!-- <img src="../assets/bruce.jpg"> -->

                <center><h2 class="title">Bienvenido a la plataforma que te ayudará con tu idea de negocio.
                </h2>

                <p class="text" style="color:white">
                    En esta plataforma encontraras diferentes artículos beneficiosos si eres un emprendedor
                    que no sabe como plantear una idead de negocio,
                    y si ya tienes la idea planteada, pues te asesoramos con qué tipo de documentación
                    necesitas para que tu idea de negocio se convierta en una empresa y si ya tienes la empresa,
                    la información de la plataforma te ayudará a hacer cálculos financieros y de como reestructurar
                    las falencias que estan en la empresa para que sean beneficiosas y hasta tal vez lucrativas.
                </p>

                <input type="submit" value="Desliza hacia abajo para conocer más" class="btn" />
                </center>
                <br>
            </div>
        </div>
    </div>
</template>

<script
    src="https://kit.fontawesome.com/64d58efce2.js"
    crossorigin="anonymous">

</script>

<script>
    import '../assets/scripts/app.js';
    export default {
        name: 'index-bienvenida',
        props: {
        msg: String
        }
    }
</script>

<style>
    @import '../assets/styles/style.css';
</style>
