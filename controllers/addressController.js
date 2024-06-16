const { getAccountByAddress } = require("../services/tronApiService");

const AddressController = {
    async getInfo(req, res) {
        const id = req.body.id;
        try {
            const data = await getAccountByAddress(id);
            res.status(200).send({data});
        } catch (e) {
            res.status(500).send({ error: 'Account fetch error' });
        }
    }
}

module.exports = AddressController;
