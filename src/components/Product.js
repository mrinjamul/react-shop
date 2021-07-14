function Product({ product: { title, price, description, category, image } }) {
  return (
    <div className="flex bg-white w-full mb-5">
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="w-5/12"
      ></div>
      <div className="w-7/12 p-5">
        <h1>{title.substr(0, 50)}</h1>
        <h3>{category}</h3>
        <p>{price}$</p>
        <div className="mt-4">{description.substr(0, 100)}</div>
      </div>
    </div>
  );
}

export default Product;
