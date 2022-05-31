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
                color: ["#493c3c", "#F72585"],
                amount: 2665750.99,
            },
            totalValue: 2665750.99,
            data: [
                {
                    label: "Total Balance",
                    tooltip:
                        "Total amount of USD deposited and interest generated",
                    amount: 2665750.99,
                    color: ["#493c3c", "#F72585"],
                },
                {
                    label: "Stable Balance",
                    tooltip: "Total amount of Stable Coins",
                    amount: 1999313.24,
                    color: ["#493c3c", "#000000"],
                },
                {
                    label: "Volatile Asset Balance",
                    tooltip: "Total value of Volatile Assets held",
                    amount: 666437.74,
                    color: ["#493c3c", "#F9D85E"],
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
                                <InfoTooltip style={{ color: "white", opacity: "1", height: "21px", width: "18px" }}>
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
                            href="https://www.coinspot.com.au/swap/near"
                            style={{ textDecoration: "inherit" }}
                        >
                            <BorderButton
                                style={{
                                    height: "25px",
                                    width: "92px",
                                    fontSize: "9px",
                                    paddingLeft: "5px"
                                }}
                            >
                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.7071 7.41789C10.3166 7.02737 9.68342 7.02737 9.29289 7.41789C8.90237 7.80842 8.90237 8.44158 9.29289 8.83211L10.7071 7.41789ZM11.875 10L12.5821 10.7071C12.9726 10.3166 12.9726 9.68342 12.5821 9.29289L11.875 10ZM9.29289 11.1679C8.90237 11.5584 8.90237 12.1916 9.29289 12.5821C9.68342 12.9726 10.3166 12.9726 10.7071 12.5821L9.29289 11.1679ZM9.29289 8.83211L11.1679 10.7071L12.5821 9.29289L10.7071 7.41789L9.29289 8.83211ZM11.1679 9.29289L9.29289 11.1679L10.7071 12.5821L12.5821 10.7071L11.1679 9.29289Z" fill="#CEBFBF" />
                                    <path d="M3.125 9C2.57272 9 2.125 9.44772 2.125 10C2.125 10.5523 2.57272 11 3.125 11V9ZM11.875 11C12.4273 11 12.875 10.5523 12.875 10C12.875 9.44772 12.4273 9 11.875 9V11ZM3.125 11H11.875V9H3.125V11Z" fill="#CEBFBF" />
                                    <path d="M4.29289 7.58211C4.68342 7.97263 5.31658 7.97263 5.70711 7.58211C6.09763 7.19158 6.09763 6.55842 5.70711 6.16789L4.29289 7.58211ZM3.125 5L2.41789 4.29289C2.02737 4.68342 2.02737 5.31658 2.41789 5.70711L3.125 5ZM5.70711 3.83211C6.09763 3.44158 6.09763 2.80842 5.70711 2.41789C5.31658 2.02737 4.68342 2.02737 4.29289 2.41789L5.70711 3.83211ZM5.70711 6.16789L3.83211 4.29289L2.41789 5.70711L4.29289 7.58211L5.70711 6.16789ZM3.83211 5.70711L5.70711 3.83211L4.29289 2.41789L2.41789 4.29289L3.83211 5.70711Z" fill="#CEBFBF" />
                                    <path d="M11.875 6C12.4273 6 12.875 5.55228 12.875 5C12.875 4.44772 12.4273 4 11.875 4L11.875 6ZM3.125 4C2.57272 4 2.125 4.44772 2.125 5C2.125 5.55229 2.57272 6 3.125 6L3.125 4ZM11.875 4L3.125 4L3.125 6L11.875 6L11.875 4Z" fill="#CEBFBF" />
                                </svg>&nbsp;&nbsp;&nbsp;
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
                                style={{ color: color[1] }}
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
                                        <InfoTooltip style={{ color: "white", opacity: "1", height: "22px", width: "14px" }}>{tooltip}</InfoTooltip>
                                    </IconSpan>
                                </p>
                                <p
                                    style={{
                                        fontStyle: "italic",
                                        color: "#d8d0cd",
                                    }}
                                >
                                    $ {numberWithCommas(amount)}
                                    {` USD`}
                                    {/* {` ${symbol}`} */}
                                </p>
                            </li>
                        ))}
                    </ul>

                    {!isSmallLayout && (
                        <div
                            style={{
                                marginRight: "35px",
                                transform: "rotateX(180deg)",
                            }}
                        >
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
            min-width: 215px;
            min-height: 215px;
            max-width: 215px;
            max-height: 215px;
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
