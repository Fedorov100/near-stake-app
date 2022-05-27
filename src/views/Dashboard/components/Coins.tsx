import { useCallback } from "react";
import * as Styled from "../style";

import { TokenIcon } from "@libs/token-icons";
import { Box, Table, TableBody, TableHead } from "@mui/material";
import { useDepositDialog } from "components/Dialog/useDepositDialog";
import { useWithdrawDialog } from "components/Dialog/useWithdrawDialog";

export default function Coins() {
    const [openDepositDialog, depositDialogElement] = useDepositDialog("USDT");
    const [openWithdrawDialog, withdrawDialogElement] =
        useWithdrawDialog("USDT");

    const openDeposit = useCallback(async () => {
        await openDepositDialog();
    }, [openDepositDialog]);

    const openWithdraw = useCallback(async () => {
        await openWithdrawDialog();
    }, [openWithdrawDialog]);

    return (
        <Styled.StyledSection>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <Styled.TR>
                        <Styled.TD header={true.toString()} align="left">
                            Name
                        </Styled.TD>
                        <Styled.TD header={true.toString()} align="center">
                            APY
                        </Styled.TD>
                        <Styled.TD header={true.toString()} align="center">
                            TVL
                        </Styled.TD>
                        <Styled.TD header={true.toString()} align="center">
                            Actions
                        </Styled.TD>
                    </Styled.TR>
                </TableHead>
                <TableBody>
                    <Styled.TR>
                        <Styled.TD scope="row" align="left">
                            <Styled.CNContainer>
                                <TokenIcon
                                    token="usdc"
                                    style={{ width: "33px", height: "33px" }}
                                />
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "flex-start",
                                        marginLeft: "18px",
                                    }}
                                >
                                    <Styled.TokenName>USDC</Styled.TokenName>
                                    <Styled.TokenDes>USD coin</Styled.TokenDes>
                                </Box>
                            </Styled.CNContainer>
                        </Styled.TD>
                        <Styled.TD align="center">14,87%</Styled.TD>
                        <Styled.TD align="center">
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                }}
                            >
                                <span>47,243,230 USDC</span>
                                <span>$47,243,230 USD Value</span>
                            </Box>
                        </Styled.TD>
                        <Styled.TD align="center">
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Styled.Button
                                    variant="contained"
                                    disableElevation
                                    onClick={openDeposit}
                                >
                                    Deposit
                                </Styled.Button>
                                <Styled.Button
                                    variant="outlined"
                                    disableElevation
                                    onClick={openWithdraw}
                                >
                                    Withdraw
                                </Styled.Button>
                            </Box>
                        </Styled.TD>
                    </Styled.TR>
                    <Styled.TR>
                        <Styled.TD scope="row" align="left">
                            <Styled.CNContainer>
                                <TokenIcon
                                    token="usdt"
                                    style={{ width: "33px", height: "33px" }}
                                />
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "flex-start",
                                        marginLeft: "18px",
                                    }}
                                >
                                    <Styled.TokenName>USDT</Styled.TokenName>
                                    <Styled.TokenDes>
                                        USD Tether
                                    </Styled.TokenDes>
                                </Box>
                            </Styled.CNContainer>
                        </Styled.TD>
                        <Styled.TD align="center">14,87%</Styled.TD>
                        <Styled.TD align="center">
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                }}
                            >
                                <span>10,243,230 USDT</span>
                                <span>$10,243,230 USD Value</span>
                            </Box>
                        </Styled.TD>
                        <Styled.TD align="center">
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Styled.Button
                                    variant="contained"
                                    disableElevation
                                    onClick={openDeposit}
                                >
                                    Deposit
                                </Styled.Button>
                                <Styled.Button
                                    variant="outlined"
                                    disableElevation
                                    onClick={openWithdraw}
                                >
                                    Withdraw
                                </Styled.Button>
                            </Box>
                        </Styled.TD>
                    </Styled.TR>
                    <Styled.TR>
                        <Styled.TD scope="row" align="left">
                            <Styled.CNContainer>
                                <TokenIcon
                                    token="dai"
                                    style={{ width: "33px", height: "33px" }}
                                />
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "flex-start",
                                        marginLeft: "18px",
                                    }}
                                >
                                    <Styled.TokenName>DAI</Styled.TokenName>
                                    <Styled.TokenDes>Dai</Styled.TokenDes>
                                </Box>
                            </Styled.CNContainer>
                        </Styled.TD>
                        <Styled.TD align="center">14,87%</Styled.TD>
                        <Styled.TD align="center">
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                }}
                            >
                                <span>7,443,230 DAI</span>
                                <span>$7,443,230 USD Value</span>
                            </Box>
                        </Styled.TD>
                        <Styled.TD align="center">
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Styled.Button
                                    variant="contained"
                                    disableElevation
                                    onClick={openDeposit}
                                >
                                    Deposit
                                </Styled.Button>
                                <Styled.Button
                                    variant="outlined"
                                    disableElevation
                                    onClick={openWithdraw}
                                >
                                    Withdraw
                                </Styled.Button>
                            </Box>
                        </Styled.TD>
                    </Styled.TR>
                    <Styled.TR>
                        <Styled.TD scope="row" align="left">
                            <Styled.CNContainer>
                                <TokenIcon
                                    token="usn"
                                    style={{ width: "33px", height: "33px" }}
                                />
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "flex-start",
                                        marginLeft: "18px",
                                    }}
                                >
                                    <Styled.TokenName>USN</Styled.TokenName>
                                    <Styled.TokenDes>USD NEAR</Styled.TokenDes>
                                </Box>
                            </Styled.CNContainer>
                        </Styled.TD>
                        <Styled.TD align="center">14,87%</Styled.TD>
                        <Styled.TD align="center">
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                }}
                            >
                                <span>243,230 USN</span>
                                <span>$243,230 USD Value</span>
                            </Box>
                        </Styled.TD>
                        <Styled.TD align="center">
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Styled.Button
                                    variant="contained"
                                    disableElevation
                                    onClick={openDeposit}
                                >
                                    Deposit
                                </Styled.Button>
                                <Styled.Button
                                    variant="outlined"
                                    disableElevation
                                    onClick={openWithdraw}
                                >
                                    Withdraw
                                </Styled.Button>
                            </Box>
                        </Styled.TD>
                    </Styled.TR>
                    <Styled.TR>
                        <Styled.TD scope="row" align="left">
                            <Styled.CNContainer>
                                <TokenIcon
                                    token="wbtc"
                                    style={{ width: "33px", height: "33px" }}
                                />
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "flex-start",
                                        marginLeft: "18px",
                                    }}
                                >
                                    <Styled.TokenName>wBTC</Styled.TokenName>
                                    <Styled.TokenDes>
                                        Wrapped Bitcoin
                                    </Styled.TokenDes>
                                </Box>
                            </Styled.CNContainer>
                        </Styled.TD>
                        <Styled.TD align="center">14,87%</Styled.TD>
                        <Styled.TD align="center">
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                }}
                            >
                                <span>10,230.00 wBTC</span>
                                <span>$538,230 USD Value</span>
                            </Box>
                        </Styled.TD>
                        <Styled.TD align="center">
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Styled.Button
                                    variant="contained"
                                    disableElevation
                                    onClick={openDeposit}
                                >
                                    Deposit
                                </Styled.Button>
                                <Styled.Button
                                    variant="outlined"
                                    disableElevation
                                    onClick={openWithdraw}
                                >
                                    Withdraw
                                </Styled.Button>
                            </Box>
                        </Styled.TD>
                    </Styled.TR>
                    <Styled.TR>
                        <Styled.TD scope="row" align="left">
                            <Styled.CNContainer>
                                <TokenIcon
                                    token="eth"
                                    style={{ width: "33px", height: "33px" }}
                                />
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "flex-start",
                                        marginLeft: "18px",
                                    }}
                                >
                                    <Styled.TokenName>ETH</Styled.TokenName>
                                    <Styled.TokenDes>Ethereum</Styled.TokenDes>
                                </Box>
                            </Styled.CNContainer>
                        </Styled.TD>
                        <Styled.TD align="center">14,87%</Styled.TD>
                        <Styled.TD align="center">
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                }}
                            >
                                <span>3,230.00 ETH</span>
                                <span>$543,230 USD Value</span>
                            </Box>
                        </Styled.TD>
                        <Styled.TD align="center">
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Styled.Button
                                    variant="contained"
                                    disableElevation
                                    onClick={openDeposit}
                                >
                                    Deposit
                                </Styled.Button>
                                <Styled.Button
                                    variant="outlined"
                                    disableElevation
                                    onClick={openWithdraw}
                                >
                                    Withdraw
                                </Styled.Button>
                            </Box>
                        </Styled.TD>
                    </Styled.TR>
                    <Styled.TR>
                        <Styled.TD scope="row" align="left">
                            <Styled.CNContainer>
                                <TokenIcon
                                    token="wnear"
                                    style={{ width: "33px", height: "33px" }}
                                />
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "flex-start",
                                        marginLeft: "18px",
                                    }}
                                >
                                    <Styled.TokenName>wNEAR</Styled.TokenName>
                                    <Styled.TokenDes>
                                        Wrapped Near
                                    </Styled.TokenDes>
                                </Box>
                            </Styled.CNContainer>
                        </Styled.TD>
                        <Styled.TD align="center">14,87%</Styled.TD>
                        <Styled.TD align="center">
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                }}
                            >
                                <span>116,829.00 wNEAR</span>
                                <span>$1,443,230 USD Value</span>
                            </Box>
                        </Styled.TD>
                        <Styled.TD align="center">
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Styled.Button
                                    variant="contained"
                                    disableElevation
                                    onClick={openDeposit}
                                >
                                    Deposit
                                </Styled.Button>
                                <Styled.Button
                                    variant="outlined"
                                    disableElevation
                                    onClick={openWithdraw}
                                >
                                    Withdraw
                                </Styled.Button>
                            </Box>
                        </Styled.TD>
                    </Styled.TR>
                </TableBody>
            </Table>
            {depositDialogElement}
            {withdrawDialogElement}
        </Styled.StyledSection>
    );
}
