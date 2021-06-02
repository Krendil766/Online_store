import { Admin, Basket, Auth, DevicePage, Shop } from "./pages";
import { TYPE_ROUTER } from "./utils/const";

export const authRoutes = [
  {
    path: TYPE_ROUTER.ADMIN_ROUTER,
    component: Admin,
  },
  {
    path: TYPE_ROUTER.BASKET_ROUTER,
    component: Basket,
  },
];

export const publickRoutes = [
  {
    path: TYPE_ROUTER.LOGIN_ROUTER,
    component: Auth,
  },
  {
    path: TYPE_ROUTER.REGISTRATION_ROUTER,
    component: Auth,
  },
  {
    path: TYPE_ROUTER.DEVICE_ROUTER + "/:id",
    component: DevicePage,
  },
  {
    path: TYPE_ROUTER.SHOP_ROUTER,
    component: Shop,
  },
];
