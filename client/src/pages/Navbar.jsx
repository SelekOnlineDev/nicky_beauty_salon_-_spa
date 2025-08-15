import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FiMenu, FiX } from 'react-icons/fi';
import logoImg from '../assets/logo.png';

const Nav = styled.nav`
  position: fixed; 
  width: 100%;
  height: 75px;
  margin-top: -0.5rem;
  background-color: #fff;
  border-bottom: 2px solid oklch(95.4% .038 75.164);
  font-family: 'Poppins', sans-serif;
  z-index: 1000;
`;

const NavContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1rem;
  height: 100%; 
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const LogoWrapper = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  gap: 0.75rem;
`;

const LogoImg = styled.img`
  height: 55px;
  width: 55px;
  border-radius: 50%;
  object-fit: cover;
`;

const LogoTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const LogoTitle = styled.span`
  font-size: 1.25rem;
  font-weight: 700;
  color: oklch(47% .157 37.304);

  @media (max-width: 420px) {
    font-size: 1.15rem; 
  }
  @media (max-width: 376px) {
    font-size: 0.9rem; 
  }
  @media (max-width: 330px) {
    font-size: 0.75rem; 
  }
`;

const LogoSubtitle = styled.span`
  font-size: 0.9rem;
  font-weight: 400;
  color: oklch(60% .05 200);

  @media (max-width: 420px) {
    font-size: 0.8rem;
  }
  @media (max-width: 376px) {
    font-size: 0.7rem; 
  }
  @media (max-width: 330px) {
    font-size: 0.6rem; 
  }
`;

const BurgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.8rem;
  cursor: pointer;
  color: oklch(47% .157 37.304);

  @media (max-width: 778px) {
    display: block;
  }
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 0.75rem;

  @media (max-width: 778px) {
    position: absolute;
    top: 100%;
    right: 0;
    background: white;
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
    width: 200px;
    padding: 0.5rem 0;
    border: 1px solid oklch(95.4% .038 75.164);
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    transform: ${({ $open }) => ($open ? 'scaleY(1)' : 'scaleY(0)')};
    transform-origin: top;
    transition: transform 0.25s ease-in-out;
    overflow: hidden;
    z-index: 100;
  }
`;

const NavItem = styled.li`
  @media (max-width: 778px) {
    width: 100%;
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: oklch(47% .157 37.304);
  font-weight: bold;
  font-size: 1.1rem;
  padding: 0.5rem 0.75rem;
  border-radius: 8px;
  display: block;
  transition: background-color 0.3s ease, color 0.3s ease;
  font-family: 'Poppins', sans-serif;

  &.active {
    background-color: oklch(95.4% .038 75.164);
    color: oklch(47% .157 37.304);
  }

  &:hover {
    background-color: oklch(95.4% .038 75.164);
  }

  @media (max-width: 778px) {
    width: 100%;
  }
`;

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Nav>
      <NavContainer>
        <LogoWrapper to="/">
          <LogoImg src={logoImg} alt="Nicky Beauty Salon Logo" />
          <LogoTextWrapper>
            <LogoTitle>Nicky Beauty Salon & Spa</LogoTitle>
            <LogoSubtitle>Your Tranquil Escape in Kuta</LogoSubtitle>
          </LogoTextWrapper>
        </LogoWrapper>

        <BurgerButton onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </BurgerButton>

        <NavList $open={menuOpen}>
          <NavItem><StyledNavLink to="/" end onClick={() => setMenuOpen(false)}>Home</StyledNavLink></NavItem>
          <NavItem><StyledNavLink to="/services" onClick={() => setMenuOpen(false)}>Services</StyledNavLink></NavItem>
          <NavItem><StyledNavLink to="/about" onClick={() => setMenuOpen(false)}>About</StyledNavLink></NavItem>
          <NavItem><StyledNavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</StyledNavLink></NavItem>
        </NavList>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
