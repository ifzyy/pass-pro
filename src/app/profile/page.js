import Image from "next/image";
function Profile() {
  return (
    <>
     
        <header className=" flex justify-between p-[20px] mb-[30px]">
          <div className="font-bold">Profile</div>

          <Image src="/images/Notification.svg" width={20} height={20} />
        </header>

        <div
          className="profile flex justify-center items-center"
          style={{ backgroundRepeat: "no-repeat" }}
        >
          <Image
            className="pro-image"
            src="/images/profile.png"
            width={200}
            height={80}
          />
          <Image
            className="left"
            src="/images/left-arc.svg"
            width={70}
            height={40}
          />
          <Image
            className="right"
            src="/images/right-arc.svg"
            width={60}
            height={40}
          />
          <Image
            className="bottom"
            src="/images/bottom-arc.svg"
            width={200}
            height={40}
          />
        </div>
     

      <div className="shadow-lg mt-[40px] mb-[90px] drop rounded-t-[40px]">
        <div className="flex justify-between items-center">
          <div className="after">
            <h2 className="font-bold flex items-center gap-[5px]">Johnson Emmanuel <span><Image src="/images/tick.svg" width={20} height={20} /> </span></h2>
            <p className="text-[#8f8f8f] text-[16px] font-normal">johnsonnifemi8@gmail.com</p>
          </div>
          <Image src="/images/edit.svg" width={20} height={0} />
        </div>

        <ul className="flex justify-between mt-[50px] p-[20px]">
          <li className="text-[14px] text-[#1A181B80] font-normal flex flex-col items-center">Strong <span className="text-[#130F26] text-[22px] font-bold">22</span></li>
          <li className="text-[14px] font-normal text-[#1A181B80] flex flex-col items-center">Compromised <span className="text-[#130F26] text-[22px] font-bold">10</span></li>
          <li className="text-[14px] font-normal text-[#1A181B80] flex flex-col items-center">Weak <span className="text-[#130F26] text-[22px] font-bold">19</span></li>
        </ul>
        <p className=" rounded-full text-[14px] paragraph p-[10px]">These results are based of your last security scan. <span className="text-[#3E92CC] text-[14px]">Run another scan</span></p>
      </div>
    </>
  );
}

export default Profile;
