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
    }

];


const today =
    new Date().getDate();


const todayVerse =
    verses.find(
        verse => verse.day === today
    ) || verses[0];