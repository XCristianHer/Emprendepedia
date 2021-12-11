import express from "express";
const router = express.Router();


import User from '../models/user';  // importar el modelo User
// Agregar un usuario

router.post('/nuevo-usuario', async(req, res) => {  //Ruta POST
        const body = req.body; 
        try { const userDB = await User.create(body); 
            res.status(200).json(userDB); 
        } catch (error) { 
            return res.status(500).json({ 
                mensaje: 'Ocurrio un error', 
                error 
            }) 
        } 
    }); 

    router.post('/user/login', async(req, res) => {  //Ruta POST
        const body = req.body;
        try { 
            const userDB = await User.findOne({userName: body.userName, password: body.password});
            if (userDB) {
                res.status(200).json({ 
                    mensaje: 'Login'
                });
            } else {
                res.status(401).json({ 
                    mensaje: 'Credenciales inválidas'
                });
            }
        } catch (error) { 
            return res.status(500).json({ 
                mensaje: 'Ocurrio un error', 
                error 
            }) 
        } 
    }); 

// Get con parámetros 
router.get('/user/login', async(req, res) => { 
    const _userName = req.params.userName; 
    const _password = req.params.password; 
    try { 
        const userDB = await User.findOne({userName:_userName, password:_password});
        if (userDB) {
            res.status(200)
        } else {
            res.status(401)
        }
    } catch (error) { 
        return res.status(400).json({ 
            mensaje: 'Ocurrio un error', 
            error 
        })
    } 
});

// Delete eliminar un usuario
router.delete('/user/:id', async(req, res) => { 
    const _id = req.params.id; 
    try { 
        const userDB = await User.findByIdAndDelete({_id}); 
        if(!userDB){ 
            return res.status(400).json({ 
                mensaje: 'No se encontró el id indicado', 
                error 
            }) 
        } res.json(userDb); 
    } catch (error) { 
        return res.status(400).json({ 
            mensaje: 'Ocurrio un error', 
            error 
        }) 
    } 
});

// Put actualizar un usuario
router.put('/user/:id', async(req, res) => { 
    const _id = req.params.id; 
    const body = req.body; 
    try { 
        const userDB = await User.findByIdAndUpdate(_id, body, {new: true}); 
        res.json(userDB); 
    } catch (error) { 
        return res.status(400).json({ 
            mensaje: 'Ocurrio un error', 
            error 
        }) 
    } 
});

module.exports = router; // Exportamos la configuración de express app 