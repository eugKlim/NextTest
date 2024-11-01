// // app/users/[id]/page.js
// const UserDetailPage = async ({ params }) => {
//   const {id} = await params;
//   const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
//   const user = await res.json();
//   // Проверяем, успешен ли запрос
//   if (!res.ok) {
//     throw new Error('Failed to fetch user data');
//   }
//   return (
//     <div>
//       <h1>{user.name}</h1>
//       <p>Email: {user.email}</p>
//       <p>Phone: {user.phone}</p>
//       <p>Website: {user.website}</p>
//       <p>Company: {user.company.name}</p>
//     </div>
//   );
// };

// export default UserDetailPage;


// 2я версия вроде нужная
// app/users/[id]/page.js
// const UserDetailPage = async ({ params }) => {
//   const {id} = await params;
//   const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
//   const user = await res.json();
//   // Проверяем, успешен ли запрос
//   if (!res.ok) {
//     throw new Error('Failed to fetch user data');
//   }
//   return (
//     <div>
//       <h1>{user.name}</h1>
//       <p>Email: {user.email}</p>
//       <p>Phone: {user.phone}</p>
//       <p>Website: {user.website}</p>
//       <p>Company: {user.company.name}</p>
//     </div>
//   );
// };

// export default UserDetailPage;





// app/items/[id]/page.js
import React from 'react';


/*

+ First Load JS shared by all            99.9 kB
  ├ chunks/215-69b169f3ba2f6a26.js       45.4 kB
  ├ chunks/4bd1b696-23516f99b565b560.js  52.6 kB
  └ other shared chunks (total)          1.92 kB


○  (Static)  prerendered as static content
●  (SSG)     prerendered as static HTML (uses generateStaticParams) !!!!!!!!!!!! тоесть вот указали ssg
*/ 

export async function generateStaticParams() {
  // Здесь вы можете получить данные от API или использовать статические данные
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await res.json();

  // Возвращаем массив объектов, каждый из которых содержит параметр id
  return users.map(user => ({
    id: user.id.toString(), // id должно быть строкой
  }));
}

const ItemPage = ({ params }) => {
  return (
    <div>
      <h1>Item ID: {params.id}</h1>
      {/* Здесь можно отобразить данные для конкретного элемента */}
    </div>
  );
};

export default ItemPage;
