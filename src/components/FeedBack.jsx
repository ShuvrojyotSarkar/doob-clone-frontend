import React from "react";

const FeedBack = () => {
  return (
    <div className="rainbow-testimonial-area rainbow-section-gap">
      <div className="wrapper plr--150 plr_lg--30 plr_md--30 plr_sm--30">
        <div className="row">
          <div className="col-lg-12">
            <div
              className="section-title text-center sal-animate"
              data-sal="slide-up"
              data-sal-duration="700"
              data-sal-delay="100"
            >
              <h4 className="subtitle">
                <span className="theme-gradient">
                  OUR FANTASTIC ENVATO CUSTOMERS REVIEWS
                </span>
              </h4>
              <h2 className="title w-600 mb--20">Customer Feedback</h2>
            </div>
          </div>
        </div>

        <div className="row row--15">
          {feedbackData.map((feedback, index) => (
            <div
              key={index}
              className="col-lg-3 col-md-6 col-12 mt--30 sal-animate"
              data-sal="slide-up"
              data-sal-duration="700"
            >
              <div className="rainbow-box-card card-style-default testimonial-style-one style-two border-gradient">
                <div className="inner">
                  <div className="content">
                    <div className="rating">
                      <img src="assets/images/icons/rating.png" alt="Rating" />
                    </div>
                    <p className="description">{feedback.text}</p>
                    <h2 className="title">{feedback.name}</h2>
                    <h6 className="subtitle theme-gradient">{feedback.type}</h6>
                    <div className="author-envato-image pb--10">
                      <img
                        className="envato-white"
                        src="assets/images/icons/envato-white.svg"
                        alt="Envato"
                      />
                      <img
                        className="envato-black"
                        src="assets/images/icons/envato.svg"
                        alt="Envato"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Feedback Data Array (Dynamic & Scalable)
const feedbackData = [
  {
    name: "mindcycle001",
    type: "Customer Support",
    text: "Simply amazing support... Top Seller in terms of support... Thanks a lot... I will keep buying your products... amazing work... bug free... thanks a lot...",
  },
  {
    name: "The4",
    type: "Design Quality",
    text: "The product is of good quality and easy to use, We are also the author on Envato and our requirement is very high, Affordable and excellent work...",
  },
  {
    name: "wimm-x",
    type: "Design Quality",
    text: "The configuration of the contact form was problematic, but the support of the Pixcels Themes team helped a lot. That convinced me! Thanks!",
  },
  {
    name: "amarbv2002",
    type: "Design Quality",
    text: "Design quality is awesome, no question about that. But I would like to have more ease in customizing the CSS. It's a bit complex. Other than that no issues.",
  },
];

export default FeedBack;
