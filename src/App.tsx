import List from "./components/List/List";
import Navigation from "./components/Navigation/Navigation";
import ProductItem from "./components/ProductItem/ProductItem";
import useFetchProducts from "./hooks/useFetchProducts";
import AppRouter from "./router/AppRouter";

const App = () => {
  const { data, error, loading } = useFetchProducts();

  if (error) {
    return <h1>{error}</h1>;
  }

  return loading ? (
    <h1>Loading...</h1>
  ) : (
    <>
      <AppRouter navigator={<Navigation />} />
      { data && <List data={data} Item={ProductItem} />}
    </>
  );
};

export default App;
