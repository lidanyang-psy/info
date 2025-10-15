
import profile from './profile.png';
import { faAppStore, faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { faScroll, faExternalLinkAlt, faNewspaper } from '@fortawesome/free-solid-svg-icons';

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
      description: ["My research used attachment-related (close emotional bonds with important others) experiments and attribution-related (how people explain causes) principles to better understand romantic relationship quality. The work contributes to integrating attachment security enhancement with cognitive restructuring techniques — ultimately aiming to help individuals build healthier and more secure relationships.",],
      icons: null,
    },
    {
      title: "Disappeared lover",
      description: ["Do Adult Attachment Orientations Influence the Experience of Ghosting or Being Ghosted?",
        "How secure priming of adult attachment affects the Ghosting-related behaviours in romantic contexts."],
      icons: null,
    },
    {
      title: "AI in Love:",
      description: ["To explore whether digital intervention and chatbots powered by generative artificial intelligence could be used to improve emotional and physical intimacy for couples. I am currently collaborating with researchers and relationship therapists to address how we can use AI chatbots in a safe and ethical way to improve access to relationship interventions for a wider population.",],
      icons: null,
    }
  ],
}

export const projects = {
  title: "Research Impacts",
  cards: [
    {
      title: "HARRT",
      description: "Validation of a new assessment of hostile attribution bias in romantic relationships: The Hostile Attributions in Romantic Relationships Test.",
      icons: [
        {
          icon: faScroll,
          link: "https://doi.org/10.1111/jmft.12694",
        },
      ]
    },
    {
      title: "SPSP Community",
      description: "Feeling Secure Affects the Way You Interpret the World.",
      icons: [
        {
          icon: faExternalLinkAlt,
          link: "https://spsp.org/news/character-and-context-blog/li-attachment-attribution-style-feelings-of-security",
        },
      ]
    },
    {
      title: "The PsyPost",
      description: "Insecure attachment linked to a psychological phenomenon known as negative attribution bias.",
      icons: [
        {
          icon: faNewspaper,
          link: "https://spsp.org/news/character-and-context-blog/li-attachment-attribution-style-feelings-of-security",
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