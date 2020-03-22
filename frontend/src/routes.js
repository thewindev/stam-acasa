import Home from "./components/Home";
import About from "./components/About";
import MyAccount from "./components/MyAccount";
import Login from "./components/Login";

export const ROUTES = {
  home: {
    path: "/",
    extraProps: { exact: true },
    component: Home
  },
  login: {
    path: "/login",
    component: Login
  },
  despre: {
    path: "/despre",
    component: About
  },
  account: {
    path: "/account",
    component: MyAccount
  },
  selfevaluation: {
    path: "/self-evaluation",
    component: () => "Placeholder selfevaluation"
  },
  addmember: {
    path: "/add-member",
    component: () => "Placeholder addmember"
  }
};
