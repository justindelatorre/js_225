// https://launchschool.com/exercises/cba0df25

function myBind(func, obj, ...partialArgs) {
  return function(...args) {
    const fullArgs = partialArgs.concat(args);

    return func.applu(obj, fullArgs);
  };
}
