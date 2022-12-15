const Discord = require('discord.js')
const colors = require('colors');
const axios = require('axios');
const { DISCORD_TOKEN, clientId, PREFIX, MONGO_URI, AppClientID, AppSecretToken} = require("../../../config.json");

let token = [];

const getTokenFunction = async () => {

    //console.log(token)
    if (token.access_token && Date.now() < (token.expires_in * 1000)) return

    try {
        let {
            data
        } = await axios.post(`https://id.twitch.tv/oauth2/token?grant_type=client_credentials&client_id=${AppClientID}&client_secret=${AppSecretToken}`)
        token = data
    } catch (error) {
        console.log(error)
    }

};

let streamsAtivas = [];

const streamers = ["dimarques4", "x_jao12", "mserrao24", "dinip"]

const getUsers = async () => {

    await getTokenFunction()

    const headers = {
        'Client-Id': AppClientID,
        'Authorization': 'Bearer ' + token.access_token,
    }

    try {
        let {
            data
        } = await axios.get(`http://api.twitch.tv/helix/users?login=${streamers.join("&login=")}`, {
            headers
        })
        return data
    } catch (error) {
        console.log(error)
    }
}

const getStreams = async () => {

    await getTokenFunction()

    const headers = {
        'Client-Id': AppClientID,
        'Authorization': 'Bearer ' + token.access_token,
    }

    try {
        let {
            data
        } = await axios.get(`http://api.twitch.tv/helix/streams?user_login=${streamers.join("user_&login=")}`, {
            headers
        })
        return data
    } catch (error) {
        console.log(error)
    }
}

const getThumbnail = function (url) {
    return url.replace('{width}', '1920').replace('{height}', '1080')
}

const run = async function Run(client) {

    let streams = await getStreams()
    let users = await getUsers()
    //console.log(streams)

    if (streams.data.length == 0) {

        streamsAtivas = [];

        console.log('ninguem ta live sad')
        return
    }

    streamsAtivas.forEach(streamAtiva => {

        let ativo = streams.data.find(stream => stream.user_login == streamAtiva)
        if (!ativo) {
            streamsAtivas.splice(streamsAtivas.indexOf(streamAtiva))
            console.log(`${streamAtiva} deixou de stremar sad`)
        }

    })

    streams.data.forEach(stream => {

        if (stream.type === "live") {
            const user = users.data.find(u => u.login == stream.user_login)
            const pfp = user.profile_image_url
            let ThisGuildOnly = client.guilds.cache.get("702545447750860931")
            const ChannelAnnounceLive = ThisGuildOnly.channels.cache.find(x => x.id === "719175570533122139")
            console.log(`${stream.user_name} is live!`.brightMagenta)
            if (!streamsAtivas.find(u => u == stream.user_login)) {

                const TwitchEmbed = new Discord.MessageEmbed()
                    .setTitle(`**${stream.title}**`)
                    .setURL(`https://www.twitch.tv/${stream.user_login}`)
                    .setAuthor({
                        name: `${stream.user_name}`,
                        iconURL: `${pfp}`,
                        url: `https://www.twitch.tv/${stream.user_login}`
                    })
                    .setThumbnail(`${pfp}`)
                    .setImage(`${getThumbnail(stream.thumbnail_url)}`)
                    .addField(`Viewers`, `${stream.viewer_count} viewers already!`, true)
                    .setTimestamp()


                ChannelAnnounceLive.send({
                    content: `Hey! ${stream.user_name} just started the stream!\n||<@&789905363607748628>||`,
                    embeds: [TwitchEmbed]
                });
                streamsAtivas.push(stream.user_login)
            }
        }

    })

}

module.exports = run
