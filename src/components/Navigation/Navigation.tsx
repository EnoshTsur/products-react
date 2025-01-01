import { styled } from "styled-components";
import Button from "../ui/Button/Button";
import { useNavigate } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";

const StyledNav = styled.nav`
  box-shadow: 0px 2px 3px #dedede;
  display: flex;
  gap: 1rem;
  padding: 0.5rem;
  justify-content: space-between;
`;

const Navigation = () => {
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate("/");
  };

  const navigateCheckout = () => {
    navigate("/checkout");
  };

  return (
    <StyledNav color="blue">
      <Button onClick={navigateHome}>Home</Button>
      <Button onClick={navigateCheckout}>
        <FaCartShopping />
      </Button>
    </StyledNav>
  );
};

export default Navigation;
