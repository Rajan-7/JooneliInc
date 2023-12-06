const changMyContent = (state, action) => {
  switch (action.type) {
    case "HOME":
      return "Hello Home";
    case "BLOG":
      return "Hello Blog";
    default:
       return "Hello home";
  }
};

export default changMyContent;
