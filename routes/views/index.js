var keystone = require('keystone');

exports = module.exports = function(req, res) {
    
    var view = new keystone.View(req, res),
        locals = res.locals;
    
    // locals.section is used to set the currently selected
    // item in the header navigation.
    locals.section = 'home';
	locals.data = {
		pastors: []
	};


    // Load Pastors
    view.on('init', function(next) {
    
        var q = keystone.list('User').model.find()
            .where('isPastor', 'true')
            .sort('sortOrder');
    
        q.exec(function(err, results) {
            locals.data.pastors = results;
            next(err);
        });
    
    });
    
    
    // Render the view
    view.render('index');
    
};
