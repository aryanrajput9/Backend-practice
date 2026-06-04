const express = require('express');
const passport = require('passport');
const Googlestrategy = require('passport-google-oauth20').Strategy;
const userModel = require('./model/user.model');
const authRoute = require('./routes/auth.routes');

const app = express();


app.use(express.json());
app.use(passport.initialize());

passport.use(
    new Googlestrategy(
        {
            clientID: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            callbackURL: "http://localhost:3000/auth/google/callback"
        },
        async (accesstoken, refreshtoken, profile, cb) => {
            let name = profile.name.givenName;
            let email = profile.emails[0].value;

            let isEixst = await userModel.findOne({ email });

            if (isEixst) return cb(null, isEixst)


            let newUser = await userModel.create({
                name,
                email,
                provider: "google",
                provider_id: profile.id
            })

            return cb(null, newUser)

        }

    )
)

app.get('/', (req, res) => {
    return res.send("ok beta ho gya ab")
});

app.use("/auth", authRoute)


module.exports = app