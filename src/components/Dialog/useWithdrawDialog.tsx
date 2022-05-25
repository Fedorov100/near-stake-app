import type { ReactNode } from "react";
import React from "react";
import type { DialogProps, OpenDialog } from "@libs/use-dialog";
import { useDialog } from "@libs/use-dialog";
import { FormParams, FormReturn } from "./useDepositDialog";
import { NearWithdrawDialog } from "./NearWithdrawDialog";

function Component(props: DialogProps<FormParams, FormReturn>) {
    return (
        <NearWithdrawDialog {...props} />
    );
}

export function useWithdrawDialog(
    coin: string
): [OpenDialog<FormParams, FormReturn>, ReactNode] {
    return useDialog<FormParams, FormReturn>(Component, coin);
}

// function Component2(props: DialogProps<FormParams, FormReturn>) {
//     return (
//         <TerraWithdrawDialog2 {...props} />
//     );
// }

// export function useWarningDialog(): [
//     OpenDialog<FormParams, FormReturn>,
//     ReactNode
// ] {
//     return useDialog<FormParams, FormReturn>(Component2);
// }
