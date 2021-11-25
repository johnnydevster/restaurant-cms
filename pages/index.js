import Image from "next/image";
import Menu from "../components/Menu";

export default function Home({ menu }) {
  return (
    <>
      <div className="relative z-30 h-screen w-full bg-gray-900">
        <Menu menu={menu} />
        <div className="flex flex-col justify-center absolute inset-0 z-50 text-gray-50">
          <div className="p-10  table-cell">
            <h1 className="text-9xl font-playfair font-bold">
              Deli{" "}
              <span className="text-yellow-400 font-playfair underline">
                delights
              </span>
            </h1>
            <h2 className="text-6xl font-playfair font-semibold pt-5 text-gray-100">
              Italian cuisine
            </h2>
          </div>
          <div className="m-10 w-80">
            <h3 className="border-b-4 text-lg border-yellow-500 inline-block">
              Opening hours
            </h3>
            <div id="table-wrapper" className="relative">
              <table className="mt-6 bg-gray-900 rounded relative z-10">
                <tbody>
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
                </tbody>
              </table>
              <div className="absolute top-1 left-1 -right-1 -bottom-1 bg-gray-400 opacity-20 rounded"></div>
            </div>
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
      <section
        id="main"
        className="sm:mx-5 lg:mx-20 xl:mx-40 relative mb-96 z-10 bg-gray-50"
      >
        <div className="sm:flex max-w-6xl mx-auto items-center p-2 sm:p-5">
          <div className="h-96 w-full sm:w-4/5 relative shadow-xl">
            <Image
              src="/../public/article-image-1.jpg"
              className="object-cover rounded "
              layout="fill"
            />
          </div>
          <div className="text-gray-500 p-8 text-lg">
            <h1 className="text-gray-700 font-playfair font-black text-4xl mb-2 border-b-4 inline-block border-yellow-400">
              Welcome to Italy
            </h1>
            <p className="mt-3">
              We have a life long love of making the taste of Italy come to life
              through delicious, carefully prepared meals.
            </p>
            <p className="mt-3">
              But where we come from, food isn't just about what you eat - it's
              who you eat with.
            </p>
            <p className="mt-3">
              Our cozy atmosphere will be sure to provide you with a memorable
              evening - be it with friends, family, or a special someone.
            </p>
            <div className="mt-5 flex items-center">
              <button className="cta-btn text-white w-34 h-11">
                Read More
              </button>
              <i
                aria-hidden
                class="transition-all hover: hover:text-gray-300 cursor-pointer ml-10 text-gray-400 text-xl fab fa-facebook-square"
              ></i>
              <i
                aria-hidden
                class="transition-all hover: hover:text-gray-300 cursor-pointer ml-3 text-gray-400 text-xl fab fa-instagram-square"
              ></i>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export const getStaticProps = async (context) => {
  const res = await fetch(process.env.apiEndpoint, {
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
  const menu = await res.json();

  return {
    props: {
      menu: menu.data.category.posts.nodes,
    },
  };
};
