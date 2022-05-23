import { useState, useEffect } from "react";
import { Button, Grid, Box } from "@mui/material";
import { SyncAlt } from "@mui/icons-material";
import {
    InSection,
    Container,
    InputAmount,
    SubDescription,
    ProjectedValue,
} from "./style";
import { StyledSection } from "views/Dashboard/style";
import { Section } from "views/MyPage/style";
import { StakeButton } from "views/Earn/components/TotalDepositSection";
import { ActionButton } from "@libs/components/ActionButton";
import { FlexTitleContainer } from "components/PageTitle/style";
import PageTitle from "components/PageTitle";

export interface BorrowProps {
    className?: string;
}

export default function Utility({ className }: BorrowProps) {
    const [active, setActive] = useState(false);

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
        <Container className={className}>
            <FlexTitleContainer>
                <PageTitle title="Utility+" />
            </FlexTitleContainer>
            <>
                <h2
                    style={{
                        fontWeight: "860",
                        fontSize: "20px",
                        marginBottom: "20px",
                    }}
                >
                    COMMUNITY FARMING EVENT 🚜
                </h2>
                <Section className="NeuSection-root">
                    <div className="NeuSection-content">
                        <section
                            style={{
                                display: "inline-block",
                                width: "50%",
                            }}
                        >
                            <div className={"head1"}>CURRENT NearT PRICE </div>
                            <div
                                className={"adorn"}
                                style={{ marginBottom: "40px" }}
                            >
                                <div className={"numbers"}>0.25</div>
                                <span className={"denom"}>USD</span>
                            </div>
                            <StakeButton
                                coin={"uluna"}
                                coinName={"NOW & GET FREE TerraT"}
                            />
                        </section>
                        <section
                            style={{
                                display: "inline-block",
                                width: "50%",
                                verticalAlign: "top",
                            }}
                        >
                            <div className={"head1"}>PROJECTED NearT PRICE</div>
                            <div className={"adorn"}>
                                <div className={"numbers"}>1.25</div>
                                <span className={"denom"}>USD</span>
                            </div>
                        </section>
                    </div>
                </Section>
                <StyledSection className={"mid"}>
                    <section
                        style={{
                            display: "inline-block",
                            width: "50%",
                        }}
                    >
                        <div className={"head1"}>YOUR FARMED NearT TOKENS</div>
                        <div className={"adorn"}>
                            <div className={"numbers"}>52,875.97</div>
                            <span className={"denom"}>NearT</span>
                        </div>
                    </section>
                    <section
                        style={{
                            display: "inline-block",
                            width: "50%",
                        }}
                    >
                        <div className={"head1"}>
                            YOUR PROJECTED SHARE OF NearT TOKENS
                        </div>
                        <div className={"adorn"}>
                            <div className={"numbers"}>1,152,875.97</div>
                            <span className={"denom"}>NearT</span>
                        </div>
                    </section>
                </StyledSection>
                <StyledSection className={"mid"}>
                    <section
                        style={{
                            display: "inline-block",
                            width: "50%",
                        }}
                    >
                        <div className={"head1"}>
                            YOUR CURRENT ALLOCATION VALUE
                        </div>
                        <div className={"adorn"}>
                            <div className={"numbers"}>$10,355</div>
                            <span className={"denom"}>USD</span>
                        </div>
                    </section>
                    <section
                        style={{
                            display: "inline-block",
                            width: "50%",
                        }}
                    >
                        <div className={"head1"}>
                            YOUR PROJECTED ALLOCATION VALUE
                        </div>
                        <div className={"adorn"}>
                            <div className={"numbers"}>$122,875</div>
                            <span className={"denom"}>USD</span>
                        </div>
                    </section>
                </StyledSection>
                <StyledSection className={"bottom-top"}>
                    <Grid container>
                        <Grid item md={5}>
                            <div
                                className={"head1"}
                                style={{ marginBottom: "50px" }}
                            >
                                HOW MUCH NearT CAN I EARN?
                            </div>
                            <StakeButton
                                coin={"uluna"}
                                coinName={"NOW & GET FREE NearT"}
                            />
                        </Grid>
                        <Grid
                            item
                            md={7}
                            style={{
                                display: "flex",
                                alignItems: "flex-end",
                            }}
                        >
                            <Grid
                                container
                                alignItems="flex-start"
                                justifyContent="space-between"
                            >
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "flex-start",
                                    }}
                                >
                                    <InputAmount>$150,000 (INPUT)</InputAmount>
                                    <div
                                        style={{
                                            borderBottom: "1px solid #5C5353",
                                            width: "200px",
                                        }}
                                    ></div>
                                    <SubDescription>
                                        Your Total Deposit in USD
                                    </SubDescription>
                                </Box>
                                <SyncAlt
                                    style={{
                                        fontSize: "24px",
                                        alignSelf: "center",
                                    }}
                                />
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "flex-start",
                                    }}
                                >
                                    <InputAmount>
                                        1,272,891 (OUTPUT)
                                    </InputAmount>
                                    <div
                                        style={{
                                            borderBottom: "1px solid #5C5353",
                                            width: "200px",
                                        }}
                                    ></div>
                                    <SubDescription>
                                        Your expected NearT Allocation
                                    </SubDescription>
                                    <ProjectedValue>
                                        The Projected Allocation Value:
                                        $323,121.75USD{" "}
                                    </ProjectedValue>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </StyledSection>

                <h2
                    style={{
                        fontWeight: "860",
                        fontSize: "20px",
                    }}
                >
                    MONTHLY REWARDS PLUS PROGRAM
                </h2>
                <StyledSection
                    className={"bottom-sec"}
                    style={{ marginTop: "20px" }}
                >
                    <Grid container>
                        <Grid item md={6}>
                            <div className={"head1"}>
                                NEAR TREASURY REWARDS PLUS PROGRAM
                            </div>
                            <div
                                className={"head1"}
                                style={{ marginTop: "80px" }}
                            >
                                YOUR QUALIFIED DEPOSIT VALUE
                            </div>
                            <div className={"adorn"}>
                                <div className={"numbers"}>532,875</div>
                                <span className={"denom"}>USD</span>
                            </div>
                            <ActionButton
                                className="claim"
                                style={{
                                    width: "50%",
                                    marginTop: "30px",
                                }}
                            >
                                SAVE MORE
                            </ActionButton>
                        </Grid>
                        <Grid item md={6}>
                            <div className={"head1"}>
                                QUALIFYING PHASE STATUS
                            </div>
                            <Button
                                variant="contained"
                                style={{
                                    color: "#ffffff",
                                    borderRadius: "20px",
                                    height: "29px",
                                    width: "93px",
                                    margin: "20px 0",
                                    backgroundColor: active
                                        ? "#57A146"
                                        : "#c92727",
                                }}
                                disabled={!active}
                            >
                                {!active && <span>InActive</span>}
                                {active && <span>Active</span>}
                            </Button>
                            <InSection
                                className={"NeuSection-root bottom-desc"}
                            >
                                <div className="NeuSection-content">
                                    <div>
                                        IF THE BUTTON IS GREEN, THIS MEANS EVERY
                                        DEPOSIT DURING THIS PERIOD QUALIFIES YOU
                                        FOR THE MONTHLY REWARDS+ PROGRAM.
                                    </div>
                                    <br />
                                    <br />
                                    <div>
                                        IF THE BUTTON IS RED, THIS MEANS YOU
                                        NEED TO KEEP YOUR BALANCE DEPOSITED TO
                                        BECOME ELIGIBLE FOR THE NEXT QUALIFIYNG
                                        PHASE.
                                    </div>
                                    <br />
                                    <br />
                                    <div>
                                        ALL PAYOUTS OF THE REWARDS+ PROGRAM ARE
                                        AUTOMATED.
                                    </div>
                                </div>
                            </InSection>
                        </Grid>
                    </Grid>
                </StyledSection>
            </>
        </Container>
    );
}
