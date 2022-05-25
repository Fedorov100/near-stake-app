import { ActionButton } from "@libs/components/ActionButton";
import { BorderButton } from "@libs/components/BorderButton";
import { Box } from "@mui/material";
import { useDepositDialog } from "components/Dialog/useDepositDialog";
import { useWithdrawDialog } from "components/Dialog/useWithdrawDialog";
import { useCallback } from "react";

export default function DepositButtons() {
    const [openDepositDialog, depositDialogElement] = useDepositDialog("USDT");
    const [openWithdrawDialog, withdrawDialogElement] = useWithdrawDialog("USDT");

    const openDeposit = useCallback(async () => {
        await openDepositDialog();
    }, [openDepositDialog]);

    const openWithdraw = useCallback(async () => {
        await openWithdrawDialog();
    }, [openWithdrawDialog]);

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "end",
            }}
        >
            <div>
                <ActionButton
                    className="sizeButton"
                    style={{
                        width: "200px",
                        height: "45px",
                        marginRight: "12px",
                    }}
                    onClick={openDeposit}
                >
                    Deposit
                </ActionButton>
                <BorderButton
                    className="sizeButton border"
                    style={{
                        width: "200px",
                        height: "45px",
                        marginLeft: "12px",
                    }}
                    onClick={openWithdraw}
                >
                    Withdraw
                </BorderButton>
            </div>
            {depositDialogElement}
            {withdrawDialogElement}
        </Box>
    );
}
