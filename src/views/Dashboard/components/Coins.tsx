import { useCallback } from "react";
import * as Styled from "../style";

import { Table, TableBody, TableHead } from "@mui/material";
import { useConnectWalletDialog } from "components/Header/components/useConnectWalletDialog";
import { WalletConnection } from "near-api-js";
import { useWallet } from "contexts/accounts";
import CoinItem from "./CoinItem";
import { Symbols, symbols } from "@libs/tokens";

export default function Coins() {
    const wallet: WalletConnection = useWallet();
    const connected: boolean = wallet.isSignedIn();

    const [openWalletConnectDialog, walletConnectDialogElement] =
        useConnectWalletDialog();

    const openConnectNearWallet = useCallback(async () => {
        await openWalletConnectDialog();
    }, [openWalletConnectDialog]);

    return (
        <Styled.StyledSection>
            <Table
                sx={{ minWidth: 650 }}
                style={Styled.thead_style}
                aria-label="simple table"
            >
                <TableHead>
                    <Styled.TR style={{ marginTop: "20px" }}>
                        <Styled.TD header={true.toString()} align="left">
                            Name
                        </Styled.TD>
                        <Styled.TD
                            header={true.toString()}
                            align="right"
                            style={{ position: "relative", right: "7px" }}
                        >
                            APY
                        </Styled.TD>
                        <Styled.TD
                            header={true.toString()}
                            style={{ paddingLeft: "100px" }}
                            align="center"
                        >
                            TVL
                        </Styled.TD>
                        <Styled.TD header={true.toString()} align="center">
                            Actions
                        </Styled.TD>
                    </Styled.TR>
                </TableHead>
                <TableBody>
                    {symbols.map((item: Symbols, key: number) => (
                        <CoinItem
                            key={key}
                            coin={item}
                            connected={connected}
                            openConnectNearWallet={openConnectNearWallet}
                        />
                    ))}
                </TableBody>
            </Table>
            {walletConnectDialogElement}
        </Styled.StyledSection>
    );
}
