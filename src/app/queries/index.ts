import { fetchGraphQL } from "../lib/api/grapql";
const POKEMON_GRAPHQL_FIELDS = `
  sys {
    id
  }
  title
  id
  description {
    json
    links {
      assets {
        block {
          sys {
            id
          }
          url
          description
        }
      }
    }
  }
  picture {
    url
  }
`;

const extractEntries = (fetchResponse: any) => {
  return fetchResponse?.data?.pokemonCardCollection?.items;
};

export async function getAllCards(
  limit = 3,
  isDraftMode = false
) {
  const cards = await fetchGraphQL(
    `query {
        pokemonCardCollection(where:{title_exists: true}, order: id_DESC, limit: ${limit}, preview: ${
      isDraftMode ? "true" : "false"
    }) {
            items {
              ${POKEMON_GRAPHQL_FIELDS}
            }
          }
        }`,
    isDraftMode
  );
  console.log(cards,"aye cc");
  
  return extractEntries(cards);
}

export async function getSingleCard(title: any, isDraftMode = false) {
  const card = await fetchGraphQL(
    `query {
        pokemonCardCollection(where:{title: "${title}"}, limit: 1, preview: ${
      isDraftMode ? "true" : "false"
    }) {
            items {
              ${POKEMON_GRAPHQL_FIELDS}
            }
          }
        }`,
    isDraftMode
  );  
  return extractEntries(card)[0];
}
