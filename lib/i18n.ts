import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Translation files
const resources = {
  en: {
    translation: {
      // Navigation
      home: "Home",
      arcade: "Arcade",
      guestbook: "Guestbook",
      poetry: "Poetry",
      achievements: "Achievements",

      // Main page
      welcome: "Welcome to Heartbeats",
      subtitle: "A special journey of love and memories for Houry",
      description: "Every heartbeat tells our story",
      enterButton: "Enter Our World",

      // Love Generator
      loveGenerator: "Love Generator",
      generateLove: "Generate Love",
      loveMessages: {
        1: "You are the sunshine that brightens my darkest days",
        2: "Every moment with you is a treasured memory",
        3: "Your smile is my favorite notification",
        4: "You make my heart skip beats like a broken record, but in the most beautiful way",
        5: "In a world full of temporary things, you are my constant",
      },

      // Mini Game
      miniGame: "Mini Game",
      startGame: "Start Game",
      score: "Score",
      gameOver: "Game Over",

      // Love Letter
      loveLetter: "Love Letter",
      dearBeloved: "Dear Houry",
      letterContent: `From the moment our paths crossed in the biochemistry labs at UAE University, 
      I knew my life would never be the same. Your brilliant mind, your kind heart, 
      and your beautiful soul captured me completely.

      Every shared moment studying, every laugh in the corridors, every glance 
      across the lecture hall - they all became precious memories that I treasure deeply.

      You are not just my love, but my inspiration, my partner in all of life's 
      adventures, and my best friend. Your Palestinian heritage fills me with pride, 
      and your dreams fuel my own ambitions.

      This website is just a small token of the infinite love I have for you. 
      Every pixel, every animation, every sound was crafted with thoughts of you.

      Forever yours,
      With all my love ❤️`,

      // Achievements
      achievementUnlocked: "Achievement Unlocked!",
      achievementsList: {
        firstVisit: "First Visit",
        firstVisitDesc: "Welcome to our special place",
        loveGenerator: "Love Generator",
        loveGeneratorDesc: "Generated your first love message",
        miniGame: "Gamer",
        miniGameDesc: "Played the mini game",
        secretLetter: "Secret Letter",
        secretLetterDesc: "Found the hidden love letter",
        poet: "Poet",
        poetDesc: "Read the poetry corner",
        guestbook: "Guestbook",
        guestbookDesc: "Visited the guestbook",
      },

      // Poetry Corner
      poetryCorner: "Poetry Corner",
      poems: {
        1: {
          title: "Chemistry of Love",
          content: `In the lab of life, we found our bond,
          Molecules of love beyond,
          Chemical reactions in my heart,
          You\'ve been my catalyst from the start.`,
        },
        2: {
          title: "Palestinian Rose",
          content: `Like olive trees in Palestinian soil,
          Your roots run deep, your spirit royal,
          In your eyes I see the heritage proud,
          Your culture, beauty, speaking loud.`,
        },
        3: {
          title: "University Days",
          content: `In halls of learning, hand in hand,
          Together we would always stand,
          Biochemistry and love combined,
          Two hearts, one soul, one brilliant mind.`,
        },
      },

      // Common
      close: "Close",
      next: "Next",
      previous: "Previous",
      loading: "Loading",
      playMusic: "Play Music",
      pauseMusic: "Pause Music",
      muteSounds: "Mute Sounds",
      unmuteSounds: "Unmute Sounds",

      // Guestbook
      yourName: "Your Name",
      yourMessage: "Your Message",
      sendLove: "Send Love",

      // Common UI
      levelUp: "Level Up!",
      generatingLove: "Generating love...",
      insertCoin: "INSERT COIN TO PLAY",

      // Theme
      darkTheme: "Dark Theme",
      lightTheme: "Light Theme",
      pastelTheme: "Pastel Theme",

      // Language
      language: "Language",
      english: "English",
      arabic: "العربية",
    },
  },
  ar: {
    translation: {
      // Navigation
      home: "الرئيسية",
      arcade: "الألعاب",
      guestbook: "دفتر الزوار",
      poetry: "الشعر",
      achievements: "الإنجازات",

      // Main page
      welcome: "مرحباً بكِ في نبضات القلب",
      subtitle: "رحلة خاصة من الحب والذكريات لحوري",
      description: "كل نبضة قلب تحكي قصتنا",
      enterButton: "ادخلي إلى عالمنا",

      // Love Generator
      loveGenerator: "مولد الحب",
      generateLove: "توليد الحب",
      loveMessages: {
        1: "أنتِ أشعة الشمس التي تُنير أظلم أيامي",
        2: "كل لحظة معكِ هي ذكرى ثمينة",
        3: "ابتسامتكِ هي إشعاري المفضل",
        4: "تجعلين قلبي يخفق كقرص مكسور، لكن بأجمل طريقة",
        5: "في عالم مليء بالأشياء المؤقتة، أنتِ ثابتي",
      },

      // Mini Game
      miniGame: "لعبة صغيرة",
      startGame: "ابدأ اللعبة",
      score: "النتيجة",
      gameOver: "انتهت اللعبة",

      // Love Letter
      loveLetter: "رسالة حب",
      dearBeloved: "حوري العزيزة",
      letterContent: `منذ اللحظة التي تقاطعت فيها دروبنا في مختبرات الكيمياء الحيوية في جامعة الإمارات،
      عرفت أن حياتي لن تكون كما كانت أبداً. عقلكِ اللامع، قلبكِ الطيب،
      وروحكِ الجميلة أسرتني تماماً.

      كل لحظة مشتركة في الدراسة، كل ضحكة في الممرات، كل نظرة
      عبر قاعة المحاضرات - كلها أصبحت ذكريات ثمينة أعتز بها بعمق.

      أنتِ لستِ حبي فقط، بل إلهامي، شريكتي في جميع مغامرات الحياة،
      وأعز أصدقائي. تراثكِ الفلسطيني يملأني بالفخر،
      وأحلامكِ تغذي طموحاتي.

      هذا الموقع مجرد رمز صغير للحب اللانهائي الذي أحمله لكِ.
      كل بكسل، كل حركة، كل صوت تم إنشاؤه بأفكار عنكِ.

      إلى الأبد ملككِ،
      بكل حبي ❤️`,

      // Achievements
      achievementUnlocked: "تم فتح إنجاز!",
      achievementsList: {
        firstVisit: "أول زيارة",
        firstVisitDesc: "مرحباً بكِ في مكاننا الخاص",
        loveGenerator: "مولد الحب",
        loveGeneratorDesc: "تم توليد أول رسالة حب",
        miniGame: "لاعبة",
        miniGameDesc: "لعبتِ اللعبة الصغيرة",
        secretLetter: "الرسالة السرية",
        secretLetterDesc: "وجدتِ رسالة الحب المخفية",
        poet: "شاعرة",
        poetDesc: "قرأتِ ركن الشعر",
        guestbook: "دفتر الزوار",
        guestbookDesc: "زرتِ دفتر الزوار",
      },

      // Poetry Corner
      poetryCorner: "ركن الشعر",
      poems: {
        1: {
          title: "كيمياء الحب",
          content: `في مختبر الحياة، وجدنا رابطتنا،
          جزيئات الحب وما وراءها،
          تفاعلات كيميائية في قلبي،
          كنتِ محفزي منذ البداية.`,
        },
        2: {
          title: "الوردة الفلسطينية",
          content: `مثل أشجار الزيتون في التراب الفلسطيني،
          جذوركِ عميقة، روحكِ ملكية،
          في عينيكِ أرى التراث الفخور،
          ثقافتكِ، جمالكِ، يتكلم بصوت عالٍ.`,
        },
        3: {
          title: "أيام الجامعة",
          content: `في قاعات التعلم، يداً بيد،
          معاً كنا نقف دائماً،
          الكيمياء الحيوية والحب متحدان،
          قلبان، روح واحدة، عقل واحد لامع.`,
        },
      },

      // Common
      close: "إغلاق",
      next: "التالي",
      previous: "السابق",
      loading: "جاري التحميل",
      playMusic: "تشغيل الموسيقى",
      pauseMusic: "إيقاف الموسيقى",
      muteSounds: "كتم الأصوات",
      unmuteSounds: "إلغاء كتم الأصوات",

      // Guestbook
      yourName: "اسمكِ",
      yourMessage: "رسالتكِ",
      sendLove: "إرسال الحب",

      // Common UI
      levelUp: "ترقية!",
      generatingLove: "توليد الحب...",
      insertCoin: "أدخلي العملة للعب",

      // Theme
      darkTheme: "المظهر الداكن",
      lightTheme: "المظهر الفاتح",
      pastelTheme: "المظهر الباستيل",

      // Language
      language: "اللغة",
      english: "English",
      arabic: "العربية",
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    debug: false,

    interpolation: {
      escapeValue: false,
    },

    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"],
    },

    // Add these options for better reliability
    returnEmptyString: false,
    returnNull: false,
  });

export default i18n;
