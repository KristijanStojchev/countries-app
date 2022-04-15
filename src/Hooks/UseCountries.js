import { useQuery, gql } from "@apollo/client";

const GET_COUNTRIES = gql`
  query countries {
    countries {
      code
      name
      currency
      capital
      phone
      native
    }
  }
`;

export const useCountries = () => {
  const { error, loading, data } = useQuery(GET_COUNTRIES);

  return {
    error,
    data,
    loading,
  };
};
