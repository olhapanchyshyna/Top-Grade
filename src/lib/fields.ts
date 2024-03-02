import graphqlRequest from "./graphqlRequest";

export async function getFirstScreen() {
  const query = {
    query: `query getFirstScreen{
			posts(where: {categoryName: "first-screen"}) {
				nodes {
					firstScreen {
						mainSubtitle
						mainTitle
					}
				}
			}
		}`,
  };

  const resJson = await graphqlRequest(query);
  const firstScreen = resJson.data.posts;

  return firstScreen?.nodes;
}