function pipe(...fns) {
  return (value) => {
    return fns.reduce(async (acc, fn) => {
      if (Promise.resolve(acc) === acc) return fn(await acc);
      return fn(acc);
    }, value);
  };
}
