import {
  createRouter,
  createWebHashHistory,
} from 'vue-router';

import HomePage from '@/home/HomePage.vue';
import RobotBuilder from '@/build/RobotBuilder.vue';
import Search from '@/search/Search.vue';
import PartInfo from '@/parts/PartInfo.vue';

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage,
    },
    {
      path: '/build',
      name: 'Build',
      component: RobotBuilder,
    },
    {
      path: '/search',
      name: 'Search',
      component: Search,
    },
    {
      path: '/parts/:partType/:id',
      name: 'Parts',
      component: PartInfo,
    },

  ],
});
