import React, { useState, useContext, useEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import TopLine, { Receiving } from "./TopLine/TopLine";
import Header from "./Header/Header";
import SearchList from "./Header/Search/SearchList";
import Navigation from "./Navigation/Navigation";
import HeaderPoster from "./headerPoster/headerPoster";
import PopularCategories from "./PopularCategories/PopularCategories";
import ServicesBlock from "./ServicesBlock/ServicesBlock";
import Bestsellers from "./Bestsellers/Bestsellers";
import Footer from "./Footer/Footer";
import FooterPanel from "./footerPanel/FooterPanel";
import ListBasket from "./footerPanel/BasketList/ListBasket";
import FavoritesList from "./footerPanel/FavoritesList/FavoritesList";
import ComparisonList from "./footerPanel/ComparisonctsList/ComparisonList";
import ViewedList from "./footerPanel/ViewedList/ViewedList";
import Admin from "./Admin/Admin";
import ShowProduct from "./Product/ShowProduct/ShowProduct";
import Category from "./Category&Filter/Category";
import { AdminContext, ProductContext } from "./Context";
import { checkAuthentication } from "./Admin/Avtorizacion/LoginForm";
import HistoryOfCompany from "./HistoryOfCompany/HistoryOfCompany";
import RecycleTiresForFree from "./ServicesBlock/RecycleTiresForFree";
import NavigationBlockSecond from "./ServicesBlock/NavigationBlockSecond/NavigationBlockSecond";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

  }, [])

  return (
    <>
      <HeaderPoster />
      <PopularCategories />
      <ServicesBlock />
      <Bestsellers />
      <HistoryOfCompany />
    </>
  );
};

const AdminRoute = () => {
  const { login } = useContext(AdminContext);

  if (login) {
    return <Admin />;
  } else {
    return <Home />;
  }
};

function App() {
  const [userAdmin, setUserAdmin] = useState(false);
  const [login, setLogin] = useState(false);
  const [buttAvtorization, setButtAvtorization] = useState(false);
  const [sendObjectToShowProduct, setSendObjectToShowProduct] = useState();
  const [favorites, setFavoritesstate] = useState(0);
  const [compareProducts, setCompareProductsstate] = useState(0);
  const [productsViewed, setProductsViewedstate] = useState(0);
  const [addBasket, setAddBasketstate] = useState(0);
  const [orderData, setOrderData] = useState([]);
  const [staticRouterstate, setStaticRouterstate] = useState(false)
  const adminContextValue = {
    userAdmin,
    setUserAdmin,
    login,
    setLogin,
    buttAvtorization,
    setButtAvtorization,
    sendObjectToShowProduct,
    setSendObjectToShowProduct,
  };
  const productContextValue = {
    sendObjectToShowProduct,
    setSendObjectToShowProduct,
    favorites,
    setFavoritesstate,
    compareProducts,
    setCompareProductsstate,
    productsViewed,
    setProductsViewedstate,
    addBasket, 
    setAddBasketstate,
    orderData, 
    setOrderData,
    staticRouterstate,
    setStaticRouterstate
  };

  useEffect(()=>{
    checkAuthentication(setUserAdmin)
    
  }, [])

  // console.log("App");

  return (
    <BrowserRouter>
      <AdminContext.Provider value={adminContextValue}>
        <ProductContext.Provider value={productContextValue}>
          <TopLine />
          <Header />
          <Navigation />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/payment" children={Receiving("/payment")} />
            <Route path="/refound" children={Receiving("/refound")} />
            <Route path="/delivery" children={Receiving("/delivery")} />
            <Route path="/favoriteslist" component={FavoritesList} />
            <Route path="/comparelist" component={ComparisonList} />
            <Route path="/viewedlist" component={ViewedList} />
            <Route path="/basket" component={ListBasket} />
            <Route path="/admin" component={AdminRoute} />
            <Route path="/category" component={Category} />
            <Route path="/showProduct" component={ShowProduct} />
            <Route path="/search" component={SearchList} />
            <Route path="/recycle-tires-for-free" component={RecycleTiresForFree} />
            <Route path="/tire-fitting" component={NavigationBlockSecond} />
            <Route path="/services" component={NavigationBlockSecond} />
            <Route path="/contacts" component={NavigationBlockSecond} />
            <Route path="/addresses" component={NavigationBlockSecond} />
            <Route children={<Redirect to="/" />} />
          </Switch>
          <Footer />
          <FooterPanel />
        </ProductContext.Provider>
      </AdminContext.Provider>
    </BrowserRouter>
  );
}

export default App;
