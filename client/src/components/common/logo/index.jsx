import logo from './../../../assets/logo.svg'
const Logo = () => {
  return (
    <div className="flex p-5  justify-start items-center gap-2">
      <span className="text-3xl font-semibold bg-white p-2 rounded-lg ml-4">
        <img src={logo} alt="" />
      </span>
    </div>
  );
};

export default Logo;
