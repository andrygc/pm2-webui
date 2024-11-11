const config = require('../config');
const { comparePassword } = require('../utils/password.util');

const checkAuthentication = async (ctx, next) => {
    if(ctx.session.isAuthenticated){
        return ctx.redirect('/apps')
    }
    await next()
}

const isAuthenticated = async (ctx, next) => {
    if(!ctx.session.isAuthenticated){
        return ctx.redirect('/login')
    }
    await next()
}

const validateAdminUser = async (username, password) => {
    if(username !== config.APP_USERNAME){
        throw new Error('User does not exist')
    }
    const isPasswordCorrect = await comparePassword(password, config.APP_PASSWORD)
    if(!isPasswordCorrect){
        throw new Error('Password is incorrect')
    }
    return true
}

module.exports = {
    isAuthenticated,
    checkAuthentication,
    validateAdminUser
};