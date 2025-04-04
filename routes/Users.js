const express = require('express') 
const router  = express.Router()
const { Users } = require("../models")
const bcrypt = require("bcryptjs");
const { validateToken} = require("../middlewares/AuthMiddlewares")

const {sign} = require("jsonwebtoken")

router.post("/" , async (req, res) => { 
    const {username, password} = req.body //assumimos que sempre que fizermos esse request, precisaremos de ambos os valores
    const user = await Users.findOne({ where: { username: username } });
    if(user){
        res.json({error: "Username already registered"})
    }else{
        
    bcrypt.hash(password, 10).then((hash) => {
        Users.create({
            username: username,
            password: hash,
        })
        res.json("Account created successfully")
        
    })
    }
})

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await Users.findOne({ where: { username: username } });

    if (!user) return res.json({ error: "User Doesn't Exist" });

    bcrypt.compare(password, user.password).then((match) => {
        if (!match) return res.json({ error: "Wrong Username And Password Combination" });

            const accessToken = sign({username: user.username, id: user.id}, "importantsecret")
            res.json({token: accessToken, username: username, id: user.id})
    })
})

router.get('/auth', validateToken, (req,res) => { //retorna o usuario que esta logado
    res.json(req.user)
})

router.get("/basicinfo/:id", async (req,res) =>{
    const id = req.params.id
    const basicInfo = await Users.findByPk(id, {attributes: {exclude: ['password']}})
    res.json(basicInfo)
})

router.put("/changepassword", validateToken, async (req, res) => {
    const { oldPassword, newPassword } = req.body;
    const user = await Users.findOne({ where: { username: req.user.username } });
  
    bcrypt.compare(oldPassword, user.password).then(async (match) => {
      if (!match){ res.json({ error: "Wrong Password Entered!" })
    }else{
        bcrypt.hash(newPassword, 10).then((hash) => {
            Users.update(
              { password: hash },
              { where: { username: req.user.username } }
            );
            res.json("Password Changed");
          });
    }
    });
})

module.exports = router