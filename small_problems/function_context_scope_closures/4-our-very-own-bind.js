// https://launchschool.com/exercises/2726c8c6

function myBind(func, obj) {
  return function (...args) {
    return func.apply(obj, args);
  };
}
