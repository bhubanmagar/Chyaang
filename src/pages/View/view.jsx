import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../Components/navbar/Navbar";

const View = () => {
  const getParams = useParams();
  const getID = getParams.id;
  const [singleProduct, setSingleProduct] = useState([]);
  const getProductDetail = async () => {
    try {
      const response = await axios.get(`/view-Product/${getID}`);
      const details = response.data.productDetails;
      setSingleProduct(details);
      console.log(typeof singleProduct);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getProductDetail(); //eslint-disable-next-line
  }, []);

  return (
    <>
      <Navbar />
      <div className="bg-slate-100 " id="products">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-16 lg:max-w-7xl lg:px-8">
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 ">
            <div key={singleProduct._id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-60 lg:h-80">
                <img
                  src={singleProduct.imageSrc}
                  alt={singleProduct.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 ">
                <div className="flex justify-between">
                  <h3 className="text-sm text-gray-700">
                    <span aria-hidden="true" className="absolute inset-0" />
                    {singleProduct.name}
                  </h3>
                  <p className="text-sm font-medium text-gray-900">
                    {singleProduct.price}
                  </p>
                </div>
                <div>
                  <p className="mt-1 text-sm text-gray-500">
                    {singleProduct.category}
                  </p>
                </div>
                <div className="flex justify-between">
                  <span>Description:</span>
                  <p>{singleProduct.description}</p>
                </div>
              </div>
            </div>
            <div className="w-auto">
              <h2>here comes other things</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default View;
