import './Sidebar.css'
import logo from "./../../assets/icons/logo-t-systems-white.svg";
import { HashLink as Link } from 'react-router-hash-link';
import { useRef, useState } from 'react';
import MenuIcon from '../../assets/icons/Menu-Icon';
import ConfluenceIcon from '../../assets/icons/Confluence-Icon';
import CrossIcon from '../../assets/icons/Cross-Icon';
import SettingsIcon from '../../assets/icons/Settings-Icon';
import ArchitectureIcon from '../../assets/icons/Architecture-Icon';
import RessourcesIcon from '../../assets/icons/Ressources';
import ExpertiseIcon from '../../assets/icons/Expertise-Icon';
import ContactIcon from '../../assets/icons/Contact-Icon';

export default function Sidebar(){

  let [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <div id="sidebar">
        <Link to="/" id="logo-wrapper">
          <img src={logo} alt="" id="logo"/>
          <span>AI-HUB</span>
        </Link>
        <div id="nav-item-wrapper">
          <p className="info-text">Navigation</p>
          <Link to="/confluence" className="nav-item">
            <ConfluenceIcon></ConfluenceIcon>
            <span>Confluence portal</span>
          </Link>
          <Link to="/#use-cases" className="nav-item">
            <SettingsIcon fillColor='white' strokeColor='var(--magenta)'></SettingsIcon>
            <span>Use cases</span>
          </Link>
          <Link to="/architecture" className="nav-item">
            <ArchitectureIcon></ArchitectureIcon>
            <span>Architecture</span>
          </Link>
          <Link to="/#ressources" className="nav-item">
            <RessourcesIcon></RessourcesIcon>
            <span>Ressources</span>
          </Link>
          <Link to="/#expertise" className="nav-item">
            <ExpertiseIcon></ExpertiseIcon>
            <span>Our expertise</span>
          </Link>
          <Link to="/#contact" className="nav-item">
            <ContactIcon></ContactIcon>
            <span>Contact</span>
          </Link>
        </div>
        <p className="bottom-text">Located in Singapore</p>
      </div>

      <>
        <div id="header-mobile">
          <Link to="/" id="logo-wrapper">
            <img src={logo} alt="" id="logo"/>
            <span>AI-HUB</span>
          </Link>
          <div className="menu-button" onClick={()=>{setShowSidebar(!showSidebar)}}>
            {!showSidebar && <MenuIcon size={25} strokeColor='var(--dark-950)'></MenuIcon>}
            {showSidebar && <CrossIcon size={25} strokeColor="var(--dark-950)"></CrossIcon>}
          </div>
        </div>
        <div id="sidebar-mobile-overlay" onClick={()=>{setShowSidebar(!showSidebar)}} className={(showSidebar === false ? 'hidden' : 'visible')}></div>
        <div id="sidebar-mobile" className={(showSidebar === false ? 'hidden' : 'visible')}>
          <div id="nav-item-wrapper">
            <p className="info-text">Navigation</p>
            <Link to="/confluence" className="nav-item">
              <ConfluenceIcon fillColor="var(--dark-500)"></ConfluenceIcon>
              <span>Confluence portal</span>
            </Link>
            <Link to="/#use-cases" className="nav-item">
              <SettingsIcon></SettingsIcon>
              <span>Use cases</span>
            </Link>
            <Link to="/architecture" className="nav-item">
              <ArchitectureIcon fillColor="var(--dark-500)"></ArchitectureIcon>
              <span>Architecture</span>
            </Link>
            <Link to="/#ressources" className="nav-item">
              <RessourcesIcon fillColorPrimary='var(--dark-500)' fillColorSecondary='var(--dark-950)'></RessourcesIcon>
              <span>Ressources</span>
            </Link>
            <Link to="/#expertise" className="nav-item">
              <ExpertiseIcon fillColorPrimary="var(--dark-500)" fillColorSecondary='var(--dark-950)'></ExpertiseIcon>
              <span>Our expertise</span>
            </Link>
            <Link to="/#contact" className="nav-item">
              <ContactIcon fillColor="var(--dark-500)"></ContactIcon>
              <span>Contact</span>
            </Link>
          </div>
          <p className="bottom-text">Located in Singapore</p>
        </div>
      </>
    </>
  )
}