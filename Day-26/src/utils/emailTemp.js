const emailTemp = (userId, link) => {
    return `
    <h2>Password Reset</h2>

    <p>Hello User,</p>

    <p>
        We received a request to reset your password.
        Click the link below:
    </p>

    <a href="${link}">
        Reset Password
    </a>

    <p>
        If you did not request this, ignore this email.
    </p>

    <p>User ID: ${userId}</p>
    `;
};

module.exports = emailTemp;