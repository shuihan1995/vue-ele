/* 
一个包含n个用来间接更新状态数据的方法的对象
*/
import { reqAddress, reqCategorys, reqShops } from '../api'
import { RECEIVE_ADDRESS, RECEIVE_CATEGORYS, RECEIVE_SHOPS } from './mutations'

export default {

  //获取地址的异步action
  async getAddress ({commit, state}) {
    const { longitude, latitude } = state
    const result = await reqAddress(longitude, latitude)
    if (result.code === 0) {
      const address = result.data
      commit(RECEIVE_ADDRESS, address)
      console.log(address)
    }
  }
  
}