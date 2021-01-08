const swDev = () => {
  let path = `${process.env.PUBLIC_URL}/sw.js`;
  navigator.serviceWorker.register(path).then((res) => {
    console.warn("res", res);
  });
};

export default swDev;
