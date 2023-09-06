import { Link } from "react-router-dom";
import styled from "styled-components";
import routerPaths from "../../router/router-paths";
import Logo from "../../infaktLogo.png";

const HomePage = () => {
  return (
    <StyledHomePage>
      <Title>Witaj w <LogoImage src={Logo} alt="Logo" /></Title>
      <Button to={routerPaths.accountants}>Znajdź księgowego</Button>
    </StyledHomePage>
  );
};

const LogoImage = styled.img`
  width: 120px;
  margin-right: 10px;
`;

const StyledHomePage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  background-color: #f2f2f2;
`;

const Title = styled.h1`
  font-size: 36px;
  margin-top: 200px;
  margin-bottom: 20px;
`;

const Button = styled(Link)`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  font-size: 18px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

export default HomePage;
