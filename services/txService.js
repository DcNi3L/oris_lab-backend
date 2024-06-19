const { getTransactionById, getAddress, getAllTransactionsByAddress, getTokenByAddress } = require('./tronApiService');
const { Tokens, Addresses, Transactions } = require('../models');
const { saveAddress, findAddress} = require('./addressService');


const saveTransactionInfo = async (hash) => {
    try {
        const txInfo = await getTransactionById(hash);

        if (!txInfo || !txInfo.raw_data) {
            console.error('Transaction not found.');
            return;
        }

        const { txID, raw_data } = txInfo;
        const contract = raw_data.contract[0];
        const { amount, owner_address, to_address } = contract.parameter.value;

        const fID = await getAddress(owner_address)
        let fromAddress = await Addresses.findOne({where: {address: fID}});
        if (!fromAddress) {
            await saveAddress(fID);
            fromAddress = await findAddress(fID);
        }

        const tID = await getAddress(to_address);
        let toAddress = await Addresses.findOne({where: {address: tID}});
        if (!toAddress) {
            await saveAddress(tID);
            toAddress = await findAddress(tID);
        }

        let existingTx = await Transactions.findOne({where: {hash: txID}});
        if (!existingTx) {
            await Transactions.create({
                token_id: 1,
                block_num: parseInt(raw_data.ref_block_bytes, 16),
                value: amount,
                value_txt: amount.toString(),
                hash: txID,
                tx_fee: raw_data.fee_limit,
                tx_fee_txt: raw_data.fee_limit.toString(),
                from_id: fromAddress.address,
                to_id: toAddress.address,
                timestamp: raw_data.timestamp,
                type: contract.type,
            });
        } else {
            await existingTx.update({
                token_id: 1,
                block_num: parseInt(raw_data.ref_block_bytes, 16),
                value: amount,
                value_txt: amount.toString(),
                hash: txID,
                tx_fee: raw_data.fee_limit,
                tx_fee_txt: raw_data.fee_limit.toString(),
                from_id: fromAddress.address,
                to_id: toAddress.address,
                timestamp: raw_data.timestamp,
                type: contract.type,
            })
        }

    } catch (e) {
        console.error('txService: ', e.message);
    }
};

const saveAllTxByAccId = async (id) => {
    try {
        const txs = await getAllTransactionsByAddress(id);

        if (!txs || txs.length === 0) {
            console.error('No transactions found for the given address.');
            return;
        }

        for (const tx of txs) {
            try {
                await saveTransactionInfo(tx.txID);
            } catch (e) {
                console.error(`Error saving transaction ${tx.txID}: `, e.message);
            }
        }

        console.log('All transactions processed successfully.');

    } catch (e) {
        console.error('txService: ', e.message);
    }
};


const findTx = async (hash) => {
    try {
        const tx = await Transactions.findOne({where: {hash: hash}});
        return tx;
    } catch (e) {
        console.error('txService: ', e.message);
    }
};

const findAll = async () => {
    try {
        const txs = await Transactions.findAll();
        return txs;
    }  catch (e) {
        console.error('txService: ', e.message);
    }
};


module.exports = {
    saveTransactionInfo,
    saveAllTxByAccId,
    findTx,
    findAll
}
