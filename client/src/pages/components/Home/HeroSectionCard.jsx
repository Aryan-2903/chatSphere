export default function HeroSectionCard() {
  return (
    <div className="md:w-1/2 md:h-full h-1/2 w-full  flex justify-center items-center flex-col">
      <div className=" py-4 font-extrabold text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#FD49F8] via-[#E0B3C4] to-[#6628FC]">
        AI To Elevate
      </div>
      <div className=" p-4 text-2xl">Future of Human Understanding</div>
      <a href="https://www.imbesideyou.com/" className=" m-4 px-4 py-2 shadow-[0px_5px_15px_0px_rgba(111,22,140,0.5)] rounded-xl bg-purple-600 hover:bg-purple-800 text-white">
        Explore
      </a>
    </div>
  );
}
