export default function Visit() {
  return (
    <>
      <section
        id="visit"
        className="sm:flex mx-auto p-2 sm:p-4 items-center bg-gray-50 flex-col"
      >
        <div className="mt-7 text-gray-500 text-lg w-full">
          <div className="w-full text-center">
            <h1 className="text-gray-700 font-playfair font-black text-3xl sm:text-4xl border-b-4 inline-block border-yellow-400">
              Come visit us
            </h1>
          </div>

          <div className="mt-14 flex items-center max-w-2xl mx-auto shadow rounded">
            <iframe
              className="w-full"
              loading="lazy"
              height="400px"
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed/v1/view?key=AIzaSyB5E_12J949Q5ZleGa91Hl_S3_fnwQpEDM
    &&center=62.3891772696306, 17.30933183099287&zoom=15"
            ></iframe>
          </div>
          <div className="w-60 mx-auto my-10 text-center">
            <h3>Restaurant Street 1</h3>
            <h3>856 43 Sundsvall</h3>
            <h3>070 - 123 45 67</h3>
          </div>
          <div className="border-b-4 border-dotted w-full"></div>
        </div>
      </section>
    </>
  );
}
