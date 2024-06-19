const { saveTransactionInfo, saveAllTxByAccId, findTx, findAll } = require('../services/txService');

const AddressController = {
    async saveToDB(req, res) {
        const { hash } = req.body;
        try {
            await saveTransactionInfo(hash);
            res.status(201).send({message: 'Transaction saved to database'});
        } catch (e) {
            res.status(500).send({ error: e.message });
        }
    },

    async getTx(req, res) {
        const { hash } = req.body;
        try {
            const data = await findTx(hash);
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
