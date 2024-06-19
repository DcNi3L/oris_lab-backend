require('dotenv').config();
const axios = require('axios');

const TRON_URL = process.env.TRONGRID_API_URL;
const TRON_API = process.env.TRONGRID_API_KEY;
const TRON_URL_S = process.env.TRONGRID_API_URL_S;

// Account info by hash
const getAccountByAddress = async (id) => {
    try {
        const res = await axios.post(`${TRON_URL_S}/walletsolidity/getaccount`, {
            address: id,
            visible: true
        }, {
            headers: {
                'Content-Type': 'application/json',
                'TRON-PRO-API-KEY': TRON_API,
            },
        });
        return res.data;
    } catch (e) {
        console.error('Tron-account fetch error: ', e.message);
        return null;
    }
}

//get address value
const getAddress = async (address) => {
    try {
        const res = await axios.get(`${TRON_URL_S}/v1/accounts/${address}`, {
            headers: {
                'Content-Type': 'application/json',
                'TRON-PRO-API-KEY': TRON_API,
            },
        })
        return res.data.data[0].owner_permission.keys[0].address;
    } catch (e) {
        console.error('Tron-account fetch error: ', e.message);
        return null;
    }
};

// Transaction info by hash
const getTransactionById = async (hash) => {
    try {
        const res = await axios.post(`${TRON_URL}/wallet/gettransactionbyid`, {
            value: hash
        }, {
            headers: {
                'Content-Type': 'application/json',
                'TRON-PRO-API-KEY': TRON_API,
            }
        })

        return res.data;
    } catch (error) {
        console.error('Tron-failed to get transaction information:', error.message);
        return null;
    }
};

// Block info by block num
const getBlockById = async (blockId) => {
    try {
        const res = await axios.post(`${TRON_URL}/wallet/getblockbynum`, {
            num: blockId
        }, {
            headers: {
                'Content-Type': 'application/json',
                'TRON-PRO-API-KEY': TRON_API,
            }
        })

        return res.data;
    } catch (error) {
        console.error('Tron-failed to get block information:', error.message);
        return null;
    }
};

// All transaction by account address hash
const getAllTransactionsByAddress = async (address) => {
    try {
        const res = await axios.get(`${TRON_URL}/v1/accounts/${address}/transactions?limit=10`, {
            headers: {
                'Content-Type': 'application/json',
                'TRON-PRO-API-KEY': TRON_API,
            },
        });
        return res.data.data;
    } catch (error) {
        console.error('Tron-failed to get transactions for address:', error.message);
        return null;
    }
};

// Token info by address hash
const getTokenByAddress = async (address) => {
    try {
        const res = await axios.post(`${TRON_URL_S}/wallet/getassetissuebyaccount`, {
            address: address,
            visible: true
        }, {
            headers: {
                'Content-Type': 'application/json',
                'TRON-PRO-API-KEY': TRON_API,
            },
        });

        return res.data;
    } catch (error) {
        console.error('Tron-failed to get token for address:', error.message);
        return null;
    }
};

// All tokens list
const getTokenList = async () => {
    try {
        const res = await axios.get(`${TRON_URL}/wallet/getassetissuelist`, {
            headers: {
                'Content-Type': 'application/json',
                'TRON-PRO-API-KEY': TRON_API,
            },
        })
        return res.data;
    } catch (error) {
        console.error('Tron-failed to get token list:', error.message);
        return null;
    }
};

// Paginated token info
const getPaginatedTokenList = async (offset, limit) => {
    try {
        const res = await axios.post(`${TRON_URL}/wallet/getpaginatedassetissuelist`, {
            offset: offset,
            limit: limit
        }, {
            headers: {
                'Content-Type': 'application/json',
                'TRON-PRO-API-KEY': TRON_API,
            },
        })
        return res.data;
    } catch (error) {
        console.error('Tron-failed to get paginated token list:', error.message);
        return null;
    }
};

const getAllTokensOnChain = async () => {
    try {
        const res = await axios.get(`${TRON_URL}/v1/assets`, {
            headers: {
                'Content-Type': 'application/json',
                'TRON-PRO-API-KEY': TRON_API,
            },
        })
        return res.data;
    } catch (error) {
        console.error('Tron-failed to get tokens on chain:', error.message);
        return null;
    }
};

module.exports = {
    getAccountByAddress,
    getAddress,
    getTransactionById,
    getBlockById,
    getAllTransactionsByAddress,
    getTokenByAddress,
    getTokenList,
    getPaginatedTokenList,
    getAllTokensOnChain
}
