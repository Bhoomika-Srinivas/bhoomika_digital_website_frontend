import { createBrowserRouter } from 'react-router-dom';
import RootLayout, { ComingSoon } from '@/layout/root-layout';
import HomePage from '@/app-modules/home-management/pages/home-page';
import CategoryPage from '@/app-modules/category-management/pages/category-page';
import ProductPage from '@/app-modules/product-management/pages/product-page';
import SolutionsPage from '@/app-modules/solutions-management/pages/solutions-page';
import ProductsPage from '@/app-modules/products-management/pages/products-page';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true,                                    element: <HomePage /> },
      { path: 'products',                               element: <ProductsPage /> },
      { path: 'solutions',                              element: <SolutionsPage /> },
      { path: 'category/:categorySlug',                 element: <CategoryPage /> },
      { path: 'category/:categorySlug/:productSlug',    element: <ProductPage /> },
      { path: 'cart',      element: <ComingSoon title="Your Cart" /> },
      { path: 'checkout',  element: <ComingSoon title="Checkout" /> },
      { path: 'orders',    element: <ComingSoon title="My Orders" /> },
      { path: 'about',     element: <ComingSoon title="About Us" /> },
      { path: 'contact',   element: <ComingSoon title="Contact Us" /> },
      { path: '*',         element: <ComingSoon title="Page Not Found" /> },
    ],
  },
]);
