import { Box } from "../styled-components";
import { Link } from "react-router-dom";
const MenuBox = (props) => {
  return (
    <Box>
      <Link
        to="/"
        className="link"
        onClick={() => {
          props.setAppear(true);
        }}
      >
        HOME
      </Link>
      <Link
        to="/portfolio"
        onClick={() => {
          props.setAppear(true);
        }}
        className="link"
      >
        PORTFOLIO
      </Link>
      <Link to="/contact" className="link">
        CONTACT ME
      </Link>
    </Box>
  );
};

export default MenuBox;
