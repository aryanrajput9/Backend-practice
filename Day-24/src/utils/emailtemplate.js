const emailTemp = (user, restlink) => {
    return `<div>
    <h2>Hello ${user}</h2>
    <p>Please click the link for resest password</p>
    <a href="${restlink}">click here</a>
    </div>
    `
};

module.exports = emailTemp