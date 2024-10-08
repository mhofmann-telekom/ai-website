
import "./Ressources.css"
import teams_image from './../../assets/icons/microsoft-teams.svg';
import jira_image from './../../assets/icons/jira.svg';
import confluence_image from './../../assets/icons/confluence.svg';
import { useRef, useEffect } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function Ressources() {

    const planningCard = useRef(null);
    const developmentCard = useRef(null);
    const teamworkCard = useRef(null);
  
    useEffect(() => {
        const cards = [planningCard.current, developmentCard.current, teamworkCard.current];
        cards.forEach((card) => {
            gsap.fromTo(card,
                { y: 0, x:-30, opacity: 0,},
                {
                    duration: 1,
                    y: 0,
                    x: 0,
                    opacity: 1,
                    delay: .6,
                    ease: 'power1.out',
                    scrollTrigger: {
                        trigger: card,
                        start: 'bottom bottom', // Startpunkt für die Animation
                        end: 'bottom center',
                        toggleActions: 'play none none none', // Aktionen bei Scroll-Ereignissen
                        scrub: false,
                    }
                }
            );
        });

        const timelineElements = document.querySelectorAll("#timeline > *");
        timelineElements.forEach((item) => {
            gsap.fromTo(item,
                { y: -20, opacity: 0,},
                {
                    duration: 1,
                    y: 0,
                    opacity: 1,
                    delay: .1,
                    ease: 'power1.out',
                    scrollTrigger: {
                        trigger: item,
                        start: 'top 70%', // Startpunkt für die Animation
                        toggleActions: 'play none none none', // Aktionen bei Scroll-Ereignissen
                    }
                }
            );
        });
    }, []);

  return (
    <div id="ressources">
        <div id="timeline">
            <div className="point">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/></svg>
                <div className="background-blur"></div>
            </div>
            <div className="line"></div>
            <div className="point">
                <div className="background-blur"></div>
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="30" height="30"><path style={{fill: "transparent", strokeWidth: "1.1", strokeLinecap: "round", strokeLinejoin: "round"}} d="M12,3V4m7.07,1.93-.71.71M4.93,5.93l.71.71M17,13a5,5,0,0,0-9.91-.93,4.89,4.89,0,0,0,1,4A4,4,0,0,1,9,18.62V20a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1V18.62a3.94,3.94,0,0,1,.89-2.5A4.93,4.93,0,0,0,17,13Z"></path></svg>
            </div>
            <div className="line"></div>
            <div className="point">
                <div className="background-blur"></div>
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path style={{fill: "var(--blue-500)", strokeWidth: "0"}} d="M17,22H15a1,1,0,0,1,0-2h2V14a3,3,0,0,1,.77-2A3,3,0,0,1,17,10V4H15a1,1,0,0,1,0-2h2a2,2,0,0,1,2,2v6a1,1,0,0,0,1,1,1,1,0,0,1,0,2,1,1,0,0,0-1,1v6A2,2,0,0,1,17,22Z"></path><path style={{fill: "var(--blue-500)", strokeWidth: "0"}} d="M9,22H7a2,2,0,0,1-2-2V14a1,1,0,0,0-1-1,1,1,0,0,1,0-2,1,1,0,0,0,1-1V4A2,2,0,0,1,7,2H9A1,1,0,0,1,9,4H7v6a3,3,0,0,1-.77,2A3,3,0,0,1,7,14v6H9a1,1,0,0,1,0,2Z"></path></svg>
            </div>
            <div className="line"></div>
            <div className="point">
                <div className="background-blur"></div>
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path style={{fill: "none", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5"}} d="M21,4V17a1,1,0,0,1-1,1H15l-3,3L9,18H4a1,1,0,0,1-1-1V4A1,1,0,0,1,4,3H20A1,1,0,0,1,21,4Z"></path></svg>
            </div>
            <div id="hider"></div>
        </div>
        <div id="card-wrapper">
            <div id="headline-wrapper">
                <h2 className="headline-h2">Which Ressources do we use?</h2>
                <p className="headline-subtext">Welcome to our Resources section, where you will find key tools, processes, and materials that drive our projects. Explore our methodologies, technologies, and essential guides that support our success. Use these resources to understand our workflow and achieve your goals effectively.</p>
            </div>
            <div className="card" ref={planningCard}>
                <div className="card-content">
                    <h3 className="headline-h3">Planning & Design</h3>
                    <p className="headline-subtext">Unser Entwicklungsprozess beginnt mit der Planung & Design, bei der wir Draw.io für Flussdiagramme und Microsoft Visio für detaillierte Diagramme verwenden. Diese Tools sichern eine präzise und zielgerichtete Planung für die nächsten Entwicklungsphasen.</p>
                    <div className="icon-wrapper">
                        <svg className="scale-18" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 1000 1000" xmlSpace="preserve">
                            <g>
                                <path style={{fill: "#F08705"}} d="M685.83,605.797c0,8.961-7.361,15.863-15.863,15.863H330.033c-8.961,0-15.863-7.361-15.863-15.863   V265.863c0-8.961,7.361-15.863,15.863-15.863h339.914c8.961,0,15.863,7.361,15.863,15.863v339.934H685.83z"/>
                                <path style={{fill: "#DF6C0C"}} d="M685.83,605.797c0,8.961-7.361,15.863-15.863,15.863H441.351l-74.052-75.212l46.007-75.212   l136.622-169.727L685.39,441.111L685.83,605.797z"/>
                                <path style={{fill: "#FFFFFF"}} d="M619.359,457.673h-39.106l-41.407-70.371c9.201-1.84,16.103-10.122,16.103-19.783V314.39   c0-11.262-8.961-20.243-20.243-20.243h-68.971c-11.262,0-20.243,8.961-20.243,20.243v53.129c0,9.882,6.901,17.943,15.863,19.783   l-41.407,70.611h-39.086c-11.262,0-20.243,8.961-20.243,20.243v53.129c0,11.262,8.961,20.243,20.243,20.243h68.991   c11.262,0,20.243-8.961,20.243-20.243v-53.129c0-11.262-8.961-20.243-20.243-20.243h-6.661l40.947-69.911h31.965l41.167,69.911   h-6.901c-11.262,0-20.243,8.961-20.243,20.243v53.129c0,11.262,8.961,20.243,20.243,20.243h68.991   c11.262,0,20.243-8.961,20.243-20.243v-53.129C639.602,466.875,630.641,457.673,619.359,457.673L619.359,457.673z"/>
                                <path style={{fill: "#333333"}} d="M366.839,746.779c0,0.46,0,0.68-0.22,1.14c-0.22,0.22-0.46,0.46-0.92,0.68s-1.14,0.22-1.84,0.46   c-0.68,0-1.84,0.22-2.98,0.22c-1.14,0-2.3,0-2.98-0.22c-0.68,0-1.38-0.22-1.84-0.46c-0.46-0.22-0.92-0.46-1.14-0.68   c-0.22-0.22-0.22-0.68-0.22-1.14v-5.741c-2.76,2.98-5.521,5.061-8.501,6.661c-2.98,1.6-6.201,2.3-9.882,2.3   c-3.901,0-7.361-0.68-10.122-2.3c-2.76-1.6-5.061-3.681-6.661-6.201c-1.84-2.52-2.98-5.741-3.681-9.201   c-0.68-3.441-1.14-7.121-1.14-11.042c0-4.601,0.46-8.741,1.38-12.642c0.92-3.681,2.52-6.901,4.361-9.422   c1.84-2.52,4.361-4.601,7.121-5.981c2.76-1.38,6.201-2.06,9.882-2.06c2.98,0,5.521,0.68,8.041,1.84   c2.3,1.14,4.821,2.98,7.121,5.281v-28.285c0-0.46,0-0.68,0.22-1.14c0.22-0.22,0.68-0.68,1.14-0.68c0.46-0.22,1.38-0.46,2.3-0.46   c0.92-0.22,2.06-0.22,3.681-0.22c1.38,0,2.52,0,3.681,0.22c0.92,0.22,1.6,0.22,2.3,0.46c0.46,0.22,0.92,0.46,1.14,0.68   c0.22,0.22,0.46,0.68,0.46,1.14L366.839,746.779z M352.116,711.814c-2.06-2.76-4.141-4.601-5.981-6.201   c-1.84-1.38-3.901-2.06-5.981-2.06c-1.84,0-3.681,0.46-5.061,1.38s-2.52,2.3-3.441,3.901c-0.92,1.6-1.38,3.441-1.84,5.281   c-0.46,2.06-0.68,3.901-0.68,5.981c0,2.3,0.22,4.361,0.46,6.441c0.46,2.06,0.92,3.901,1.84,5.521c0.68,1.6,1.84,2.98,3.221,3.901   s2.98,1.38,5.061,1.38c0.92,0,2.06-0.22,2.98-0.46c0.92-0.24,1.84-0.68,2.98-1.38c0.92-0.68,2.06-1.6,2.98-2.52   c1.14-1.14,2.3-2.3,3.441-3.901v-17.263L352.116,711.814z M414.666,699.392c0,1.38,0,2.52-0.22,3.441c0,0.92-0.22,1.6-0.46,2.06   c-0.22,0.46-0.46,0.92-0.68,1.14c-0.22,0.22-0.68,0.22-0.92,0.22c-0.24,0-0.68,0-1.14-0.22c-0.46-0.22-0.92-0.22-1.38-0.46   c-0.46-0.24-0.92-0.22-1.6-0.46c-0.68-0.22-1.14-0.22-1.84-0.22c-0.92,0-1.6,0.22-2.52,0.46c-0.92,0.22-1.6,0.92-2.52,1.6   c-0.92,0.68-1.84,1.6-2.76,2.76c-0.92,1.14-2.06,2.52-2.98,4.361v32.665c0,0.46-0.22,0.68-0.46,0.92   c-0.24,0.24-0.68,0.46-1.14,0.68c-0.46,0.22-1.38,0.22-2.3,0.46c-0.92,0-2.06,0.22-3.681,0.22c-1.38,0-2.52,0-3.681-0.22   c-0.92,0-1.6-0.22-2.3-0.46c-0.46-0.22-0.92-0.46-1.14-0.68c-0.22-0.22-0.46-0.68-0.46-0.92v-52.208c0-0.46,0-0.68,0.22-0.92   c0.22-0.22,0.46-0.46,1.14-0.68c0.46-0.22,1.14-0.22,2.06-0.46c0.68,0,1.84-0.22,2.98-0.22c1.14,0,2.3,0,3.221,0.22   c0.92,0,1.38,0.22,1.84,0.46c0.46,0.22,0.68,0.46,0.92,0.68c0.22,0.22,0.22,0.68,0.22,0.92v6.441c1.38-1.84,2.76-3.441,3.901-4.821   c1.14-1.38,2.3-2.3,3.441-2.98c1.14-0.68,2.3-1.14,3.22-1.6c1.14-0.22,2.3-0.46,3.221-0.46h1.6c0.68,0,1.14,0.22,1.84,0.22   c0.68,0.22,1.14,0.22,1.6,0.46l0.92,0.46c0.22,0.22,0.46,0.46,0.46,0.68c0,0.22,0.22,0.46,0.22,0.92s0.22,0.92,0.22,1.84   C414.666,696.871,414.666,697.792,414.666,699.392L414.666,699.392z M468.035,746.999c0,0.46-0.22,0.92-0.68,1.38   c-0.46,0.22-0.92,0.46-1.84,0.68c-0.92,0.22-2.06,0.22-3.681,0.22c-1.84,0-2.98,0-3.901-0.22c-0.68-0.22-1.38-0.46-1.6-0.68   c-0.22-0.22-0.46-0.68-0.46-1.38v-4.141c-2.06,2.3-4.601,4.141-7.361,5.281c-2.76,1.38-5.741,1.84-9.201,1.84   c-2.76,0-5.281-0.46-7.581-1.14c-2.3-0.68-4.361-1.84-5.981-3.221c-1.6-1.38-2.98-3.221-3.901-5.281   c-0.92-2.06-1.38-4.601-1.38-7.361c0-2.98,0.68-5.741,1.84-8.041c1.16-2.3,2.98-4.141,5.281-5.521c2.3-1.38,5.281-2.52,8.741-3.221   c3.441-0.68,7.581-1.14,12.182-1.14h5.061v-3.221c0-1.6-0.22-2.98-0.46-4.361c-0.22-1.14-0.92-2.3-1.6-2.98   c-0.68-0.92-1.84-1.38-2.98-1.84c-1.38-0.46-2.76-0.68-4.821-0.68c-2.52,0-4.601,0.22-6.661,0.92c-1.84,0.46-3.681,1.14-5.061,1.84   l-3.681,1.84c-0.92,0.46-1.84,0.92-2.52,0.92c-0.46,0-0.92-0.22-1.14-0.46c-0.22-0.22-0.68-0.68-0.92-1.14   c-0.22-0.46-0.46-1.14-0.46-1.84c-0.22-0.68-0.22-1.6-0.22-2.52c0-1.14,0-2.06,0.22-2.76c0.22-0.68,0.46-1.38,1.14-1.84   c0.46-0.46,1.6-1.14,2.76-1.84c1.38-0.68,2.98-1.38,4.821-1.84c1.84-0.68,3.901-1.14,5.981-1.38c2.06-0.46,4.361-0.46,6.661-0.46   c4.141,0,7.581,0.46,10.582,1.14c2.98,0.68,5.281,2.06,7.121,3.681c1.84,1.6,3.22,3.901,4.141,6.441   c0.92,2.52,1.38,5.741,1.38,9.422L468.035,746.999z M453.533,724.456h-5.521c-2.3,0-4.361,0.22-6.201,0.46   c-1.6,0.46-2.98,0.92-4.141,1.6c-1.14,0.68-1.84,1.6-2.3,2.52c-0.46,0.92-0.68,2.06-0.68,3.441c0,2.3,0.68,3.901,2.06,5.061   c1.38,1.14,3.221,1.84,5.741,1.84c2.06,0,3.901-0.46,5.741-1.6c1.84-1.14,3.441-2.52,5.281-4.601v-8.721H453.533z M560.95,694.331   c0,0.46,0,0.92-0.22,1.6c-0.22,0.68-0.22,1.6-0.68,2.76l-14.042,47.388c-0.22,0.68-0.46,1.14-0.68,1.6s-0.68,0.68-1.38,0.92   c-0.68,0.22-1.6,0.46-2.76,0.46c-1.14,0-2.76,0.22-4.601,0.22c-1.84,0-3.44,0-4.601-0.22c-1.14,0-2.06-0.22-2.76-0.46   c-0.68-0.22-1.14-0.46-1.6-0.92c-0.22-0.46-0.46-0.92-0.68-1.6l-8.741-31.745l-0.22-0.46l-0.22,0.46l-8.101,31.745   c-0.22,0.68-0.46,1.14-0.68,1.6s-0.68,0.68-1.6,0.92c-0.68,0.22-1.6,0.46-2.76,0.46c-1.14,0-2.76,0.22-4.601,0.22   c-2.06,0-3.441,0-4.821-0.22c-1.14,0-2.06-0.22-2.76-0.46c-0.68-0.22-1.14-0.46-1.6-0.92c-0.22-0.46-0.46-0.92-0.68-1.6   l-13.802-47.368c-0.46-1.14-0.68-2.06-0.68-2.76c0-0.68-0.22-1.14-0.22-1.6s0-0.68,0.22-0.92c0.22-0.22,0.68-0.46,1.14-0.68   c0.46-0.22,1.38-0.22,2.3-0.46c0.92,0,2.06-0.22,3.681-0.22s2.76,0,3.901,0.22c0.92,0,1.84,0.22,2.3,0.46   c0.46,0.22,0.92,0.46,1.14,0.68c0.22,0.22,0.46,0.68,0.46,1.14l10.342,38.406l0.22,0.68l0.22-0.68l9.662-38.406   c0.22-0.46,0.22-0.92,0.46-1.14c0.22-0.22,0.68-0.68,1.14-0.68c0.46-0.22,1.14-0.22,2.06-0.46c0.92,0,2.06-0.22,3.441-0.22   c1.38,0,2.52,0,3.441,0.22c0.92,0,1.6,0.22,2.06,0.46c0.46,0.24,0.92,0.46,1.14,0.68s0.46,0.68,0.46,0.92l10.342,38.646l0.22,0.68   l0.22-0.68l9.882-38.406c0-0.46,0.22-0.92,0.46-1.14c0.22-0.22,0.68-0.68,1.14-0.68c0.46-0.22,1.38-0.22,2.3-0.46   c0.92,0,2.06-0.22,3.681-0.22c1.38,0,2.52,0,3.441,0.22c0.92,0,1.6,0.22,2.06,0.46c0.46,0.22,0.92,0.46,1.14,0.68   C560.95,693.651,560.95,693.871,560.95,694.331L560.95,694.331z M582.793,740.338c0,3.681-0.68,5.981-1.84,7.361   c-1.38,1.14-3.441,1.84-6.901,1.84c-3.22,0-5.521-0.68-6.901-1.84c-1.14-1.14-1.84-3.681-1.84-6.901c0-3.681,0.68-6.201,1.84-7.361   c1.38-1.14,3.681-1.84,6.901-1.84c3.221,0,5.521,0.68,6.661,1.84C582.333,734.357,582.793,736.878,582.793,740.338L582.793,740.338   z"/>
                                <path style={{fill: "#F08705"}} d="M613.838,676.628c0,2.98-0.68,5.061-1.84,6.201c-1.14,1.14-3.441,1.6-6.661,1.6   s-5.521-0.46-6.661-1.6c-1.14-1.14-1.84-2.98-1.84-5.981s0.68-5.061,1.84-6.201c1.16-1.14,3.441-1.84,6.661-1.84   s5.521,0.46,6.661,1.6C613.378,671.787,613.838,673.868,613.838,676.628L613.838,676.628z M612.918,746.779   c0,0.46-0.22,0.68-0.46,0.92c-0.22,0.22-0.68,0.46-1.14,0.68c-0.46,0.22-1.38,0.22-2.3,0.46c-0.92,0-2.06,0.22-3.681,0.22   c-1.38,0-2.52,0-3.681-0.22c-0.92,0-1.6-0.22-2.3-0.46c-0.46-0.22-0.92-0.46-1.14-0.68c-0.22-0.22-0.46-0.68-0.46-0.92v-52.208   c0-0.46,0.22-0.68,0.46-0.92c0.22-0.22,0.68-0.46,1.14-0.68c0.46-0.22,1.38-0.46,2.3-0.46c0.92-0.22,2.06-0.22,3.681-0.22   s2.52,0,3.681,0.22c0.92,0.22,1.6,0.22,2.3,0.46c0.46,0.22,0.92,0.46,1.14,0.68c0.22,0.22,0.46,0.68,0.46,0.92V746.779z    M681.229,720.095c0,4.361-0.68,8.501-1.84,12.182c-1.14,3.681-2.981,6.901-5.281,9.422c-2.3,2.76-5.281,4.601-8.961,6.201   c-3.681,1.38-7.821,2.06-12.642,2.06c-4.601,0-8.741-0.68-12.182-1.84c-3.441-1.38-6.201-3.221-8.501-5.521   c-2.3-2.52-3.901-5.521-5.061-9.201c-1.14-3.681-1.6-7.581-1.6-12.422c0-4.361,0.68-8.501,1.84-12.182   c1.14-3.681,2.98-6.901,5.281-9.422c2.3-2.52,5.281-4.601,8.961-6.201c3.681-1.38,7.821-2.06,12.642-2.06   c4.601,0,8.741,0.68,12.182,1.84c3.441,1.38,6.201,3.221,8.501,5.521c2.3,2.52,3.901,5.521,5.061,9.201   C680.549,711.354,681.229,715.495,681.229,720.095z M666.047,720.555c0-2.52-0.22-5.061-0.68-7.121s-1.14-4.141-2.06-5.741   s-2.3-2.76-3.901-3.681c-1.6-0.92-3.681-1.38-6.201-1.38c-2.3,0-4.141,0.46-5.741,1.14c-1.6,0.68-2.98,2.06-4.141,3.441   c-1.14,1.6-1.84,3.441-2.3,5.521c-0.46,2.06-0.68,4.601-0.68,7.361c0,2.52,0.22,5.061,0.68,7.121c0.46,2.06,1.14,4.141,2.06,5.741   s2.3,2.76,3.901,3.681c1.6,0.92,3.681,1.38,6.201,1.38c2.3,0,4.141-0.46,5.741-1.14c1.6-0.68,2.98-2.06,4.141-3.441   c1.14-1.6,1.84-3.441,2.3-5.521C665.827,725.836,666.047,723.316,666.047,720.555z"/>
                            </g>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><script xmlns=""/><defs><linearGradient id="a" x1="5.822" y1="11.568" x2="20.178" y2="36.432" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#2368c4"/><stop offset=".5" stopColor="#1a5dbe"/><stop offset="1" stopColor="#1146ac"/></linearGradient></defs><rect x="23" y="13" width="21" height="20" rx="1.83" fill="#2b7cd3"/><path fill="none" d="M0 0h48v48H0z"/><path d="M34 13a1.793 1.793 0 0 1-.54 1.29L26 21.75l-.71.71a3.467 3.467 0 0 1-.29.25 1.877 1.877 0 0 1-1 .29 1.793 1.793 0 0 1-1.29-.54l-8.17-8.17A1.813 1.813 0 0 1 14.3 12a2.172 2.172 0 0 1 .24-.29l8.17-8.17a1.811 1.811 0 0 1 2.58 0l8.17 8.17A1.793 1.793 0 0 1 34 13z" fill="#41a5ee"/><path d="M34 33a10 10 0 0 1-18.66 5 7.178 7.178 0 0 1-.5-1 8.581 8.581 0 0 1-.38-1A10 10 0 0 1 24 23c.34 0 .67.02 1 .05a8.022 8.022 0 0 1 1 .15 10.017 10.017 0 0 1 8 9.8z" fill="#103f91"/><path d="M26 13.83v21.34a1.841 1.841 0 0 1-1.14 1.69 1.772 1.772 0 0 1-.69.14h-9.33a8.581 8.581 0 0 1-.38-1A10 10 0 0 1 24 23a1.793 1.793 0 0 1-1.29-.54l-8.17-8.17A1.813 1.813 0 0 1 14.3 12h9.87a1.83 1.83 0 0 1 1.62 1 1.679 1.679 0 0 1 .21.83z" opacity=".1"/><path d="M25 14.83v21.34a1.772 1.772 0 0 1-.14.69A1.841 1.841 0 0 1 23.17 38h-7.83a7.178 7.178 0 0 1-.5-1 8.581 8.581 0 0 1-.38-1A10 10 0 0 1 24 23a1.793 1.793 0 0 1-1.29-.54l-8.17-8.17A1.793 1.793 0 0 1 14 13h9.17a1.78 1.78 0 0 1 1.33.59 1.8 1.8 0 0 1 .5 1.24z" opacity=".2"/><path d="M25 14.83v19.34A1.844 1.844 0 0 1 23.17 36h-8.71A10 10 0 0 1 24 23a1.793 1.793 0 0 1-1.29-.54l-8.17-8.17A1.793 1.793 0 0 1 14 13h9.17a1.78 1.78 0 0 1 1.33.59 1.8 1.8 0 0 1 .5 1.24z" opacity=".2"/><path d="M24 14.83V23a1.793 1.793 0 0 1-1.29-.54l-8.17-8.17A1.793 1.793 0 0 1 14 13h8.17A1.837 1.837 0 0 1 24 14.83z" opacity=".2"/><path d="M24 23v11.17A1.844 1.844 0 0 1 22.17 36h-7.71A10 10 0 0 1 24 23z" opacity=".2"/><rect x="2" y="13" width="22" height="22" rx="1.833" fill="url(#a)"/><path d="M12.4 25.928q.505 1.488.6 1.878h.041q.091-.39.649-2.011l2.667-7.754h2.452l-4.525 11.917h-2.626L7.2 18.041h2.522z" fill="#fff"/><script xmlns=""/></svg>
                    </div>
                </div>
                <div className="card-shape">
                    <div id="circle-shape"></div>
                </div>
            </div>
            <div className="card" ref={developmentCard}>
                <div className="card-content">
                    <h3 className="headline-h3">Development & Infrastructure</h3>
                    <p className="headline-subtext">We start with Planning & Design, using Draw.io for flowcharts and architecture merging, and Microsoft Visio for detailed diagrams. These tools ensure precise planning, laying a strong foundation for the development phase.</p>
                    <div className="icon-wrapper">
                        <svg style={{transform: "scale(.7) translateX(-20px)"}} xmlns="http://www.w3.org/2000/svg" id="Layer_1" viewBox="0 0 300.7 179.8"><style>.st0{`fill:#252f3e`}.st1{`fill:#f90`}</style><path className="st0" d="M84.7 65.3c0 3.7.4 6.7 1.1 8.9.8 2.2 1.8 4.6 3.2 7.2.5.8.7 1.6.7 2.3 0 1-.6 2-1.9 3l-6.3 4.2c-.9.6-1.8.9-2.6.9-1 0-2-.5-3-1.4-1.4-1.5-2.6-3.1-3.6-4.7-1-1.7-2-3.6-3.1-5.9-7.8 9.2-17.6 13.8-29.4 13.8-8.4 0-15.1-2.4-20-7.2-4.9-4.8-7.4-11.2-7.4-19.2 0-8.5 3-15.4 9.1-20.6s14.2-7.8 24.5-7.8c3.4 0 6.9.3 10.6.8s7.5 1.3 11.5 2.2v-7.3c0-7.6-1.6-12.9-4.7-16-3.2-3.1-8.6-4.6-16.3-4.6-3.5 0-7.1.4-10.8 1.3-3.7.9-7.3 2-10.8 3.4-1.6.7-2.8 1.1-3.5 1.3-.7.2-1.2.3-1.6.3-1.4 0-2.1-1-2.1-3.1v-4.9c0-1.6.2-2.8.7-3.5s1.4-1.4 2.8-2.1c3.5-1.8 7.7-3.3 12.6-4.5C39.3.8 44.5.2 50 .2c11.9 0 20.6 2.7 26.2 8.1 5.5 5.4 8.3 13.6 8.3 24.6v32.4h.2zM44.1 80.5c3.3 0 6.7-.6 10.3-1.8 3.6-1.2 6.8-3.4 9.5-6.4 1.6-1.9 2.8-4 3.4-6.4s1-5.3 1-8.7V53c-2.9-.7-6-1.3-9.2-1.7s-6.3-.6-9.4-.6c-6.7 0-11.6 1.3-14.9 4-3.3 2.7-4.9 6.5-4.9 11.5 0 4.7 1.2 8.2 3.7 10.6 2.4 2.5 5.9 3.7 10.5 3.7zm80.3 10.8c-1.8 0-3-.3-3.8-1-.8-.6-1.5-2-2.1-3.9L95 9.1c-.6-2-.9-3.3-.9-4 0-1.6.8-2.5 2.4-2.5h9.8c1.9 0 3.2.3 3.9 1 .8.6 1.4 2 2 3.9L129 73.7l15.6-66.2c.5-2 1.1-3.3 1.9-3.9.8-.6 2.2-1 4-1h8c1.9 0 3.2.3 4 1 .8.6 1.5 2 1.9 3.9l15.8 67 17.3-67c.6-2 1.3-3.3 2-3.9.8-.6 2.1-1 3.9-1h9.3c1.6 0 2.5.8 2.5 2.5 0 .5-.1 1-.2 1.6-.1.6-.3 1.4-.7 2.5l-24.1 77.3c-.6 2-1.3 3.3-2.1 3.9s-2.1 1-3.8 1h-8.6c-1.9 0-3.2-.3-4-1s-1.5-2-1.9-4l-15.5-64.5-15.4 64.4c-.5 2-1.1 3.3-1.9 4-.8.7-2.2 1-4 1h-8.6zM252.9 94c-5.2 0-10.4-.6-15.4-1.8-5-1.2-8.9-2.5-11.5-4-1.6-.9-2.7-1.9-3.1-2.8-.4-.9-.6-1.9-.6-2.8v-5.1c0-2.1.8-3.1 2.3-3.1.6 0 1.2.1 1.8.3.6.2 1.5.6 2.5 1 3.4 1.5 7.1 2.7 11 3.5 4 .8 7.9 1.2 11.9 1.2 6.3 0 11.2-1.1 14.6-3.3 3.4-2.2 5.2-5.4 5.2-9.5 0-2.8-.9-5.1-2.7-7-1.8-1.9-5.2-3.6-10.1-5.2l-14.5-4.5c-7.3-2.3-12.7-5.7-16-10.2-3.3-4.4-5-9.3-5-14.5 0-4.2.9-7.9 2.7-11.1s4.2-6 7.2-8.2c3-2.3 6.4-4 10.4-5.2S251.8 0 256.2 0c2.2 0 4.5.1 6.7.4 2.3.3 4.4.7 6.5 1.1 2 .5 3.9 1 5.7 1.6 1.8.6 3.2 1.2 4.2 1.8 1.4.8 2.4 1.6 3 2.5.6.8.9 1.9.9 3.3v4.7c0 2.1-.8 3.2-2.3 3.2-.8 0-2.1-.4-3.8-1.2-5.7-2.6-12.1-3.9-19.2-3.9-5.7 0-10.2.9-13.3 2.8s-4.7 4.8-4.7 8.9c0 2.8 1 5.2 3 7.1 2 1.9 5.7 3.8 11 5.5l14.2 4.5c7.2 2.3 12.4 5.5 15.5 9.6s4.6 8.8 4.6 14c0 4.3-.9 8.2-2.6 11.6-1.8 3.4-4.2 6.4-7.3 8.8-3.1 2.5-6.8 4.3-11.1 5.6-4.5 1.4-9.2 2.1-14.3 2.1z"/><path className="st1" d="M271.8 142.6c-32.9 24.3-80.7 37.2-121.8 37.2-57.6 0-109.5-21.3-148.7-56.7-3.1-2.8-.3-6.6 3.4-4.4 42.4 24.6 94.7 39.5 148.8 39.5 36.5 0 76.6-7.6 113.5-23.2 5.5-2.5 10.2 3.6 4.8 7.6z"/><path className="st1" d="M285.5 127c-4.2-5.4-27.8-2.6-38.5-1.3-3.2.4-3.7-2.4-.8-4.5 18.8-13.2 49.7-9.4 53.3-5 3.6 4.5-1 35.4-18.6 50.2-2.7 2.3-5.3 1.1-4.1-1.9 4-9.9 12.9-32.2 8.7-37.5z"/></svg>
                        <svg style={{transform: "scale(.8) translateX(-20px)"}} xmlns="http://www.w3.org/2000/svg" viewBox="-0.4500000000000005 0.38 800.8891043012813 754.2299999999999">
                            <linearGradient id="a" gradientUnits="userSpaceOnUse" x1="353.1" x2="107.1" y1="56.3" y2="783">
                                <stop offset="0" stopColor="#114a8b"/>
                                <stop offset="1" stopColor="#0669bc"/>
                            </linearGradient>
                            <linearGradient id="b" gradientUnits="userSpaceOnUse" x1="429.8" x2="372.9" y1="394.9" y2="414.2">
                                <stop offset="0" stopOpacity=".3"/>
                                <stop offset=".1" stopOpacity=".2"/>
                                <stop offset=".3" stopOpacity=".1"/>
                                <stop offset=".6" stopOpacity=".1"/>
                                <stop offset="1" stopOpacity="0"/>
                            </linearGradient>
                            <linearGradient id="c" gradientUnits="userSpaceOnUse" x1="398.4" x2="668.4" y1="35.1" y2="754.4">
                                <stop offset="0" stopColor="#3ccbf4"/>
                                <stop offset="1" stopColor="#2892df"/>
                            </linearGradient>
                            <path d="M266.71.4h236.71L257.69 728.9a37.8 37.8 0 0 1-5.42 10.38c-2.33 3.16-5.14 5.93-8.33 8.22s-6.71 4.07-10.45 5.27-7.64 1.82-11.56 1.82H37.71c-5.98 0-11.88-1.42-17.2-4.16A37.636 37.636 0 0 1 7.1 738.87a37.762 37.762 0 0 1-6.66-16.41c-.89-5.92-.35-11.97 1.56-17.64L230.94 26.07c1.25-3.72 3.08-7.22 5.42-10.38 2.33-3.16 5.15-5.93 8.33-8.22 3.19-2.29 6.71-4.07 10.45-5.27S262.78.38 266.7.38v.01z" fill="url(#a)"/>
                            <path d="M703.07 754.59H490.52c-2.37 0-4.74-.22-7.08-.67-2.33-.44-4.62-1.1-6.83-1.97s-4.33-1.95-6.34-3.21a38.188 38.188 0 0 1-5.63-4.34l-241.2-225.26a17.423 17.423 0 0 1-5.1-8.88 17.383 17.383 0 0 1 7.17-18.21c2.89-1.96 6.3-3.01 9.79-3.01h375.36l92.39 265.56z" fill="#0078d4"/>
                            <path d="M504.27.4l-165.7 488.69 270.74-.06 92.87 265.56H490.43c-2.19-.02-4.38-.22-6.54-.61s-4.28-.96-6.34-1.72a38.484 38.484 0 0 1-11.36-6.51L303.37 593.79l-45.58 134.42c-1.18 3.36-2.8 6.55-4.82 9.48a40.479 40.479 0 0 1-16.05 13.67 40.03 40.03 0 0 1-10.13 3.23H37.82c-6.04.02-12-1.42-17.37-4.2A37.664 37.664 0 0 1 .43 722a37.77 37.77 0 0 1 1.87-17.79L230.87 26.58c1.19-3.79 2.98-7.36 5.3-10.58 2.31-3.22 5.13-6.06 8.33-8.4s6.76-4.16 10.53-5.38S262.75.38 266.72.4h237.56z" fill="url(#b)"/>
                            <path d="M797.99 704.82a37.847 37.847 0 0 1 1.57 17.64 37.867 37.867 0 0 1-6.65 16.41 37.691 37.691 0 0 1-30.61 15.72H498.48c5.98 0 11.88-1.43 17.21-4.16 5.32-2.73 9.92-6.7 13.41-11.56s5.77-10.49 6.66-16.41.35-11.97-1.56-17.64L305.25 26.05a37.713 37.713 0 0 0-13.73-18.58c-3.18-2.29-6.7-4.06-10.43-5.26S273.46.4 269.55.4h263.81c3.92 0 7.81.61 11.55 1.81 3.73 1.2 7.25 2.98 10.44 5.26 3.18 2.29 5.99 5.06 8.32 8.21s4.15 6.65 5.41 10.37l228.95 678.77z" fill="url(#c)"/>
                        </svg>
                    </div>
                </div>
                <div className="card-shape">
                    <div id="box-shape"></div>
                </div>
            </div>
            <div className="card" ref={teamworkCard}>
                <div className="card-content">
                    <h3 className="headline-h3">Teamwork & Collaboration</h3>
                    <p className="headline-subtext">Teamwork & Collaboration are crucial throughout the process. We use Jira for task management, MS Teams for communication, Confluence for knowledge sharing, and GitHub for code collaboration. Together, these tools ensure seamless coordination and drive project success.</p>
                    <div className="icon-wrapper">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 249" preserveAspectRatio="xMinYMin meet">
                            <g fill="var(--dark-300)">
                                <path d="M127.505 0C57.095 0 0 57.085 0 127.505c0 56.336 36.534 104.13 87.196 120.99 6.372 1.18 8.712-2.766 8.712-6.134 0-3.04-.119-13.085-.173-23.739-35.473 7.713-42.958-15.044-42.958-15.044-5.8-14.738-14.157-18.656-14.157-18.656-11.568-7.914.872-7.752.872-7.752 12.804.9 19.546 13.14 19.546 13.14 11.372 19.493 29.828 13.857 37.104 10.6 1.144-8.242 4.449-13.866 8.095-17.05-28.32-3.225-58.092-14.158-58.092-63.014 0-13.92 4.981-25.295 13.138-34.224-1.324-3.212-5.688-16.18 1.235-33.743 0 0 10.707-3.427 35.073 13.07 10.17-2.826 21.078-4.242 31.914-4.29 10.836.048 21.752 1.464 31.942 4.29 24.337-16.497 35.029-13.07 35.029-13.07 6.94 17.563 2.574 30.531 1.25 33.743 8.175 8.929 13.122 20.303 13.122 34.224 0 48.972-29.828 59.756-58.22 62.912 4.573 3.957 8.648 11.717 8.648 23.612 0 17.06-.148 30.791-.148 34.991 0 3.393 2.295 7.369 8.759 6.117 50.634-16.879 87.122-64.656 87.122-120.973C255.009 57.085 197.922 0 127.505 0"/>
                                <path d="M47.755 181.634c-.28.633-1.278.823-2.185.389-.925-.416-1.445-1.28-1.145-1.916.275-.652 1.273-.834 2.196-.396.927.415 1.455 1.287 1.134 1.923M54.027 187.23c-.608.564-1.797.302-2.604-.589-.834-.889-.99-2.077-.373-2.65.627-.563 1.78-.3 2.616.59.834.899.996 2.08.36 2.65M58.33 194.39c-.782.543-2.06.034-2.849-1.1-.781-1.133-.781-2.493.017-3.038.792-.545 2.05-.055 2.85 1.07.78 1.153.78 2.513-.019 3.069M65.606 202.683c-.699.77-2.187.564-3.277-.488-1.114-1.028-1.425-2.487-.724-3.258.707-.772 2.204-.555 3.302.488 1.107 1.026 1.445 2.496.7 3.258M75.01 205.483c-.307.998-1.741 1.452-3.185 1.028-1.442-.437-2.386-1.607-2.095-2.616.3-1.005 1.74-1.478 3.195-1.024 1.44.435 2.386 1.596 2.086 2.612M85.714 206.67c.036 1.052-1.189 1.924-2.705 1.943-1.525.033-2.758-.818-2.774-1.852 0-1.062 1.197-1.926 2.721-1.951 1.516-.03 2.758.815 2.758 1.86M96.228 206.267c.182 1.026-.872 2.08-2.377 2.36-1.48.27-2.85-.363-3.039-1.38-.184-1.052.89-2.105 2.367-2.378 1.508-.262 2.857.355 3.049 1.398"/>
                            </g>
                        </svg>
                        <img src={teams_image}></img>
                        <img src={jira_image}></img>
                        <img src={confluence_image}></img>
                    </div>
                </div>
                <div className="card-shape">
                    <svg id="octagon-shape" fill="var(--magenta)" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                        <path d="M232,91.54688v72.90625a16.11515,16.11515,0,0,1-4.6875,11.3125L175.76562,227.3125A16.11511,16.11511,0,0,1,164.45312,232H91.54687a16.11515,16.11515,0,0,1-11.3125-4.6875L28.6875,175.76563A16.11515,16.11515,0,0,1,24,164.45313V91.54688a16.11511,16.11511,0,0,1,4.6875-11.3125L80.23437,28.6875A16.11515,16.11515,0,0,1,91.54687,24h72.90625a16.11511,16.11511,0,0,1,11.3125,4.6875L227.3125,80.23438A16.11511,16.11511,0,0,1,232,91.54688Z"/>
                    </svg>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Ressources;
