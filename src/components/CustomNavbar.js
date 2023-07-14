import React, { useState } from "react";
import "./CustomNavbar.css";
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink } from "reactstrap";

const CustomNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("About");

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsOpen(false);
  };

  return (
    <Navbar className="my-navbar" color="light" light expand="md" fixed="top">
      <NavbarBrand className="my-brand" href="/">
        BG
      </NavbarBrand>
      <NavbarToggler onClick={toggleNavbar} />
      <Collapse className=" justify-content-end" isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink
              href="#about-me"
              active={activeLink === "About"}
              onClick={() => handleLinkClick("About")}
            >
              About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href="#my-project"
              active={activeLink === "My Project"}
              onClick={() => handleLinkClick("My Project")}
            >
              My Project
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href="#skill-hobbies"
              active={activeLink === "Skills"}
              onClick={() => handleLinkClick("Skills")}
            >
              Skills
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href="#experiances"
              active={activeLink === "Experiences"}
              onClick={() => handleLinkClick("Experiences")}
            >
              Experiences
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href="#educations"
              active={activeLink === "Educations"}
              onClick={() => handleLinkClick("Educations")}
            >
              Educations
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
