import request from "@/utils/request.js";

/**
 * @exports 获取商品类型管理
 * @param {object} [level: 分类等级,pid:网吧标识]
 */
export function getGoodsTypes(
  params = {
    level: 1,
    pid: 1,
  }
) {
  return request({
    url: "/goods-type/list",
    method: "get",
    params,
  });
}

/**
 * @exports 获取商品类型下的列表
 * @param {object} [current: 页码,goodsTypeId:分类id,size:分页大小]
 */
export function getGoodsList(
  params = {
    current: 1,
    goodsTypeId: 1,
    size: 1,
  }
) {
  return request({
    url: "/goods/list",
    method: "get",
    params,
  });
}
