import { Box } from "../styled-components";
import { Link } from "react-router-dom";
import Index from "../pages/IndexPortfolio";
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
        to="/portfolio_index"
        onClick={() => {
          props.setAppear(true);
        }}
        element={<Index />}
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
