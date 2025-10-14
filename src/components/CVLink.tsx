import React from "react";
import { Link } from "react-router";
import { trackEvent } from "../utils/analytics";

type Props = {
  className?: string;
  children?: React.ReactNode;
};

const fireEvent = () =>
  trackEvent("User", "download_cv_button_clicked");

const CVLink: React.FC<Props> = ({ className = "", children }) => {
  const gh_pages_value = import.meta.env.VITE_ON_GH_PAGES;
  const onGithubPages = gh_pages_value === "true";

  if (onGithubPages) {
    return (
      <a
        href="/cv.pdf"
        className={className}
        onClick={() => {
          fireEvent();
        }}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      to="/cv"
      className={className}
      onClick={() => {
        fireEvent();
      }}
    >
      {children}
    </Link>
  );
};

export default CVLink;
