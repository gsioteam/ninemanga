

class SettingsController extends glib.Collection {
    reload(data, cb) {
        let lang = 'en';
        if (typeof(glib.Collection.getLanguage) === 'function') {
            lang = glib.Collection.getLanguage();
            if (['en', 'es', 'ru', 'de', 'it', 'fr', 'pt'].indexOf(lang) < 0) 
                lang = 'en';
            if (lang === 'pt') lang = 'br';
        }
        this.setData([
            glib.SettingItem.new(
                glib.SettingItem.Type.Header,
                "general",
                "General"
            ),
            glib.SettingItem.new(
                glib.SettingItem.Type.Options,
                "language",
                "Language",
                lang,
                [{
                    name: 'English',
                    value: 'en'
                }, {
                    name: 'Español',
                    value: 'es'
                }, {
                    name: 'русский',
                    value: 'ru'
                }, {
                    name: 'Deutsch',
                    value: 'de'
                }, {
                    name: 'Italiano',
                    value: 'it'
                }, {
                    name: 'Brasil',
                    value: 'br'
                }, {
                    name: 'Français',
                    value: 'fr'
                }]
            ),
        ]);
    }
}

module.exports = function() {
    return SettingsController.new();
}