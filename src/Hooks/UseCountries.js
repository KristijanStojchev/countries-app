import { useQuery, gql } from "@apollo/client";

const GET_COUNTRIES = gql`
  query countries {
    countries {
      code
      name
    }
  }
`;

// export const GET_COUNTRY = gql`
//   query countries($code: ID!) {
//     country(code: $code) {
//       name
//       capital
//       currency
//       phone
//       native
//     }
//   }
// `;

export const useCountries = () => {
  const { error, loading, data } = useQuery(GET_COUNTRIES);

  return {
    error,
    data,
    loading,
  };
};
