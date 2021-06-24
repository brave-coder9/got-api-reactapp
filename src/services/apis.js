const { default: customAxios } = require("./customAxios");

const getCharacters = async (
  page = 1,
  pageSize = 10,
  culture = "",
  gender = ""
) =>
  await customAxios.get(
    `/characters?page=${page}&pageSize=${pageSize}&gender=${gender}&culture=${culture}`
  );
const getHouseDetail = async (houseId) =>
  await customAxios.get(`/houses/${houseId}`);

export const apis = {
  getCharacters,
  getHouseDetail
};
