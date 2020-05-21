import request from "@/utils/request.js";

/**
 * @exports 根据状态分页获取订单信息 status-订单状态(1-使用中,2-代付款,3-已完成)
 * @param {object} [current: 分类等级, size:网吧标识]
 */
export function getOrderList(params={
	current: 1,
	size: 5,
	status: 0
}) {
  return request({
    url: `/order/list`,
    method: "get",
	params
  });
}
