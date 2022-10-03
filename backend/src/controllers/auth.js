
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {User} = require('../models');

const me = async (req, res, next) => {
    try{
        const user = await User.findOne({
            where: {
                id: req.userId
            }
        });
        if (!user)
        res.status(401).send();
        else
        res.send(user);
    }
    catch(error){
        next(error);
    }

}
const login = async (req, res, next) => {
    try{
        const {email, password} = req.body;

        if(!email)
        throw new Error("Usuario ou senha inválidos!");

        const user = await User.findOne ({ where : {email}});

        if(!user)
        throw new Error("Usuario ou senha inválidos!");

        if(!await bcrypt.compare(password, user.password))
        throw new Error("Usuario ou senha inválidos!");

        const token = jwt.sign({
            userId: user.id
        }, "qWfRWJrfASDdFSFAfgkpoijq!@atq13gasda!afaiojdaui23465esafayu$3",{
            expiresIn: "120m"
        });

        res.send({user, token});
    } 
    catch(error){
        next(error);
    }

}

const register = async (req, res, next) => {
    try {

        const data = req.body;

        if (data.password)
        data.password = await bcrypt.hash(data.password, 10);

        res.send(await User.create(data));
    }
    catch (error){
        next(error);
    }
}

module.exports = { me, login, register }