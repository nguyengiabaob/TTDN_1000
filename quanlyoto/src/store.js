const { createStore } = require("redux");
const { default: rootreducer } = require("./reducers");

const store = createStore(rootreducer);
export default store;