import {
  createRouter,
  createWebHashHistory,
} from 'vue-router';

import HomePage from '@/home/HomePage.vue';
import RobotBuilder from '@/build/RobotBuilder.vue';
import Search from '@/search/Search.vue';
import PartInfo from '@/parts/PartInfo.vue';
import BrowseParts from '@/parts/BrowseParts.vue';
import RobotHeads from '@/parts/RobotHeads.vue';
import RobotArms from '@/parts/RobotArms.vue';
import RobotTorsos from '@/parts/RobotTorsos.vue';
import RobotBases from '@/parts/RobotBases.vue';
import SidebarStandard from '@/sidebars/SidebarStandard.vue';
import SidebarBuild from '@/sidebars/SidebarBuild.vue';
import ShoppingCart from '@/cart/ShoppingCart.vue';
// import store from '../store';

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      components: {
        default: HomePage,
        sidebar1: SidebarStandard,
        sidebar2: SidebarBuild,
      },
    },
    {
      path: '/build',
      name: 'Build',
      components: {
        default: RobotBuilder,
        sidebar: SidebarBuild,
      },
    },
    {
      path: '/search',
      name: 'Search',
      component: Search,
    },
    {
      path: '/parts/browse',
      name: 'BrowseParts',
      component: BrowseParts,
      children: [
        {
          name: 'BrowseHeads',
          path: 'heads',
          component: RobotHeads,
        },
        {
          name: 'BrowseArms',
          path: 'arms',
          component: RobotArms,
        },
        {
          name: 'BrowseTorsos',
          path: 'torsos',
          component: RobotTorsos,
        },
        {
          name: 'BrowseBases',
          path: 'bases',
          component: RobotBases,
        },
      ],

    },
    {
      path: '/cart',
      name: 'Cart',
      component: ShoppingCart,
    },
    {
      path: '/parts/:partType/:id',
      name: 'Parts',
      component: PartInfo,
      beforeEnter(to, from, next) {
        const isValidId = Number.isInteger(Number(to.params.id));
        next(isValidId);
      },

    },

  ],
});
