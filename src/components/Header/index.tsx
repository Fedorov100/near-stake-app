import { RouteMenu, useMenus } from "config/menu";
import { screen } from "env";
import { useEffect, useState } from "react";
import { Link, useMatch } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { ButtonList } from "./components/ConnectButton";
import ConnectWalletDialog from "./components/ConnectWalletDialog";
import { Container } from "./style";

export interface DesktopHeaderProps {
    className?: string;
}

export default function Header({ className }: DesktopHeaderProps) {
    const menus = useMenus();
    const [openWalletDialog, setOpenWalletDialog] = useState<boolean>(false);
    const [waitingConnect, setWaitingConnect] = useState<boolean>(false);

    useEffect(() => {
        if (!openWalletDialog) setWaitingConnect(false);
    }, [openWalletDialog]);

    return (
        <Container>
            <div className={"menu-wrap"}>
                <nav className="menu">
                    {menus.map((itemMenu: RouteMenu) => (
                        <NavMenu key={"menu-" + itemMenu.to} {...itemMenu} />
                    ))}
                </nav>

                <section className="wallet">
                    <ButtonList
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
                paddingLeft: "20px",
                paddingRight: "20px",
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
