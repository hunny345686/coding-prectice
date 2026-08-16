Function.prototype.myBind = function (ctx, ...args) {
  const fn = this;

  return function (...newArgs) {
    return fn.apply(ctx, [...args, ...newArgs]);
  };
};

Function.prototype;
