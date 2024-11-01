// app/products/CurrentPath.jsx
"use client"; // Клиентский компонент
import { usePathname } from 'next/navigation';

const CurrentPath = () => {
  const pathname = usePathname();
  console.log(pathname);
  return <p>Current Path: {pathname}</p>;
};

export default CurrentPath;
