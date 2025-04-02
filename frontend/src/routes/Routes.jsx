// routes.js
import { Home } from "../screens/Home";
import { Page1 } from "../screens/Page1";
import { Page2 } from "../screens/Page2";
import { Page3 } from "../screens/Page3";

export const routes = [
  { path: '/', title: 'Home', element: <Home /> },
  { path: '/page1', title: 'Page 1', element: <Page1 /> },
  { path: '/page2', title: 'Page 2', element: <Page2 /> },
  { path: '/page3', title: 'Page 3', element: <Page3 /> },
];