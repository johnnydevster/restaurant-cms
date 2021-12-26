import Layout from "../../components/Layout";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Preview from "../../components/News/Preview";

export default function Post({ post, menu, otherNews }) {
  return (
    <Layout menu={menu}>
      <Head>
        <title>{post.title}</title>
      </Head>
      <div className="main bg-gray-50 pt-16 pb-10 px-2 mx-auto text-gray-700">
        <div className="max-w-2xl mx-auto">
          <div className="relative h-96">
            <Image
              src={post.featuredImage.node.sourceUrl}
              layout="fill"
              className="object-cover"
              priority
            />
          </div>
          <div className="flex items-center justify-between mt-5">
            <h1 className="text-2xl inline-block">{post.title}</h1>
            <h3 className="text-sm text-gray-600">
              written by {post.featuredImage.node.author.node.name},{" "}
              {post.date.slice(0, 10)}
            </h3>
          </div>
          <article
            className="text-gray-600 mt-3 leading-6"
            dangerouslySetInnerHTML={{ __html: post.content }}
          ></article>
          <div className="flex items-center mt-5">
            <Link href="/posts">
              <a>
                <button className="cta-btn text-white text-sm w-24 h-10">
                  All news
                </button>
              </a>
            </Link>
            <i
              aria-hidden
              className="transition-all hover:text-gray-300 cursor-pointer text-gray-400 text-2xl fab fa-facebook-square ml-5"
            ></i>
            <i
              aria-hidden
              className="transition-all hover:text-gray-300 cursor-pointer ml-4 text-gray-400 text-2xl fab fa-instagram-square"
            ></i>
          </div>
          <div className="mt-10">
            <h1 className="font-playfair text-2xl font-bold border-b-4 border-yellow-400 leading-10">
              Check out our other stories:
            </h1>
            {otherNews.length > 0 &&
              otherNews.map((newspost, i) => {
                return (
                  <Preview
                    key={`${i} ${newspost.title}`}
                    title={newspost.node.title}
                    excerpt={newspost.node.customExcerpt.excerpt}
                    image={newspost.node.featuredImage.node.sourceUrl}
                    author={newspost.node.featuredImage.node.author.node.name}
                    date={newspost.node.date}
                    slug={newspost.node.slug}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps = async (context) => {
  const postRequest = await fetch(process.env.apiEndpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `query SinglePost($id: ID!, $idType: SingleNewsIdType!) {
        singleNews(id: $id, idType: $idType) {
          title
          content
          date
          databaseId
          featuredImage {
            node {
              sourceUrl
              author {
                node {
                  name
                }
              }
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

  const post = await postRequest.json();
  const currentPostId = post.data.singleNews.databaseId;
  const menu = await menuRequest.json();

  // Query to get 'other news'
  const otherNewsRequest = await fetch(process.env.apiEndpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `query OtherNews($notIn: [ID]) {
        allNews(where: {notIn: $notIn}, first: 4) {
          edges {
            node {
              title
              date
              slug
              featuredImage {
                node {
                  sourceUrl
                  author {
                    node {
                      name
                    }
                  }
                }
              }
              customExcerpt {
                excerpt
              }
            }
          }
        }
      }`,
      variables: {
        notIn: currentPostId,
      },
    }),
  });

  const otherNews = await otherNewsRequest.json();

  if (post.data) {
    return {
      props: {
        post: post.data.singleNews,
        menu: menu.data.category.posts.nodes,
        otherNews: otherNews.data.allNews.edges,
      },
      revalidate: 10,
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
  const post = json.data.allNews.nodes;

  const paths = post.map((post) => {
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
