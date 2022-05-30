import { truncate, truncateBalance } from "@libs/formatter/wallet-address";
import { AccountBalanceWallet } from "@mui/icons-material";
import { Menu as MuiMenu, MenuItem } from "@mui/material";
import { useWallet } from "contexts/accounts";
import { WalletConnection } from "near-api-js";
import { useState } from "react";
import styled from "styled-components";
import { Account } from "..";

interface ButtonListProps extends Account {
    className?: string;
}

function ConnectedButtonBase(props: ButtonListProps) {
    const { className, walletAddress, balance } = props;
    const wallet: WalletConnection = useWallet();

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLHeadElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const disconnectNearWallet = () => {
        wallet.signOut();
        window.location.reload();
    };

    return (
        <section className={className}>


            <div className="letter-header">
                <svg className="wallet-icon" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.4" d="M11.6053 3.58108L9.98723 1.52241C9.55147 0.967985 8.73772 0.834974 8.13343 1.2194L4.37305 3.61161" stroke="#F9D85E" stroke-linecap="round" stroke-linejoin="round" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.6051 6.5498H13.3156C13.6935 6.5498 13.9998 6.84212 13.9998 7.20271V9.16141C13.9998 9.522 13.6935 9.81431 13.3156 9.81431H11.6051C10.6604 9.81431 9.89453 9.08353 9.89453 8.18206V8.18206C9.89453 7.28059 10.6604 6.5498 11.6051 6.5498V6.5498Z" stroke="#F9D85E" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M13.3158 6.54987V5.24407C13.3158 4.3426 12.55 3.61182 11.6053 3.61182H2.71053C1.76583 3.61182 1 4.3426 1 5.24407V11.1202C1 12.0217 1.76583 12.7524 2.71053 12.7524H11.6053C12.55 12.7524 13.3158 12.0217 13.3158 11.1202V9.81438" stroke="#F9D85E" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <h1 onClick={(e) => handleClick(e)} aria-controls="menu-appbar" style={{ letterSpacing: "0.5px", lineHeight: "1px" }}>
                    {`${truncate(walletAddress, [5, 5])}`} &nbsp;| &nbsp;
                </h1>
                <h1 onClick={(e) => handleClick(e)} aria-controls="menu-appbar" style={{ letterSpacing: "0.2px", lineHeight: "1px" }} >
                    {`${truncateBalance(balance)} NEAR`}
                </h1>
            </div>
            <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                className="wallet-menu"
                style={{ marginLeft: "10px" }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "center",
                }}
            >
                <MenuItem onClick={disconnectNearWallet}>Disconnect</MenuItem>
            </Menu>
        </section >
    );
}

const ConnectedButton = styled(ConnectedButtonBase)`
    display: flex;
    align-items: center;
    height: 27px;
    width: 235px;
    justify-content: flex-start;
    border-radius: 25px;
    border: 1px solid ${(theme) => theme.theme.colors.negative};
    font-family: SF Pro Text;
    cursor: pointer;
    letter-space: 1px;
    padding: 1px 15px !important;

    .wallet-icon {
        color: ${(theme) => theme.theme.colors.negative};
        margin-right: 5px;
        width: 16px !important;
        height: 17x !important;
        margin-bottom: 2px;
    }

    .letter-header {
        display: flex;
        justify-content: space-between;
        width: 100%;
        align-items: center
    }

    h1 {
        font-style: normal;
        font-size: 11px;
        font-weight: 600;
        line-height: 120%;
        /* or 13px */

        color: ${(theme) => theme.theme.colors.negative};
    }
`;

const Menu = styled(MuiMenu)`
    .MuiPaper-root {
        margin-top: 15px;
        width: 220px;
        margin-left: 75px;
        height: 27px;
        width: 225px;
        border-radius: 25px;
        border: 1px solid ${(theme) => theme.theme.colors.negative};
        .MuiList-root {
            padding: 0;
            .MuiMenuItem-root {
                font-size: 11px;
                color: ${(theme) => theme.theme.colors.negative};
                justify-content: center;
            }
        }
    }
`;

export default ConnectedButton;
