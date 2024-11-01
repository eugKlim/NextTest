// import React from 'react';

// // давай смоделируем ситуацию что мне нужно получить 
// export const metadata = {
//   title: "My page1 title",
//   description: "Specific description for Page1",
// };

// const page1 = () => {
//   return (
//     <>

//       <div>Page 11</div>
//     </>
//   );
// };

// export default page1;



// app/products/page.js
// app/products/page.js
import CurrentPath from '@/app/CurrentPath'; // Импортируем клиентский компонент

export const metadata = {
  title: "Products Page",
  description: "Explore our range of products",
};

const ProductsPage = () => {
  return (
    <div>
      <h1>{metadata.title}</h1>
      <p>{metadata.description}</p>
      <CurrentPath /> {/* Вставляем клиентский компонент для отображения текущего пути */}
    </div>
  );
};

export default ProductsPage;


