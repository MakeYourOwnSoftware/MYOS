/*
  HOW TO ADD A PROJECT
  Copy one block, paste it into the list (keep the commas between blocks),
  and change the details.

  Fields:
    title     Project name
    url       Live link
    tagline   One short line
    desc      One or two sentences
    category  One of: "Learning" | "Games" | "Classroom Tools" | "Teacher Prep" | "Languages"
    grades    e.g. "K-2", "3-5", "K-5", "Teachers", "All ages"
    tags      Short labels (also used by the search box)
    color     Card color (hex)
    mark      1 to 3 letters shown on the card when there is no screenshot
    image     Optional. Leave "" and a screenshot of the live site is taken
              automatically. Add your own file (e.g. "assets/projects/ant-town.webp")
              only when you want a nicer, hand-picked view.

  Cards appear in the order listed here. Put new projects at the top
  of the gallery list so the newest tools show first.
*/

// Flagship sites shown in their own section at the top
window.FEATURED = [
  {
    title: "Wonder Pond",
    url: "https://wonderpond.github.io/",
    tagline: "Where curiosity comes to play",
    desc: "A free K-5 learning game site with minute-long rounds built for big screens and interactive whiteboards. No ads, sign-ups, or installs.",
    points: ["Games across 13 subjects, from math and reading to coding and Spanish", "Class tools: timer, random picker, scoreboard, group maker, voice meter", "Guided by mascots Edie, Hop, and Skip"],
    grades: "K-5",
    color: "#1FA2B8",
    mark: "WP",
    image: "assets/projects/wonder-pond.webp"
  },
  {
    title: "Pip's AI Lab",
    url: "https://pips-ai-lab.github.io/",
    tagline: "AI literacy for kids",
    desc: "Pip is a robot who is still learning. Students help Pip, play missions, and collect stamps in their AI passport.",
    points: ["Sprout Explorers (K-2): short missions with pictures and read-aloud help", "Trailblazers (3-5): run experiments, test Pip, and think about fairness", "Read-to-me audio, an AI passport, and a Teacher Room"],
    grades: "K-5",
    color: "#6C5CE7",
    mark: "Pip",
    image: "assets/projects/pips-ai-lab.webp"
  }
];

// Gallery
window.PROJECTS = [
  {
    title: "Cosmo's Planet Expedition",
    url: "cosmo/",
    tagline: "Fly the starship Cosmo across the solar system",
    desc: "Pilot a starship from the Sun out to Pluto and land on each planet to open an observation card with real data and facts. Visit all 8 planets to finish the mission.",
    category: "Games",
    grades: "2-5",
    tags: ["Science", "Space", "Solar system"],
    color: "#5A4BD6",
    mark: "Cos",
    image: "assets/projects/cosmo.webp"
  },
  {
    title: "Phonogram Studio",
    url: "https://hyeonhoyu.github.io/Phonogram-Studio/",
    tagline: "Practice phonogram sounds with Frog Baby",
    desc: "Explore and practice phonogram sounds and keywords at an adjustable speed. Teachers can record their own pronunciation.",
    category: "Learning",
    grades: "K-2",
    tags: ["Literacy", "Phonics", "Audio"],
    color: "#5BAA4C",
    mark: "ph",
    image: "assets/projects/phonogram.webp"
  },
  {
    title: "Ant Town",
    url: "https://hyeonhoyu.github.io/Ant-Town/",
    tagline: "Watch a queen start a brand new colony",
    desc: "An interactive ant farm with a live colony count, life cycle guide, tappable body diagrams, and a quiz. Includes teacher resources.",
    category: "Learning",
    grades: "2-4",
    tags: ["Science", "Life cycles", "Simulation"],
    color: "#C9772E",
    mark: "Ant",
    image: "assets/projects/ant-town.webp"
  },
  {
    title: "MCS K-5 Scope & Sequence",
    url: "https://hyeonhoyu.github.io/mcs-k5-scope-sequence/",
    tagline: "What are MCS kids learning?",
    desc: "Pick a grade to see the year in ELA, math, and PLTW side by side, then explore cross-subject unit ideas. Downloadable as Word.",
    category: "Teacher Prep",
    grades: "K-5",
    tags: ["Curriculum", "Unit planning", "Student teaching"],
    color: "#2E9C8F",
    mark: "K-5",
    image: "assets/projects/mcs-k5.webp"
  },
  {
    title: "Group Maker",
    url: "https://hyeonhoyu.github.io/group-maker/",
    tagline: "Groups, timers, stations, and points with Frog Baby",
    desc: "Make groups with a shuffle or spinning wheel, rotate stations, keep score, and set presentation order. Hidden settings let teachers place students.",
    category: "Classroom Tools",
    grades: "Teachers",
    tags: ["Grouping", "Timer", "Classroom management"],
    color: "#3F8F4A",
    mark: "GM",
    image: "assets/projects/group-maker.webp"
  },
  {
    title: "Luli and the Language of Tea",
    url: "https://hyeonhoyu.github.io/Luli-Language-of-Tea/",
    tagline: "Ten teacups. Ten ways to say tea.",
    desc: "Explore how cultures around the world say tea, with original 3D teacups in each country's traditional style. Inspired by the picture book by Andrea Wang.",
    category: "Languages",
    grades: "All ages",
    tags: ["Picture book", "World cultures", "Social studies"],
    color: "#8A6F4E",
    mark: "Tea",
    image: "assets/projects/luli.webp"
  },
  {
    title: "Bubble Cove",
    url: "https://hyeonhoyu.github.io/BubbleCove/",
    tagline: "Trap sea critters in bubbles and clear the cove",
    desc: "A one- or two-player arcade game. Classroom mode adds math, reading, science, and social studies questions, or play arcade only.",
    category: "Games",
    grades: "K-5",
    tags: ["Arcade", "Review game", "Two players"],
    color: "#2F7FD8",
    mark: "BC",
    image: "assets/projects/bubble-cove.webp"
  },
  {
    title: "Whistle",
    url: "https://hyeonhoyu.github.io/whistle-sports-rulebook/",
    tagline: "Rules made easy, explained by a referee cat",
    desc: "Plain-language rules for 49 sports, with diagrams you can tap. Free, with no accounts, ads, or paywalls.",
    category: "Learning",
    grades: "All ages",
    tags: ["PE", "Sports", "Rules"],
    color: "#E0533D",
    mark: "Wh",
    image: "assets/projects/whistle.webp"
  },
  {
    title: "Dal Tokki",
    url: "https://hyeonhoyu.github.io/daltokki/",
    tagline: "Korean for kids, a little each night",
    desc: "Seven monthly units of 10-minute nightly lessons, starting with Hangul. Includes family tasks and printable worksheets. English and Spanish versions.",
    category: "Languages",
    grades: "Kids",
    tags: ["Korean", "Hangul", "Families"],
    color: "#3B4A8C",
    mark: "달",
    image: "assets/projects/daltokki.webp"
  },
  {
    title: "MusicEd Design Studio",
    url: "https://musiced-design-studio.github.io/",
    tagline: "K-6 music pedagogy studio",
    desc: "Preservice teachers pick a grade, explore a concept, and draft a music lesson with guided reflection prompts. Links to a student Rhythm Lab.",
    category: "Teacher Prep",
    grades: "Preservice",
    tags: ["Music", "Lesson planning", "Reflection"],
    color: "#B0457A",
    mark: "ME",
    image: "assets/projects/musiced.webp"
  }
];
