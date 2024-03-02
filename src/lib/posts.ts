import graphqlRequest from "./graphqlRequest";

export async function getPointCards() {
  const query = {
    query: `query getPointCards{
			posts(where: {categoryName: "cards", orderby: {field: NAME_IN, order: DESC}}) {
				nodes {
					cards {
						bgColor
						btn
						cardscontent
						cardstitle
						imgAlt
						cardImg {
							node {
								sourceUrl
							}
						}
						
					}
				}
			}
		}`,
  };

  const resJson = await graphqlRequest(query);
  const allPosts = resJson.data.posts;

  return allPosts?.nodes;
}

export async function getRoutinCards() {
  const query = {
    query: `query getRoutinCards{
			posts(where: {categoryName: "routine-cards"}) {
				nodes {
					routineCard {
						descr
						cardtitle
						cardid
						cardBg
						cardBgImg {
							node {
								sourceUrl
							}
						}
					}
				}
			}
		}`,
  };

  const resJson = await graphqlRequest(query);
  const allCards = resJson.data.posts;

  return allCards?.nodes;
}

export async function getOurTeamCards() {
  const query = {
    query: `query getRoutinCards{
			posts(where: {categoryName: "ourTeam"}) {
				nodes {
					ourTeam {
						name
						profession
						img {
							node {
								sourceUrl
							}
						}
					}
				}
			}
		}`,
  };

  const resJson = await graphqlRequest(query);
  const allCards = resJson.data.posts;

  return allCards?.nodes;
}
