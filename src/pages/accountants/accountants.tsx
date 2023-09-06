import { useState } from "react";
import routerPaths from "../../router/router-paths";
import { useGetUsersQuery } from "../../services/infakt-api";
import LinkButton from "../../shared/components/buttons/LinkButton";
import styled from "styled-components";
import Logo from "../../infaktLogo.png";
import { ClipLoader } from "react-spinners";

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
          <ClipLoader size={50} color={"#123abc"} loading={isLoading} />
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
                type="secondary"
              />
            ))}
          </ListWrapper>
          <button onClick={loadMoreResults}>
            {isFetching ? (
              <ClipLoader size={50} color={"#123abc"} loading={isFetching} />
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
  width: 120px;
  margin-right: 10px;
`;

const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  padding: 4px;
`;

const Container = styled.div`
  margin: 130px 80px;
`;

export default Accountants;
