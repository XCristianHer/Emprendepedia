<template>    
    <div class="container">
        <span class="big-circle"></span>
        <div class="form">
            <div class="contact-info">
                <h3 class="title">¡No te quedes con la duda!</h3>
                <p class="text">
                 <br><br><br>
                    Recuerda que puedes contactarnos usando los siguientes medios de comunicación o bien llenando el
                    formulario.
                    <br><br><br><br>
                </p>
                <div class="info">
                    <div class="informacion">
                        <img src="../assets/img/marcador-de-posicion.png" class="icon" alt="" />
                        <p>Bogotá DC - Colombia</p>
                    </div>
                    <div class="informacion">
                        <img src="../assets/img/email.png" class="icon" alt="" />
                        <p>emprendimientos_ejemplo@mail.com</p>
                    </div>
                    <div class="informacion">
                        <img src="../assets/img/007-whatsapp.png" class="icon" alt="">
                        <p>(+57) 123-456-789</p>
                    </div>
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
                        <a target="_blank" href="https://github.com/XCristianHer/Emprendepedia">
                            <img src="../assets/img/039-github.png" class="icon2">
                        </a>
                    </div>
                </div>
            </div>

            <div class="contact-form">
                <span class="circle one"></span>
                <span class="circle two"></span>

                <form action="indexContactenos.html" method="POST" autocomplete="off">
                    <h3 class="title">Contactenos</h3>
                    <div class="input-container">
                        <input type="text" name="name" class="input" required/>
                        <span>Nombre</span>
                    </div>
                    <div class="input-container">
                        <input type="text" name="apellido" class="input" required/>
                        <span>Apellido</span>
                    </div>
                    <div class="input-container">
                        <input type="email" name="email" class="input" required/>
                        <span>Correo</span>
                    </div>
                    <div class="input-container">
                        <input type="tel" name="phone" class="input" />
                        <span>Télefono</span>
                    </div>
                    <div class="input-container textarea">
                        <textarea name="message" class="input" required></textarea>
                        <span>Mensaje</span>
                    </div>
                    <input type="submit" value="Send" class="btn" />
                </form>
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
        name: 'index-contactenos',
        props: {
        msg: String
        }
    }
</script>


<style>
    @import '../assets/styles/style.css';
</style>