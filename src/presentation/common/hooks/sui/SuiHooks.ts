import React from "react";
import log from "../../../../domain/utils/logger";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import { SUI_CLOCK_OBJECT_ID } from "@mysten/sui.js/utils";
import {
  suiClient,
  testnetConfigs,
} from "../../../../domain/repository/sui/connector";

// setup a mock or production
export function useQuerySui() {
  async function getOwnedObjects(owner: string) {
    return await suiClient.getOwnedObjects({
      owner,
    });
  }

  return {
    getOwnedObjects,
  };
}

export function useMutateSui() {
  const { packageId, dechatAdminId } = testnetConfigs;

  async function createAppMetadata(version: string) {
    // const txb = new TransactionBlock();
    // txb.moveCall({
    //   arguments: [
    //     txb.object(SUI_CLOCK_OBJECT_ID),
    //     txb.pure.string(version),
    //     txb.object(
    //       "0xa8c4b207b6ec2e7d8167920ab58d38ef8f4bf6a07c28438a013577fe5bce8c22"
    //     ),
    //   ],
    //   target: `${packageId}::main::create_app_metadata`,
    // });
    // const result = await suiClient.signAndExecuteTransactionBlock({
    //   transactionBlock: txb,
    //   signer: new Keypair(),
    //   requestType: "WaitForLocalExecution",
    //   options: {
    //     showEffects: true,
    //   },
    // });
  }

  return {
    createAppMetadata,
  };
}
