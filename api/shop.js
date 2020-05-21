import request from "@/utils/request.js";

/**
 * @exports 根据ID获取网吧基础信息
 * @param {object} [level: 分类等级, pid:网吧标识]
 */
export function getCafeInfo(id) {
  return request({
    url: `/cafes/${id}`,
    method: "get",
  });
}

/**
 * @exports 获取用户基础信息
 */
export function getUserInfo() {
  return request({
    url: `/user/msg`,
    method: "get",
  });
}
