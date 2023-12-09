export interface ICvEntry {
  company: string;
  logo: string;
  companyUrl: string;
  date: string;
  position: string;
  activities: Array<string>;
}

const jobEntries: Array<ICvEntry> = [
  {
    company: "Vattenfall Energy Trading GmbH",
    date: "05/2021 - 04/2023",
    logo: "./images/Vattenfall.jpg",
    companyUrl: "https://energysales.vattenfall.de/",
    position: "Senior Softwareentwickler",
    activities: [
      "Fullstack: Backend, Frontend, E2E-Testen, Support und DevOps",
      "Neuentwicklung<ul><li>Scrum, Full Stack, C#, Asp.net 5 + 6, Azure und Kubernetes</li> </ul>",
      "Weiterwicklungen<ul><li>Scrum, Full Stack, C#, Asp.net 4.7, Azure VM und Appservice</li> </ul>",
    ],
  },
  {
    company: "Hellmann Worldwide Logistics SE & Co. KG",
    date: "01/2021 - 04/2021",
    logo: "./images/hellmann.png",
    companyUrl: "https://www.hellmann.net/",
    position: "Senior Softwareentwickler",
    activities: [
      "Enwicklung mit Scrum",
      "Backend",
      "Neuentwicklung<ul><li>Asp .Net Core, REST, Kubernetes und RabbitMQ</li> </ul>",
    ],
  },
  {
    company: "PricewaterhouseCoopers GmbH",
    date: "09/2019 - 09/2020",
    logo: "./images/pwc.png",
    companyUrl: "https://www.pwc.de/",
    position: "Senior Associate",
    activities: [
      "Enwicklung mit Kanban",
      "Fullstack: Backend, Frontend, E2E-Testen, Support und DevOps",
      "1 Jahr Weiterentwicklung<ul><li>Javascript, Asp .Net 4.6.2 MVC, .Net Core 2+3, Selenium und Azure Cloud mit Docker</li> </ul>",
    ],
  },
  {
    company: "KPMG IT Service GmbH",
    date: "03/2019 - 08/2019",
    logo: "./images/kpmg.jpg",
    companyUrl: "https://home.kpmg/de/de/home.html",
    position: "Senior Softwareentwickler",
    activities: [
      "Entwicklung mit Scrum",
      "ca. 5 Monate Neuentwicklung <ul> <li>.Net Core, Angular, Typescript, RabbitMQ, Microservices und Azure Service Fabric</li> </ul>",
      "ca. 1 Monat Weiterentwicklung <ul> <li>VB.NET, WebForms und WinForms</li> </ul>",
    ],
  },
  {
    company: "Dataport AöR",
    date: "12/2017 - 01/2019",
    logo: "./images/dataport.png",
    companyUrl: "https://www.dataport.de/",
    position: "Softwarearchitekt",
    activities: [
      "Entwicklung mit Scrum",
      "Mitwirken in Architektur Jour Fixes",
      "Technical Lead",
      "ca. 1 Monat als Scrum Master",
      "ca. 1 Jahr Entwicklung an Onlinediensten zur Digitalisierung von Behörden <ul> <li> Asp .Net 4.6.2 MVC, HTML5, Javascript und Bootstrap</li> </ul>",
    ],
  },
  {
    company: "Crane Payment Innovations GmbH",
    date: "01/2011 - 08/2017",
    logo: "./images/cpi.svg",
    companyUrl: "https://www.cranepi.com/",
    position: "Software Engineer",
    activities: [
      "Entwicklung mit Kanban und Scrum",
      "ca. 4 Jahre Webentwicklung mit <ul><li>C#, Asp.net, Java, Angular, HTML und Javascript</li> </ul>",
      "ca. 4 Jahre Algoentwicklung mit <ul><li>Matlab, Python, C#, C++ und Qt</li> </ul>",
      "ca. 3 Jahre Desktopapplikationsentwicklung mit <ul><li>C++, Qt und C#</li> </ul>",
      "ca. 0,5 Jahre Embedded Softwareentwicklung auf Mikrokontrollern mit <ul><li>C</li> </ul>",
      "Betreuung von Praktikanten",
    ],
  },
  {
    company: "Dräger Medical GmbH",
    date: "04/2010 - 08/2010",
    logo: "./images/draeger_logo.png",
    companyUrl: "https://www.draeger.com/",
    position: "Praktikant",
    activities: [
      "Entwicklung mit Extreme Programming und V-Modell",
      "XML Transformationen mit XSLT",
      "Entwicklung automatisierter Testabläufe in C++ und NI Teststand",
      "Erstellung von DLLs zur Ansteuerung von Aktoren und Sensoren in C++",
    ],
  },
  {
    company: "Hochschule für Angewandte Wissenschaften Hamburg",
    date: "03/2008 - 03/2010",
    logo: "./images/haw.png",
    companyUrl: "https://www.haw-hamburg.de/",
    position: "Studentischer <br />Mitarbeiter",
    activities: ["Betreuung und Aufsicht von Laborversuchen"],
  },
];

const educationalEntries: Array<ICvEntry> = [
  {
    company: "Hochschule für Angewandte Wissenschaften Hamburg",
    companyUrl: "https://www.haw-hamburg.de/",
    date: "09/2006 - 08/2010",
    logo: "./images/haw.png",
    position: "Bachelorstudium",
    activities: [
      "Studienabschluss: Bachelor of Computer Science",
      "Favorisierte Module <ul><li>Algorithmen, Rechnernetze, Verteilte Systeme und Software Engineering</li></ul>",
      "Wahlpflichtmodule <ul><li>Hardware Software Codesign und Robot Vision</li></ul>",
      'Abschlussarbeit  <ul><li><a href="http://edoc.sub.uni-hamburg.de/haw/volltexte/2010/1081/pdf/alpers_abschlussarbeit.pdf" target="_blank" rel="noopener noreferrer">Modellierung eines Einparkassistenten für ein autonomes Fahrzeug <br/>implementiert auf einer SoC-Plattform</a></li></ul>',
      "Gesamtnote 1,4",
    ],
  },
  {
    company: "BBS Winsen Luhe",
    companyUrl: "https://www.bbs-winsen.de/",
    date: "08/2005 - 07/2006",
    logo: "./images/bbs-winsen.jpg",
    position: "Fachoberschule <br />Elektrotechnik",
    activities: [
      "Abschluss mit der Fachhochschulreife",
      "Wahlpflichtkurs Informatik",
      "Gesamtnote 2,8",
    ],
  },
  {
    company: "Berufsfachschule für Technisches Zeichnen G17 in Hamburg",
    companyUrl: "https://www.itech-bs14.de/startseite/",
    date: "08/2003 - 07/2005",
    logo: "./images/b14.png",
    position: "Ausbildung zum <br />Technischen Zeichner",
    activities: [
      "Berufsabschluss: <ul><li>Technischer Zeichner Elektrotechnik, Maschinenbautechnik und Bautechnik</li></ul>",
      "Gesamtnote 2,3",
    ],
  },
];

export default {
  getJobEntries() {
    return jobEntries;
  },
  getEducationalEntries() {
    return educationalEntries;
  },
};
