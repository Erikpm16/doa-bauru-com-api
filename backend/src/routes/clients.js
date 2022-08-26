const express = require('express');
const { getAllClients, getOneClient, insertClient, updateClient, deleteClient } = require('../controllers/clients');

const router = express.Router();


router.get('/', getAllClients); 
router.post('/', insertClient);
router.get('/:id', getOneClient);
router.post('/:id', updateClient);
router.put('/:id', updateClient);
router.patch('/:id', updateClient);
router.delete('/:id', deleteClient);

module.exports = router;





