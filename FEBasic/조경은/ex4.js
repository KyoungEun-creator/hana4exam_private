function isObject(obj) {
  return obj && typeof obj === "object";
}

function deepCopy(obj) {
  if (!isObject(obj)) return obj;

  if (Array.isArray(obj)) {
    return obj.map(deepCopy);
  }

  if (obj instanceof Set) {
    const newSet = new Set();
    for (const item of obj) {
      newSet.add(deepCopy(item));
    }
    return newSet;
  }

  if (obj instanceof Map) {
    const newMap = new Map();
    for (const [key, value] of obj) {
      newMap.set(deepCopy(key), deepCopy(value));
    }
    return newMap;
  }

  if (obj instanceof WeakSet || obj instanceof WeakMap) {
    return obj;
  }

  const newer = {};
  for (const k of Reflect.ownKeys(obj)) {
    const desc = Object.getOwnPropertyDescriptor(obj, k);
    if (desc.get || desc.set) {
      Object.defineProperty(newer, k, desc); // copy getter/setter
    } else {
      newer[k] = deepCopy(obj[k]); // deep copy for regular properties
    }
  }

  return newer;
}

module.exports = { deepCopy };
