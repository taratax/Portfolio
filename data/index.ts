export const navItems = [
  { name: ["About", "O mnie"], link: "#about" },
  { name: ["Projects", "Projekty"], link: "#projects" },
  { name: ["Experience", "Doświadczenie zawodowe"], link: "#experience" },
  { name: ["Contact", "Kontakt"], link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: ["I prioritize client collaboration, fostering open communication ", "Współpracuję z klientami w duchu otwartości i zaufania"],
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: ["I'm very flexible with time zone communications", "Otwarty na współpracę"],
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: ["My tech stack", "Technologie"],
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-4",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: ["Tech enthusiast with a passion for development.", "Miłośnik technologii i programowania z pasją do rozwoju."],
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: ["Currently building a JS decentralized chat app.", "Obecnie buduję zdecentralizowny chat."],
    description: ["The Inside Scoop", "Co ciekawego"],
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: ["Do you want to start a project together?", "Nowy projekt, rozbudowa starego?"],
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "MMAT App for Android",
    des: ["Developed using Kotlin for Android. Calculates optimal spray angles, flow rates, and other key metrics.", "Zbudowany przy użyciu języka programowania Kotlin na platformie Android."],
    img: "/screnshot-mmat.png",
    iconLists: ["/kotlin-icon.png", "/android.png"],
    link: "https://play.google.com/store/apps/details?id=pl.mmat.mmatcalculator&hl=pl",
  },
  {
    id: 2,
    title: "MychatPWA",
    des: ["Decentralized Chat App Our chat application operates on a peer-to-peer network using a publish-subscribe model.", "Czat, w fazie eksperymentlnej, oparty na sieci decentralizowanej. Aplikacja do komunikacji działa w środowisku peer-to-peer przy użyciu modelu publikuj-subskrybuj."],
    img: "/mychat_chat.png",
    iconLists: ["JS.png", "typescript-icon.svg"],
    link: "https://mychatpwa.hopto.org",
  },
  {
    id: 3,
    title: "KTW",
    des: ["Small offline oriented city guide for Katowice.", "Mała nie-onlineowa apka na telefony apple - wkrótce w app store."],
    img: "/KTW_application.png",
    iconLists: ["swift.png", "iphone.png", "/git.svg"],
    link: "https://github.com/taratax/katoApp.git",
  },

  {
    id: 4,
    title: "FullCourtTennis",
    des: ["FullCourtTennis was founded by former '81 Australian Open Singles Champion Brian Teacher, currently an ATP coach. With today's widespread access to technology, Brian wanted to make tennis coaching available and affordable to all. And so the FullCourtTennis app was born. Now tennis players of all levels, from all around the globe can connect directly with world-class tennis coaches to improve their game.", "FullCourtTennis was founded by former '81 Australian Open Singles Champion Brian Teacher, currently an ATP coach. With today's widespread access to technology, Brian wanted to make tennis coaching available and affordable to all. And so the FullCourtTennis app was born. Now tennis players of all levels, from all around the globe can connect directly with world-class tennis coaches to improve their game"],
    img: "/FullCourttennis.png",
    iconLists: ["swift.png", "obj-c.png"],
    link: "https://apps.apple.com/pl/app/full-court-tennis/id1563456530?l=pl"
  },

];

export const static_texts = [
  {
    hero0: ["Transforming concepts into seamless experiences", "Zamiana koncepcji w produkt"],
    hero1: ["Dynamic with NextJS", "Dynamiczny z NextJS"],
    hero2: ["Projects on time", "Projekty na czas"],
    button: ["Show my work", "Czym się zajmuję"]
  },
  {
    grid_email: ["Copy my email", "Skopiuj email."],
    grid_email_copied: ["Email copied", "Email skopiowany"]
  },
  {
    proj_head: ["Projects participated and worked on", "Prace i projekty."],
    proj_check: ["Check Live Site", "Sprawdź stronę projektu"],


  },
  {
    client_head: ["Kind words from satisfied clients", "Opinie zadowolonych klientów"],
  },
  {
    experience_head: ["My work experience", "Doświadczenie zawodowe"]
  },
  {
    approach_head: ["My approach", "Podejście projektowe"],
    pahses_list: [["Phase 1", "Etap pierwszy"], ["Phase 2", "Etap drugi"], ["Phase 3", "Etap trzeci"]],
    phases_desc: [["", ""], ["", ""], ["", ""]],
    phases_title: [["Analysis and strategy", "Analiza i strategia"], ["Implemenation and iteration", "Iteracje w implmentacji"], ["Support and maintenance", "Wsparcie i rozwój"]],
    proj_stage1: ["Requirements Discussion and Analysis", "Omówienie i analiza wymagań."],
    proj_stage2: ["Development Phase, Regular Analysis and Feedback Sessions", "Projekt w budowie, analiza i spotkania iteracyjne."],
    proj_stage3: ["Project Handover, Initial Support, Ongoing Assistance", "Oddanie projektu, początkowa opieka, dalsze wsparcie."],
  },
  {
    want_proj: ["Want to cooperate on new project ?", "Potrzebujesz projektu ?"],
    contact_proj: ["Contact me and describe what you need", "Skontaktuj się ze mną i powiedz czego potrzebujesz"],
    lets_talk: ["lets talk", "Porozmawiajmy"]
  },
  {
    tech_1: ["TypeScript", "JavaScript", "StoryBook", "React Testing Library", "iOS", "Swift", "Objective-C", "SQL", "MongoDB"],
    tech_2: ["Android", "Bash", "Linux", "Unix", "Windows Powershell", "ETL", "Python"]
  },


]

export const testimonials = [
  {
    quote:
      "",
    name: "",
    title: "",
  }
];

export const companies = [

  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: ["Sql developer", "Sql developer"],
    desc: ["Querying a large database systems in telecom companies with 1 milion plus records of data inside tables. ", "Przeglądanie dużych systemów baz danych w firmach telekomunikacyjnych z ponad milionem rekordów danych przechowywanych w tabelach."],
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: ["System Engineer", "Inżynier systemowy"],
    desc: ["Experienced and versatile System Engineer with over 10 years of expertise in maintaining,supporting, and optimizing complex systems within enterprise environments.", "Doświadczony i elastyczny Inżynier Systemów z ponad 10-letnim doświadczeniem w utrzymaniu, obsłudze oraz optymalizacji skomplikowanych systemów w środowisku przedsiębiorstw."],
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: ["Mobile App developer", "Aplikacje mobilne"],
    desc: ["Cross-Platform Mobile App Development: Proficient in designing and implementing efficient apps using Java/Kotlin (Android) and Swift/Objective-C (iOS). Skilled in integrating APIs, databases, and third-party services to enhance app functionality.", "Rozwój aplikacji mobilnych w wielu platformach: Znajomość projektowania i implementacji efektywnych aplikacji przy użyciu technologii Java/Kotlin (Android) oraz Swift/Objective-C (iOS). Umiejętność integracji API, baz danych i usług trzecich do poprawy funkcjonalności aplikacji."],
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: ["Frontend Developer", "Frontend Developer"],
    desc: ["With extensive experience in developing high-quality front-end applications using React, JavaScript, and TypeScript, I've honed my skills in creating responsive and user-friendly interfaces.", "Posiadając bogate doświadczenie w rozwoju aplikacji front-end o wysokiej jakości przy użyciu technologii React, JavaScript i TypeScript, doskonaliłem swoje umiejętności w tworzeniu responsywnych i użytecznych interfejsów użytkownika."],
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [

  {
    id: 1,
    img: "/link.svg",
  },
];

export interface LanguageProps {
  language: string; // Properly define the type for language
}