// // app/users/page.js
// import Link from 'next/link';

// const UsersPage = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/users');
//   const users = await res.json();

//   return (
//     <div>
//       <h1>Users List</h1>
//       <ul>
//         {users.map(user => (
//           <li key={user.id} className="myClasst">
//             <Link href={`/items/${user.id}`}>
//               {user.name}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default UsersPage;



// app/users/page.js
import Link from 'next/link';

const UsersPage = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await res.json();

  return (
    <div>
      <h1>Users List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id} className="myClasst">
            <Link href={`/items/${user.id}`}>
              {user.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersPage;
