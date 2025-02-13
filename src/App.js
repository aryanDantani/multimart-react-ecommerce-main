import { lazy, Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import NavBar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Loader from "./components/Loader/Loader";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";

const Home = lazy(() => import("./pages/Home"));
const Shop = lazy(() => import("./pages/Shop"));
const Cart = lazy(() => import("./pages/Cart"));
const Product = lazy(() => import("./pages/Product"));
const SignInSignupPage = lazy(() =>
  import("./components/SignInAndSignUp/SignInAndSignUp")
);

// Layout component
const Layout = ({ children }) => {
  const location = useLocation();
  const isAuthPage = location.pathname === "/signin-signup";

  return (
    <>
      {!isAuthPage && <NavBar />}
      {children}
      {!isAuthPage && <Footer />}
    </>
  );
};

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Router>
        <ToastContainer
          position="top-right"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <Layout>
          <Routes>
            {/* Public Route */}
            <Route
              path="/signin-signup"
              element={
                <PublicRoute>
                  <SignInSignupPage />
                </PublicRoute>
              }
            />

            {/* Private Routes */}
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />
            <Route
              path="/shop"
              element={
                <PrivateRoute>
                  <Shop />
                </PrivateRoute>
              }
            />
            <Route
              path="/shop/:id"
              element={
                <PrivateRoute>
                  <Product />
                </PrivateRoute>
              }
            />
            <Route
              path="/cart"
              element={
                <PrivateRoute>
                  <Cart />
                </PrivateRoute>
              }
            />
          </Routes>
        </Layout>
      </Router>
    </Suspense>
  );
}

export default App;
