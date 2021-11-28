import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Welcome to GemItUp",
  description: "Find the best quality Gem Stones here",
  keywords: "gemstones,buy gemstones,best quality products",
};

export default Meta;
