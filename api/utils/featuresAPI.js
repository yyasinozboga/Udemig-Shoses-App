class featuresAPI {
  constructor(query, params, formattedQuery) {
    this.query = query;
    this.params = params;
    this.formattedQuery = formattedQuery;
  }

  filter() {
    if (this.params.size) {
      if (Array.isArray(this.params.size)) {
        this.query = this.query.find({
          size: { $regex: this.params.size.join("|") },
        });
      } else {
        this.query = this.query.find({ size: { $regex: this.params.size } });
      }
    }

    if (this.params.color) {
      if (Array.isArray(this.params.color)) {
        this.query = this.query.find({
          color: { $regex: this.params.color.join("|") },
        });
      } else {
        this.query = this.query.find({ color: { $regex: this.params.color } });
      }
    }

    this.query = this.query.find(this.formattedQuery);
    return this;
  }

  limit() {
    const selecteds = "name,picture,discount,price";
    this.query = this.query.select(selecteds.replaceAll(",", " "));
    return this;
  }

  sort() {
    if (this.params.sort) {
      if (this.params.sort.includes("asc")) {
        this.query = this.query.sort({ price: -1 });
      } else {
        this.query = this.query.sort({ price: 1 });
      }
    } else {
      this.query = this.query.sort("-createdAt");
    }
    return this;
  }
}

export default featuresAPI;
