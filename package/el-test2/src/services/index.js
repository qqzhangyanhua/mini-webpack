//示列接口
const R = {
  get: (url) => {},
};
/**通讯录列表
 * @param {Object} data
 * @param {Number} data.page - 页码
 * @param {Number} data.pageSize - 每页条数
 * @param {String} data.relationUniqueid - 联系人用户唯一编号（个人填身份证 法人填统一信用编码）
 * @param {Number} data.relationType - 联系人类型 0个人 1法人  int
 * @param {String} data.relationName - 联系人名称(联系人姓名（个人是姓名 法人是公司名称）)
 * @param {String} data.relationPhone - 联系人电话 联系人是用户手机号（联系人是个人才会有）
 */
export const getRelationQuery = (data) => R.post("/relation/query", data);

/**
 *删除通讯录
 * @param {*} params
 * @param {String} params.id
 * @returns
 */
export const relationDelete = (params) => R.post("/relation/delete", params);
