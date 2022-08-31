import React from "react";
import { Trans } from "react-i18next";

function Footer() {
  return (
    <footer className="footer">
      <p className="has-text-centered">
        <Trans i18nKey="footer">
          Demo for a{" "}
          <a href="https://phrase.com/blog/posts/localizing-react-apps-with-i18next/">Phrase blog</a>{" "}
          article.
          <br />
          Created with React, i18next, and Bulma.
        </Trans>
      </p>
    </footer>
  );
}

export default Footer;