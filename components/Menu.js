import MenuSubCategory from "./MenuSubCategory";
import { useRef } from "react";
import { useOutsideAlerter } from "../utils/Hooks";

export default function Menu({ setShowModal, setShowMenu, menu }) {
  const menuRef = useRef(null);

  function setShowMenuFalse() {
    setShowModal(false);
    setShowMenu(false);
  }

  useOutsideAlerter(menuRef, setShowMenuFalse);

  const starters = menu.filter((menuitem) => {
    return menuitem.categories.nodes.find((category) => {
      return category.name === "Starters";
    });
  });
  const mainCourses = menu.filter((menuitem) => {
    return menuitem.categories.nodes.find((category) => {
      return category.name === "Main Courses";
    });
  });
  const desserts = menu.filter((menuitem) => {
    return menuitem.categories.nodes.find((category) => {
      return category.name === "Desserts";
    });
  });

  return (
    <div
      ref={menuRef}
      id="menu"
      className="bg-gray-100 p-10 border-t-8 border-yellow-400 max-w-3xl mx-auto fixed z-70 inset-0 max-h-screen overflow-auto"
    >
      <div
        onClick={setShowMenuFalse}
        className="transition-all absolute top-5 right-5 bg-gray-300 flex rounded text-gray-400 cursor-pointer hover:bg-gray-400 hover:text-gray-300"
      >
        <span class="material-icons">close</span>
      </div>
      <h1 className="text-4xl">Menu</h1>
      <section id="starters" className="mt-10 ">
        <h2 className="text-2xl text-red-600">Starters</h2>
        <div className="border-b-2 my-3"></div>
        <MenuSubCategory category={starters} />
      </section>
      <section id="maincourses" className="mt-10 ">
        <h2 className="text-2xl text-red-600">Main Courses</h2>
        <div className="border-b-2 my-3"></div>
        <MenuSubCategory category={mainCourses} />
      </section>
      <section id="desserts" className="mt-10 ">
        <h2 className="text-2xl text-red-600">Desserts</h2>
        <div className="border-b-2 my-3"></div>
        <MenuSubCategory category={desserts} />
      </section>
    </div>
  );
}
