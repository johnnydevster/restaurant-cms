import Image from "next/image";
import Layout from "../components/Layout";
import Intro from "../components/Intro";
import Testimonials from "../components/Testimonials/Testimonials";
import Visit from "../components/Visit";
import Favorites from "../components/Favorites/Favorites";

export default function Home({ setShowMenu, setShowModal, menu, favorites }) {
  function showMenu() {
    setShowMenu(true);
    setShowModal(true);
  }
  return (
    <Layout menu={menu}>
      <div className="parent relative z-30 h-screen w-full bg-gray-900">
        <div className="flex flex-col justify-center absolute inset-0 z-50 text-gray-50">
          <div className="p-10  table-cell">
            <h1 className="text-9xl font-playfair font-bold">
              Deli{" "}
              <span className="text-yellow-400 font-playfair underline">
                delights
              </span>
            </h1>
            <h2 className="text-6xl font-playfair font-semibold pt-5 text-white opacity-90">
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
              <button onClick={() => showMenu()} className="menu-btn ml-3">
                Menu
              </button>
            </div>
          </div>
        </div>

        <Image
          src="/../public/header-background.jpg"
          layout="fill"
          className="relative object-cover z-40 object-left transform scale-125 filter contrast-125"
        />
      </div>
      <div id="main" className=" max-w-6xl mx-auto relative mb-96 z-10">
        <Intro />
        <Visit />
        <Favorites favorites={favorites} />
        <Testimonials />
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
  const favoritesRequest = await fetch(process.env.apiEndpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
      query HomePageQuery {
        favoriteDishes {
          nodes {
            data {
              description
              name
              price
              image {
                title
                altText
                sourceUrl
              }
            }
          }
        }
      }`,
    }),
  });
  const menu = await menuRequest.json();
  const favorites = await favoritesRequest.json();

  return {
    props: {
      menu: menu.data.category.posts.nodes,
      favorites: favorites.data.favoriteDishes.nodes,
    },
    revalidate: 10,
  };
};
