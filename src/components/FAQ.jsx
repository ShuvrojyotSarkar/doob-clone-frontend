import React from "react";

const FAQ = () => {
  return (
    <div className="rainbow-accordion-area preview-accordion-area rainbow-section-gap">
      <div className="wrapper plr--150 plr_lg--30 plr_md--30 plr_sm--30">
        <div className="row row--30">
          <div className="col-lg-8 col-sm-12">
            <div
              className="section-title text-start mb--60 sal-animate"
              data-sal="slide-up"
              data-sal-duration="700"
              data-sal-delay="100"
            >
              <div className="client-image mb--20">
                <img src="assets/images/icons/group-image.png" alt="Group" />
              </div>
              <h4 className="subtitle">
                <span className="theme-gradient">Have a Question?</span>
              </h4>
              <h2 className="title w-600 mb--20">
                Check out our FAQ section <br /> to see if we can help.
              </h2>
            </div>

            <div className="rainbow-accordion-style accordion">
              <div className="accordion" id="accordionExample">
                {faqData.map((item, index) => (
                  <div className="accordion-item card" key={index}>
                    <h2 className="accordion-header card-header" id={`heading${index}`}>
                      <button
                        className={`accordion-button ${index !== 0 ? "collapsed" : ""}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse${index}`}
                        aria-expanded={index === 0}
                        aria-controls={`collapse${index}`}
                      >
                        {item.question}
                      </button>
                    </h2>
                    <div
                      id={`collapse${index}`}
                      className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                      aria-labelledby={`heading${index}`}
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body card-body">{item.answer}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-sm-12 mt--80 mt_md--40 mt_sm--40">
            <SupportCard
              icon="book"
              title="Online Documentation"
              description="Well-organized and up to date"
              link="http://rainbowit.net/docs/doob-html/"
              linkText="Online Documentation"
            />
            <SupportCard
              icon="headphones"
              title="Dedicated Support"
              description="Need support? Submit a ticket. We’re happy to assist you."
              link="https://support.rainbowit.net/support/login"
              linkText="Get Support"
              extraInfo={[
                { label: "Support Time:", value: "Monday – Friday" },
                { label: "Response Time:", value: "Maximum 24 hours" },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const SupportCard = ({ icon, title, description, link, linkText, extraInfo = [] }) => (
  <div className="service service__style--1 bg-color-blackest radius text-start rbt-border-none mt--30">
    <div className="icon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`feather feather-${icon}`}
      >
        {icon === "book" ? (
          <>
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
          </>
        ) : (
          <>
            <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
            <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
          </>
        )}
      </svg>
    </div>
    <div className="content">
      <h4 className="title w-600">
        <a href="#">{title}</a>
      </h4>
      <p className="description b1 color-gray mb--20">{description}</p>
      <div className="doc-btn">
        <a className="btn-default btn-small btn-border" target="_blank" rel="noopener noreferrer" href={link}>
          {linkText}
        </a>
      </div>
      {extraInfo.length > 0 && (
        <ul className="liststyle">
          {extraInfo.map((info, idx) => (
            <li key={idx}>
              <span>{info.label}</span> {info.value}
            </li>
          ))}
        </ul>
      )}
    </div>
  </div>
);

const faqData = [
  {
    question: "What is Doob? How does it work?",
    answer:
      "Doob is a Laravel 11 Personal Portfolio and Multi-Purpose Template. It’s fast-loading, easy to use, and well-documented for customization.",
  },
  {
    question: "How can I get customer support?",
    answer: (
      <>
        After purchasing the product, you can reach out to us by sending an email via{" "}
        <a href="https://support.rainbowit.net/support/login" target="_blank" rel="noopener noreferrer">
          our support portal.
        </a>
      </>
    ),
  },
  {
    question: "How often do I get updates?",
    answer: "We regularly update Doob with new features. You can get unlimited updates as they become available.",
  },
  {
    question: "Can I customize elements as I like?",
    answer: "Yes! You can modify any element as needed to match your website's design and functionality.",
  },
  {
    question: "Can I build a complete project with this template?",
    answer: "Absolutely! This template provides multiple components to help you create a complete website.",
  },
];

export default FAQ;
