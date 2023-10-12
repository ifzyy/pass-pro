import Image from "next/image"
import Link from "next/link"
const Nav = () => {
  return (
    <nav>
      <ul className="flex justify-between items-center p-[20px]">
        <Link href="/" className="flex flex-col items-center cursor-pointer">
          <Image src="images/home.svg" width={20} height={20} /> 
          Home
        </Link>
        <Link href="/passwords" className="flex flex-col items-center cursor-pointer"> 
        <Image src="images/password.svg" width={20} height={20} /> 
          Passwords
        </Link>
        <Link href="/profile" className="flex flex-col items-center cursor-pointer">
        <Image src="images/profile.svg" width={20} height={20} />
          profile
        </Link>
      </ul>
    </nav>
  );
};
export default Nav;
