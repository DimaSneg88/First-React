import Footer from "./components/Footer";
import Header from "./components/Header";
import logo from "./assets/logo.png";
import User from "./components/User";
import Products from "./components/Products";
import Counter from "./components/Counter";
import Button from "./components/Button";
import About from "./components/About";

function App() {
  const user = {
    name: "Alex",
    age: 20,
  };
  const products = [
    { name: "apple", price: 100 },
    { name: "pineapple", price: 200 },
    { name: "orange", price: 15 },
    { name: "banana", price: 90 },
    { name: "cherry", price: 80 },
  ];
  return (
    <>
      <Header />
      <User user={user} />
      <h1>Главная страница</h1>
      <img src={logo} alt="" style={{ width: "200px", height: "200px" }} />
      <Products products={products} />
      <Footer info={user} />
      <Counter />
      <Button />
      <About />
    </>
  );
}

export default App;
