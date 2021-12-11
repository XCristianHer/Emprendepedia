<template>
    <div class="container">
        <h1>Inicio de Sesión</h1>

        <b-alert
        :show="dismissCountDown"
        dismissible
        :variant="mensaje.color"
        @dismissed="dismissCountDown=0"
        @dismiss-count-down="countDownChanged" >
        {{mensaje.texto}}
        </b-alert>

        <div id="user" class="subMenu">

        <!-- <form id="user" class="form">
            <label for="user">Usuario<input type="text" id="username" name="user" class="input" required/></label>
            <label for="password">Contraseña<input type="text" id="password" name="password" class="input" required/></label>
            <button type="submit" class="button">Iniciar Sesión</button>
        </form> -->
        </div>

        <form @submit.prevent="agregarNota()" v-if="!editar">
            <h3>Registro de Usuario</h3>

            <input type="text" class="form-control my-2" placeholder="Nombre de Usuario" v-model="user.userName">
            <input type="text" class="form-control my-2" placeholder="Contraseña" v-model="user.password">
            <b-button class="btn-success my-2" type="submit">Registrar</b-button>

        </form>

    </div>
</template>

<script>
export default {

  name: 'Users',
  props: {
    msg: String
  },

  data () {
    return {

      usuarios: [],
      mensaje: { color: 'success', texto: '' },
      dismissSecs: 5,
      dismissCountDown: 0,

      usuario: { userName: '', password: '' },
      editar: false,
      usuarioEditar: {}
    }
  },

  created () {
    this.listarUsuarios()
  },

  methods: {

    listarUsuarios () {
      this.axios.get('/user')
        .then(res => {
          console.log(res.data)
          this.users = res.data
        })

        .catch(e => {
          console.log(e.response)
        })
    },

    iniciarSesion () {
      const username = document.getElementById('username')
      const password = document.getElementById('password')
      const logIn = { userName: username.value, password: password.value }

      this.axios.post('/login', logIn)
        .then(res => {
          console.log(res)
          this.mensaje.color = 'success'
          this.mensaje.texto = 'Inicio de Sesión'
          this.showAlert()
        })

        .catch(e => {
          console.log(e.response)
        })
    },

    registrarUsuario () {
      this.axios.post('/nuevo-usuario', this.user)
        .then(res => {
          this.users.push(res.data)
          this.user.userName = ''
          this.user.password = ''
          this.mensaje.color = 'success'
          this.mensaje.texto = 'Usuario Registrado'
          this.showAlert()
        })

        .catch(e => {
          console.log(e.response)
        })
    },

    eliminarUsuario (id) {
      this.axios.delete(`/user/${id}`)

        .then(res => {
          const index = this.users.findIndex(item => item._id === res.data._id)
          this.users.splice(index, 1)
          this.mensaje.color = 'success'
          this.mensaje.texto = 'Usuario Eliminado'
          this.showAlert()
        })
        .catch(e => {
          console.log(e.response)
        })
    },

    activarEdicion (id) {
      this.editar = true
      this.axios.get(`/user/${id}`)

        .then(res => {
          this.usuarioEditar = res.data
        })
        .catch(e => {
          console.log(e.response)
        })
    },

    editarUsuario (item) {
      this.axios.put(`/user/${item._id}`, item)
        .then(res => {
          const index = this.users.findIndex(n => n._id === res.data._id)
          this.users[index].userName = res.data.userName
          this.users[index].password = res.data.password
          this.mensaje.color = 'success'
          this.mensaje.texto = 'Usuario Actualizado'
          this.showAlert()
          this.editar = false
        })
        .catch(e => {
          console.log(e.response)
        })
    },

    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert () {
      this.dismissCountDown = this.dismissSecs
    }
  }
}
</script>
