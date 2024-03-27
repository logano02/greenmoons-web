import PropTypes from "prop-types";
import { forwardRef } from "react";

import Link from "@mui/material/Link";

import { RouterLink } from "../../routes/components/";
import Cookies from "js-cookie";

// ----------------------------------------------------------------------

const Logo = forwardRef(({ disabledLink = false, sx, ...other }, ref) => {
  const token = Cookies.get("token");

  return (
    <Link
      component={RouterLink}
      href={!!token ? "/" : "login"}
      sx={{ display: "contents" }}
    ></Link>
  );
});

Logo.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object,
};

export default Logo;
