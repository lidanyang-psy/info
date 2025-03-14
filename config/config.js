
import profile from './profile.png';
import { faAppStore, faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
  name: "Danyang",
  links: [
    {
      title: "About",
      link: "#about",
    },
    {
      title: "Projects",
      link: "#projects",
    },
    {
      title: "Contact",
      link: "#contact",
    },
    {
      title: "Links",
      link: "/links",
    },
    {
      title: "Blog",
      link: "https://medium.com/@hashirshoaeb",
    }
  ],
}
export const intro = {
  title: "Hey, I'm Danyang",
  description: ["My research broadly centres on romantic relationships.",
    "\nI am passionate about using psychology to help people live better lives."],
  image: profile.src,
  buttons: [
    {
      title: "Contact Me",
      link: "#contact",
      isPrimary: true,
    },
    // {
    //   title: "Resume",
    //   link: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",
    //   isPrimary: false,
    // },
  ],
}

export const about = {
  title: "About Me",
  description: [
    "I am a Postdoctral Researcher at the University of Birmingham, UK. I graduated from the University of Bristol in 2024 with a Doctral degree in Social Psychology. I'm a certified therapist, National Career Development Association (NCDA) career development practitioner, and under training of Emotionally Focused Therapy.",
    "My research broadly centres on the processes and mechanisms that drive adult attachment. Briefly, on the basis of information abstracted from consistent and long-term attachment relationships, individuals develop mental models of attachment, or attachment styles. A key feature of attachment styles is that they predictor how individuals respond to threat and deal with stress and distress. Much of my research over the years has been concerned with the way that attachment styles and attachment-relevant hormones influence thought, behaviour and feelings in interpersonal relationships and social life more generally.",
    "My current research projects focus on (1) developing digital health interventions for couples, especially on reducing negative attribution towards partners; (2) evaluating whether we can use chatbots to make people feel 'secure' in love; (3) exploring online dating patterns. If you’re interested in hearing more about my research, please navigate to the research page.",
    "While I currently primarily work in research, I continue to see clients remotely. I work with individuals and couples. I specialise in self exploration, communication problems in relationship and attribution intervention."
  ],
}

export const work = {
  title: "Research Projects",
  cards: [
    {
      title: "Whether we correctly interpret partners?",
      description: ["Insecure attachment orientation in adults and children and negative attribution bias: A meta-analysis. https://doi.org/10.1177/01461672221117690",
        "Validation of a new assessment of hostile attribution bias in romantic relationships: The Hostile Attributions in Romantic Relationships Test. https://doi.org/10.1111/jmft.12694",
        "",
        "How hostile attribution bias affects attachment insecurity and relationship satisfaction during COVID pandemic, from the cross-cultural perspective",
        "",
        "Attachment orientations bias the attentional processing of images of relationship-relevant interactions, moderated by hostile attribution bias.",
        "",
        "Feeling Secure Affects the Way You Interpret the World. SPSP Community. https://spsp.org/news/character-and-context-blog/li-attachment-attribution-style-feelings-of-security",
        "",
        "Insecure attachment linked to a psychological phenomenon known as negative attribution bias. The PsyPost. https://www.psypost.org/insecure-attachment-linked-to-a-psychological-phenomenon-known-as-negative-attribution-bias/"],

      icons: null,
    },
    {
      title: "Disappeared lover",
      description: ["Do Adult Attachment Orientations Influence the Experience of Ghosting or Being Ghosted?",
        "How secure priming of adult attachment affects the Ghosting-related behaviours in romantic contexts."],
      icons: null,
    }
  ],
}

export const projects = {
  title: "Projects",
  cards: [
    {
      title: "StarBook",
      description: "A digital diary and mood tracking app that helps you in keeping track of your mood and productivity throughout the month/year.",
      icons: [
        {
          icon: faAppStore,
          link: "https://apps.apple.com/us/app/starbook-journal-ai-diary/id1552418289",
        },
        {
          icon: faGithub,
          link: "https://github.com/hashirshoaeb/star_book",
        },
      ]
    },
    {
      title: "QuranTalk",
      description: "An emotional well being and mental health app. The app helps people to navigate their emotions in the light of the Quran.",
      icons: [
        {
          icon: faAppStore,
          link: "https://apps.apple.com/us/app/qurantalk/id1563425149",
        },
        {
          icon: faGooglePlay,
          link: "https://play.google.com/store/apps/details?id=com.ayahemotion.quran_talk",
        },
      ]
    },
    {
      title: "Portfolio",
      description: "A portfolio website template that helps you showcase your work, projects and skills as a software developer or freelancer.",
      icons: [
        {
          icon: faGithub,
          link: "https://github.com/hashirshoaeb/portfolio",
        },
      ]
    },
  ],
}

export const contact = {
  title: "Get in touch",
  description: "Coffee Chat! Please do not hesitate to schedule a meeting. Alternatively, feel free to reach out directly by email.",
  buttons: [
    {
      title: "Email Me",
      link: "mailto:danyang.li@bristol.ac.uk",
      isPrimary: true,
    },
    {
      title: "Schedule Meeting",
      link: "/404",
      isPrimary: false,
    },
  ]
}

// SEARCH ENGINE 
export const SEO = {
  // 50 - 60 char  
  title: "Danyang Li | Psychologist | Romantic Relationship Researcher",
  description: "I am passionate about using psychology to help people live better lives.",
  image: profile.src,
}

export const links = {
  image: profile.src,
  title: "@danyangli",
  description: "A list of links to my social media accounts and other websites.",
  cards: [
    {
      title: "My website",
      link: "https://lidanyang-psy.github.io/info",
    },
    // {
    //   title: "QuranTalk App",
    //   link: "https://www.qurantalk.app/",
    // },
    // {
    //   title: "StarBook App",
    //   link: "https://starbook.dev/",
    // },
    // {
    //   title: "My GitHub",
    //   link: "https://github.com/hashirshoaeb/",
    // },
    {
      title: "My LinkedIn",
      link: "https://www.linkedin.com/in/danyang-li-36402434b/",
    },
  ]
}