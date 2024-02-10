class ApiFeatures{
    constructor(query, queryStr){
        this.query = query;
        this.queryStr = queryStr;
    }
    filter(){
        let querystring = JSON.stringify(this.queryStr);
        querystring = querystring.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);
        this.query = this.query.find (JSON.parse(querystring));
        return this;
    }
    sort(){
        if (this.queryStr.sort) {
            const sortby = this.queryStr.sort().split(",").join(" ");
            this.query=this.query.sort(sortby);
          } else {
            this.query= this.query.sort("createdAt");
          }
          return this;
    }
    limitFields(){
        if (this.queryStr.fields) {
            const fields = this.queryStr.fields.split(",").join(" ");
            console.log(fields);
            this.query= this.query.select(fields);
          } else {
            this.query= this.query.select("-__v");
          }
          return this;
    }
    paginate() {
        const page = this.queryStr.page * 1 || 1;
        const limit = this.queryStr.limit * 1 || 10;
        const skip = (page - 1) * limit;
        this.query = this.query.skip(skip).limit(limit);
        return this;
    }
}
module.exports = ApiFeatures;