
const headerMenuConfig = [];

const asideMenuConfig = [
  {
    name: '仓库管理系统',
    path: '/',
    icon: 'dashboard',
    children: [
      {
        name: '库存',
        path: '/Dashboard/Stock',
        icon: 'list',
      },
      {
        name: '订单管理',
        path: '/Dashboard/MinerOrder',
        icon: 'list',
      },
      {
        name: '物流管理',
        path: '/Dashboard/MinerLogisticsManage',
        icon: 'list',
      },
      // {
      //   name: '矿机退货管理',
      //   path: '/Dashboard/OrderReturn',
      //   icon: 'list',
      // },
      {
        name: '销售数据',
        path: '/Dashboard/Profit',
        icon: 'list',
      },
    ],
  },
];

export { headerMenuConfig, asideMenuConfig };
