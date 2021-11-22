export default function Post({ post }) {
  console.log(post);
  return (
    <div>
      <h1>{post.title}</h1>
      <article dangerouslySetInnerHTML={{ __html: post.content }}></article>
    </div>
  );
}

export const getStaticProps = async (context) => {
  const res = await fetch(process.env.apiEndpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
      query SinglePost($id: ID!, $idType: PostIdType!) {
        post(id: $id, idType: $idType) {
          title
          slug
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
  const post = await res.json();

  if (post.data) {
    return {
      props: {
        post: post.data.post,
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
      query AllPostsQuery {
        posts {
          nodes {
            slug
            title
          }
        }
      }`,
    }),
  });
  const json = await res.json();
  const posts = json.data.posts.nodes;

  const paths = posts.map((post) => {
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
