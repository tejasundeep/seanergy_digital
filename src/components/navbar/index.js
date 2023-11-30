import React, { useMemo, memo } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';
import navLinks from './navLinks';

const RenderNavLink = memo(({ item }) => (
    item.dropdownItems ? (
        <NavDropdown title={item.text}>
            {item.dropdownItems.map((dropdownItem) => (
                <NavDropdown.Item key={dropdownItem.id} href={dropdownItem.href}>
                    {dropdownItem.text}
                </NavDropdown.Item>
            ))}
        </NavDropdown>
    ) : (
        <Link className="nav-link" href={item.href}>{item.text}</Link>
    )
));

const NavBar = () => {
    const memoizedNavLinks = useMemo(() => navLinks, []);

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <Image
                        src="/Logo.png"
                        alt="Company Logo"
                        width={350}
                        height={55}
                        priority
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-collapse" />
                <Navbar.Collapse className="justify-content-end">
                    <Nav className="mr-auto">
                        {memoizedNavLinks.map((item) => (
                            <RenderNavLink key={item.id} item={item} />
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
