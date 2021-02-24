import Home from './access/svg/home'
import Video from './access/svg/video'
import Notification from './access/svg/notification';
import Plan from './access/svg/plan';
import Community from './access/svg/community';
import Help from './access/svg/help';

export const menu = [
  {
    id: '1',
    name: 'Inicio',
    link: '/inicio',
    selected: false,
    icon: <Home />,
  },  {
    id: '2',
    name: 'Mis cursos',
    link: '/mis-cursos',
    selected: false,
    icon: <Video />,
  },  {
    id: '3',
    name: 'Quizzes',
    link: '/quizzes',
    selected: false,
    icon: <Notification />,
  },  {
    id: '4',
    name: 'Mi plan de estudios',
    link: '/mi-plan-de-estudios',
    selected: false,
    icon: <Plan />,
  },  {
    id: '5',
    name: 'Comunidad',
    link: '/comunidad',
    selected: true,
    icon: <Community />,
  },  {
    id: '6',
    name: 'Centro de ayuda',
    link: '/centro-de-ayuda',
    selected: false,
    icon: <Help />,
  },
];


export const tabs = [{
  id: '1',
  name: 'Populares',
  active: true,

}, {
  id: '2',
  name: 'Nuevos',
  active: false,

},{
  id: '3',
  name: 'Seguidos',
  active: false,
}];

export const row = [{
  id: 1,
  title: '¿Cuáles son los múltiplos del 7?',
  subTitle: 'La verdad no me queda muy claro cuáles son los múltiplos del 7 porque...',
  answersCount:  72,
  isStar: true,
  theme: 'Pregunta juan.c23 en',
  subject: 'Matemáticas 6º',
},{
  id: 2,
  title: '¿Qué es el quíntuple de un número?',
  subTitle: 'Es la primera vez que escucho la palabra... me gustaría que alguien me exp...',
  answersCount:  153,
  isStar: false,
  theme: 'Pregunta juliaraujo en',
  subject: 'Matemáticas 6º',
},{
  id: 3,
  title: '¿Cuál es el Mínimo Común Múltiplo (mcm) entre 8 y 12?',
  subTitle: 'Creo que lo había entendido de otra manera. En la escuela nos dijeron que...',
  answersCount:  221,
  isStar: false,
  theme: 'Pregunta miguesarmiento en ',
  subject: 'Matemáticas 6º',
},{
  id: 4,
  title: '¿Cuál de los siguientes números es primo?',
  subTitle: 'No me queda claro cuáles son los primos',
  answersCount:  98,
  isStar: true,
  theme: 'Pregunta 3v4l0p3z en',
  subject: 'Matemáticas 6º',
},{
  id: 5,
  title: 'Un recipiente contiene 0,75 litros de jugo de naranja. Si el jugo se reparte en forma equitativa a tres niños, ¿cuánto...',
  subTitle: '',
  answersCount:  323,
  isStar: false,
  theme: 'Pregunta juliaraujo en',
  subject: 'Matemáticas 6º',
},{
  id: 6,
  title: '¿Cuál es el Mínimo Común Múltiplo (mcm) entre 8 y 12?',
  subTitle: 'Creo que lo había entendido de otra manera. En la escuela nos dijeron que...',
  answersCount:  221,
  isStar: true,
  theme: 'Pregunta juan.c23 en',
  subject: 'Matemáticas 6º',
}];

export const score = {
  fire: 0,
  police: 0,
  flower: 0,
};
