import React, { useState, useEffect } from "react";
import { useGetUsersQuery } from "../../services/infakt-api";
import styled from "styled-components";
import Logo from "../../assets/infaktLogo.png";
import { ClipLoader } from "react-spinners";
import { styledTheme } from "../../theme";
import UserTile from "../../shared/components/UserTile";
import CustomButton from "../../shared/components/buttons/CustomButton";
import { AccountantType } from "../../services/infakt-api-types";
import ErrorMessage from "../../shared/components/ErrorMessage";

const Accountants = () => {
  const [resultsPerPage, setResultsPerPage] = useState(4);
  const [loadedData, setLoadedData] = useState<AccountantType[]>([]);
  const { data, error, isLoading, isFetching } = useGetUsersQuery({
    page: 1,
    results: resultsPerPage,
  });

  useEffect(() => {
    if (data) {
      if (loadedData.length === 0) {
        setLoadedData(data.results);
      }
    }
  }, [data]);

  const loadMoreResults = () => {
    setResultsPerPage((prevResultsPerPage) => prevResultsPerPage + 4);
  };

  useEffect(() => {
    if (isFetching === false) {
      const newResultsCount = resultsPerPage - loadedData.length;
      if (newResultsCount > 0 && data) {
        const newResults = data.results.slice(0, newResultsCount);
        setLoadedData([...loadedData, ...newResults]);
      }
    }
  }, [isFetching]);

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
        <ErrorMessage
          text="Wystąpił błąd, spróbuj później"
          error={error ? true : false}
        />
      ) : (
        <>
          <ListWrapper>
            {loadedData.map((user) => (
              <UserTile
                key={user.login.uuid}
                cell={user.cell}
                firstName={user.name.first}
                lastName={user.name.last}
                email={user.email}
                avatar={user.picture.medium}
                gender={user.gender}
                price="350,00"
              />
            ))}
          </ListWrapper>
          <ButtonAndLoaderWrapper>
            {isFetching ? (
              <ClipLoader
                size={50}
                color={styledTheme.colors.blue}
                loading={isFetching}
              />
            ) : (
              <CustomButton
                text="Załaduj kolejne"
                handleOnClick={loadMoreResults}
              />
            )}
          </ButtonAndLoaderWrapper>
        </>
      )}
    </Container>
  );
};

const ButtonAndLoaderWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

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

  @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.xl}px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.lg}px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.md}px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Container = styled.div`
  margin: 44px 80px;
  padding: 4px;

  @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.xs}px) {
    margin: 14px 30px;
    padding: 4px;
  }
`;

export default Accountants;
