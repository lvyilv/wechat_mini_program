import {
  observable
} from "mobx-miniprogram";
import {
  action
} from 'mobx-miniprogram'

export const store = observable({
  activeTabBarIndex: 0,
  numA: 1,
  numB: 2,
  get sum() {
    return this.numA + this.numB
  },
  updateNumbA: action(function (step) {
    this.numA += step
  }),
  updateNumbB: action(function (step) {
    this.numB += step
  }),
  updateActiveTabBarIndex:action(function(index){
    this.activeTabBarIndex = index
  })
})