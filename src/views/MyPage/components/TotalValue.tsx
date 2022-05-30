import { IconSpan } from "@libs/components/IconSpan";
import { InfoTooltip } from "components/InfoTooltip";
import { SwapHoriz } from "@mui/icons-material";
import { useMemo, useState } from "react";
import styled from "styled-components";
import useResizeObserver from "use-resize-observer/polyfilled";
import { Section, Sub } from "../style";
import { ChartItem, DoughnutChart } from "./graphics/DoughnutGraph";
import { BorderButton } from "@libs/components/BorderButton";
import { numberWithCommas } from "views/Dashboard/components/ANCPriceChart";

export interface TotalValueProps {
    className?: string;
}

interface Item {
    label: string;
    tooltip: string;
    amount: number;
    color: string[];
}

function TotalValueBase({ className }: TotalValueProps) {
    const [focusedIndex, setFocusedIndex] = useState(-1);

    const { ref, width = 400 } = useResizeObserver();

    const { totalValue, data } = useMemo<{
        totalBalance: Item;
        totalValue: number;
        data: Item[];
    }>(() => {
        return {
            totalBalance: {
                label: "Total Balance",
                tooltip: "Total amount of USD deposited and interest generated",
                color: ["#F72585", "#493c3c"],
                amount: 2665750.99,
            },
            totalValue: 2665750.99,
            data: [
                {
                    label: "Total Balance",
                    tooltip: "Total amount of USD deposited and interest generated",
                    amount: 2665750.99,
                    color: ["#F72585", "#493c3c"],
                },
                {
                    label: "Stable Balance",
                    tooltip: "Total amount of Stable Coins",
                    amount: 1999313.24,
                    color: ["#000000", "#493c3c"],
                },
                {
                    label: "Volatile Asset Balance",
                    tooltip: "Total value of Volatile Assets held",
                    amount: 666437.74,
                    color: ["#F9D85E", "#493c3c"],
                },
            ],
        };
    }, []);

    const isSmallLayout = useMemo(() => {
        return width < 470;
    }, [width]);

    //@ts-ignore
    const chartData = useMemo<ChartItem[]>(() => {
        let result = data.map(({ label, amount, color }) => ({
            label,
            value: +amount,
            color,
            total: totalValue,
        }));
        return result;
    }, [data, totalValue]);

    return (
        <Section
            className={`${className} NeuSection-root`}
            data-small-layout={isSmallLayout}
            style={{ width: "695px" }}
        >
            <div className="NeuSection-content">
                <header ref={ref}>
                    <div>
                        <h4 style={{ height: "35px" }}>
                            <IconSpan
                                style={{ fontSize: "20px", fontWeight: "860" }}
                            >
                                TOTAL VALUE{" "}
                                <InfoTooltip>
                                    Total value of deposits, borrowing,
                                    holdings, withdrawable liquidity, rewards,
                                    staked ANC, and USD held
                                </InfoTooltip>
                            </IconSpan>
                        </h4>
                        <p
                            style={{
                                fontWeight: 860,
                                fontSize: "35px",
                                marginTop: "-12px",
                                marginBottom: "10px",
                            }}
                        >
                            2,665,750.99
                            <Sub> USD</Sub>
                        </p>
                    </div>
                    <div style={{ fontSize: "9px" }}>
                        <a
                            href="https://app.terraswap.io/swap?to=&type=swap&from=uluna"
                            style={{ textDecoration: "inherit" }}
                        >
                            <BorderButton
                                style={{
                                    height: "25px",
                                    width: "92px",
                                    fontSize: "9px",
                                }}
                            >
                                <SwapHoriz style={{ fontSize: "20px" }} />
                                Swap
                            </BorderButton>
                        </a>
                    </div>
                </header>

                <div className="values" style={{ marginTop: "-30px" }}>
                    <ul>
                        {/* <li
                            key={"Total Balance"}
                            style={{ color: "#F72585" }}
                            data-focus={3 === focusedIndex}
                        >
                            <i
                                style={{
                                    borderRadius: "2px",
                                    marginTop: "4px",
                                    height: "14px",
                                    width: "14px",
                                }}
                            />
                            <p>
                                <IconSpan
                                    style={{
                                        fontSize: "20px",
                                        fontWeight: "bold",
                                    }}
                                >
                                    Total Balance{" "}
                                    <InfoTooltip>
                                        Total amount of USD deposited and
                                        interest generated.
                                    </InfoTooltip>
                                </IconSpan>
                            </p>
                            <p
                                style={{
                                    fontStyle: "italic",
                                    color: "#d8d0cd",
                                }}
                            >
                                $ 2,665,750.99
                                {` USD`}
                            </p>
                        </li> */}
                        {data.map(({ label, tooltip, amount, color }, i) => (
                            <li
                                key={i}
                                style={{ color: color[0] }}
                                data-focus={i === focusedIndex}
                            >
                                <i
                                    style={{
                                        borderRadius: "2px",
                                        marginTop: "4px",
                                    }}
                                />
                                <p>
                                    <IconSpan
                                        style={{
                                            fontSize: "20px",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        {label}{" "}
                                        <InfoTooltip>{tooltip}</InfoTooltip>
                                    </IconSpan>
                                </p>
                                <p
                                    style={{
                                        fontStyle: "italic",
                                        color: "#d8d0cd",
                                    }}
                                >
                                    ${' '}
                                    {numberWithCommas(amount)}
                                    {` USD`}
                                    {/* {` ${symbol}`} */}
                                </p>
                            </li>
                        ))}
                    </ul>

                    {!isSmallLayout && (
                        <div style={{ marginRight: "10%" }}>
                            <DoughnutChart
                                data={chartData!}
                                onFocus={setFocusedIndex}
                            />
                        </div>
                    )}
                </div>
            </div>
        </Section>
    );
}

export const TotalValue = styled(TotalValueBase)`
    letter-spacing: -0.06em !important;
    i {
        background-color: currentColor;

        position: absolute;
        left: -17px;
        top: 5px;

        display: inline-block;
    }
    .NeuSection-content {
    }
    header {
        display: flex;
        justify-content: space-between;

        h4 {
            font-size: 12px;
            font-weight: 860;
            margin-bottom: 5px;
        }

        p {
            font-size: clamp(20px, 8vw, 32px);
            font-weight: 860;

            sub {
                font-size: 20px;
                font-weight: 800;
            }
        }

        button {
            font-size: 14px;
            padding: 0 13px;
            height: 26px;
            width: 100px;
            border-color: #c4c4c4;
            svg {
                font-size: 1em;
                margin-right: 0.3em;
            }
        }
    }

    .NeuSection-root {
        max-height: 434px;
    }

    .values {
        margin-top: 5px;

        display: flex;
        justify-content: space-between;

        ul {
            padding: 0 0 0 12px;
            list-style: none;
            margin-left: 7px;

            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-end;

            li {
                position: relative;

                i {
                    background-color: currentColor;

                    position: absolute;
                    left: -17px;
                    top: 5px;

                    display: inline-block;
                    min-width: 13px;
                    min-height: 13px;
                    transition: transform 0.3s ease-out,
                        border-radius 0.3s ease-out;
                }

                p:nth-of-type(1) {
                    font-size: 12px;
                    font-weight: 500;
                    line-height: 1.5;

                    color: ${({ theme }) => theme.textColor};
                }

                p:nth-of-type(2) {
                    font-size: 13px;
                    line-height: 1.5;

                    color: ${({ theme }) => theme.textColor};
                }

                &[data-focus="true"] {
                    i {
                        transform: scale(1.1);
                        border-radius: 10%;
                    }
                }
            }
        }

        canvas {
            min-width: 230px;
            min-height: 230px;
            max-width: 230px;
            max-height: 230px;
        }
    }

    &[data-small-layout="true"] {
        header {
            flex-direction: column;

            button {
                margin-top: 1em;

                width: 100%;
            }
        }

        .values {
            margin-top: 30px;
            display: block;

            ul {
                display: grid;
            }

            canvas {
                display: none;
            }
        }
    }
`;
