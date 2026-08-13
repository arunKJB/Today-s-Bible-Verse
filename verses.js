const verses = [

    {
        day: 11,

        reference: "திருப்பாடல்கள் 91:3",

        verse:
            "ஏனெனில், ஆண்டவர் உம்மை வேடரின் கண்ணியினின்றும் கொன்றழிக்கும் கொள்ளை நோயினின்றும் தப்புவிப்பார்.",

        englishReference:
            "Psalms  91:3",

        englishVerse:
            " He will take you out of the bird-net, and keep you safe from wasting disease"
    },

    {
        day: 13,

        reference: "நீதிமொழிகள் 13:14",

        verse:
            "ஞானமுள்ளவரது அறிவுரை வாழ் வளிக்கும் ஊற்றாகும்; அது ஒருவரைச் சாவை விளைவிக்கும் கண்ணிகளிலிருந்து தப்புவிக்கும்.",

        englishReference:
            "Proverbs 13:14",

        englishVerse:
            "The teaching of the wise is a fountain of life, turning men away from the nets of death."
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
    },

     {
        day: 24,

        reference: "எசாயா 41:10",

        verse:
            "அஞ்சாதே, நான் உன்னுடன் இருக்கிறேன்; கலங்காதே, நான் உன் கடவுள், நான் உனக்கு வலிமை அளிப்பேன்; உதவி செய்வேன்; என் நீதியின் வலக்கரத்தால் உன்னைத் தாங்குவேன்.",

        englishReference:
            "Isaiah 41:10",

        englishVerse:
            "So do not fear, for I am with you; Do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand."
    },

    {
        day: 31,

        reference: "யோவேல் 2:26",

        verse:
            "நீங்கள் வேண்டியமட்டும் உண்டு நிறைவடைவீர்கள்; உங்களை வியத்தகு முறையில் நடத்தி வந்த உங்கள் கடவுளாகிய ஆண்டவரின் பெயரைப் போற்றுவீர்கள்; இனிமேல் என் மக்கள் ஒருபோதும் நிந்தைக்கு உள்ளாகமாட்டார்கள்.",

        englishReference:
            "Joel 2:26",

        englishVerse:
            "You shall eat in plenty and be satisfied, and praise the name of the LORD your God, who has dealt wondrously with you. And my people shall never again be put to shame."
    }

];


const today =
    new Date().getDate();


const todayVerse =
    verses.find(
        verse => verse.day === today
    ) || verses[0];
