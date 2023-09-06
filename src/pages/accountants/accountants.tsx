import { useState } from 'react';
import { useGetUsersQuery } from "../../services/infakt-api";

const Accountants = () => {
  const [resultsPerPage, setResultsPerPage] = useState(5);

  const { data, error, isLoading, isFetching } = useGetUsersQuery({
    page: 1,
    results: resultsPerPage,
  });

  const loadMoreResults = () => {
    setResultsPerPage(resultsPerPage + 5);
  };

  return (
    <div>
      <div>Lista księgowych</div>
      {isLoading ? (
        <p>Ładowanie...</p>
      ) : error ? (
        <p>Wystąpił błąd</p>
      ) : (
        <>
          <ul>
            {data?.results.map((user) => (
              <li key={user.login.uuid}>
                {user.name.first} {user.name.last}
              </li>
            ))}
          </ul>
          {isFetching ? (
            <p>Ładowanie kolejnych wyników...</p>
          ) : (
            <button onClick={loadMoreResults}>Załaduj kolejne</button>
          )}
        </>
      )}
    </div>
  );
};

export default Accountants;
