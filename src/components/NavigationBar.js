function NavigationBar({ title }) {
  return (
    <div className="">
      <nav className="bg-gray-800">
        <div className="flex mx-auto">
          <div className="mx-auto m-5 p-2 text-2xl text-white" href="/">
            {" "}
            {title}{" "}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavigationBar;
