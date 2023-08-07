//  icons
import {
  FiInstagram,
  FiGithub,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
  FiLinkedin,
  FiFacebook,
} from 'react-icons/fi';



// projects images
import Project1 from './assets/img/projects/w1.PNG';
import Project2 from './assets/img/projects/w2.PNG';
import Project3 from './assets/img/projects/w3.PNG';
import Project4 from './assets/img/projects/w4.PNG';
import Project5 from './assets/img/projects/w5.PNG';
import Project6 from './assets/img/projects/w6.PNG';

// skills images
import SkillImg1 from './assets/img/skills/html5.png';
import SkillImg2 from './assets/img/skills/css3.png';
import SkillImg3 from './assets/img/skills/js.png';
import SkillImg4 from './assets/img/skills/reactjs.png';
import SkillImg5 from './assets/img/skills/nextjs.png';
import SkillImg6 from './assets/img/skills/nodejs.png';
import SkillImg7 from './assets/img/skills/git.png';
import SkillImg8 from './assets/img/skills/figma.png';

// testimonial images
import TestiImage1 from './assets/img/testimonials/testimonial-1.webp';
import TestiImage2 from './assets/img/testimonials/testimonial-2.webp';
import TestiImage3 from './assets/img/testimonials/testimonial-3.webp';

// navigation
export const navigation = [
  {
    name: 'home',
    href: 'home',
  },
  {
    name: 'about',
    href: 'about',
  },
  {
    name: 'portfolio',
    href: 'portfolio',
  },
  {
    name: 'services',
    href: 'services',
  },
  {
    name: 'Feedback',
    href: 'Feedback',
  },
  {
    name: 'contact',
    href: 'contact',
  },
];

// social
export const social = [
  {
    icon: <FiFacebook />,
    href: 'https://www.facebook.com/rakib60089',
  },
  {
    icon: <FiInstagram />,
    href: '',
  },
  {
    icon: <FiGithub />,
    href: 'https://github.com/Rakib-cloud',
  },
  {
    icon: <FiLinkedin />,
    href: 'https://www.linkedin.com/in/rakibul-islam-69a932173/',
  },
];


// projects
export const projectsData = [
  {
    id: '1',
    image: Project1,
    name: 'Women Selopia',
    category: 'Ecommerce',
    details:'Ecommerce website.',
    livelink:'https://woman.selopia.com/',
  },
  {
    id: '2',
    image: Project2,
    name: 'Sports Ecommerce',
    category: 'Ecommerce',
    details:'Sports Item sell',
    livelink:'https://sports.selopia.com/',
  },
  {
    id: '3',
    image: Project3,
    name: 'Client Managment System',
    category: 'Management System',
    details:'Manage all the clients and their managment system within one platform',
    livelink:'https://rakibstuitorialpoint.netlify.app/',
  },
  {
    id: '4',
    image: Project4,
    name: 'School Managment System',
    category: 'Management System',
    details:'This is School managment website where a school can manage all their needs',
    livelink:'https://school.selopian.us/',
  },
  {
    id: '5',
    image: Project5,
    name: 'RS Computer Zone',
    category: 'Management System',
    details:'This is Manufacture website where any user can visits and buy his computer parts whole sell.An Interacive Admin Dashboard is present also User dashboard',
    livelink:'https://manufacture-computer.web.app/',
  },
  {
    id: '6',
    image: Project6,
    name: 'RFL Best Buy warehouse',
    category: 'Management System',
    details:'This is warehouse management website where any businessman can store his own products and manage it easily',
    livelink:'https://warehousemanagement-60ea7.web.app/',
  },
];

// projects
export const projectsNav = [
  {
    name: 'all',
  },
  {
    name: 'Ecommerce',
  },
  {
    name: 'Management System',
  },

];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg8,
  },
];

// services
export const services = [
  {
    icon: <FiLayout />,
    name: 'Web Development',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
  {
    icon: <FiSettings />,
    name: 'Iot Works',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
  {
    icon: <FiPenTool />,
    name: 'Content Writing',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
  {
    icon: <FiTag />,
    name: 'Teaching',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
];

// testimonials
export const testimonials = [
  {
    authorImg: TestiImage1,
    authorText:
      'He is good work in my company.Deliver all task timely and create a positive response for my clients.',
    authorName: 'Uday',
    authorPosition: 'CEO of,ANTT Robotics',
  },
  {
    authorImg: TestiImage2,
    authorText:
      'He gives a valuable contribution in our Education department',
    authorName: 'Dr.Sumon Ahamed',
    authorPosition: 'Senior Professor of,UIU',
  },
  {
    authorImg: TestiImage3,
    authorText:
      'He is good at Lead Generator',
    authorName: 'Shakik Mahamud',
    authorPosition: 'CEO of, Thesis support for Bd Students',
  },
  {
    authorImg: TestiImage3,
    authorText:
      'He delivered his task properly.',
    authorName: 'Bipul Chandra Roy',
    authorPosition: 'Senior Software Engineer,Selopia',
  },
  {
    authorImg: TestiImage3,
    authorText:
      'He delivered Our academic final year project properly.We feel better satisfaction for his work.',
    authorName: 'Touhidul Haque Utsho',
    authorPosition: 'Project manager,Admiz',
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: 'Have a question?',
    subtitle: 'I am here to help you.',
    description: 'Email me at mislam172131@bscse.uiu.ac.bd',
  },
  {
    icon: <FiMapPin />,
    title: 'Current Location',
    subtitle: 'Badda,Dhaka',
    description: 'Serving clients worldwide',
  },
];
