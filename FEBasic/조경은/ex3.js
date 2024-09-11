Array.prototype.sortBy = function (sortProp = "") {
  const conditionList = sortProp.split(",").map((cond) => {
    const [key, direction = "asc"] = cond.split(":");
    return { key, direction: direction.toLowerCase() === "desc" ? -1 : 1 };
  });

  return this.sort((a, b) => {
    for (const { key, direction } of conditionList) {
      if (a[key] > b[key]) return direction;
      if (a[key] < b[key]) return -direction;
    }
    return 0;
  });
};
