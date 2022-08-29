export function delimiter(str) {
  const number = Number(str.replace(/\D/g, ""));
  return new Intl.NumberFormat("ru").format(number);
}

export function alphabeticalSort(prod1, prod2) {
  if (prod1.name < prod2.name) return -1;
  else return 1;
}

export function priceSort(prod1, prod2) {
  if (prod1.price < prod2.price) return -1;
  else return 1;
}

export function subSrtFunc(type) {
  if (type == "increasing") {
    return (prod1, prod2) => {
      if (prod1.price > prod2.price) return -1;
      else return 1;
    };
  }
  if (type == "decreasing") {
    return (prod1, prod2) => {
      if (prod1.price < prod2.price) return -1;
      else return 1;
    };
  }
}
