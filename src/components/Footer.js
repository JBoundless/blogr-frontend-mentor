import React, { useState } from 'react';
import { footer } from '../data/footer';

const Footer = () => {
  const [footerLinks, setFooterLinks] = useState(footer);
  const [links, setLinks] = useState(footer);
  const logo =
    'https://raw.githubusercontent.com/JBoundless/blogr/ea51dcffb587ccd51501086963000ddead5b95eb/images/logo.svg';

  return (
    <>
      <footer className="footer text-center px-5 md:text-left md:grid md:grid-cols-2 lg:py-10">
        <div>
          <img src={logo} alt="" className="block mx-auto pt-10 md:mx-0" />
        </div>

        <div className="md:grid md:grid-cols-2 lg:grid-cols-3">
          <section>
            <h4>Product</h4>
            <ul>
              <li>Overview</li>
              <li>Pricing</li>
              <li>Marketplace</li>
              <li>Features</li>
              <li>Integrations</li>
            </ul>
          </section>
          <section>
            <h4>Company</h4>
            <ul>
              <li>About</li>
              <li>Team</li>
              <li>Blog</li>
              <li>Careers</li>
            </ul>
          </section>
          <section>
            <h4>Connect</h4>
            <ul>
              <li>Contact</li>
              <li>Newsletter</li>
              <li>LinkedIn</li>
            </ul>
          </section>
        </div>
      </footer>
    </>
  );
};

export default Footer;
