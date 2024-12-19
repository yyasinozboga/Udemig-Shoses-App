const formatQuery = (req, res, next) => {
  const query = { ...req.query };
  const fields = ["fields", "sort", "size", "color"];
  fields.forEach((field) => delete query[field]);

  let queryString = JSON.stringify(query);

  queryString = queryString.replace("lte", "$lte");

  req.formattedQuery = JSON.parse(queryString);

  next();
};

export { formatQuery };
