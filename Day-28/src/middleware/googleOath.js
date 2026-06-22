import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import env from '../config/env.js'


export default function googleOathMiddleware(app) {
    app.use(passport.initialize());

    passport.use(new GoogleStrategy({
        clientID: env.CLIENT_ID,
        clientSecret: env.CLIENT_SECRET,
        callbackURL: env.GOOGLE_CALLBACK_URL,
    }, (accessToken, refreshToken, profile, done) => done(null, profile)))

};