import { Grid } from "@mui/material";
import PageTitle from "components/PageTitle";
import { FlexTitleContainer } from "components/PageTitle/style";
import DepositCard from "views/MyPage/components/DepositCard";
import { ExpectedInterestSection } from "./components/ExpectedInterestSection";
import { TotalDepositSection } from "./components/TotalDepositSection";
import { Container } from "./style";

export interface EarnProps {
    className?: string;
}

export default function Earn({ className }: EarnProps) {
    return (
        <Container className={className}>
            <FlexTitleContainer>
                <PageTitle title="EARN" />
            </FlexTitleContainer>
            <section>
                <TotalDepositSection className="total-deposit NeuSection-root" />
                <Grid
                    container
                    rowSpacing={4}
                    columnSpacing={7}
                    sx={{ mt: "40px" }}
                >
                    <Grid item md={6}>
                        <DepositCard
                            token="usdc"
                            tokenName="USD Coin"
                            saveBalance=""
                            saveUSDBalance="$937,345.00"
                            apy="14,87%"
                        />
                    </Grid>
                    <Grid item md={6}>
                        <DepositCard
                            token="wbtc"
                            tokenName="Wrapped Bitcoin"
                            saveBalance="3.00 wBTC"
                            saveUSDBalance="$88,381.28 USD Value"
                            apy="9,87%"
                        />
                    </Grid>
                    <Grid item md={6}>
                        <DepositCard
                            token="usdt"
                            tokenName="USD Tether"
                            saveBalance=""
                            saveUSDBalance="$37,345.89"
                            apy="14,87%"
                        />
                    </Grid>
                    <Grid item md={6}>
                        <DepositCard
                            token="eth"
                            tokenName="Ethereum"
                            saveBalance="21.55 ETH"
                            saveUSDBalance="$43,455.81 USD Value"
                            apy="9,87%"
                        />
                    </Grid>
                    <Grid item md={6}>
                        <DepositCard
                            token="dai"
                            tokenName="Dai"
                            saveBalance=""
                            saveUSDBalance="$937,345.79"
                            apy="14,87%"
                        />
                    </Grid>
                    <Grid item md={6}>
                        <DepositCard
                            token="wnear"
                            tokenName="Wrapped Near"
                            saveBalance="16,829.00 wNEAR"
                            saveUSDBalance="$107,289.97USD Value"
                            apy="9,87%"
                        />
                    </Grid>
                </Grid>
                <ExpectedInterestSection className="expected-interest" />
            </section>
        </Container>
    );
}
