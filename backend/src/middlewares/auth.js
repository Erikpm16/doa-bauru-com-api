const jwt = require ('jsonwebtoken');
const {User} = require ('../models');

module.exports = (req, res, next) => {
    try{
        const token = req.header('Authorization');

        var data = jwt.verify(token, "qWfRWJrfASDdFSFAfgkpoijq!@atq13gasda!afaiojdaui23465esafayu$3");

        const user = User.findByPk(data.userId);

        if (!user)
        throw new Error("Usuario inválido!")

        req.userId = data.userId;
        req.user = user;

        next();
    }
    catch(error) {
        next(error);
    }
}