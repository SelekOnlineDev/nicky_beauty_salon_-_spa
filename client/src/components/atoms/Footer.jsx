import React from 'react';
import styled from 'styled-components';
import { Instagram, Facebook } from 'lucide-react';
import { FaTiktok } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.png";

const FooterContainer = styled.footer`
  background-color: #0d1117;
  color: #fff;
  padding: 3rem 1rem;
  font-family: 'Poppins', sans-serif;
`;

const FooterSection = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr;
  text-align: center;

  @media (min-width: 768px) {
    grid-template-columns: 1.5fr 1fr 1fr;
    text-align: left;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.65rem;
  flex-direction: column;

  img {
    width: 100px;
    height: auto;
    border-radius: 50%;
  }

   @media (max-width: 778px) {
    align-items: center;
  }
`;

const BrandName = styled.h3`
  font-size: 1.125rem;
  font-weight: 700;
  color: #fff;

  @media (max-width: 778px) {
    text-align: center;
    width: 100%;
  }
`;

const Tagline = styled.p`
  color: #14B8A6;
  font-size: 0.9rem;

  @media (max-width: 778px) {
    text-align: center;
    width: 100%;
  }
`;

const FooterText = styled.p`
  font-size: 0.875rem;
  margin: 0.5rem 0;
  line-height: 1.4;
  color: #d1d5db;
`;

const FooterLink = styled(Link)`
  color: #d1d5db;
  text-decoration: none;
  font-size: 0.875rem;
  &:hover {
    color: #F97316;
  }
`;

const FooterLinkA = styled.a`
  color: #d1d5db;
  text-decoration: none;
  font-size: 0.875rem;
  &:hover {
    color: #F97316;
  }
`;

const FooterTitle = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #fff;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 0.8rem;
  margin-top: 1rem;

  a {
    color: #d1d5db;
    &:hover {
      color: #F97316;
    }
  }

   @media (max-width: 778px) {
    justify-content: center;
  }
`;

const BottomBar = styled.div`
  max-width: 1100px;
  margin: 1rem auto 0;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.75rem;
  color: #9ca3af;
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSection>
        {/* Logo + Brand Info */}
        <div>
          <LogoWrapper>
            <Link to="/">
             <img src={logo} alt="Nicky Beauty Logo" />
            </Link>
        <div>
           <BrandName>Nicky Beauty Salon & Spa</BrandName>
             <Tagline>Your Tranquil Escape in Kuta</Tagline>
        </div>
          </LogoWrapper>
          
          <FooterText>
            Experience authentic Balinese beauty and relaxation in our hidden oasis, enhanced by refreshing drinks and warm hospitality.
          </FooterText>
        </div>

                {/* Quick Links */}
        <div>
          <FooterTitle>Quick Links</FooterTitle>
          <FooterText><FooterLink to="/">Home</FooterLink></FooterText>
          <FooterText><FooterLink to="/services">Services</FooterLink></FooterText>
          <FooterText><FooterLink to="/about">About Nicky</FooterLink></FooterText>
          <FooterText><FooterLink to="/contact">Contact & Location</FooterLink></FooterText>
          
          <FooterText>
            <FooterLinkA 
              href="https://www.selek.site" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: "#14B8A6" }}
            >
              www.selek.site
            </FooterLinkA>
          </FooterText>
        </div>

        {/* Contact Info */}
        <div>
          <FooterTitle>Contact Info</FooterTitle>
          <FooterText>Jln Kubu Anyar Kuta No. 8, Room 3</FooterText>
          <FooterText>Busana Ayu Gita, Kuta, Bali, Indonesia</FooterText>
          <FooterText>WhatsApp: +62 859 2141 1684</FooterText>
          <FooterText><FooterLink to="/contact">Contact Us</FooterLink></FooterText>
          <SocialIcons>
            <FooterLinkA href="https://www.facebook.com/profile.php?id=61579167930124" target="_blank" rel="noopener noreferrer">
              <Facebook size={25} />
            </FooterLinkA>
            <FooterLinkA href="https://instagram.com/nicky_beauty_salon_spa" target="_blank" rel="noopener noreferrer">
              <Instagram size={25} />
            </FooterLinkA>
            <FooterLinkA href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
              <FaTiktok size={25} />
            </FooterLinkA>
          </SocialIcons>
        </div>
      </FooterSection>

      <BottomBar>
        &copy; {new Date().getFullYear()} Nicky Beauty Salon & Spa. All rights reserved.
      </BottomBar>
    </FooterContainer>
  );
};

export default Footer;
