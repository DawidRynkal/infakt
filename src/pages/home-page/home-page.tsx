import styled from "styled-components";
import routerPaths from "../../router/router-paths";
import Logo from "../../infaktLogo.png";
import LinkButton from "../../shared/components/buttons/LinkButton";

const HomePage = () => {
  return (
    <StyledHomePage>
      <Title>
        Witaj w <LogoImage src={Logo} alt="Logo" />
      </Title>
      <LinkButton route={routerPaths.accountants} text="Znajdź księgowego" />
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

export default HomePage;
