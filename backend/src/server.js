const app = require('./app');
const { database } = require('./models');

const PORT = process.env.PORT || 2000;

database.sync({alter: false}).then(() => {
    app.listen(PORT, () => {
        console.log(`Servidor executando na porta ${PORT} ...`);
    })
})

