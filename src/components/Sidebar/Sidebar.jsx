import './Sidebar.css'
import logo from "./../../assets/icons/logo-t-systems-white.svg";
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default function Sidebar(){
  return (
    <div id="sidebar">
      <div id="logo-wrapper">
        <img src={logo} alt="" id="logo"/>
        <span>AI-HUB</span>
      </div>
      <div id="nav-item-wrapper">
        <p className="info-text">Navigation</p>
        <div className="nav-item">
          {/* <svg width="267" height="48" viewBox="0 0 267 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.16806 31.3314C0.829057 31.8834 0.444057 32.5304 0.145057 33.0394C-0.142943 33.5304 0.0120573 34.1614 0.497057 34.4604L7.29106 38.6534C7.78906 38.9604 8.44106 38.8024 8.73806 38.2984C9.00806 37.8414 9.35806 37.2534 9.74006 36.6214C12.4331 32.1774 15.1411 32.7194 20.0201 35.0384L26.7581 38.2414C27.2891 38.4944 27.9241 38.2584 28.1631 37.7204L31.3991 30.4144C31.6291 29.8944 31.4031 29.2874 30.8891 29.0454C29.4661 28.3764 26.6381 27.0414 24.1061 25.8154C14.9051 21.3604 7.12006 21.6554 1.16806 31.3314Z" fill="url(#paint0_linear_818_483)"></path><path d="M31.6351 14.7276C31.9741 14.1756 32.3591 13.5286 32.6581 13.0196C32.9461 12.5286 32.7911 11.8976 32.3061 11.5986L25.5121 7.40562C25.0141 7.09862 24.3621 7.25662 24.0651 7.76062C23.7951 8.21762 23.4451 8.80561 23.0631 9.43761C20.3701 13.8816 17.6621 13.3396 12.7831 11.0206L6.04512 7.81762C5.51412 7.56462 4.87912 7.80061 4.64012 8.33861L1.40412 15.6446C1.17412 16.1646 1.40012 16.7716 1.91412 17.0136C3.33712 17.6826 6.16512 19.0176 8.69712 20.2436C17.8971 24.6986 25.6821 24.4046 31.6341 14.7276H31.6351Z" fill="url(#paint1_linear_818_483)"></path><defs><linearGradient id="paint0_linear_818_483" x1="31.1981" y1="40.8054" x2="10.6381" y2="28.9914" gradientUnits="userSpaceOnUse"><stop stop-color="#0055CC"></stop><stop offset="1" stop-color="#1D7AFC"></stop></linearGradient><linearGradient id="paint1_linear_818_483" x1="1.60412" y1="5.25362" x2="22.1641" y2="17.0676" gradientUnits="userSpaceOnUse"><stop stop-color="#0055CC"></stop><stop offset="1" stop-color="#1D7AFC"></stop></linearGradient></defs></svg> */}
          <svg width="20" height="20" viewBox="0 0 48 48" fill="none" style={{transform: "translateX(2px)"}} xmlns="http://www.w3.org/2000/svg">
            <path d="M1.16806 31.3314C0.829057 31.8834 0.444057 32.5304 0.145057 33.0394C-0.142943 33.5304 0.0120573 34.1614 0.497057 34.4604L7.29106 38.6534C7.78906 38.9604 8.44106 38.8024 8.73806 38.2984C9.00806 37.8414 9.35806 37.2534 9.74006 36.6214C12.4331 32.1774 15.1411 32.7194 20.0201 35.0384L26.7581 38.2414C27.2891 38.4944 27.9241 38.2584 28.1631 37.7204L31.3991 30.4144C31.6291 29.8944 31.4031 29.2874 30.8891 29.0454C29.4661 28.3764 26.6381 27.0414 24.1061 25.8154C14.9051 21.3604 7.12006 21.6554 1.16806 31.3314Z" fill="url(#paint0_linear_818_483)"></path>
            <path d="M31.6351 14.7276C31.9741 14.1756 32.3591 13.5286 32.6581 13.0196C32.9461 12.5286 32.7911 11.8976 32.3061 11.5986L25.5121 7.40562C25.0141 7.09862 24.3621 7.25662 24.0651 7.76062C23.7951 8.21762 23.4451 8.80561 23.0631 9.43761C20.3701 13.8816 17.6621 13.3396 12.7831 11.0206L6.04512 7.81762C5.51412 7.56462 4.87912 7.80061 4.64012 8.33861L1.40412 15.6446C1.17412 16.1646 1.40012 16.7716 1.91412 17.0136C3.33712 17.6826 6.16512 19.0176 8.69712 20.2436C17.8971 24.6986 25.6821 24.4046 31.6341 14.7276H31.6351Z" fill="url(#paint1_linear_818_483)"></path>
            <defs>
              <linearGradient id="paint0_linear_818_483" x1="31.1981" y1="40.8054" x2="10.6381" y2="28.9914" gradientUnits="userSpaceOnUse">
                <stop stopColor="var(--dark-950)"></stop>
                <stop offset="1" stopColor="var(--dark-950)"></stop>
              </linearGradient>
              <linearGradient id="paint1_linear_818_483" x1="1.60412" y1="5.25362" x2="22.1641" y2="17.0676" gradientUnits="userSpaceOnUse">
                <stop stopColor="var(--dark-950)"></stop>
                <stop offset="1" stopColor="var(--dark-950)"></stop>
              </linearGradient>
            </defs>
          </svg>
          <span>Confluence portal</span>
        </div>
        <div className="nav-item">
          <svg data-icon-name="settings-alt" data-style="flat-color" icon_origin_id="4663" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path style={{fill: "var(--magenta)"}} d="M15,12c0,.1,0,.21,0,.31A9,9,0,0,1,10.11,20l-.72-.72a1,1,0,0,0-.7-.29H6a1,1,0,0,1-1-1V15.31a1,1,0,0,0-.29-.7l-1.9-1.9a1,1,0,0,1,0-1.42l1.9-1.9A1,1,0,0,0,5,8.69V6A1,1,0,0,1,6,5H8.69a1,1,0,0,0,.7-.29L10.11,4A9,9,0,0,1,15,11.69C15,11.79,15,11.9,15,12Z" id="secondary-fill"></path><circle style={{fill:"var(--magenta)"}} r="3" cy="12" cx="12" id="tertiary-fill"></circle><path style={{fill: "white", stroke: "var(--magenta)", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2px"}} d="M19.29,9.39l1.9,1.9a1,1,0,0,1,0,1.42l-1.9,1.9a1,1,0,0,0-.29.7V18a1,1,0,0,1-1,1H15.31a1,1,0,0,0-.7.29l-1.9,1.9a1,1,0,0,1-1.42,0l-1.9-1.9a1,1,0,0,0-.7-.29H6a1,1,0,0,1-1-1V15.31a1,1,0,0,0-.29-.7l-1.9-1.9a1,1,0,0,1,0-1.42l1.9-1.9A1,1,0,0,0,5,8.69V6A1,1,0,0,1,6,5H8.69a1,1,0,0,0,.7-.29l1.9-1.9a1,1,0,0,1,1.42,0l1.9,1.9a1,1,0,0,0,.7.29H18a1,1,0,0,1,1,1V8.69A1,1,0,0,0,19.29,9.39ZM12,9a3,3,0,1,0,3,3A3,3,0,0,0,12,9Z" id="primary-stroke"></path></svg>
          <span>Use case portal</span>
        </div>
        <div className="nav-item">
          <svg data-icon-name="triangle-ruler-pencil" data-style="flat-color" icon_origin_id="14805" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name="Line Color" width="18" height="18"><path style={{fill: "white", stroke: "white", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1px"}} d="M14.69,3.29l-1.4,1.4a1,1,0,0,0,0,1.4L18.2,11H21V8.2L16.09,3.29A1,1,0,0,0,14.69,3.29Z" id="secondary"></path><polygon style={{fill: "white", stroke: "transparent", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2px"}} points="19 21 3 21 3 5 19 21" id="primary"></polygon></svg>
          <span>Architecture</span>
        </div>
        <div className="nav-item">
          <svg data-icon-name="brickwall" data-style="flat-color" icon_origin_id="20061" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name="Flat Color" width="20" height="20"><path style={{fill: "white"}} d="M7,6V8H5A1,1,0,0,0,4,9v4H3a1,1,0,0,0-1,1v3a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V6a1,1,0,0,0-1-1H8A1,1,0,0,0,7,6Z" id="primary"></path><path style={{fill: "var(--magenta)"}} d="M14,10v3h8v2H17v3H15V15H9v3H7V15H2V14a1,1,0,0,1,1-1h9V10H4V9A1,1,0,0,1,5,8H15V5h2V8h5v2Z" id="secondary"></path></svg>
          <span>Ressources</span>
        </div>
        <div className="nav-item">
          <svg data-icon-name="trophy-2" data-style="flat-color" icon_origin_id="22532" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path style={{fill: "transparent"}} d="M20,4H17a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1,5,5,0,0,0,5-5V6A2,2,0,0,0,20,4Zm0,3a3,3,0,0,1-2,2.83V6h2ZM7,4H4A2,2,0,0,0,2,6V7a5,5,0,0,0,5,5,1,1,0,0,0,1-1V5A1,1,0,0,0,7,4ZM6,9.83A3,3,0,0,1,4,7V6H6ZM18,21.29A1,1,0,0,1,17,22H7a1,1,0,0,1-.55-1.83A5.74,5.74,0,0,0,9,15.55a1,1,0,0,1,.46-.81,1,1,0,0,1,.94-.08,4,4,0,0,0,3.2,0,1,1,0,0,1,.94.07,1,1,0,0,1,.46.82,5.74,5.74,0,0,0,2.55,4.62A1,1,0,0,1,18,21.29Z" id="secondary"></path><path style={{fill: "white"}} d="M18,3v8A6,6,0,0,1,6,11V3A1,1,0,0,1,7,2H17A1,1,0,0,1,18,3Zm1,18a1,1,0,0,0-1-1H6a1,1,0,0,0,0,2H18A1,1,0,0,0,19,21Z" id="primary"></path><path style={{fill: "var(--magenta)"}} d="M13.24,11.25a1,1,0,0,1-.44-.1l-.8-.39-.8.39a1,1,0,0,1-1-.11,1,1,0,0,1-.38-1l.13-.72-.58-.52A1,1,0,0,1,9.87,7.1L10.74,7l.38-.7a1,1,0,0,1,1.76,0l.38.7.87.12a1,1,0,0,1,.54,1.73l-.58.52.13.72a1,1,0,0,1-.38,1A1,1,0,0,1,13.24,11.25Z"></path></svg>
          <span>Our expertise</span>
        </div>
        {/* <Link to="/" className="nav-item">
          <svg data-icon-name="user-10" data-style="line" icon_origin_id="24291" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="user-10" className="icon line" width="18" height="18"><path style={{fill: "var(--dark-950)", stroke: "tranparent", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5"}} d="M16.66,12.77A5.93,5.93,0,0,0,17.92,8,6,6,0,0,0,6,9a5.94,5.94,0,0,0,1.34,3.77,1,1,0,0,1-.28,1.45A7,7,0,0,0,4,20a1,1,0,0,0,1,1H19a1,1,0,0,0,1-1,7,7,0,0,0-3.06-5.78A1,1,0,0,1,16.66,12.77Z" id="primary"></path></svg>
          <span>Contact</span>
        </Link> */}
        <div className="nav-item">
          <svg data-icon-name="user-10" data-style="line" icon_origin_id="24291" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="user-10" className="icon line" width="18" height="18"><path style={{fill: "var(--dark-950)", stroke: "tranparent", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5"}} d="M16.66,12.77A5.93,5.93,0,0,0,17.92,8,6,6,0,0,0,6,9a5.94,5.94,0,0,0,1.34,3.77,1,1,0,0,1-.28,1.45A7,7,0,0,0,4,20a1,1,0,0,0,1,1H19a1,1,0,0,0,1-1,7,7,0,0,0-3.06-5.78A1,1,0,0,1,16.66,12.77Z" id="primary"></path></svg>
          <span>Contact</span>
        </div>
      </div>
      <p className="bottom-text">Located in Singapore</p>
    </div>
  )
}