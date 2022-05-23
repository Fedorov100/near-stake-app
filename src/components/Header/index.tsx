import { RouteMenu, useMenus } from "config/menu";
import { screen } from "env";
import { Link, useMatch } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { Container } from "./style";

export interface DesktopHeaderProps {
    className?: string;
}

export default function Header({ className }: DesktopHeaderProps) {
    const menus = useMenus();
    return (
        <Container>
            <div className={"menu-wrap"}>
                <nav className="menu">
                    {menus.map((itemMenu: RouteMenu) => (
                        <NavMenu key={"menu-" + itemMenu.to} {...itemMenu} />
                    ))}
                </nav>

                <div />

                <section className="wallet"></section>

                <GlobalStyle />
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
