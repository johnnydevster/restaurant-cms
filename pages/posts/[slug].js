import Layout from "../../components/Layout";

export default function Post({ news, menu }) {
  return (
    <Layout menu={menu}>
      <div>
        <h1>{news.title}</h1>
        <article dangerouslySetInnerHTML={{ __html: news.content }}></article>
      </div>
    </Layout>
  );
}

export const getStaticProps = async (context) => {
  const res = await fetch(process.env.apiEndpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `query SinglePost($id: ID!, $idType: SingleNewsIdType!) {
        singleNews(id: $id, idType: $idType) {
          title
          content
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }`,
      variables: {
        id: context.params.slug,
        idType: "SLUG",
      },
    }),
  });

  const menuRequest = await fetch(process.env.apiEndpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
      query HomePageQuery {
        category(id: "Lunch Menu", idType: NAME) {
          posts {
            nodes {
              title
              excerpt
              content
              categories {
                nodes {
                  name
                }
              }
            }
          }
        }
      }`,
    }),
  });

  const news = await res.json();
  const menu = await menuRequest.json();

  if (news.data) {
    return {
      props: {
        news: news.data.singleNews,
        menu: menu.data.category.posts.nodes,
      },
    };
  } else {
    return {
      notFound: true,
    };
  }
};

export const getStaticPaths = async () => {
  const res = await fetch(process.env.apiEndpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
      query NewsQuery {
        allNews {
          nodes {
            slug
          }
        }
      }`,
    }),
  });
  const json = await res.json();
  const news = json.data.allNews.nodes;

  const paths = news.map((post) => {
    return {
      params: {
        slug: post.slug,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};
