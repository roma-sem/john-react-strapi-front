import React from 'react';
import './FooterLogo.scss';

import FooterLogoImg from '../../../../assets/images/logo-JA-footer-2.png';

export default function FooterLogo() {
    return(
        <div className="FooterLogo">
            <img src={FooterLogoImg} alt="Footer Logo" />
        </div>
    );
}
