const sleep = (t = 1000) =>
  new Promise((r) => {
    setTimeout(r, t);
  });

export default sleep;
