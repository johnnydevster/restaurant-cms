import Head from "next/head";
import Image from "next/image";

export default function Home({ posts }) {
  return (
    <div className="relative z-30 h-screen w-full bg-gray-900">
      <div className="flex flex-col justify-center absolute inset-0 z-50 text-gray-50">
        <div className="p-10  table-cell">
          <h1 className="text-9xl font-playfair font-bold">
            Deli{" "}
            <span className="text-yellow-400 font-playfair underline">
              delights
            </span>
          </h1>
          <h2 className="text-6xl font-playfair font-semibold pt-5">
            downtown
          </h2>
          {/* <h3 className="mt-10 font-thin text-xl tracking-wide text-gray-200">
            Visit us at downtown Sundsvall for your next culinary delight!
          </h3> */}
        </div>
        <div className="m-10 w-80">
          <h3 className="border-b-4 text-lg border-yellow-500 inline-block">
            Opening hours
          </h3>
          <table className="mt-6 bg-gray-900 rounded">
            <tr className="text-left border-b-2 border-gray-800">
              <th>Mo</th>
              <th>Tu</th>
              <th>We</th>
              <th>Th</th>
              <th>Fr</th>
              <th>Sa</th>
              <th>Su</th>
            </tr>
            <tr>
              <td>10-21</td>
              <td>10-21</td>
              <td>10-21</td>
              <td>10-21</td>
              <td>11-23</td>
              <td>11-23</td>
              <td className="text-red-400">Closed</td>
            </tr>
          </table>
          <div className="mt-6 flex">
            <button className="cta-btn text-black">Reservation</button>
            <button className="menu-btn ml-3">Menu</button>
          </div>
        </div>
      </div>

      <Image
        src="/../public/header-background.jpg"
        layout="fill"
        className="relative object-cover z-40 object-left transform scale-125 filter contrast-125"
      />
    </div>
  );
  {
    /* <div className="mx-auto w-1/2">
      {posts.length > 0 ? (
        <div>
          {posts.map((post) => {
            return <h1 key={post.slug}>{post.title}</h1>;
          })}
        </div>
      ) : (
        <h1>No posts were found</h1>
      )}
      <a href="https://www.freepik.com/photos/food">
        Food photo created by timolina - www.freepik.com
      </a>
    </div>) */
  }
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
