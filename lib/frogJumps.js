module.exports = function(start, end, jumplength) {
  if (start < 0) {
    return "error, Start must be above 0 but less than end";
  } else if (end < 0) {
    return "error, end cannot be less than 0";
  } else if (jumplength < 1) {
    return "error, jumplength has to be a positive int";
  } else if (jumplength > start + end) {
    return "This frog is too gangster for this tiny road";
  } else {
    return (end - start) / jumplength;
  }
};
