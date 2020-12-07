import React,
{
    // lazy,
    // Suspense
} from 'react';
import { Link } from "react-router-dom";
import './HomeAboutSection.scss';
import TwoColContainer from '../../shared/hoc/TwoColContainer/TwoColContainer';
import HeaderOne from '../../shared/components/HeaderOne/HeaderOne';
import ArrowLinkRight from '../../shared/components/ArrowLinkRight/ArrowLinkRight';

import JohnImg from '../../assets/images/John_antes-featured-2.jpg';

export default function HomeAbout() {
    const headerTxt = "Every design is an adventure and every project is a journey. My work is inspired by nature, traveling, interesting people, and honestly, just everyday life.";
    const paragTxt = "Having a strong background in graphic and web design is important. However, I’ve also made it a personal goal to continue practicing traditional methods. I still enjoy working with my hands and drawing in my sketch book. Whether it be a logo, branding illustration, web or typography project, it never hurts to start on paper. My work journeys beyond the expected, while keeping a strong focus. While trends are fun, thinking outside the box is truly the frontier of design. In my spare time I enjoy hiking, camping, and shooting landscape photography from my travels.";
    const arrowLinkTxt = "explore my work";

    return(
        <section className="HomeAboutSection container">
            <TwoColContainer
                leftColComponent={() =>
                        <img src={JohnImg} alt="John Antes" />
                }
                rightColComponent={() => {
                    return(
                        <React.Fragment>
                            <HeaderOne content={headerTxt} />
                            <p>{paragTxt}</p>
                            <Link to="/work" exact>
                                <ArrowLinkRight content={arrowLinkTxt} />
                            </Link>
                        </React.Fragment>
                    )
                }}
            />
        </section>
    );
}
