const Googlestratigy = require('passport-google-oauth20').Strategy;
const userModel = require('../model/user.model');
const gooogleAuth = () => {
    return new Googlestratigy(
        {
            clientID: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            callbackURL: "http://localhost:3000/auth/google/callback"
        },
        async (accesstoken, refreshtoken, profile, cb) => {
            console.log(profile)
            let name = profile.name.givenName;
            let email = profile.emails[0].value;

            const isEixst = await userModel.findOne({ email });
            if (isEixst) return cb(null, isEixst)
            let newUser = await userModel.create({
                username: name,
                email,
                password: null,
                provder: "google",
                provder_id: profile.id
            });

            return cb(null, newUser)
        }
    )
};

module.exports = gooogleAuth