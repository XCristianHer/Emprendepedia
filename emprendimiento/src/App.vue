<template>
  <body>
    <div class="topnav">
      <a class="active" href="#"><img src="./assets/img/home-solid.svg" alt="Home"/></a>
      <div class="topnav-left">
        <a href="#step">Paso a Paso</a>
        <a href="#calculate">Calcula tu Rentabilidad</a>
        <a href="#contact">Contáctanos</a>
        <a href="#team">Nuestro Equipo</a>
      </div>

      <div class="topnav-right">
        <a class="active" @click="showUser()"
          ><img src="./assets/img/user-solid.svg" atl="user"
        /></a>
        <div class="topnav-responsive">
          <a class="active" @click="showMenu()"
            ><img src="./assets/img/bars-solid.svg" atl="menu"
          /></a>
        </div>
      </div>
    </div>
    <!-- Menu Responsive -->
    <div id="menu" class="subMenu">
      <a href="#step">Paso a Paso</a>
      <a href="#calculate">Calcula tu Rentabilidad</a>
      <a href="#contact">Contáctanos</a>
      <a href="#team">Nuestro Equipo</a>
    </div>
    <!-- Inicio de sesión -->
    <div id="user" class="subMenu">
      <form id="user" class="form">
        <label for="user">Usuario<input type="text" id="username" name="user" class="input" required/></label>
        <label for="password">Contraseña<input type="password" id="password" name="password" class="input" required/></label>
        <button type="submit" class="button" @click="logIn()">Iniciar Sesión</button>
      </form>
    </div>

    <!-- Secciones  -->
    <div class="wrapper">
      <section id="home" class="section">
        <index-bienvenida />
      </section>

      <section id="step" class="section">
        <index-paso-a-paso />
      </section>

      <section id="calculate" class="section">
        <index-calcular />
      </section>

      <section id="contact" class="section">
        <index-contactenos />
      </section>

      <section id="team" class="section">
        <index-quienes-somos />
        <div class="pasos">
          <div class="paso">
            <h2>Nuestro Equipo</h2>
            <h3 class="team-info__title">Nicolas Bravo</h3>
            <p class="team-info__text">Administrador de Empresas</p>
          </div>

          <div class="paso">
            <h3 class="team-info__title">Tania Bonilla</h3>
            <p class="team-info__text">Economista</p>
          </div>

          <div class="paso">
            <h3 class="team-info__title">Javier Martínez</h3>
            <p class="team-info__text">Ilustrador</p>
          </div>

          <div class="paso">
            <h3 class="team-info__title">Francy Alvarado</h3>
            <p class="team-info__text">Ingeniera</p>
          </div>

          <div class="paso">
            <h3 class="team-info__title">Edisson Alejo</h3>
            <p class="team-info__text">Telecomunicaciones</p>
          </div>
        </div>
      </section>
    </div>
    <!-- <footer class="footer">
        <h2>MisionTic 2022</h2>
        <p>UTP</p>
        <p>Proyecto Ciclo 3</p>
        <p>Grupo 05 - 09</p>
    </footer> -->
  </body>
</template>


<script>

import indexPasoAPaso from "./components/indexPasoAPaso.vue";
import indexContactenos from "./components/indexContactenos.vue";
import indexCalcular from "./components/indexCalcular.vue";
import indexBienvenida from "./components/indexBienvenida.vue";
import indexQuienesSomos from "./components/indexQuienesSomos.vue";




export default {
  name: "App",

  components: {
    indexBienvenida,
    indexPasoAPaso,
    indexCalcular,
    indexContactenos,
    indexQuienesSomos
  },

  methods: {
    showMenu: function () {
      var x = document.getElementById("menu");
      var y = document.getElementById("user");
      y.style.display = "none";
      if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
      }
    },

    showUser: function () {
      var x = document.getElementById("user");
      var y = document.getElementById("menu");
      y.style.display = "none";
      if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
      }
    },

  },
};
</script>

<style>
  @import "./assets/styles/menustyle.css";
</style>

