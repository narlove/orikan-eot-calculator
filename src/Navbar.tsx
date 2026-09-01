import { NavLink, Outlet } from "react-router";
import { FaGithub } from 'react-icons/fa6';
import './Navbar.css';

function Navbar()
{
    const navLinkClass = ({ isActive }: { isActive: boolean }) =>
        `top-navbar__link${isActive ? ' top-navbar__link--active' : ''}`;

    return (
        <>
            <nav className="top-navbar" aria-label="Main navigation">
                <div className="top-navbar__inner">
                    <NavLink to="/" end className="top-navbar__brand" aria-label="Return to homepage">
                        <span className="brand-mark brand-mark--nav" aria-hidden="true">
                            <img
                                src="https://media.licdn.com/dms/image/v2/D560BAQGyRzsFQPYLnQ/company-logo_200_200/company-logo_200_200/0/1681192356762/orikan_logo?e=2147483647&v=beta&t=_GneGM8DToONXj7KBWQTAt93JxWvLGAserBjigijTOI"
                                alt="Orikan logo"
                                width="100%"
                                height="100%"
                                style={{ borderRadius: 10 }}
                            />
                        </span>
                    </NavLink>

                    <div className="top-navbar__links">
                        <NavLink to="/" end className={navLinkClass}>Dashboard</NavLink>
                        <NavLink to="/eot" className={navLinkClass}>EOT Calculator</NavLink>
                        <NavLink to="/ppp" className={navLinkClass}>PPP calculator</NavLink>
                        {/* <button className={navLinkClass({ isActive: false }).concat(" top-navbar__link--disabled")}>PPP Calculator</button> */}
                        <button className={navLinkClass({ isActive: false }).concat(" top-navbar__link--disabled")}>Advanced Escalations</button>
                        <a
                            className="github-referral"
                            href="https://github.com/narlove/orikan-eot-calculator"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="View project on GitHub"
                        >
                            <FaGithub />
                        </a>
                    </div>
                </div>
            </nav>

            <Outlet />
        </>
    )
}

export default Navbar;