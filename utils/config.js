require('dotenv').config()

module.exports = {
    discord: {
        token: process.env.token,
        prefix: '?!',
    },

    emojis: {
        off: ':x:',
        error: ':warning:',
        queue: ':bar_chart:',
        music: ':musical_note:',
        success: ':white_check_mark:',
    },
};