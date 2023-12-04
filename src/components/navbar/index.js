import React, { useMemo, useCallback, memo, useState } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import Image from "next/legacy/image";
import Link from "next/link";
import navLinks from "./navLinks";
import { useTheme } from "../themeSwitcher";
import styles from "@/styles/NavBar.module.scss";

const RenderNavLink = memo(({ item }) => {
    const [showDropdown, setShowDropdown] = useState(false);

    const handleMouseEnter = useCallback(() => setShowDropdown(true), []);
    const handleMouseLeave = useCallback(() => setShowDropdown(false), []);

    return item.dropdownItems ? (
        <NavDropdown
            title={item.text}
            show={showDropdown}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={styles["navbar__dropdown-menu"]}
        >
            {item.dropdownItems.map((dropdownItem, index) => (
                <NavDropdown.Item
                    key={index}
                    href={dropdownItem.href}
                    className={styles["navbar__dropdown-menu__item"]}
                >
                    {dropdownItem.text}
                </NavDropdown.Item>
            ))}
        </NavDropdown>
    ) : (
        <Link className={`nav-link ${styles.navbar__link}`} href={item.href}>
            {item.text}
        </Link>
    );
});

RenderNavLink.displayName = "RenderNavLink";

const NavBar = () => {
    const memoizedNavLinks = useMemo(() => navLinks, []);
    const { theme, toggleTheme } = useTheme();

    return (
        <Navbar data-bs-theme={theme} expand="lg" fixed="top" className="py-4">
            <Container>
                <Navbar.Brand href="#home">
                    <Image
                        src="/Logo.png"
                        alt="Company Logo"
                        width={350}
                        height={55}
                        priority
                        layout="fixed"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-collapse" />
                <Navbar.Collapse className="justify-content-end">
                    <Nav className="mr-auto">
                        {memoizedNavLinks.map((item, index) => (
                            <RenderNavLink key={index} item={item} />
                        ))}
                        <button
                            className={`btn btn-white ${styles["navbar__theme-toggle-button"]}`}
                            onClick={toggleTheme}
                        >
                            {theme === "light" ? "🌕" : "🌞"}
                        </button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
