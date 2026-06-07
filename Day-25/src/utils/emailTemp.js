const emailTemp = (userId, link) => {

    return `
    
    <div>
        <h2>Hello ${userId}</h2>

        <p>You requested a password reset.</p>

        <p>Click the link below to continue:</p>

        <a href="${link}">
            Reset Password
        </a>

        <p>If you did not request this, ignore this email.</p>

        <p>User ID: ${userId}</p>

        <p>Thank You</p>
    </div>

    `;
}

module.exports = emailTemp;