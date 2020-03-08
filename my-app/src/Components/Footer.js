import React from 'react';
import styled from 'styled-components';

export const Footer = () => (
    <FooterContainer className="main-footer">

        {/* Footer Bottom */}
        <div className="footer-bottom">
            <p className="text-xs-center">
                &copy;{new Date().getFullYear()} Jo Vill Village - All Rights Reserved
    </p>

        </div>
    </FooterContainer>
)

const FooterContainer = styled.footer`
.footer-middle {
    background: #343a40;
    padding-top: 3rem;
    color: #fff;
}
.footer-bottom {
    padding-top: 3rem;
    padding-bottom: 2rem;
    background: #343a40;
    color: #fff;

}
ul li a {
    color: rgba(109, 109, 109);
}
ul li a:hover {
    color: rgba(172, 172, 172);
}
`;