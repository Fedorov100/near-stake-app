import { AccountBalanceWallet } from "@mui/icons-material";
import React, { ReactNode } from "react";
import styled from "styled-components";

interface ButtonListProps {
    className?: string;
    title?: string;
    footer?: ReactNode;
    children: ReactNode;
}

function ButtonListBase(props: ButtonListProps) {
    const { className, title, footer, children } = props;
    return (
        <section className={className}>
            <AccountBalanceWallet className="wallet-icon" />
            {title && <h1>{title}</h1>}
            <div className="children">{children}</div>
        </section>
    );
}

export const ButtonList = styled(ButtonListBase)`
    display: flex;
    align-items: center;
    border-radius: 25px;
    border: 1px solid #f9d85e;
    padding: 3px 35px;
	cursor: pointer;

    .wallet-icon {
        color: #f9d85e;
        margin-right: 5px;
        width: 13px;
    }

    h1 {
        font-style: normal;
        font-size: 11px;
        font-weight: 600;
        line-height: 120%;
        /* or 13px */

        color: #f9d85e;
    }
`;
