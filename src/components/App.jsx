import { Navbar } from "./Navbar";
import tomato from "../assets/tomato.jpg";
import jahe from "../assets/jahe.jpg";
import kencur from "../assets/kencur.jpg";
import bawangmerah from "../assets/bawangmerah.png";
import bawangputih from "../assets/bawangputih.png";
import bawangbombai from "../assets/bawangbombai.png";
import sawi from "../assets/sawi.png";
import timun from "../assets/timun.png";


import { useState } from "react";

const productItems = [
    {
        id: 1,
        title: "Tomat",
        image: tomato,
        price: 15000,
        description: "Tomat berukuran super berasal dari daerah Wonosobo dengan kualitas terbaik",
    },
    {
        id: 2,
        title: "Jahe",
        image: jahe,
        price: 40000,
        description: "Jahe yang berasal dari Wonogiri dengan kualitas terbaik di Indonesia",
    },
    {
        id: 3,
        title: "kencur",
        image: kencur,
        price: 30000,
        description: "Kencur dengan kualitas rasa yang unggul yang berasal dari daerah Bali",
    },
    {
        id: 4,
        title: "Sawi",
        image: sawi,
        price: 10000,
        description: "Sawi berkualitas tinggi ditanam di daerah Wonosobo.",
    },
    {
        id: 5,
        title: "Bawang Merah",
        image: bawangmerah,
        price: 23000,
        description:
            "Bawang merah lokal asal Brebes,sudah bisa dipanen pada umur 60 hari setelah tanam.",
    },
    {
        id: 6,
        title: "Bawang Putih",
        image: bawangputih,
        price: 37000,
        description:
            "Bawang putih kating merupakan bawang putih impor yang berasal dari Tiongkok.",
    },
    {
        id: 7,
        title: "Bawang Bombai",
        image: bawangbombai,
        price: 50000,
        description:
            "Bawang Bombai terbaik yang berasal dari daerah majalengka.",
    },
    {
        id: 8,
        title: "Timun",
        image: timun,
        price: 24000,
        description: "Dengan kualitas timun terbaik dengan metode penanaman hidroponik ",
    },
];
export const App = () => {
    const [products, setProducts] = useState(productItems);

    return (
        <>
            <Navbar products={products} />
            <Product products={products} />
        </>
    );
};

const Product = ({ products }) => {
    const [sortOrder, setSortOrder] = useState("default");
    let sortedProduct;
    if (sortOrder === "default") {
        sortedProduct = products;
    }
    if (sortOrder === "asc") {
        sortedProduct = products
            .slice()
            .sort((a, b) => a.title.localeCompare(b.title));
    }

    // console.log("ini product", sortedProduct);
    return (
        <div className="container mx-auto">
            <div className="flex flex-col items-center my-8">
                <div className="flex items-center justify-between  w-full  pb-4 pt-14 px-24">
                    <div className="flex">
                        <h1 className="text-6xl font-serif mr-4">Product</h1>
                        <p className="mt-10 font-light text-xl">
                            <span className=" font-medium">Fresh</span> — August
                            21,2023
                        </p>
                    </div>
                    <div>
                        <button
                            onClick={() => setSortOrder("default")}
                            style={
                                sortOrder === "default"
                                    ? {
                                          background: "#426B1F",
                                          color: "#ffffff",
                                      }
                                    : {}
                            }
                            className="px-4 py-2 rounded-2xl mr-2 font-semibold"
                        >
                            Default
                        </button>
                        <button
                            onClick={() => setSortOrder("asc")}
                            style={
                                sortOrder === "asc"
                                    ? {
                                          background: "#426B1F",
                                          color: "#ffffff",
                                      }
                                    : {}
                            }
                            className="px-4 py-2 border-solid border rounded-2xl border-slate-300 mr-2 font-semibold"
                        >
                            A_Z
                        </button>
                        <button className="px-4 py-2 border-solid border rounded-2xl border-slate-300  font-semibold">
                            List View
                        </button>
                    </div>
                </div>
                <div className="w-full flex justify-center flex-wrap items-center mt-10 gap-8 border ">
                    {sortedProduct.map((product) => {
                        return (
                            <div
                                key={product.id}
                                className="border rounded-3xl overflow-hidden shadow-lg pb-5 max-w-96 cursor-pointer"
                            >
                                <img src={product.image} alt="" />
                                <h2 className="font-semibold text-xl pl-6 pt-6">
                                    {product.title}
                                </h2>
                                <h2 className="pl-6 pt-7 text-xl text-button">
                                    {product.price}
                                </h2>
                                <p className="pl-6 pt-6">
                                    {product.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
