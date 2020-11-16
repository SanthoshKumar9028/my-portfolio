export default function cs(choices) {
  if (!(choices instanceof Object))
    throw new Error("cs(choices) must be an object");
  let defaultKey;
  for (let [key, isSelected] of Object.entries(choices)) {
    if (isSelected) return key;
    defaultKey = key;
  }
  return defaultKey;
}
