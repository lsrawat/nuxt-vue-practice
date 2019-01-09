const logger = store => {
  store.subscribe((mutation, state) => {
    console.log("in logger plugin");
    console.log(mutation);
    console.log(state);
  })
}

export default logger;
