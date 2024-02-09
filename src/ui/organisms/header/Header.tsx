import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  const navRoutes = [{ route: 'home', name: 'Nie klikaj' }, { route: 'about', name: '...' }, { route: 'contact', name: '@' }];

  return (
    <header className="fixed left-0 top-0 z-10 flex h-20 w-full justify-center bg-slate-50  px-4">
      <div className="flex h-full w-full items-center justify-between px-8 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
        <Link className="h-full" href="/">
          <Image src="/logo.png" alt="logo" width={100} height={100} />
        </Link>
        <nav className="h-full ">
          <ul className="gap-6 h-full flex">
            {
              navRoutes.map((route) => (
                <li key={route.route} className="hover:scale-75 duration-100 ease-in w h-full flex items-center justify-center min-w-20 cursor-pointer">
                  <Link href={`/${route.route}`}>{route.name}</Link>
                </li>
              ))
            }
          </ul>
        </nav>
      </div>
    </header>
  );
};

