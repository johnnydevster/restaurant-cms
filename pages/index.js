import Head from "next/head";

export default function Home({ posts }) {
  console.log(posts);
  return (
    <div className="mx-auto w-1/2">
      {posts.length > 0 ? (
        <div>
          {posts.map((post) => {
            return <h1 key={post.slug}>{post.title}</h1>;
          })}
        </div>
      ) : (
        <h1>No posts were found</h1>
      )}
    </div>
  );
}

export const getStaticProps = async (context) => {
  const res = await fetch(process.env.apiEndpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
      query HomePageQuery {
        posts {
          nodes {
            slug
            title
          }
        }
      }`,
    }),
  });
  const posts = await res.json();

  return {
    props: {
      posts: posts.data.posts.nodes,
    },
  };
};
