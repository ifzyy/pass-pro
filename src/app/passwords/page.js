
import Image from "next/image";
import { HiOutlineUserGroup } from "react-icons/hi";
import { AiOutlineAppstore } from "react-icons/ai";
import { LiaWalletSolid } from "react-icons/lia";
import { BsThreeDotsVertical } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
const Passwords= () => {
  return (
    <main className="bg-[#9046CF1A]">
      <header className="flex justify-between p-[20px] mb-[30px]">
        <div  className="font-bold">
        Passwords
        </div>

        <Image src="/images/Notification.svg" width={20} height={20} />
      </header>

      <label
        for="search"
        className="flex justify-center items-center mb-[30px]"
      >
        <input
          type="text"
          placeholder="Search"
          className="bg-[rgba(196, 196, 196, 0.20);] w-[80%] rounded-[10px] px-[20px] py-[5px]"
        />
        <CiSearch className="text-[20px] ml-[-30px]" />
      </label>

      

      <div className="bg-[#fefefe] p-[20px] mb-[80px]">
        <h2 className="font-bold mb-[20px] mt-[20px]">Socials</h2>

        <div className="flex flex-col gap-[20px]">
          <div className=" shadow-md p-[20px] bg-[white] flex items-center justify-between">
            <Image src="/images/instagram.svg" width={40} height={40} />
            <div>
              <h2 className="font-bold text-[#1A181B]">Instagram</h2>
              <p className="text-[#1A181B80] text-[14px]">johnsonnifemi8@gmail.com</p>
            </div>
            <BsThreeDotsVertical />
          </div>
          <div className=" shadow-md p-[20px] bg-[white] flex items-center justify-between">
            <Image src="/images/gmail.svg" width={40} height={40} />
            <div>
              <h2 className="font-bold text-[#1A181B]">Snapchat</h2>
              <p className="text-[#1A181B80] text-[14px]">johnsonnifemi8@gmail.com</p>
            </div>
            <BsThreeDotsVertical />
          </div>
          <div className=" shadow-md p-[20px] bg-[white] flex items-center justify-between">
            <Image src="/images/twitter.svg" width={40} height={40} />
            <div>
              <h2 className="font-bold text-[#1A181B]">Twitter</h2>
              <p className="text-[#1A181B80] text-[14px]">johnsonnifemi8@gmail.com</p>
            </div>
            <BsThreeDotsVertical />
          </div>

          <div className=" shadow-md p-[20px] bg-[white] flex items-center justify-between">
            <Image src="/images/instagram.svg" width={40} height={40} />
            <div>
              <h2 className="font-bold text-[#1A181B]">Instagram</h2>
              <p className="text-[#1A181B80] text-[14px]">johnsonnifemi8@gmail.com</p>
            </div>
            <BsThreeDotsVertical />
          </div>
        </div>
        <h2 className="font-bold mb-[20px] mt-[20px]">Apps</h2>

        <div className="flex flex-col gap-[20px]">
          <div className=" shadow-md p-[20px] bg-[white] flex items-center justify-between">
            <Image src="/images/figma.svg" width={40} height={40} />
            <div>
              <h2 className="font-bold text-[#1A181B]">Figma</h2>
              <p className="text-[#1A181B80] text-[14px]">johnsonnifemi2003@gmail.com</p>
            </div>
            <BsThreeDotsVertical />
          </div>
          <div className=" shadow-md p-[20px] bg-[white] flex items-center justify-between">
            <Image src="/images/figma.svg" width={40} height={40} />
            <div>
              <h2 className="font-bold text-[#1A181B]">Figma</h2>
              <p className="text-[#1A181B80] text-[14px]">johnsonnifemi8@gmail.com</p>
            </div>
            <BsThreeDotsVertical />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Passwords;
