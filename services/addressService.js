const { getAccountByAddress } = require('./tronApiService');
const {Addresses} = require("../models");

const saveAddress = async (address) => {
    try {
        const account = await getAccountByAddress(address);

        if (!account || !account.data || !account.data[0]) {
            console.error('Could not find account with address', address);
            return null;
        }

        const accountData = account.data[0];

        let existingAddress = await Addresses.findOne({where: {address: accountData.address}});
        if (!existingAddress) {
            await Addresses.create({
                address: accountData.address,
                balance: accountData.balance,
                create_time: accountData.create_time,
                latest_consume_time: accountData.latest_consume_time,
                latest_operation_time: accountData.latest_opration_time,
                account_resource: accountData.account_resource,
                frozen: accountData.frozenV2,
                trc20: accountData.trc20,
                net_window_size: accountData.net_window_size,
                net_window_optimized: accountData.net_window_optimized,
                energy_window_size: accountData.account_resource.energy_window_size,
                energy_window_optimized: accountData.account_resource.energy_window_optimized,
                owner_permission: accountData.owner_permission,
                active_permission: accountData.active_permission,
            });
        } else {
            await existingAddress.update({
                balance: accountData.balance,
                create_time: accountData.create_time,
                latest_consume_time: accountData.latest_consume_time,
                latest_opration_time: accountData.latest_opration_time,
                frozen: accountData.frozenV2,
                trc20: accountData.trc20,
                net_window_size: accountData.net_window_size,
                net_window_optimized: accountData.net_window_optimized,
                energy_window_size: accountData.account_resource.energy_window_size,
                energy_window_optimized: accountData.account_resource.energy_window_optimized,
                owner_permission: accountData.owner_permission,
                active_permission: accountData.active_permission,
            });
        }
    } catch (error) {
        console.error('DB error: ', error.message);
    }
};

const findAddress = async (address) => {
    try {
        const account = await Addresses.findOne({where: {address: address}});
        return account;
    } catch (error) {
        console.error('DB error: ', error.message);
        return null;
    }
};

module.exports = {
    saveAddress,
    findAddress
}
