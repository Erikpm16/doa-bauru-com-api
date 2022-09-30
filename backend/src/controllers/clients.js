const { Client } = require("../models");
const axios = require('axios');

const multer = require('multer')
const path = require('path')



async function getAllClients(req, res, next) {
    try {
        res.send(await Client.findAll());
    }
    catch (err) {
        next(err);
    }
}
async function getOneClient(req, res, next) {
    try {
        const client = await Client.findOne({
            where: {
                id: req.params.id
            }
        });
        if (!client) throw new Error("Usuario não existe");
        res.send(client);
    }
    catch (err) {
        next(err);
    }
}
async function insertClient(req, res, next) { 
    try {

        let {zipcode, number} = req.body;

        number = number.replace(' ', '').replace('-', '00')

       const {data} = await axios.get(`https://api.tomtom.com/search/2/structuredGeocode.json?key=Uj1w4Ss6KVGHqRAKOo27KaCG7IAK1XCe&countryCode=BR&postalCode=${zipcode}&streetNumber=${number}`)

        const client = await Client.create({ ...req.body, ...data.results[0].position});
        res.send(client);
    } catch (err) {
        next(err);
    }
}
async function updateClient(req, res, next) { 
    try {
        const client = await Client.findOne({
            where: {
                id: req.params.id
            }
        }); 
        
        if (!client) throw new Error("Cadastro não existe");

        const {zipcode, number} = req.body;
        const data = await (await fetch(`https://api.tomtom.com/search/2/structuredGeocode.json?key=Uj1w4Ss6KVGHqRAKOo27KaCG7IAK1XCe&countryCode=BR&postalCode=${zipcode}&streetNumber=${number}`)).json();

        client.set({ ...req.body, ...data.results[0].position});

        await client.save();

        res.send(client);

    } catch (err) {
        next(err);
    }
}
async function deleteClient(req, res, next) { 
    try {
        const client = await Client.findOne({
            where: {
                id: req.params.id
            }
        });

        if (!client) throw new Error("Usuario não existe");

        await client.destroy();

        res.send({ success: true });

    } catch (err) {
        next(err);
    }
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'Images')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage: storage,
    limits: { fileSize: '1000000'},
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png|gif/
        const mimeType = fileTypes.test(file.mimetype)
        const extname = fileTypes.test(path.extname(file.originalname))

        if (mimeType && extname) {
            return cb(null, true)
        }
        cb('Formato incorreto JPEG JPG PNG GIF')
    }
}).single('images')
//.array('images, 3')


module.exports = { getAllClients, getOneClient, insertClient, updateClient, deleteClient, upload }