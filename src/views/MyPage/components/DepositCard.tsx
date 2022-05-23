import React from "react";
import * as BaseStyled from "views/Dashboard/style";
import { BalanceTitle, BAmount, Section, StyledDepositButtons } from "../style";

import { Box, Grid } from "@mui/material";
import { TokenIcon, Tokens } from "@libs/token-icons";
import { InfoTooltip } from "components/InfoTooltip";
import DepositButtons from "./DepoistButtons";

export interface TokenCardProps {
    token: Tokens;
    tokenName: string;
    saveBalance: string;
    saveUSDBalance: string;
    apy: string;
}

export default function DepositCard({
    token,
    tokenName,
    saveBalance,
    saveUSDBalance,
    apy,
}: TokenCardProps) {
    return (
        <>
            <Section
                className="NeuSection-root deposit2"
                style={{ margin: 0, height: "100%" }}
            >
                <div className="NeuSection-content" style={{ height: "100%" }}>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            height: "100%",
                        }}
                    >
                        <Grid
                            container
                            style={{
                                height: "100%",
                                justifyContent: "space-between",
                            }}
                        >
                            <Grid item md={6}>
                                <BaseStyled.CNContainer>
                                    <TokenIcon
                                        token={token}
                                        style={{
                                            width: "33px",
                                            height: "33px",
                                        }}
                                    />
                                    <Box
                                        sx={{
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "flex-start",
                                            marginLeft: "18px",
                                        }}
                                    >
                                        <BaseStyled.TokenName>
                                            {token.toUpperCase()}
                                        </BaseStyled.TokenName>
                                        <BaseStyled.TokenDes>
                                            {tokenName}
                                        </BaseStyled.TokenDes>
                                    </Box>
                                </BaseStyled.CNContainer>
                            </Grid>
                            <Grid item md={6}>
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "flex-start",
                                            flexDirection: "column",
                                        }}
                                    >
                                        <Box sx={{ display: "flex" }}>
                                            <BalanceTitle>
                                                Saving Balance{" "}
                                            </BalanceTitle>
                                            <InfoTooltip
                                                style={{
                                                    fontSize: "12px",
                                                    marginLeft: "3px",
                                                    color: "#cebfbf",
                                                }}
                                            >
                                                Saving Balance
                                            </InfoTooltip>
                                        </Box>
                                        <BAmount>{saveBalance}</BAmount>
                                        <BAmount>{saveUSDBalance}</BAmount>
                                    </Box>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "flex-start",
                                            flexDirection: "column",
                                        }}
                                    >
                                        <Box sx={{ display: "flex" }}>
                                            <BalanceTitle>APY </BalanceTitle>
                                            <InfoTooltip
                                                style={{
                                                    fontSize: "12px",
                                                    marginLeft: "3px",
                                                    color: "#cebfbf",
                                                }}
                                            >
                                                APY
                                            </InfoTooltip>
                                        </Box>
                                        <BAmount>{apy}</BAmount>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                        <StyledDepositButtons>
                            <DepositButtons />
                        </StyledDepositButtons>
                    </div>
                </div>
            </Section>
        </>
    );
}
