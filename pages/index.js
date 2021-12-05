import Image from "next/image";
import Layout from "../components/Layout";
import Intro from "../components/Intro";
import Testimonials from "../components/Testimonials/Testimonials";
import Visit from "../components/Visit";
import Favorites from "../components/Favorites/Favorites";
import { MenuContext } from "../components/context/MenuContext";

import { useState, useContext } from "react";

export default function Home({ menu, favorites }) {
  const { setShowMenu, setShowModal } = useContext(MenuContext);

  const [showOpeningHours, setShowOpeningHours] = useState(false);
  function handleMenu() {
    setShowMenu(true);
    setShowModal(true);
  }
  return (
    <Layout menu={menu}>
      <div className="parent relative z-30 h-screen w-full bg-gray-900">
        <div className="mt-16 flex flex-col justify-center absolute inset-0 z-50 text-gray-50">
          <div className="p-2 sm:p-10 table-cell text-center h-1/4 sm:h-auto sm:text-left">
            <h1 className="text-5xl sm:text-7xl md:text-9xl font-playfair font-bold">
              Deli{" "}
              <span className="text-yellow-400 font-playfair underline">
                delights
              </span>
            </h1>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-playfair font-semibold pt-2 sm:pt-5 text-white opacity-90">
              Italian cuisine
            </h2>
          </div>
          <div className="m-2 sm:m-10 mx-auto flex sm:flex-col items-center sm:items-start">
            <div>
              <h3 className="border-b-4 text-lg border-yellow-500 inline-block">
                Opening hours
              </h3>
              <div
                id="table-wrapper"
                className="relative w-32 sm:w-auto max-w-xl "
              >
                <table className="mt-3 sm:mt-6 bg-gray-900 rounded relative z-10">
                  <tbody className="flex sm:table-row-group">
                    <tr className="sm:border-b-2 border-gray-800 w-1/2">
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
                      <td>11-23</td>
                      <td>11-23</td>
                      <td>10-21</td>
                      <td className="text-red-400">Closed</td>
                    </tr>
                  </tbody>
                </table>
                <div className="absolute top-1 left-1 -right-1 -bottom-1 bg-gray-400 opacity-20 rounded"></div>
              </div>
            </div>

            <div className="ml-5 sm:ml-0 sm:mt-6 flex sm:block flex-col">
              <button className="cta-btn text-sm w-32 text-black">
                Reservation
              </button>
              <button
                onClick={() => handleMenu()}
                className="menu-btn sm:ml-3 mt-2 sm:mt-0 text-sm w-32"
              >
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
      <div id="main" className="max-w-6xl mx-auto relative z-10">
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
