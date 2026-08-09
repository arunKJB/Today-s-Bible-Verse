/* =====================================================
   DAILY VERSE
   ===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* =================================================
       ELEMENTS
       ================================================= */

    const startScreen = document.getElementById("start-screen");
    const verseScreen = document.getElementById("verse-screen");
    const tapMessage = document.getElementById("tap-message");

    const tamilReference =
        document.getElementById("tamilReference");

    const tamilVerse =
        document.getElementById("tamilVerse");

    const englishReference =
        document.getElementById("englishReference");

    const englishVerse =
        document.getElementById("englishVerse");

    const amenBtn =
        document.getElementById("amenBtn");

    const blessing =
        document.getElementById("blessing");

    const heartContainer =
        document.getElementById("heart-container");

    const sparkleContainer =
        document.getElementById("sparkle-container");

    const goldenGlow =
        document.getElementById("golden-glow");


    /* =================================================
       CHECK VERSE DATABASE
       ================================================= */

    if (
        typeof todayVerse === "undefined" ||
        !todayVerse
    ) {

        console.error(
            "todayVerse was not found. Check verses.js"
        );

        return;

    }


    /* =================================================
       LOAD TAMIL VERSE
       ================================================= */

    tamilReference.textContent =
        todayVerse.reference || "";

    tamilVerse.textContent =
        todayVerse.verse || "";


    /* =================================================
       LOAD ENGLISH VERSE
       ================================================= */

    englishReference.textContent =
        todayVerse.englishReference || "";

    englishVerse.textContent =
        todayVerse.englishVerse || "";


    /* =================================================
       GOLDEN GLOW
       ================================================= */

    function showGoldenGlow() {

        if (!goldenGlow) return;

        goldenGlow.classList.remove("active");

        /* Restart animation */

        void goldenGlow.offsetWidth;

        goldenGlow.classList.add("active");

    }


    /* =================================================
       CREATE FLOATING ICON
       ================================================= */

    function createHeart() {

        if (!heartContainer) return;

        const heart =
            document.createElement("div");

        heart.className =
            "floating-heart";


        /* Random icons */

        const icons = [
            "❤️",
            "✨",
            "🕊️",
            "🌸",
            "🌟"
        ];


        heart.textContent =
            icons[
                Math.floor(
                    Math.random() * icons.length
                )
            ];


        /* Random horizontal position */

        heart.style.left =
            Math.random() * 100 + "vw";


        /* Start from bottom */

        heart.style.bottom =
            "-40px";


        /* Random animation speed */

        heart.style.animationDuration =
            (4 + Math.random() * 3) + "s";


        /* Random size */

        heart.style.fontSize =
            (20 + Math.random() * 20) + "px";


        /* 50% transparency */

        heart.style.opacity = "0.4";


        heartContainer.appendChild(heart);


        /* Remove after animation */

        heart.addEventListener(
            "animationend",
            () => {

                heart.remove();

            }
        );

    }


    /* =================================================
       START FLOATING ICONS
       ================================================= */

    function startHearts(amount = 25) {

        let count = 0;

        const interval =
            setInterval(() => {

                createHeart();

                count++;

                if (count >= amount) {

                    clearInterval(interval);

                }

            }, 120);

    }


    /* =================================================
       CREATE SPARKLE
       ================================================= */

    function createSpark() {

        if (!sparkleContainer) return;

        const spark =
            document.createElement("div");

        spark.className =
            "spark";


        spark.style.left =
            Math.random() * 100 + "vw";


        spark.style.top =
            (40 + Math.random() * 50) + "vh";


        spark.style.animationDuration =
            (2 + Math.random() * 2) + "s";


        const size =
            5 + Math.random() * 8;

        spark.style.width =
            size + "px";

        spark.style.height =
            size + "px";


        /* 50% transparency */

        spark.style.opacity =
            "0.4";


        sparkleContainer.appendChild(
            spark
        );


        spark.addEventListener(
            "animationend",
            () => {

                spark.remove();

            }
        );

    }


    /* =================================================
       START SPARKLES
       ================================================= */

    function startSparkles(amount = 35) {

        let count = 0;

        const interval =
            setInterval(() => {

                createSpark();

                count++;

                if (count >= amount) {

                    clearInterval(interval);

                }

            }, 100);

    }


    /* =================================================
       REVEAL VERSE
       ================================================= */

    let verseShown = false;


    function revealVerse() {

        /* Prevent duplicate triggering */

        if (verseShown) return;

        verseShown = true;


        /* Golden glow */

        showGoldenGlow();


        /* Hide starting screen */

        if (startScreen) {

            startScreen.classList.add(
                "hide"
            );

        }


        /* Show verse screen */

        if (verseScreen) {

            verseScreen.classList.add(
                "show"
            );

        }


        /* Hide tap message */

        if (tapMessage) {

            tapMessage.classList.add(
                "hide"
            );

        }


        /* Show blessing */

        if (blessing) {

            blessing.classList.add(
                "show"
            );

        }


        /* =============================================
           IMPORTANT:
           ICONS START WHEN VERSES APPEAR
           ============================================= */

        startHearts(30);

        startSparkles(40);


        /* Extra glow */

        setTimeout(() => {

            showGoldenGlow();

        }, 300);

    }


    /* =================================================
       TAP ANYWHERE TO REVEAL
       ================================================= */

    document.addEventListener(
        "click",
        (event) => {

            /*
             If the Amen button was clicked,
             don't trigger the first-screen reveal.
            */

            if (
                event.target.closest("#amenBtn")
            ) {

                return;

            }


            /*
             If verse is not shown,
             reveal it.
            */

            if (!verseShown) {

                revealVerse();

            }

        }
    );


    /* =================================================
       KEYBOARD SUPPORT
       ================================================= */

    document.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key === "Enter" ||
                event.key === " "
            ) {

                if (!verseShown) {

                    revealVerse();

                }

            }

        }
    );


    /* =================================================
       AMEN BUTTON
       ================================================= */

    if (amenBtn) {

        amenBtn.addEventListener(
            "click",
            (event) => {

                /*
                 Prevent the click from
                 triggering revealVerse().
                */

                event.stopPropagation();


                /* Golden glow */

                showGoldenGlow();


                /*
                 Show icons again
                 when Amen is pressed.
                */

                startHearts(25);

                startSparkles(30);


                /* Button effect */

                amenBtn.classList.remove(
                    "amen-active"
                );

                void amenBtn.offsetWidth;

                amenBtn.classList.add(
                    "amen-active"
                );

            }
        );

    }


});