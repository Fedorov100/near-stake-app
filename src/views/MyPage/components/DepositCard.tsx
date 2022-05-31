import React from "react";
import * as BaseStyled from "views/Dashboard/style";
import { BalanceTitle, BAmount, Section, StyledDepositButtons } from "../style";

import { Box, Grid } from "@mui/material";
import { TokenIcon } from "@libs/token-icons";
import { InfoTooltip } from "components/InfoTooltip";
import DepositButtons from "./DepoistButtons";
import styled from "styled-components";
import { Coin, getCoinDetail } from "@libs/tokens";
import { BorderButton } from "@libs/components/BorderButton";

export interface TokenCardProps {
    token: Coin;
    saveBalance: string;
    saveUSDBalance: string;
    apy: string;
}

export default function DepositCard({
    token,
    saveBalance,
    saveUSDBalance,
    apy,
}: TokenCardProps) {
    const tokenDetail = getCoinDetail(token);
    return (
        <>
            <Section
                className="NeuSection-root"
                style={{ margin: 0, height: "252px", marginBottom: "5px" }}
            >
                <SectionContent>
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
                                            {tokenDetail.name}
                                        </BaseStyled.TokenName>
                                        <BaseStyled.TokenDes>
                                            {tokenDetail.description}
                                            {!tokenDetail.publish &&
                                                " (Comming Soon)"}
                                        </BaseStyled.TokenDes>
                                    </Box>
                                </BaseStyled.CNContainer>
                            </Grid>
                            <Grid item md={6}>
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "flex-start",
                                        justifyContent: "center",
                                        paddingRight: "17px",
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
                                            marginLeft: "35px",
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
                            {tokenDetail.publish ? (
                                <DepositButtons coin={token} />
                            ) : (
                                <BorderButton style={{ width: "424px" }}>
                                    Comming Soon
                                </BorderButton>
                            )}
                        </StyledDepositButtons>
                    </div>
                </SectionContent>
            </Section>
        </>
    );
}

const SectionContent = styled.div`
    padding: 57px 51px 57px 51px !important;
    height: 100%;
`;
