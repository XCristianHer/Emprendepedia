<template>
  <div class="container">
    <span class="big-circle"></span>
    <img src="img/007-hourglass.png" class="square" alt="" />
    <div class="form-invertida">
      <form action="indexContactenos.html" method="POST" autocomplete="off">
        <h3 class="title">¿Quienes somos?</h3>
        <p class="text-invertido">
          Somos líderes dando acompañamiento a las
          personas que tienen un emprendimiento y quieren tener una
          visión mas clara sobre su ideas de negocio. <br>
          <br> Nuestro equipo de trabajo está conformado por:
          <br />
          <br />Francy Alvarado - Ingeniera <br />Tania Bonilla - Economista
          <br />Brayan Martínez - Ilustrador <br />Nicolás Bravo - Adm. de Empresas <br />Edisson Alejo - Ing.
          Telecomunicaciones.
        </p>
      </form>

      <div class="contact-form-invertida">
        <span class="circle one"></span>
        <span class="circle two"></span>

        <div class="contact-info">
          <h3 class="title">¿Quienes nos apoyan?</h3>
          <p class="text">
            Contamos con el apoyo del ministerio de las tic.<br />
            También, estamos asesorados por la Universidad Tecnológica de Pereria
            a través del ingeniero Victor Vargas
          </p>
          <div class="info">
            <img src="../assets/img/teamwork.jpg" class="image" />
          </div>

          <div class="social-media">
                            <p>Conéctate con nosotros :</p>
                            <div class="social-icons">
                                <a target = "_blank" href="https://www.facebook.com/">
                                    <img src="../assets/img/043-facebook-1.png" class="icon2">
                                </a>
                                <a target = "_blank" href="https://twitter.com/">
                                    <img src="../assets/img/013-twitter-1.png" class="icon2">
                                </a>
                                <a target = "_blank" href="https://instagram.com/">
                                    <img src="../assets/img/034-instagram.png" class="icon2">
                                </a>
                                <a target="_blank" href="https://www.linkedin.com/">
                                    <img src="../assets/img/031-linkedin.png" class="icon2">
                                </a>
                                <a target="_blank" href="https://github.com/Grupo-5-N-9-Grupo-UTP">
                                    <img src="../assets/img/039-github.png" class="icon2">
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script
    src="https://kit.fontawesome.com/64d58efce2.js"
    crossorigin="anonymous">
</script>

<script>
  import "../assets/scripts/app.js";
  export default {
    name: "index-quienes-somos",
    props: {
    msg: String
    }
}
</script>

<style>
  @import "../assets/styles/style.css";
</style>
