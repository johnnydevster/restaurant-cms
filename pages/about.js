import Layout from "../components/Layout";
import Chefs from "../components/About/Chefs";

export default function About({ menu }) {
  return (
    <Layout menu={menu}>
      <div className="main">
        <Chefs />
      </div>
    </Layout>
  );
}

export const getStaticProps = async (context) => {
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

  const menu = await menuRequest.json();

  return {
    props: {
      menu: menu.data.category.posts.nodes,
    },
    revalidate: 10,
  };
};
