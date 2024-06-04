// import { useState } from "react";
// import { Product } from "./Product";

// export const Header = ({ products }) => {
//     return (
//         <div className="container w-full border-b border-solid border-slate-300 mx-auto ">
//             <div className="flex flex-wrap justify-between items-center mt-14 mx-12 mb-4 ">
//                 <TitleHeader />
//                 <Box products={products} />
//             </div>
//         </div>
//     );
// };

// const TitleHeader = () => {
//     return (
//         <div className="flex items-center">
//             <h1 className="text-6xl font-serif mr-4">Product</h1>
//             <div className="mt-10 font-light text-xl">
//                 <span className=" font-medium">Fresh</span> — August 21,2023
//             </div>
//         </div>
//     );
// };

// const Box = ({ products }) => {
//     const [sortBy, setSortBy] = useState("default");

//     const sortedProducts = [...products].sort((a, b) => {
//         if (sortBy === "default") {
//             return a.id - b.id;
//         } else if (sortBy === "asc") {
//             return a.id - b.id;
//         } else if (sortBy === "desc") {
//             return b.id - a.id; // Sort in descending order of ID
//         }
//     });

//     return (
//         <>
//             <div className="flex items-center">
//                 <button
//                     onClick={() => setSortBy("default")}
//                     className="px-4 py-2 bg-button rounded-2xl text-primary mr-2 font-semibold"
//                 >
//                     Default
//                 </button>
//                 <button
//                     onClick={() => setSortBy("asc")}
//                     className="px-4 py-2 border-solid border rounded-2xl border-slate-300 mr-2 font-semibold"
//                 >
//                     A-Z
//                 </button>
//                 <button
//                     onClick={() => setSortBy("desc")}
//                     className="px-4 py-2 border-solid border rounded-2xl border-slate-300  font-semibold"
//                 >
//                     List View
//                 </button>
//             </div>
//             <div className=" w-full flex justify-center flex-wrap items-center mt-10 gap-8">
//                 {sortedProducts.map((product) => {
//                     // console.log("ini product", product.id);
//                     return <Product key={product.id} product={product} />;
//                 })}
//             </div>
//         </>
//     );
// };
