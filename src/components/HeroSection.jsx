import React from 'react';

const HeroSection = () => {
    return (
        <div class="demo-slider-area slider-area bg-transparent slider-style-1 pb--100 pt--70">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="inner text-center">
                <div class="react-image mb--20">
                  <img
                    src="assets/images/demo/react-badge.png"
                    alt="Doob React"
                  />
                </div>
                <h1 class="title display-two">
                  Next-gen all-in-one <br />
                  <span class="theme-gradient">Business</span>
                  &amp; <span class="theme-gradient">Consulting</span>
                  <br />
                  Laravel 11 Template.
                </h1>
                <p class="description">
                  We help our clients succeed by creating brand identities,
                  digital experiences, and print materials.
                </p>
                <div class="button-group">
                  <a
                    class="btn-default btn-large round btn-icon smoth-animation"
                    href="#demo"
                  >
                    View Demo <i class="feather-arrow-down"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default HeroSection;