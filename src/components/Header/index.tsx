import { RouteMenu, useMenus } from "config/menu";
import { useWallet } from "contexts/accounts";
import { screen } from "env";
import { utils, WalletConnection } from "near-api-js";
import { useEffect, useState } from "react";
import { Link, useMatch } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { ButtonList } from "./components/ConnectButton";
import ConnectWalletDialog from "./components/ConnectWalletDialog";
import { Container } from "./style";

export interface DesktopHeaderProps {
    className?: string;
}

export interface Account {
    connected: boolean;
    walletAddress: string | undefined;
    balance: number;
}

export default function Header({ className }: DesktopHeaderProps) {
    const menus = useMenus();
    const wallet: WalletConnection = useWallet();

    const [openWalletDialog, setOpenWalletDialog] = useState<boolean>(false);
    const [waitingConnect, setWaitingConnect] = useState<boolean>(false);
    const [account, setAccount] = useState<Account>({
        connected: false,
        walletAddress: "",
        balance: 0,
    });

    const getAccountDetail = async () => {
        const connected = wallet.isSignedIn();
        const walletAddress = wallet.getAccountId();
        let balance = await wallet.account().getAccountBalance();
        const amountInNEAR = utils.format.formatNearAmount(balance.available);
        setAccount({
            connected,
            walletAddress,
            balance: Number(amountInNEAR),
        });
    };

    useEffect(() => {
        getAccountDetail();
    }, []);

    useEffect(() => {
        if (!openWalletDialog) setWaitingConnect(false);
    }, [openWalletDialog]);

    return (
        <Container style={{ marginTop: "14px" }}>
            <div className={"menu-wrap"}>
                <nav className="menu">
                    {menus.map((itemMenu: RouteMenu) => (
                        <NavMenu key={"menu-" + itemMenu.to} {...itemMenu} />
                    ))}
                </nav>

                <section className="wallet">
                    <ButtonList
                        {...account}
                        className="connect"
                        title="Connect Wallet"
                        onClick={() => setOpenWalletDialog(!openWalletDialog)}
                    ></ButtonList>
                </section>

                <GlobalStyle />
                <ConnectWalletDialog
                    open={openWalletDialog}
                    closeDialog={() => setOpenWalletDialog(false)}
                    isWaiting={waitingConnect}
                    isFailed={false}
                    setWaiting={setWaitingConnect}
                />
            </div>
        </Container>
    );
}

function NavMenu({ to, title }: RouteMenu) {
    const match = useMatch({
        path: to,
    });

    return (
        <div
            data-active={!!match}
            style={{
                height: "53px",
                paddingLeft: "10px",
                paddingRight: "10px",
            }}
        >
            <Link to={to}>{title}</Link>
        </div>
    );
}

const GlobalStyle = createGlobalStyle`
  @media (max-width: ${screen.tablet.max}px) {
    body {
      padding-bottom: 60px;
    }
  }
`;
