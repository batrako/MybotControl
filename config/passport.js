var configAuth = require('./auth');

var mongoose = require('mongoose');
var User = mongoose.model('User');

var FacebookStrategy = require('passport-facebook').Strategy;
module.exports = function(passport) {

     passport.serializeUser(function(user, done) {
        done(null, user);
    });

     passport.deserializeUser(function(obj, done) {
        done(null, obj);
    });
     
     passport.use(new FacebookStrategy({
        clientID: configAuth.facebookAuth.clientID,
        clientSecret: configAuth.facebookAuth.clientSecret,
        callbackURL: configAuth.facebookAuth.callbackURL,
        profileFields : ['id', 'displayName', 'emails','photos']
    }, function(accessToken, refreshToken, profile, done) {
        User.findOne({provider_id: profile.id}, function(err, user) {
            if(err) throw(err);
            if(!err && user!= null) return done(null, user);
            var user = new User({
                provider_id: profile.id,
                provider: profile.provider,
                name: profile.displayName,
                photo: profile.photos[0].value,
                email: profile.emails[0].value
            });
            user.save(function(err) {
                if(err) throw err;
                done(null, user);
            });
        });
    }));
}