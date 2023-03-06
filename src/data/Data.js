import { MdEmail } from "react-icons/md";
import { FaGithubSquare, FaLinkedin, FaInstagramSquare } from "react-icons/fa";

import bookstore from '../images/bookstore.png';
import hcl from '../images/hcl.png';
import youtube from '../images/youtube.png';
import netflix from '../images/netflix.png';
import insta from '../images/insta.png';

import html from '../images/html.png';
import css from '../images/css.png';
import js from '../images/js.png';
import react from '../images/react.png';
import nextjs from '../images/nextjs.png';
import bootstrap from '../images/bootstrap.png';
import tailwind from '../images/tailwind.png';
import sass from '../images/sass.png';
// import mongo from '../images/mongoDB.png';
import firebase from '../images/firebase.png';
import redux from '../images/redux.png';
import git from '../images/git.png';
import github from '../images/github.png';
import fm from '../images/fm.png';
import vscode from '../images/vscode.png';
import ps from '../images/ps.png';
import mongoLeaf from '../images/mongoLeaf.png';

export const mySkills = [
  {
    logo: html,
    name: "HTML",
    percent: "90%",
  },

  {
    logo: css,
    name: "CSS",
    percent: "85%",
  },
  {
    logo: js,
    name: "JavaScript",
    percent: "70%",
  },
  {
    logo: react,
    name: "React Js",
    percent: "80%",
  }
  ,
  {
    logo: nextjs,
    name: "Next Js",
    percent: "60%",
  },
  {
    logo: bootstrap,
    name: "Bootstrap",
    percent: "75%",
  },

  {
    logo: tailwind,
    name: "Tailwind CSS",
    percent: "85%",
  },
  {
    logo: sass,
    name: "Sass",
    percent: "80%",
  },
  {
    logo: mongoLeaf,
    name: "MongoDB",
    percent: "72%",
  }
  ,
  {
    logo: firebase,
    name: "Firebase",
    percent: "60%",
  },
  {
    logo: redux,
    name: "Redux Js",
    percent: "65%",
  },

  {
    logo: git,
    name: "Git",
    percent: "70%",
  },
  {
    logo: github,
    name: "GitHub",
    percent: "75%",
  },
  {
    logo: fm,
    name: "Framer Motion",
    percent: "50%",
  },
  {
    logo: vscode,
    name: "VS Code",
    percent: "70%",
  }
  ,
  {
    logo: ps,
    name: "Photoshop",
    percent: "70%",
  }
]





export const myProjects = [
  {
    image: bookstore,
    link: "https://testone-31632.web.app/",
    repo: "https://github.com/iGyanendraYadav/bookStore",
    name: "BookStore by Gyan",
    usedTech: "HTML, CSS, REACT JS & Tailwind CSS"
  },
  {
    image: hcl,
    link: "https://hcltechbygyan.web.app/",
    repo: "https://github.com/iGyanendraYadav/HCLTech",
    name: "HCLTech",
    usedTech: "HTML, CSS, REACT JS & Tailwind CSS"
  },
  {
    image: youtube,
    link: "https://igyanendra.web.app/",
    repo: "https://github.com/iGyanendraYadav/youtube",
    name: "YouTube Clone",
    usedTech: "HTML, CSS, REACT JS, Redux & SASS"
  }
  ,
  {
    image: netflix,
    link: "https://netflixbygyan.web.app/",
    repo: "https://github.com/iGyanendraYadav/Netflix",
    name: "HCLTech",
    usedTech: "HTML, CSS, REACT JS & Tailwind CSS"
  },
  
  {
    image: insta,
    link: "https://instagram-igyanendrayadav.vercel.app/",
    repo: "https://github.com/iGyanendraYadav/Instagram",
    name: "Instagram Clone",
    usedTech: "HTML, CSS, Next Js & Tailwind CSS"
  }
]



export const connectMe = [
  {
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/igyanendrayadav/",
    bkg: "#0A66C2",
  },

  {
    icon: FaGithubSquare,
    link: "https://github.com/iGyanendraYadav",
    bkg: "#833AB4",
  },

  {
    icon: MdEmail,
    link: "mailto:gyanindrayadav1@gmail.com",
    bkg: "#972FBF",
  },

  {
    icon: FaInstagramSquare,
    link: "https://www.instagram.com/iGyanendraYadav/",
    bkg: "#962FBF",
  },
];

export const myExp = [
  {
    companyName: "HCL Technologies, Noida",
    from: "July 2022",
    to: "Present",
    designation: "Front End Developer",
    desc: "As a Front-End Developer, here my responsibily is to create beautiful interfaces, fixing issue related to UI and to make necessary modifications. Basically, I work with JavaScript, React Js, SASS, HTML, CSS etc.",
  },

  {
    companyName: "HCL Technologies, Noida",
    from: "March 2021",
    to: "June 2022",
    designation: "Analyst",
    desc: "Here, some additional works has been assigned to me with Incidents and RITMs. I work on Change Management too. My responsibility is to create CHANGEs in ServiceNow, to put all the required steps, plans and Documents then to send to CAB call and to move it to planned team so that they can work on it. Then after the completion of the CHANGE, I proceed it to the review state with adding some additional documents. ",
  },

  {
    companyName: "HCL Technologies, Noida",
    from: "Dec 2019",
    to: "Feb 2021",
    designation: "Graduate Engineer Trainee",
    desc: "I completed my training on Windows and Active Directory and then I was aligned to work with P&G (Procter & Gamble) - PC Services Team. My responsibility was to handle Incidents and RITMs and solve them as soon as possible.",
  },
];
