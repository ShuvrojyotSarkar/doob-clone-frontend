import React from 'react';

const Header = () => {
    return (
        <header className="rainbow-header header-default header-not-transparent header-sticky">
        <div className="container position-relative">
          <div className="row align-items-center row--0">
            <div className="col-lg-3 col-md-6 col-4">
              <div className="logo">
                <a href="index.html">
                  <img
                    className="logo-light"
                    src="assets/images/logo/logo.png"
                    alt="Corporate Logo"
                  />
                  <img
                    className="logo-dark"
                    src="assets/images/logo/logo-dark.png"
                    alt="Corporate Logo"
                  />
                </a>
              </div>
            </div>
            <div className="col-lg-9 col-md-6 col-8 position-static">
              <div className="header-right">
                <nav className="mainmenu-nav d-none d-lg-block">
                  <ul className="mainmenu">
                    <li className="with-megamenu has-menu-child-item">
                      <a href="#">Home</a>
                      <div className="rainbow-megamenu with-mega-item-2">
                        <div className="wrapper">
                          <div className="row row--0">
                            <div className="col-lg-6 single-mega-item">
                              <ul className="mega-menu-item">
                                <li><a href="index-landing.html">Sass Landing</a></li>
                                <li><a href="index-application.html">Application</a></li>
                                <li><a href="index-collaborate.html">Collaborate</a></li>
                                <li><a href="index-business-consulting.html">Business Consulting</a></li>
                                <li><a href="index-magazine.html">Magazine</a></li>
                                <li><a href="index-corporate.html">Corporate</a></li>
                                <li><a href="index-business.html">Business</a></li>
                                <li><a href="index-digital-agency.html">Digital Agency</a></li>
                                <li><a href="index-finance.html">Finance</a></li>
                                <li><a href="index-company.html">Company</a></li>
                                <li><a href="index-marketing-agency.html">Marketing Agency</a></li>
                              </ul>
                            </div>
                            <div className="col-lg-6 single-mega-item">
                              <ul className="mega-menu-item">
                                <li><a href="index-travel-agency.html">Travel Agency</a></li>
                                <li><a href="index-consulting.html">Consulting</a></li>
                                <li><a href="index-seo-agency.html">SEO Agency</a></li>
                                <li><a href="index-personal-portfolio.html">Personal Portfolio</a></li>
                                <li><a href="index-event-conference.html">Event Conference</a></li>
                                <li><a href="index-creative-portfolio.html">Creative Portfolio</a></li>
                                <li><a href="index-freelancer.html">Freelancer</a></li>
                                <li><a href="index-international-consulting.html">International Consulting</a></li>
                                <li><a href="index-startup.html">Startup</a></li>
                                <li><a href="index-web-agency.html">Web Agency</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li><a href="about.html">About</a></li>
                    <li className="with-megamenu has-menu-child-item">
                      <a href="#">Elements</a>
                      <div className="rainbow-megamenu">
                        <div className="wrapper">
                          <div className="row row--0">
                            <div className="col-lg-3 single-mega-item">
                              <ul className="mega-menu-item">
                                <li><a href="button.html">Button</a></li>
                                <li><a href="service.html">Service</a></li>
                                <li><a href="counter.html">Counter</a></li>
                                <li><a href="progressbar.html">Progressbar</a></li>
                                <li><a href="accordion.html">Accordion</a></li>
                                <li><a href="social-share.html">Social Share</a></li>
                                <li><a href="blog-grid.html">Blog Grid</a></li>
                              </ul>
                            </div>
                            <div className="col-lg-3 single-mega-item">
                              <ul className="mega-menu-item">
                                <li><a href="team.html">Team</a></li>
                                <li><a href="portfolio.html">Portfolio</a></li>
                                <li><a href="testimonial.html">Testimonial</a></li>
                                <li><a href="timeline.html">Timeline</a></li>
                                <li><a href="tab.html">Tab</a></li>
                                <li><a href="pricing.html">Pricing</a></li>
                                <li><a href="split.html">Split Section</a></li>
                              </ul>
                            </div>
                            <div className="col-lg-3 single-mega-item">
                              <ul className="mega-menu-item">
                                <li><a href="call-to-action.html">Call To Action</a></li>
                                <li><a href="video.html">Video</a></li>
                                <li><a href="gallery.html">Gallery</a></li>
                                <li><a href="contact.html">Contact</a></li>
                                <li><a href="brand.html">Brand</a></li>
                                <li><a href="portfolio.html">Portfolio</a></li>
                                <li><a href="error.html">404</a></li>
                              </ul>
                            </div>
                            <div className="col-lg-3 single-mega-item">
                              <ul className="mega-menu-item">
                                <li><a href="advance-tab.html">Advance Tab</a></li>
                                <li><a href="brand-carousel.html">Brand Carousel</a></li>
                                <li><a href="advance-pricing.html">Advance Pricing</a></li>
                                <li><a href="portfolio-details.html">Portfolio Details</a></li>
                                <li><a href="blog-details.html">Blog Details</a></li>
                                <li><a href="privacy-policy.html">Privacy Policy</a></li>
                                <li><a href="login.html">Profile</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li><a href="contact.html">Contact</a></li>
                  </ul>
                </nav>

                <div className="header-btn">
                  <a className="btn-default btn-small round" target="_blank" rel="noopener noreferrer" href="https://1.envato.market/doob-laravel-11">
                    BUY NOW
                  </a>
                </div>

                <div className="mobile-menu-bar ml--5 d-block d-lg-none">
                  <div className="hamberger">
                    <button className="hamberger-button">
                      <i className="feather-menu"></i>
                    </button>
                  </div>
                </div>

                <div id="my_switcher" className="my_switcher">
                  <ul>
                    <li>
                      <a href="javascript:void(0);" data-theme="light" className="setColor light">
                        <img className="sun-image" src="/icons/sun-01.svg" alt="Sun images" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
};

export default Header;
