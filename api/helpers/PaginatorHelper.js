module.exports = function (params, done) {

    var page = parseInt(params.page || 1);
    var limit = parseInt(params.limit || sails.config.limits.pageLimit);
    var model = ModelHelper.toModel(params.model);
    var criteria = params.criteria || {};
    var populate = params.populate || [];

    var tasks = {
      totalCount: function (next) {
        model.count(criteria, next);
      },
      data: function (next) {
        var finder = model.find().where(criteria);
        _.forEach(populate, function (field) {
          finder.populate(field);
        });
        finder.paginate({page: page, limit: limit}).sort({publishedDate : -1}).exec(next);
      }
    };

    async.auto(tasks, function (err, result) {
      if (err) { done(err); }
      var data = result.data || [];
      var totalPage = _.ceil(result.totalCount / limit);
      var meta = {
        currentPage: page,
        totalPage: totalPage
      };
      if (_.gt(page, 1)) {
        meta.previousPage = (page - 1);
      }
      if (_.lt(page, totalPage)) {
        meta.nextPage = (page + 1);
      }
      return done(null, {data: data, meta: meta});
    });
};
