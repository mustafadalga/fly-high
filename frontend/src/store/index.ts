import { createStore } from 'vuex';
import type { RootState } from '@/types';
import state from './state';
import getters from './getters';
import mutations from './mutations';
import actions from './actions'

export default createStore<RootState>({
    state,
    getters,
    mutations,
    actions,
});
