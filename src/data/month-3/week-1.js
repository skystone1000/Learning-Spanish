import { makeWeek } from '../lessonFactory.js'

export const lessons = makeWeek({
  month: 3,
  week: 1,
  topics: [
    {
      title: 'Hablar',
      focus: '-AR verb endings',
      items: [
        ['hablo', 'I speak', 'A-blo'],
        ['hablas', 'you speak', 'A-blas'],
        ['habla', 'he or she speaks', 'A-bla'],
        ['hablamos', 'we speak', 'a-BLA-mos'],
        ['habláis', 'you all speak in Spain', 'a-BLICE'],
        ['hablan', 'they speak', 'A-blan'],
      ],
      grammar: {
        title: 'Regular -AR Present',
        explanation: 'Remove -ar and add -o, -as, -a, -amos, -áis, or -an.',
      },
      sentence: 'Hablo español',
      translation: 'I speak Spanish',
      dialogue: ['Yo hablo español.', '¿Hablas inglés?', 'Sí, hablamos inglés.'],
    },
    {
      title: 'Everyday -AR Verbs',
      focus: 'Work, study, listen, walk, watch',
      items: [
        ['trabajar', 'to work', 'tra-ba-HAR'],
        ['estudiar', 'to study', 'es-too-DYAR'],
        ['escuchar', 'to listen', 'es-koo-CHAR'],
        ['caminar', 'to walk', 'ka-mee-NAR'],
        ['mirar', 'to watch or look', 'mee-RAR'],
      ],
      grammar: {
        title: 'Infinitives End In -AR',
        explanation: 'The infinitive is the dictionary form. Conjugate it to match the subject.',
      },
      sentence: 'Ella estudia mucho',
      translation: 'She studies a lot',
      dialogue: ['Trabajo los lunes.', 'Estudio español.', 'Escucho música.'],
    },
    {
      title: 'Action -AR Verbs',
      focus: 'Buying, traveling, dancing, singing, playing',
      items: [
        ['comprar', 'to buy', 'kom-PRAR'],
        ['viajar', 'to travel', 'bya-HAR'],
        ['bailar', 'to dance', 'by-LAR'],
        ['cantar', 'to sing', 'kan-TAR'],
        ['tocar', 'to play an instrument', 'to-KAR'],
      ],
      grammar: {
        title: 'Tocar For Instruments',
        explanation: 'Use tocar for playing an instrument: tocar la guitarra, tocar el piano.',
      },
      sentence: 'Nosotros viajamos en verano',
      translation: 'We travel in summer',
      dialogue: ['Me gusta bailar.', 'Quiero comprar pan.', 'Toco la guitarra.'],
    },
    {
      title: 'Sentence Building',
      focus: 'Subjects plus verbs plus details',
      items: [
        ['yo hablo', 'I speak', 'yo A-blo'],
        ['ella estudia', 'she studies', 'EH-ya es-TOO-dya'],
        ['nosotros viajamos', 'we travel', 'no-SO-tros bya-HA-mos'],
        ['ellos trabajan', 'they work', 'EH-yos tra-BA-han'],
      ],
      grammar: {
        title: 'Basic Word Order',
        explanation: 'A simple Spanish sentence often uses subject, verb, and extra information.',
      },
      sentence: 'Nosotros viajamos en verano',
      translation: 'We travel in summer',
      dialogue: ['Yo hablo español.', 'Ella estudia mucho.', 'Nosotros viajamos mañana.'],
    },
    {
      title: 'Negation',
      focus: 'No before the verb',
      items: [
        ['no hablo', 'I do not speak', 'no A-blo'],
        ['no trabajo', 'I do not work', 'no tra-BA-ho'],
        ['no estudio', 'I do not study', 'no es-TOO-dyo'],
        ['¿Hablas inglés?', 'Do you speak English?', 'A-blas een-GLES'],
      ],
      grammar: {
        title: 'No Is Simple',
        explanation: 'Put no directly before the conjugated verb to make a sentence negative.',
      },
      sentence: 'No hablo francés',
      translation: 'I do not speak French',
      dialogue: ['¿Hablas francés?', 'No, no hablo francés.', 'Hablo español.'],
    },
  ],
})
