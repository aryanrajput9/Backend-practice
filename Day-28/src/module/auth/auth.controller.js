import { app_config } from '../../constant/app.constant.js';
import AuthServices from './auth.services.js';
import env from '../../config/env.js'

export default class AuthController {
    constructor() {
        this.authServices = new AuthServices()
    };

    async GoogleCallBack(req, res) {
        console.log(this.authServices)

        const { refreshToken, accessToken } = await this.authServices.CreateUser(req.user);

        res.cookie("refreshToken", refreshToken, app_config.cookie.refreshToken);
        res.cookie("accessToken", accessToken, app_config.cookie.accessToken);

        res.redirect(env.REDIRECT_URL)

    }

}