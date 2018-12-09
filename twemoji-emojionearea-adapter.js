(function (ns) {
    var __emojione = ns.emojione;
    var __$404emoji_short_code_list_on_twemoji
        = ["blond-haired_woman", "man_wearing_turban", "woman_police_officer", "woman_wearing_turban", "woman_health_worker", "man_health_worker", "woman_guard", "woman_detective", "woman_construction_worker", "woman_singer", "woman_cook", "woman_office_worker", "woman_factory_worker", "man_technologist", "man_mechanic", "man_scientist", "man_pilot", "man_firefighter", "woman_pilot", "man_student", "woman_teacher", "man_judge", "man_farmer", "man_cook", "woman_farmer", "woman_student", "woman_mechanic", "man_office_worker", "man_singer", "woman_technologist", "man_factory_worker", "man_artist", "woman_scientist", "woman_firefighter", "man_teacher", "woman_artist", "woman_astronaut", "woman_judge", "man_astronaut", "woman_tipping_hand", "woman_bowing", "woman_gesturing_no", "man_bowing", "man_gesturing_no", "man_tipping_hand", "woman_pouting", "man_gesturing_ok", "man_getting_face_massage", "man_shrugging", "woman_shrugging", "man_raising_hand", "woman_getting_haircut", "woman_getting_face_massage", "woman_facepalming", "woman_frowning", "man_facepalming", "man_frowning", "men_with_bunny_ears_partying", "women_with_bunny_ears_partying", "man_running", "man_getting_haircut", "woman_running", "woman_walking", "kiss_mm", "couple_mm", "woman_gesturing_ok", "man_pouting", "family_mwgb", "couple_ww", "woman_raising_hand", "man_walking", "family_mwg", "kiss_ww", "family_wwbb", "family_wwg", "family_mmgg", "family_mmbb", "family_wwgb", "family_man_girl", "woman_mage", "woman_fairy", "family_woman_girl_girl", "family_mmb", "family_wwgg", "family_mmg", "family_mwgg", "man_mage", "family_woman_girl_boy", "family_woman_boy", "family_man_boy", "family_woman_girl", "family_mmgb", "family_man_girl_boy", "family_man_boy_boy", "family_woman_boy_boy", "family_wwb", "family_man_girl_girl", "family_mwbb", "man_vampire", "man_genie", "woman_vampire", "merman", "man_elf", "mermaid", "woman_elf", "woman_genie", "man_fairy", "man_zombie", "woman_zombie", "woman_lifting_weights", "women_wrestling", "man_golfing", "man_cartwheeling", "woman_cartwheeling", "man_bouncing_ball", "men_wrestling", "woman_golfing", "man_lifting_weights", "woman_playing_handball", "woman_bouncing_ball", "man_playing_handball", "woman_rowing_boat", "man_playing_water_polo", "woman_playing_water_polo", "man_surfing", "man_swimming", "woman_swimming", "woman_surfing", "woman_in_steamy_room", "man_biking", "woman_biking", "woman_mountain_biking", "man_in_steamy_room", "man_rowing_boat", "woman_climbing", "man_mountain_biking", "man_climbing", "woman_in_lotus_position", "woman_juggling", "man_in_lotus_position", "man_juggling", "eye_in_speech_bubble", "rainbow_flag"];

    var __$404emojiCodeRegexList = []

    for (var mIndex = 0; mIndex <= __$404emoji_short_code_list_on_twemoji.length; mIndex++) {
        var replacementPattern = '\\b' + __$404emoji_short_code_list_on_twemoji[mIndex] + '\\b';
        var regexExp           = new RegExp(replacementPattern, "g");
        __$404emojiCodeRegexList.push(regexExp)
    }

    var fix_404_emoji = function (filters) {
        for (var g in filters) {
            var group = filters[g];
            if (group && group.emoji) {
                group.emoji = fix_group_404_emoji(group.emoji)
            }
        }
    };

    var fix_group_404_emoji = function (text) {
        var index = 0;
        for (index = 0; index <= __$404emojiCodeRegexList.length; index++) {
            text = text.replace(__$404emojiCodeRegexList[index], " ");
        }
        return text;
    };

    fix_404_emoji($.fn.emojioneArea.defaults.filters);

    __emojione.ascii         = true
    __emojione.imageType     = 'svg';
    __emojione.emojiSize     = 32;
    __emojione.sprites       = false;
    __emojione.imagePathPNG  = "//twemoji.maxcdn.com/2/svg/";
    __emojione.imagePathSVG  = "//twemoji.maxcdn.com/2/svg/";
    __emojione.fileExtension = ".svg";

    for (var key in __emojione.emojioneList) {
        var emoji = __emojione.emojioneList[key];
        if (emoji && emoji.uc_base) {
            emoji.uc_base = emoji.uc_base.replace(/\b(0)+/gi, "");
        }
    }

})(window);