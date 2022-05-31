import { ViewAddressWarning } from "components/ViewAddressWarning";
import React, { useState, useEffect } from "react";
import { DepositDialog } from "./DepositDialog";
import { DialogProps } from "@libs/use-dialog";
import { ActionButton } from "@libs/components/ActionButton";
import { useConfirm } from "@libs/components/useConfirm";

export function NearDepositDialog(props: DialogProps<{}, void>) {
    const [toggled, setToggled] = React.useState(false);
    const [coin, setCoin] = React.useState(props.coin);
    const [openConfirm, confirmElement] = useConfirm();
    const [active, setActive] = useState(false);
    const [depositAmount, setDepositAmount] = useState(0);

    function calcTime(offset: number) {
        let d = new Date();
        let utc = d.getTime() + d.getTimezoneOffset() * 60000;
        let nd = new Date(utc + 3600000 * offset);

        let minute = nd.getMinutes();
        if (minute >= 1 && minute <= 10) {
            setActive(true);
        } else {
            setActive(false);
        }
        console.log(minute);
        // let day = nd.getDate();
        // if (day >= 1 && day <= 7) {
        //   setActive(true);
        //   dispatch({ type: ActionKind.setQualified, payload: true });
        // }
        // else {
        //   setActive(false);
        //   dispatch({ type: ActionKind.setQualified, payload: false });
        // }
    }
    useEffect(() => {
        calcTime(-4);
    }, []);

    return (
        <DepositDialog
            {...props}
            setCoin={setCoin}
            coin={coin}
            setToggled={setToggled}
            depositAmount={depositAmount}
            updateDepositAmount={setDepositAmount}
            maxAmount={245346}
        >
            <>
                <ViewAddressWarning>
                    <div className={"button-wrap"}>
                        <ActionButton className="button">Proceed</ActionButton>
                    </div>
                </ViewAddressWarning>
                {confirmElement}
            </>
        </DepositDialog>
    );
}
