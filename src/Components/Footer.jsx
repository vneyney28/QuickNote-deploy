import React from "react";
import CopyrightIcon from "@mui/icons-material/Copyright";

function Footer() {
  var d = new Date();
  return (
    <footer>
      <span>
        <p>
          <a href="https://github.com/vneyney28">Varshney</a>
        </p>
        <CopyrightIcon fontSize="small" /> {d.getFullYear()}
      </span>
    </footer>
  );
}

export default Footer;
