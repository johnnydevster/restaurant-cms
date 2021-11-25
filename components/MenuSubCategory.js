export default function MenuSubCategory({ category }) {
  return (
    <div className="">
      {category.map((menuitem) => {
        return (
          <div className="mb-6">
            <div className="flex justify-between">
              <h3 className="font-bold text-xl text-gray-600">
                {menuitem.title}
              </h3>
              <h4
                dangerouslySetInnerHTML={{
                  __html: `${menuitem.excerpt}`,
                }}
                className="text-xl"
              ></h4>
            </div>
            <p
              className="mt-2 text-gray-500"
              dangerouslySetInnerHTML={{ __html: menuitem.content }}
            ></p>
          </div>
        );
      })}
    </div>
  );
}
