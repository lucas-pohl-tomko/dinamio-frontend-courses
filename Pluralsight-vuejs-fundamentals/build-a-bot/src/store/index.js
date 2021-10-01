import { createStore } from 'vuex';
import SidebarStandard from '@/sidebars/SidebarStandard.vue';

export default createStore({
  state: {
    cart: [],
    sidebarState: SidebarStandard,
  },
  mutations: {
    addRobotToCart(state, robot) {
      state.cart.push(robot);
    },
  },
});
