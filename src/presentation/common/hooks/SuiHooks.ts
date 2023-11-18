import React from "react";
import log from "../../../domain/utils/logger";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import { SUI_CLOCK_OBJECT_ID } from "@mysten/sui.js/utils";
import {
  useSuiClient,
  useSuiClientQuery,
  useSignAndExecuteTransactionBlock,
} from "@mysten/dapp-kit";
import {
  testnetPackageId,
  testnetDechatAdminId,
} from "../../../domain/repository/sui/connector";

// setup a mock or production
export function useSui() {
  const { data, isPending, isError, error, refetch } = useSuiClientQuery(
    "getOwnedObjects",
    {
      owner:
        "0x36e127e0a376ba265ad8ff5ef8db9277a9753daec5c59f3d66bd6b1fa168a3fa",
    },
    { gcTime: 10000 }
  );

  return {
    getFeed: (a: string, b: number) => [],
  };
}

export function useMutateSui() {
  const suiClient = useSuiClient();
  const { mutate: signAndExecute } = useSignAndExecuteTransactionBlock();

  function createAppMetadata(version: string) {
    const txb = new TransactionBlock();
    txb.moveCall({
      arguments: [
        txb.object(SUI_CLOCK_OBJECT_ID),
        txb.pure.string(version),
        txb.object(
          "0xa8c4b207b6ec2e7d8167920ab58d38ef8f4bf6a07c28438a013577fe5bce8c22"
        ),
      ],
      target: `${testnetPackageId}::main::create_app_metadata`,
    });

    signAndExecute(
      {
        transactionBlock: txb,
        options: {
          showEffects: true,
        },
      },
      {
        onSuccess: (tx) => {
          suiClient
            .waitForTransactionBlock({
              digest: tx.digest,
            })
            .then(() => {
              const effects = tx.effects;
              log("effects:", effects);
            });
        },
      }
    );
  }

  return {
    createAppMetadata,
  };
}
