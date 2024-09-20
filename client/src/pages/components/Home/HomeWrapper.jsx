export default function HomeWrapper({ children }) {
  return (
    <div className="w-screen h-screen overflow-hidden flex flex-col md:flex-row justify-center items-center bg-gradient-to-r from-[#FEF0F0] to-[#F9E7FD]">
      {children}
    </div>
  );
}
