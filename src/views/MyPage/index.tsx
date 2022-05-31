import { Tab } from "@libs/components/Tab";
import { Grid, useMediaQuery } from "@mui/material";
import PageTitle from "components/PageTitle";
import { TitleContainer } from "components/PageTitle/style";
import { useMemo, useState } from "react";
import DepositCard from "./components/DepositCard";
import { TotalClaimableRewards } from "./components/TotalClaimableRewards";
import { TotalValue } from "./components/TotalValue";
import { TransactionHistory } from "./components/TransactionHistory";
import { Container, OverviewRow } from "./style";

export interface MypageProps {
    className?: string;
}

interface Item {
    label: string;
    value: string;
}

const TAB_ITEMS: Item[] = [
    { label: "ALL", value: "all" },
    { label: "STABLE", value: "stable" },
    { label: "VOLATILE", value: "volatile" },
];

export default function MyPage({ className }: MypageProps) {
    const isSmallLayout = useMediaQuery("(max-width:1000px)");

    const tabItems = useMemo(() => {
        return TAB_ITEMS;
    }, []);

    const [tab, setTab] = useState<Item>(() => tabItems[0]);
    const connected = true;


    return (
        <Container className={className}>
            <TitleContainer style={{ display: "flex" }}>
                <PageTitle title="MY PAGE" docs="https://www.wefund.app" />
            </TitleContainer>
            <OverviewRow className="total_class">
                <TotalValue className="box1" />
                <TotalClaimableRewards className="box2" />
            </OverviewRow>

            {!isSmallLayout && (
                <Tab
                    className="tab box3"
                    items={tabItems}
                    selectedItem={tab ?? tabItems[0]}
                    onChange={setTab}
                    labelFunction={({ label }: any) => label}
                    keyFunction={({ value }: any) => value}
                />
            )}

            <Grid container rowSpacing={4} columnSpacing={7} style={{ paddingTop: "20px" }}>
                <Grid
                    item
                    md={6}
                    style={{ paddingTop: "12px", paddingBottom: "12px" }}
                >
                    <DepositCard
                        token="usdc"
                        tokenName="USD Coin"
                        saveBalance=""
                        saveUSDBalance="$937,345.00"
                        apy="14,87%"
                    />
                </Grid>
                <Grid
                    item
                    md={6}
                    style={{ paddingTop: "12px", paddingBottom: "12px" }}
                >
                    <DepositCard
                        token="wbtc"
                        tokenName="Wrapped Bitcoin"
                        saveBalance=""
                        saveUSDBalance="$88,381.28 USD Value"
                        apy="9,87%"
                    />
                </Grid>
                <Grid
                    item
                    md={6}
                    style={{ paddingTop: "12px", paddingBottom: "12px" }}
                >
                    <DepositCard
                        token="usdt"
                        tokenName="USD Tether"
                        saveBalance=""
                        saveUSDBalance="$37,345.89"
                        apy="14,87%"
                    />
                </Grid>
                <Grid
                    item
                    md={6}
                    style={{ paddingTop: "12px", paddingBottom: "12px" }}
                >
                    <DepositCard
                        token="eth"
                        tokenName="Ethereum"
                        saveBalance=""
                        saveUSDBalance="$43,455.81 USD Value"
                        apy="9,87%"
                    />
                </Grid>
                <Grid
                    item
                    md={6}
                    style={{ paddingTop: "12px", paddingBottom: "12px" }}
                >
                    <DepositCard
                        token="dai"
                        tokenName="Dai"
                        saveBalance=""
                        saveUSDBalance="$937,345.79"
                        apy="14,87%"
                    />
                </Grid>
                <Grid
                    item
                    md={6}
                    style={{ paddingTop: "12px", paddingBottom: "12px" }}
                >
                    <DepositCard
                        token="wnear"
                        tokenName="Wrapped Near"
                        saveBalance=""
                        saveUSDBalance="$107,289.97USD Value"
                        apy="9,87%"
                    />
                </Grid>
            </Grid>

            {(isSmallLayout || tab.value === "all") && connected && (
                <div className="box5">
                    <h2 style={{ fontWeight: "860" }}>TRANSACTION HISTORY</h2>
                    <TransactionHistory />
                </div>
            )}
        </Container>
    );
}
