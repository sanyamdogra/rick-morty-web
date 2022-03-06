import React from "react";
import { FaGithub } from "react-icons/fa";

import Heading from "../heading";
import { GITHUB_PROJECT_REPO } from "../../common/constants";

import "./styles.scss";

const rootClassName = "rick-morty-header";

const Header: React.FC = () => {
  return (
    <>
      <header className={rootClassName}>
        <a href="/">
          <img src={require("../../icons/logo.png")} alt="Rick and Morty" />
        </a>
        <a
          href={GITHUB_PROJECT_REPO}
          className={`${rootClassName}__source-code`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Source code
          <span className={`${rootClassName}__icon`}>
            <FaGithub />
          </span>
        </a>
      </header>
      <Heading primary="Rick and Morty" secondary="characters" />
    </>
  );
};

export default Header;
