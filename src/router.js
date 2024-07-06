import { createWebHistory, createRouter } from "vue-router";
import Home from "./pages/Home.vue"
import Login from "./pages/auth/Login.vue"
import Register from "./pages/auth/Register.vue";
import Cart from "./pages/cart.vue";
import Seller from "./pages/auth/Seller.vue";
import Wishlist from "./pages/wishlist.vue";
import Product from "./pages/product.vue";
import Chekout from "./pages/chekout.vue";
import OrderHistory from "./pages/orderHistory.vue";
import OrderInfo from "./pages/orderInfo.vue";
import Profile from "./pages/profile.vue";
const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/login",
        name: "Login",
        component: Login
    },
    {
        path: "/register",
        name: "Register",
        component: Register
    },
    {
        path: "/cart",
        name: "Cart",
        component: Cart
    },
    {
        path: "/seller-acc",
        name: "Seller",
        component: Seller
    },
    {
        path: "/wishlist",
        name: "Wishlist",
        component: Wishlist
    },
    {
        path: "/product",
        name: "Product",
        component: Product
    },
    {
        path: "/checkout",
        name: "Chekout",
        component: Chekout
    },
    {
        path: "/order-history",
        name: "OrderHistory",
        component: OrderHistory
    },
    {
        path: "/order-info",
        name: "OrderInfo",
        component: OrderInfo
    },
    {
        path: "/profile",
        name: "Profile",
        component: Profile
    },
]

export default createRouter({
    routes,
    history: createWebHistory()
});
// bac