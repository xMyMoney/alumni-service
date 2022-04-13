export const isFunction = (v: unknown): v is Function => typeof v == "function";

export const isJSON = (str: string | undefined): boolean => {
  if (typeof str == "string") {
    try {
      var obj = JSON.parse(str);
      if (typeof obj == "object" && obj) {
        return true;
      } else {
        return false;
      }
    } catch (e) {
      return false;
    }
  }
  return false;
};
