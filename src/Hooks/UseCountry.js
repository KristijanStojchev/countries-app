import { useQuery, gql } from "@apollo/client";

export const GET_COUNTRY = gql`
  query countries($code: ID!) {
    country(code: $code) {
      name
      capital
      currency
      phone
      native
    }
  }
`;

// const {
//   error: errorCountry,
//   loading: loadingCountry,
//   data: dataCountry,
// } = useQuery(GET_COUNTRY, { variables: { code: modalContent.code } });

export const useCountry = (modalContent, skipState) => {
  const { error, loading, data } = useQuery(GET_COUNTRY, {
    variables: { code: modalContent },
    skip: skipState,
  });

  return {
    error,
    data,
    loading,
  };
};
