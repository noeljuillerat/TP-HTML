let total = 0;

function add(x) {
  total += x;
  return total;
}

function sous(x) {
  total -= x;
  return total;
}

function multi(x) {
  if (total === 0) {
    return (total = x);
  } else {
    total *= x;
    return total;
  }
}

function div(x) {
  if (total === 0) {
    return (total = x);
  } else {
    total /= x;
    return total;
  }
}

function reset(params) {
  total = 0;
}
