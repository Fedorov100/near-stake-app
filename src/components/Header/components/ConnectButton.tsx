import { AccountBalanceWallet } from "@mui/icons-material";
import styled from "styled-components";
import { Account } from "..";
import ConnectedButton from "./ConnectedButton";

interface ButtonListProps extends Account {
    className?: string;
    title?: string;
    onClick: () => void;
}

function ButtonListBase(props: ButtonListProps) {
    const { className, title, connected } = props;

    if (connected) {
        return <ConnectedButton {...props} />;
    }

    return (
        <section className={className} onClick={props.onClick}>
            <AccountBalanceWallet className="wallet-icon" />
            {title && <h1>{title}</h1>}
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
