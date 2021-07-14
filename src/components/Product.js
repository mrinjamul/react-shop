function Product({ product: { title, price, description, category, image } }) {
  return (
    <div className="flex bg-white w-full mb-5">
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="w-5/12 bg-contain bg-no-repeat bg-center"
      ></div>
      <div className="w-7/12 p-5">
        <h1 className="md:text-2xl">{title.substr(0, 50)}</h1>
        <h3 className="text-gray-400">{category}</h3>
        <p className="text-red-400 mt-4 text-xl md:text-4xl">{price}$</p>
        <div className="mt-4">{description.substr(0, 100)}</div>
      </div>
    </div>
  );
}

export default Product;
