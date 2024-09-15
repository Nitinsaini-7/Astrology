import React from "react";
import { Link } from "react-router-dom";

const data = [
  {
    image: "/product1.png",
    title: "Gold Art India Gold Art India",
    price: "₹750",
    productDetails: "Lord Ganesha for Gift Ganesha for car Dashboard Ganesha Showpiece Diwali Gifts Birthday Gifts Decorative Showpiece - 7.6 cm (Polyresin, Gold, Multicolor)",
    delivery: " Delivery done in 3 days from date of purchase",
    order: "Order now to get this product delivery",
  },
  {
    image: "/product2.png",
    title: "Rudraksha Mala (108+1 Beads, Bead Size: 12 mm each)",
    price: "₹500",
    productDetails:"Natural, Energized & Auspicious Rudraksha Mala (108+1 Beads, Bead Size: 12 mm each) - Tested & Certified Rudraksha",
    delivery: " Delivery done in 3 days from date of purchase",
    order: "Order now to get this product delivery",
  },
  {
    image: "/product3.png",
    title: "5 Mukhi Rudraksha White Crystal Bracelet",
    price: "₹1200",
    productDetails: "S&S 5 Mukhi Rudraksha White Crystal Bracelet 8mm for Men and Women",
    delivery: " Delivery done in 3 days from date of purchase",
    order: "Order now to get this product delivery",
  },
  {
    image: "/product4.png",
    title: "Green Cut Natural Emerald Beryl Gemstone",
    price: "₹4500",
    productDetails: "Barmunda gems Green Cut Natural Emerald Beryl Gemstone  (3 carat)",
    delivery: " Delivery done in 3 days from date of purchase",
    order: "Order now to get this product delivery",
  },
];

const ProductDetails = () => {
  return (
    <div>
      <div className="flex items-center justify-center py-10 mt-14">
        <span className=" px-1 py-4 bg-yellow-500 mr-1"></span>
        <h1 className="text-3xl font-bold uppercase text-black">
          Product Details
        </h1>
        <span className=" px-1 py-4 bg-yellow-500 ml-1"></span>
      </div>
      <div className="grid gap-10 md:mx-24 mb-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="grid md:grid-cols-2 grid-cols-1 place-items-center w-full  bg-yellow-100 p-4"
          >
            <div className="bg-white border border-yellow-500 rounded-md grid max-w-80">
              <div>
                <img src={item.image} alt="" className="w-full" />
              </div>
              <div className="text-center py-2">
                <p>{item.title}</p>
                <p>{item.price}</p>
                <Link>
                  <button className="border border-yellow-500 text-yellow-500 p-1 px-2 rounded-full hover:bg-yellow-500 hover:text-white duration-300">
                    Byu Now
                  </button>
                </Link>
              </div>
            </div>

            <div className="text-center mt-2">
              <div className="grid gap-4">
                <h1 className="text-3xl font-bold">{item.title}</h1>
                <p className="text-xl font-semibold text-yellow-500">
                  Price: {item.price}
                </p>
                <div>
                  <p className="text-2xl uppercase font-semibold">
                    Product Details
                  </p>
                  <p className="font-semibold">{item.productDetails}</p>
                </div>
                <p className="text-xl font-semibold">{item.delivery}</p>
                <p>{item.order}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;
