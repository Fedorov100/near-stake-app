import { Tab } from "@libs/components/Tab";
import { Grid, useMediaQuery } from "@mui/material";
import PageTitle from "components/PageTitle";
import { TitleContainer } from "components/PageTitle/style";
import { useMemo, useState } from "react";
import { Link } from "@mui/material";
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
                <PageTitle title="MY PAGE" />
                <Link href='https://www.wefund.app' style={{ marginTop: "21px", opacity: "0.7", marginLeft: "20px", textDecoration: "none", color: "white", fontWeight: "bold" }} variant="body2">
                    Docs &nbsp;&nbsp;
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.16683 2.0835H2.50016C2.27004 2.0835 2.0835 2.27004 2.0835 2.50016V7.50016C2.0835 7.73028 2.27004 7.91683 2.50016 7.91683H7.50016C7.73028 7.91683 7.91683 7.73028 7.91683 7.50016V5.8335" stroke="#CEBFBF" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M7.83333 3.74984C7.83333 4.02598 8.05719 4.24984 8.33333 4.24984C8.60948 4.24984 8.83333 4.02598 8.83333 3.74984L7.83333 3.74984ZM8.33333 1.6665L8.83333 1.6665C8.83333 1.5339 8.78065 1.40672 8.68689 1.31295C8.59312 1.21918 8.46594 1.1665 8.33333 1.1665V1.6665ZM6.25 1.1665C5.97386 1.1665 5.75 1.39036 5.75 1.6665C5.75 1.94265 5.97386 2.1665 6.25 2.1665V1.1665ZM8.83333 3.74984L8.83333 1.6665L7.83333 1.6665L7.83333 3.74984L8.83333 3.74984ZM8.33333 1.1665H6.25V2.1665H8.33333V1.1665Z" fill="#CEBFBF" />
                        <path d="M5.06295 4.22962C4.86769 4.42488 4.86769 4.74146 5.06295 4.93672C5.25821 5.13199 5.5748 5.13199 5.77006 4.93672L5.06295 4.22962ZM8.68672 2.02006C8.88199 1.8248 8.88199 1.50821 8.68672 1.31295C8.49146 1.11769 8.17488 1.11769 7.97962 1.31295L8.68672 2.02006ZM5.77006 4.93672L8.68672 2.02006L7.97962 1.31295L5.06295 4.22962L5.77006 4.93672Z" fill="#CEBFBF" />
                    </svg>

                </Link>
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
