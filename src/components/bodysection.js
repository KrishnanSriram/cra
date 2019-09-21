import React from "react";
import PropTypes from "prop-types";

const BodySection = props => {
  const imgClassName =
    props.imageLeft === false ? "col-lg-6 order-lg-2" : "col-lg-6";
  const contentClassName =
    props.imageLeft === false ? "col-lg-6 order-lg-1" : "col-lg-6";
  return (
    <section>
      <div className="container">
        <div className="row align-items-center">
          <div className={imgClassName}>
            <div className="p-5">
              <img
                className="img-fluid rounded-circle"
                src={props.image}
                alt=""
              />
            </div>
          </div>
          <div className={contentClassName}>
            <div className="p-5">
              <h2 className="display-4">{props.title}</h2>
              {props.children}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

BodySection.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imageLeft: PropTypes.bool.isRequired
};

export default BodySection;
