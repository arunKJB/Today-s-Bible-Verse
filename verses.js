const verses = [

    {
        day: 10,

        reference: "திருவெளிப்பாடு 3:8",

        verse:
            "உன் செயல்களை நான் அறிவேன். இதோ, எவராலும் பூட்ட முடியாத கதவை நான் உனக்குமுன் திறந்து வைத்திருக்கிறேன்.",

        englishReference:
            "Revelation 3:8",

        englishVerse:
            "I know all the things you do, and I have opened a door for you that no one can close."
    },

    {
        day: 17,

        reference: "யோசுவா 1:9",

        verse:
            "வீறுகொள்! துணிந்து நில்! அஞ்சாதே! கவலைப்படாதே! ஏனெனில் உன் கடவுளும் ஆண்டவருமான நான் நீ செல்லும் இடம் எல்லாம் உன்னோடு இருப்பேன்.",

        englishReference:
            "Joshua 1:9",

        englishVerse:
            "Be strong, then ,and be valiant.Do not tremble or be afraid, because the Lord, your God, is with you wherever you go."
    }

];


const today =
    new Date().getDate();


const todayVerse =
    verses.find(
        verse => verse.day === today
    ) || verses[0];
