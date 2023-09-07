import { useState } from "react";
import routerPaths from "../../router/router-paths";
import { useGetUsersQuery } from "../../services/infakt-api";
import LinkButton, {
  LinkButtonType,
} from "../../shared/components/buttons/LinkButton";
import styled from "styled-components";
import Logo from "../../infaktLogo.png";
import { ClipLoader } from "react-spinners";
import { styledTheme } from "../../theme";

const Accountants = () => {
  const [resultsPerPage, setResultsPerPage] = useState(4);

  const { data, error, isLoading, isFetching } = useGetUsersQuery({
    page: 1,
    results: resultsPerPage,
  });

  const loadMoreResults = () => {
    setResultsPerPage(resultsPerPage + 4);
  };

  return (
    <Container>
      <LogoImage src={Logo} alt="Logo" />
      {isLoading ? (
        <LoaderWrapper>
          <ClipLoader
            size={50}
            color={styledTheme.colors.blue}
            loading={isLoading}
          />
        </LoaderWrapper>
      ) : error ? (
        <p>Wystąpił błąd</p>
      ) : (
        <>
          <ListWrapper>
            {data?.results.map((user) => (
              <LinkButton
                key={user.login.uuid}
                route={routerPaths.home}
                text="Dowiedz się więcej"
                type={LinkButtonType.SECONDARY}
              />
            ))}
          </ListWrapper>
          <button onClick={loadMoreResults}>
            {isFetching ? (
              <ClipLoader
                size={50}
                color={styledTheme.colors.blue}
                loading={isFetching}
              />
            ) : (
              "Załaduj kolejne"
            )}
          </button>
        </>
      )}
    </Container>
  );
};

const LoaderWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoImage = styled.img`
  width: 146px;
  margin-right: 10px;
`;

const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  padding: 48px 0;
`;

const Container = styled.div`
  margin: 44px 80px;
  padding: 4px;
`;

export default Accountants;
