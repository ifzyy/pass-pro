
import Image from "next/image";
import { HiOutlineUserGroup } from "react-icons/hi";
import { AiOutlineAppstore } from "react-icons/ai";
import { LiaWalletSolid } from "react-icons/lia";
import { BsThreeDotsVertical } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
const Index = () => {
  return (
    <main className="bg-[#9046CF1A]">
      <header className="flex justify-between p-[20px] mb-[30px]">
        <div className="flex items-center border border-[rgba(144, 70, 207, 0.10)]  p-[2px] rounded-[15px] gap-[2px]">
          <Image src="/images/divine.svg" width={20} height={30} />
          Divine
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

      <h2 className="text-[#1A181B80] pl-[20px] font-normal">Manage</h2>
      <p className="pl-[20px] font-semibold mb-[20px]">Your passwords</p>

      <div className="flex justify-around mb-[40px]">
        <div className="bg-[white] px-[10px] py-[20px] rounded-[15px] flex flex-col items-center ">
          <div className="bg-[#9046CF1A] p-[10px] rounded-full">
            <HiOutlineUserGroup className="text-[#9046CF]" />
          </div>

          <h2 className="text-[14px] font-bold ">Socials</h2>
          <p className="text-[12px] font-normal spacing-[0.2px] text-[#8f8f8f]">
            10 passwords
          </p>
        </div>
        <div className="bg-[white] px-[10px] py-[20px] rounded-[15px] flex flex-col items-center ">
          <div className="bg-[#9046CF1A] p-[10px] rounded-full">
            <AiOutlineAppstore  className="text-[#9046CF]"/>
          </div>
          <h2 className="text-[14px] font-bold ">Apps</h2>
          <p className="text-[12px] spacing-[0.2px] text-[#8f8f8f]">
            8 passwords
          </p>
        </div>
        <div className="bg-[white] px-[10px] py-[20px] rounded-[15px] flex flex-col items-center">
          <div className="bg-[#9046CF1A] p-[10px] rounded-full">
            <LiaWalletSolid  className="text-[#9046CF]"/>
          </div>
          <h2 className="text-[14px] font-bold ">Wallets</h2>
          <p className="text-[12px] spacing-[0.2px] text-[#8f8f8f]">
            6 passwords
          </p>
        </div>
      </div>

      <div className="bg-[#fefefe] p-[20px] mb-[80px]">
        <h2 className="font-bold mb-[20px] mt-[20px]">My passwords</h2>
        <ul className="flex items-center gap-[20px] mb-[20px] nav">
          <li className="bg-[#3e92cc] text-white text-[13px] pl-[15px] pr-[15px] py-[5px] rounded-[5px]">All</li>
          <li className=" shadow-[0px 0px 20px 0px rgba(0, 0, 0, 0.05)]bg-[rgba(196, 196, 196, 0.20)] pl-[15px] pr-[15px] py-[5px] rounded-[7px] text-[#1A181B80]">Frequent</li>
          <li className="bg-[rgba(196, 196, 196, 0.20)] text-[#a6a6a6] pl-[15px] pr-[15px] py-[5px] rounded-[7px]">Favourites</li>
        </ul>

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

export default Index;
