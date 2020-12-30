const throttle = (func: Function, limit: number): EventListener => {
  let lastFunc: number;
  let lastRan: number;

  return () => {
    const context = throttle;
    const args = [func, limit];

    if (!lastRan) {
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(() => {
        if (Date.now() - lastRan >= limit) {
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
};

export default throttle;
