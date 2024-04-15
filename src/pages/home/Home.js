import Navbar from "../../Components/navbar/Navbar";
import Products from "../products/Product";
import image1 from "../../assets/images.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/bank.png";
import Footer from "../../Components/footer/footer";

export default function Home() {
  return (
    <>
      <div className="home" id="homePage">
        <Navbar />
        <Products />
        <div className="flex justify-between  ">
          <div className=" flex h-60 w-96 p-4 m-3 border-solid border-2 border-grey-800 bg-red-600 rounded-md  ">
            <div className="image-section h-56 flex justify-center items-center p-3 ">
              <img
                className="w-40 h-10 m-2 rounded-3xl"
                src={image1}
                alt="kam"
              />
            </div>

            <div className="h-14  justify-center">
              <div className="font-bold m-1 p-2">
                <span>Quick Delivery</span>
              </div>
              <div className="p-1 mt-4">
                <p>
                  We will deliver your order with 2 hours.. Also, Online Liquor
                  Nepal is the first e-commerce site in Nepal which provides
                  24/7 delivery service.
                </p>
              </div>
            </div>
          </div>
          {/* best price */}
          <div className=" flex h-60 w-96 p-4 m-3 border-solid border-2 border-grey-800 bg-yellow-600 rounded-md  ">
            <div className="image-section h-56 flex justify-center items-center p-3 ">
              <img
                className="w-40 h-10 m-2 rounded-3xl"
                src={image2}
                alt="kam"
              />
            </div>

            <div className="h-14  justify-center">
              <div className="font-bold m-1 p-2">
                <span>Best price</span>
              </div>
              <div className="p-1 mt-4">
                <p>
                  We have best price for all of our products. You can save money
                  by ordering with us. Our price is lesser than other market
                  price.
                </p>
              </div>
            </div>
          </div>
          {/* easy online payment */}
          <div className=" flex h-60 w-96 p-4 m-3 border-solid border-2 border-grey-800 bg-green-600 rounded-md  ">
            <div className="image-section h-56 flex justify-center items-center p-3 ">
              <img
                className="w-40 h-10 m-2 rounded-3xl"
                src={image3}
                alt="kam"
              />
            </div>

            <div className="h-14  justify-center">
              <div className="font-bold m-1 p-2">
                <span>Easy Online Payment</span>
              </div>
              <div className="p-1 mt-4">
                <p>
                  We accept all kinds of payment options such as eSewa, Khalti,
                  IME Pay, Bank Transfer and cash on delivery too.
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <Footer />
      </div>
    </>
  );
}
