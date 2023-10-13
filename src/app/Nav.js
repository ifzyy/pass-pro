
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Nav = () => {
const pathname = usePathname()
  return (
    <nav>
      <ul className="flex justify-between items-center p-[20px]">
        <Link href="/"   className={pathname === "/" ? "flex flex-col active items-center cursor-pointer" : "flex flex-col  items-center cursor-pointer"}>
          <Image src={pathname === "/" ? "images/active-home.svg" :"/images/home.svg" } width={20} height={20} />
          Home
        </Link>
        <Link
          href="/passwords"
          className={pathname === "/passwords" ? "flex flex-col active items-center cursor-pointer" : "flex flex-col  items-center cursor-pointer"}
        >
          <Image src={pathname === "/passwords" ? "images/active-password.svg" :"/images/password.svg" } width={20} height={20} />
          Passwords
        </Link>
        <Link
          href="/profile"
          className={pathname === "/profile" ? "flex flex-col active items-center cursor-pointer" : "flex flex-col  items-center cursor-pointer"}
        >
          <Image src={pathname === "/profile" ? "images/active-profile.svg" :"/images/profile.svg" } width={20} height={20} />
          profile
        </Link>
      </ul>
    </nav>
  );
};
export default Nav;
