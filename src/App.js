import "./App.css";
import NavigationBar from "./components/NavigationBar";
import Product from "./components/Product";
import products from "./data/products.json";
import logo from "./logo.svg";

function App() {
  return (
    <div>
      <NavigationBar title="React Shop Example" logo={logo} />
      <div className="bg-gray-200 py-4 dark:bg-gray-800">
        <div className="md:w-1/2 mx-auto">
          {products.map((product, id) => (
            <Product product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
