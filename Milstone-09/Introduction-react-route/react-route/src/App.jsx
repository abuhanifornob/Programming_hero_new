import { Outlet, useNavigation } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Loading from "./components/Loading/Loading";

function App() {
  const navigation = useNavigation();
  return (
    <>
      <Header></Header>
      <div
        id="detail"
        className={navigation.state === "loading" ? <Loading></Loading> : ""}
      >
        <Outlet />
      </div>

      <Footer></Footer>
    </>
  );
}

export default App;
