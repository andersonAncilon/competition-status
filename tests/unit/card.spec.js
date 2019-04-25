import { shallowMount } from '@vue/test-utils';
import Vue from 'vue';

import Card from '../../src/components/Card.vue';

const standing = {
  draw: 0,
  goalDifference: 1,
  goalsAgainst: 0,
  goalsFor: 0,
  lost: 0,
  playedGames: 0,
  points: 0,
  position: 0,
  team: 0,
  won: 0
};

function getRenderedText(Component, propsData) {
  const Constructor = Vue.extend(Component);
  const vm = new Constructor();
  vm.$options.props = propsData;
  vm.$mount();
  return vm.$options.props.standing;
}

describe('Card.vue', () => {
  it('receive standing when passed', () => {
    expect(getRenderedText(Card, { standing })).toBe(standing);
  });

  it('renders the correct position', () => {
    const wrapper = shallowMount(Card);
    wrapper.setProps({ standing: standing });
    expect(wrapper.find('.card').exists()).toBe(true);
  });
});
