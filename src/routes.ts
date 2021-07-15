import { IRouterConfig } from 'ice';
import BasicLayout from '@/layouts/BasicLayout';
import Dashboard from '@/pages/Dashboard';
import Stock from './pages/Dashboard/Stock';
import MinerOrder from './pages/Dashboard/MinerOrder';
import MinerLogisticsManage from './pages/Dashboard/MinerLogisticsManage';
import OrderReturn from './pages/Dashboard/OrderReturn';
import Profit from './pages/Dashboard/Profit';

const routerConfig: IRouterConfig[] = [
  {
    path: '/',
    component: BasicLayout,
    children: [
      {
        path: '/Dashboard/MinerOrder',
        component: MinerOrder,
      },
      {
        path: '/Dashboard/MinerLogisticsManage',
        component: MinerLogisticsManage,
      },
      {
        path: '/Dashboard/OrderReturn',
        component: OrderReturn,
      },
      {
        path: '/Dashboard/profit',
        component: Profit,
      },
      {
        path: '/Dashboard/Stock',
        component: Stock,
      },
      {
        path: '/',
        exact: true,
        component: Dashboard,
      },
    ],
  },
];

export default routerConfig;
