export default function LoginCard() {
  return (
    <div className="md:w-1/2 md:h-full h-1/2 w-full border-black items-center md:justify-center justify-start flex flex-col">
      <a href="/auth" className="border border-gray-400 px-16 py-4 bg-white rounded-lg m-4">
        Login | Signup
      </a>
    </div>
  );
}