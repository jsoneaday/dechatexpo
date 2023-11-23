import { getFullnodeUrl, SuiClient } from "@mysten/sui.js/client";

const url = getFullnodeUrl("testnet");
export const suiClient = new SuiClient({ url });

export const testnetConfigs = {
  packageId:
    "0xcc0a4c01a4b2de45fd5f97664ff522bdc5bb47efef25c1d9d07a6d2479cd08a8",
  dechatAdminId:
    "0xa8c4b207b6ec2e7d8167920ab58d38ef8f4bf6a07c28438a013577fe5bce8c22",
};
export const localnetConfigs = {
  packageId:
    "0xcc0a4c01a4b2de45fd5f97664ff522bdc5bb47efef25c1d9d07a6d2479cd08a8",
  dechatAdminId:
    "0xa8c4b207b6ec2e7d8167920ab58d38ef8f4bf6a07c28438a013577fe5bce8c22",
};

const rpcUrl = "http://127.0.0.1:9000";
const faucetUrl = "http://127.0.0.1:9123";
