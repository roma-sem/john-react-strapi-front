import React, { useEffect, useRef, useState } from 'react';
// import './Nav.scss';
import useFetch from '../../../utils/useFetch';
// import { Link } from 'react-router-dom';
import DesktopNav from './DesktopNav/DesktopNav';
import MobileNav from './MobileNav/MobileNav';
import NavButton from './NavButton/NavButton';


export default function Nav() {
    // const fetchRes = useFetch('/john/wp-json/wp-api-menus/v2/menus/2', "items");
    const fetchRes = useFetch('http://localhost:1337/nav-items');

    let [fetched, setFetched] = useState(false);
    const ref = useRef(null);
    const [showMobNav, setShowMobNav] = useState(false);

    useEffect(() => {
        if (!fetched) {
            console.log("[ Nav ]: fetchRes.data ", fetchRes.data);
            ref.current = fetchRes.data;
            return () => setFetched(true);
        }
    }, [fetchRes, fetched]);

    function handleClick() {
        setShowMobNav(prevState => !prevState);
        // console.log("showMobNav = ", showMobNav);
    }

    return (
        <React.Fragment>
            {fetched
                ?   <React.Fragment>
                        <DesktopNav navItems={ref.current} />
                        {showMobNav
                            ? <MobileNav navItems={ref.current} clicked={handleClick} />
                            : null
                        }
                    </React.Fragment>
                :   null
            }
            {showMobNav
                ? <NavButton clicked={handleClick} showXBtn={true} />
                : <NavButton clicked={handleClick} showXBtn={false} />}

        </React.Fragment>
    );
}
