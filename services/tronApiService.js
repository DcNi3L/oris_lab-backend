require('dotenv').config();
const axios = require('axios');

const TRON_URL = process.env.TRONGRID_API_URL;
const TRON_API = process.env.TRONGRID_API_KEY;

const getAccountByAddress = async (id) => {
    try {
        const res = await axios.get(`${TRON_URL}/v1/accounts/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'TRON-PRO-API-KEY': TRON_API,
            },
        });
        return res.data;
    } catch (e) {
        console.log('Account fetch error: ', e.message);
    }
}

module.exports = {
    getAccountByAddress,
}
