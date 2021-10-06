module.exports = (vemto) => {

    return {

        canInstall() {
            return true
        },

        onInstall() {
            vemto.savePluginData({
                text: 'Hello world!!'
            })
        },

    }

}