import React, { useMemo, memo, useState } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import Image from "next/legacy/image";
import Link from 'next/link';
import navLinks from './navLinks';

const RenderNavLink = memo(({ item }) => {
    const [showDropdown, setShowDropdown] = useState(false);

    const handleMouseEnter = () => {
        setShowDropdown(true);
    };

    const handleMouseLeave = () => {
        setShowDropdown(false);
    };

    return (
        item.dropdownItems ? (
            <NavDropdown 
                title={item.text}
                show={showDropdown}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {item.dropdownItems.map((dropdownItem, index) => (
                    <NavDropdown.Item key={index} href={dropdownItem.href}>
                        {dropdownItem.text}
                    </NavDropdown.Item>
                ))}
            </NavDropdown>
        ) : (
            <Link className="nav-link" href={item.href}>{item.text}</Link>
        )
    );
});

const NavBar = () => {
    const memoizedNavLinks = useMemo(() => navLinks, []);

    return (
        <Navbar bg="light" expand="lg" fixed="top" className='py-4'>
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
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
