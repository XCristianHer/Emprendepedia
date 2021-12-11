<template>
    <div class="container">
            <span class="big-circle"></span>
            <img src="img/007-hourglass.png" class="square" alt="" />
            <div class="form-invertida">
                <form action="indexContactenos.html" method="POST" autocomplete="off">
                    <h3 class="title">Calcula tu Rentabilidad</h3>
                    <div class="input-container">
                        <input type="text" name="name-emprendimiento" class="input" required/>
                        <label for=""></label>
                        <span style="color: beige; background-color: #2E2E2e;">Nombre Emprendimiento</span>
                    </div>
                    <div class="input-container">
                        <input type="text" name="tipo-negocio" class="input" required/>
                        <label for=""></label>
                        <span style="color: beige; background-color: #2E2E2e;">Tipo de Negocio</span>
                    </div>
                    <div class="input-container">
                        <input type="text" name="ingresos" class="input" required/>
                        <label for=""></label>
                        <span style="color: beige; background-color: #2E2E2e;">Ingresos</span>
                    </div>
                    <div class="input-container">
                        <input type="text" name="costo" class="input" required/>
                        <label for=""></label>
                        <span style="color: beige; background-color: #2E2E2e;">Costo de Bienes Vendidos</span>
                    </div>
                    <div class="input-container">
                        <input type="text" name="gastos" class="input" required/>
                        <label for=""></label>
                        <span style="color: white; background-color: #2E2E2e;">Gastos Operativos</span>
                    </div>
                    <input type="button" value="Calcular" class="btn" />
                </form>
                

                <div class="contact-form-invertida">
                    <span class="circle one"></span>
                    <span class="circle two"></span>

                    <div class="contact-info">
                        <h3 class="title">Ejemplo Indice de Rentabilidad</h3>
                        <p class="text">
                            <img src="../assets/img/Nada.png" class="image">
                        </p>
                        <div class="info">
                            <div class="informacion">
                                <input type="button" value="Ver Grafico" class="btn-invertido" href="#"/>
                            </div>
                            <br>
                            <div class="informacion">
                                
                                <br>
                                <button class="btn-invertido" href="https://www.caminofinancial.com/es/como-calcular-los-indices-de-rentabilidad-de-tu-empresa/">Quizá te interese</button>
                                <input type="button" value="Quizá te interese" class="btn-invertido" href="https://www.caminofinancial.com/es/como-calcular-los-indices-de-rentabilidad-de-tu-empresa/"/>
                            </div>
                            
                        </div>
    
                        <div class="social-media">
                            <p>Conéctate con nosotros :</p>
                            <div class="social-icons">
                                <a target = "_blank" href="https://www.facebook.com/">
                                    <img  src="../assets/img/043-facebook-1.png" class="icon2">
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
                                <a target="_blank" href="https://github.com/">
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
    import '../assets/scripts/app.js';
    export default {
        name: 'index-calcular',
        props: {
        msg: String
        }
    }
</script>


<style>
    @import '../assets/styles/style.css';
</style>