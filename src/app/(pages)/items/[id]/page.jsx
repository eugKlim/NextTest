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


// app/users/[id]/page.js
const UserDetailPage = async ({ params }) => {
  const {id} = await params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user = await res.json();
  // Проверяем, успешен ли запрос
  if (!res.ok) {
    throw new Error('Failed to fetch user data');
  }
  return (
    <div>
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Website: {user.website}</p>
      <p>Company: {user.company.name}</p>
    </div>
  );
};

export default UserDetailPage;
