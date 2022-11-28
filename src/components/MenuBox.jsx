import Box from "../styled-components/MenuBox.styled";
import { Link } from "react-router-dom";
const MenuBox = () => {
  return (
    <Box>
      <Link to="/" className="link">
        HOME
      </Link>
      <Link to="/" className="link">
        PORTFOLIO
      </Link>
      <Link to="/" className="link">
        CONTACT ME
      </Link>
    </Box>
  );
};

export default MenuBox;
