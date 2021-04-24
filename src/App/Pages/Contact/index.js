import React from "react";
import "./ContactContent.css";

export default function ContactContent() {
  return (
    <div className="ContactContent">
      <a href="https://www.linkedin.com/in/alex-burley/">
        <div className="ImageWrapper">
          <img
            src="http://assets.stickpng.com/images/58e91afdeb97430e81906504.png"
            alt="LinkedIn"
          />
        </div>
      </a>
      <a href="https://github.com/alexburley">
        <div className="ImageWrapper">
          <img
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            alt="LinkedIn"
          />
        </div>
      </a>
    </div>
  );
}
