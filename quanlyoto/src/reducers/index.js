const { combineReducers } = require("redux");
const { default: Carreducer } = require("./Car");

const rootreducer=combineReducers({
    car:Carreducer
});
export default rootreducer;