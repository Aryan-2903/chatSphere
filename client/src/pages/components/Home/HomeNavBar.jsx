import logo from './../../../assets/logo.svg'
export default function HomeNavBar() {

  return (
    <nav className="bg-white dork:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dork:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={logo}/>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <a href="/chat" className="text-white bg-purple-600 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dork:bg-blue-600 dork:hover:bg-blue-700 dork:focus:ring-blue-800">
            ChatApp
          </a>
        </div>
      </div>
    </nav>
  );
}
