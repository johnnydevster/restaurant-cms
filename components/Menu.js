import MenuSubCategory from "./MenuSubCategory";

export default function Menu({ menu }) {
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
      id="menu"
      className="bg-gray-100 p-10 border-t-8 border-yellow-400 max-w-3xl mx-auto fixed z-70 inset-0 max-h-screen overflow-auto"
    >
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
        <MenuSubCategory category={mainCourses} />
      </section>
    </div>
  );
}
