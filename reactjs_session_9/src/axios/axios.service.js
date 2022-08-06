const axios = require("axios").default;
axios.defaults.baseURL = "http://quizgame12145.herokuapp.com"
axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem("token");

const getUser = async (data) => {
  try {
    const respond = await axios.post(
      "/user/login",
      data
    );

    return respond;
  } catch (error) {
    console.log("error");
    return error;
  }
};

const getListQuestion = async (data) => {
  try {
    const respond = await axios.get(
      "/question",
    );

    return respond;
  } catch (error) {
    console.log("error");
    return error;
  }
};

module.exports = {getUser, getListQuestion};
