/*
 * GET contact form.
 */
exports.contact = function(req, res){
    res.render('contact/form', { title: 'Contact' })
};

/*
 * Post contact form.
 */
exports.postcontact = function(req, res){
    res.render('contact/post', { title: 'Contact', nom:req.body.nom })
};