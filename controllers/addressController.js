const { saveAddress, findAddress, findAll } = require('../services/addressService');

const AddressController = {
    async saveToDB(req, res) {
        const { address } = req.body;
        try {
            await saveAddress(address);
            res.status(201).send({message: 'Address saved to database'});
        } catch (e) {
            res.status(500).send({ error: e.message });
        }
    },

    async getAddress(req, res) {
        const { address } = req.body;
        try {
            const data = await findAddress(address);
            res.status(200).send({data});
        } catch (e) {
            res.status(500).send({ error: e.message });
        }
    },

    async getAll(req, res) {
        try {
            const data = await findAll();
            res.status(200).send({data});
        }  catch (e) {
            res.status(500).send({ error: e.message });
        }
    }
}

module.exports = AddressController;
