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
            <div style={{ display: "flex", padding: "3px 10px", letterSpacing: "0.2px" }}>
                <svg width="15" height="14" style={{ marginBottom: "2px" }} viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.4" d="M11.6053 3.58108L9.98723 1.52241C9.55147 0.967985 8.73772 0.834974 8.13343 1.2194L4.37305 3.61161" stroke="#F9D85E" stroke-linecap="round" stroke-linejoin="round" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.6051 6.5498H13.3156C13.6935 6.5498 13.9998 6.84212 13.9998 7.20271V9.16141C13.9998 9.522 13.6935 9.81431 13.3156 9.81431H11.6051C10.6604 9.81431 9.89453 9.08353 9.89453 8.18206V8.18206C9.89453 7.28059 10.6604 6.5498 11.6051 6.5498V6.5498Z" stroke="#F9D85E" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M13.3158 6.54987V5.24407C13.3158 4.3426 12.55 3.61182 11.6053 3.61182H2.71053C1.76583 3.61182 1 4.3426 1 5.24407V11.1202C1 12.0217 1.76583 12.7524 2.71053 12.7524H11.6053C12.55 12.7524 13.3158 12.0217 13.3158 11.1202V9.81438" stroke="#F9D85E" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

                {title && <h1 style={{ marginTop: "1.3px" }}>&nbsp;{title}</h1>}
            </div>
        </section>
    );
}

export const ButtonList = styled(ButtonListBase)`
    display: flex;
    align-items: center;
    border-radius: 25px;
    border: 1px solid #f9d85e;
    padding: 3px 25px;
    height: 27px;
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
