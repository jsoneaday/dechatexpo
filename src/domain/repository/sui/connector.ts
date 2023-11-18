import { createNetworkConfig } from "@mysten/dapp-kit";
import { getFullnodeUrl, type SuiClientOptions } from "@mysten/sui.js/client";

export const { networkConfig, useNetworkVariables } = createNetworkConfig({
  testnet: {
    url: getFullnodeUrl("testnet"),
    variables: {
      testnetPackageId:
        "0xcc0a4c01a4b2de45fd5f97664ff522bdc5bb47efef25c1d9d07a6d2479cd08a8",
      testnetDechatAdminId:
        "0xa8c4b207b6ec2e7d8167920ab58d38ef8f4bf6a07c28438a013577fe5bce8c22",
    },
  },
});

export const { testnetPackageId, testnetDechatAdminId } = useNetworkVariables();
