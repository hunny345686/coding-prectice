Function.prototype.myAppy = function (ctx, args = []) {
  ctx = ctx || globalThis;

  let key = Symbol();

  ctx[key] = this;

  const result = ctx[key](...args);
  delete ctx[key];

  return result;
};

Function.prototype.myAppy = function (ctx, args = []) {
  ctx = ctx || globalThis;

  const key = Symbol();

  ctx[key] = this;

  const result = ctx[key](...args);

  delete ctx[key];

  return result;
};
