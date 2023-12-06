// import React, { useEffect } from "react";
// import { useState } from "react";

// export default function Products() {
//   const [products, setProducts] = useState([]);
//   useEffect(() => {
//     function fetch() {
//       const response = fetch("https://fakestoreapi.com/products");
//       const data = response.json();
//       setProducts(data);
//     }
//     fetch();
//   }, []);

//   return (
//     <div>
//       {products.map((item) => {
//         <h1>{item.title}</h1>;
//       })}
//     </div>
//   );
// }
