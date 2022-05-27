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
            <AccountBalanceWallet className="wallet-icon" />
            <h1 onClick={(e) => handleClick(e)} aria-controls="menu-appbar">
                {`${truncate(walletAddress, [5, 5])} | ${truncateBalance(
                    balance
                )} NEAR`}
            </h1>
            <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                className="wallet-menu"
                transformOrigin={{
                    vertical: "top",
                    horizontal: "center",
                }}
            >
                <MenuItem onClick={disconnectNearWallet}>Disconnect</MenuItem>
            </Menu>
        </section>
    );
}

const ConnectedButton = styled(ConnectedButtonBase)`
    display: flex;
    align-items: center;
    border-radius: 25px;
    border: 1px solid ${(theme) => theme.theme.colors.negative};
    padding: 3px 35px;
    cursor: pointer;

    .wallet-icon {
        color: ${(theme) => theme.theme.colors.negative};
        margin-right: 5px;
        width: 13px;
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
        margin-left: 55px;

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
