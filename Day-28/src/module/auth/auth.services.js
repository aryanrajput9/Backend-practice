
import userRepository from "../../repository/user.repository.js";
import userModel from "../../model/user.model.js";
import { generateaccessToken, generaterefreshToken } from "../../utils/generateToken.js";

export default class AuthServices {
    constructor() {
        this.userRepository = new userRepository()
    };

    async CreateUser(user) {
        const isUser = await this.userRepository.findByEmail(user.emails[0].value);
        let result = isUser


        if (!isUser) {
            const _user = await this.userRepository.create({
                name: user.displayName,
                email: user.emails[0].value,
                picture: user.photos[0].value

            })

            result = _user
        };

        const data = {
            _id: result._id,
            name: user.displayName,
            email: user.emails[0].value,
            picture: user.photos[0].value
        }

        const refreshToken = generaterefreshToken(data)

        const accessToken = generateaccessToken(data);

        return { refreshToken, accessToken }
    }
}