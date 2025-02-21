import React from "react";

const Features = () => {
  return (
    <div className="rainbow-service-area rainbow-section-gap">
      <div className="wrapper plr--150 plr_lg--30 plr_md--30 plr_sm--30">
        <div className="row">
          <div className="col-lg-12">
            <div
              className="section-title text-center"
              data-sal="slide-up"
              data-sal-duration="700"
              data-sal-delay="100"
            >
              <h4 className="subtitle">
                <span className="theme-gradient">OUR DOOB FEATURE</span>
              </h4>
              <h2 className="title w-600 mb--20">Awesome Features</h2>
            </div>
          </div>
        </div>
        <div className="row g-5 mt--5">
          {featuresData.map((feature, index) => (
            <div
              key={index}
              className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 sal-animate"
            >
              <div className="service service__style--1 bg-color-blackest radius text-center rbt-border h-100">
                <div className="icon" dangerouslySetInnerHTML={{ __html: feature.icon }}></div>
                <div className="content">
                  <h4 className="title w-600">
                    <a href="#">{feature.title}</a>
                  </h4>
                  <p className="description b1 color-gray mb--0">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Feature data array with proper SVG icons
const featuresData = [
  {
    icon: `<i class="feather feather-smartphone"></i>`,
    title: "Perfect Responsive",
    description:
      "Our template is fully optimized for all devices. You can easily access it from any device.",
  },
  {
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
      class="feather feather-cast">
        <path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path>
        <line x1="2" y1="20" x2="2.01" y2="20"></line>
      </svg>`,
    title: "Laravel",
    description: "Built with Laravel for a solid and structured development process.",
  },
  {
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
      class="feather feather-code">
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>`,
    title: "Well Documented Codes",
    description: "The Doob code is well documented, making customization very easy.",
  },
  {
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
      class="feather feather-activity">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
      </svg>`,
    title: "SASS Available",
    description: "This template includes SASS for easier and more powerful styling.",
  },
  {
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
      class="feather feather-download">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
        <polyline points="7 10 12 15 17 10"></polyline>
        <line x1="12" y1="15" x2="12" y2="3"></line>
      </svg>`,
    title: "Fast Loading Speed",
    description: "Optimized for fast performance to make your theme load quickly.",
  },
  {
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
      class="feather feather-command">
        <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
      </svg>`,
    title: "Modern Design",
    description: "Doob offers a sleek and modern design for agencies, portfolios, and more.",
  },
  {
    icon: `<i class="feather feather-headphones"></i>`,
    title: "24/7 Support System",
    description: "We provide 24/7 support so you can purchase with confidence.",
  },
  {
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
      class="feather feather-bold">
        <path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path>
        <path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path>
      </svg>`,
    title: "Bootstrap v5 Compatible",
    description: "Fully compatible with Bootstrap v5 for easy layout customizations.",
  },
];

export default Features;
