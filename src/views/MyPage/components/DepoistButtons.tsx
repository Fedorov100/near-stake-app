import { ActionButton } from "@libs/components/ActionButton";
import { BorderButton } from "@libs/components/BorderButton";
import { Box } from "@mui/material";

export default function DepositButtons() {
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
                >
                    Withdraw
                </BorderButton>
            </div>
        </Box>
    );
}
