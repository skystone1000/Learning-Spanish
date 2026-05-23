import { makeWeek } from '../lessonFactory.js'

export const lessons = makeWeek({
  month: 6,
  week: 1,
  topics: [
    {
      title: 'Imperfect -AR',
      focus: 'Habitual or ongoing past',
      items: [
        ['hablaba', 'I or he spoke, used to speak', 'a-BLA-ba'],
        ['hablabas', 'you used to speak', 'a-BLA-bas'],
        ['hablábamos', 'we used to speak', 'a-BLA-ba-mos'],
        ['hablabais', 'you all used to speak in Spain', 'a-bla-BICE'],
        ['hablaban', 'they used to speak', 'a-BLA-ban'],
      ],
      grammar: {
        title: 'Imperfect For Habit',
        explanation: 'Use imperfect for repeated past habits, background descriptions, and ongoing past states.',
      },
      sentence: 'De niño hablaba mucho',
      translation: 'As a child I used to speak a lot',
      dialogue: ['Cuando era niño, hablaba mucho.', 'Mi hermana estudiaba todos los días.', 'Jugábamos en el parque.'],
    },
    {
      title: 'Imperfect -ER And -IR',
      focus: 'Past habits with -ER and -IR',
      items: [
        ['comía', 'I or he used to eat', 'ko-MEE-a'],
        ['comías', 'you used to eat', 'ko-MEE-as'],
        ['vivía', 'I or he used to live', 'bee-BEE-a'],
        ['vivías', 'you used to live', 'bee-BEE-as'],
        ['leíamos', 'we used to read', 'le-EE-a-mos'],
      ],
      grammar: {
        title: '-ER And -IR Share Imperfect Endings',
        explanation: 'Regular -ER and -IR verbs use -ía, -ías, -ía, -íamos, -íais, -ían.',
      },
      sentence: 'Vivía en Madrid',
      translation: 'I used to live in Madrid',
      dialogue: ['Antes vivía en Madrid.', 'Comíamos con mi familia.', 'Leíamos por la noche.'],
    },
    {
      title: 'Irregular Imperfects',
      focus: 'Ser, ir, and ver',
      items: [
        ['era', 'I or he was', 'EH-ra'],
        ['eras', 'you were', 'EH-ras'],
        ['iba', 'I or he was going', 'EE-ba'],
        ['ibas', 'you were going', 'EE-bas'],
        ['veía', 'I or he was seeing', 'be-EE-a'],
        ['veías', 'you were seeing', 'be-EE-as'],
      ],
      grammar: {
        title: 'Only Three Main Irregulars',
        explanation: 'Ser, ir, and ver are the core irregular verbs in the imperfect.',
      },
      sentence: 'Cuando era niño, iba al parque',
      translation: 'When I was a child, I used to go to the park',
      dialogue: ['Cuando era niña, iba al parque.', 'Veía a mis amigos.', 'Era muy divertido.'],
    },
    {
      title: 'Using Imperfect',
      focus: 'Background and routine',
      items: [
        ['cuando era niño', 'when I was a child', 'KWAN-do EH-ra NEE-nyo'],
        ['siempre', 'always', 'SYEM-pre'],
        ['todos los días', 'every day', 'TO-dos los DEE-as'],
        ['jugaba', 'I used to play', 'hoo-GA-ba'],
        ['vivía', 'I used to live', 'bee-BEE-a'],
      ],
      grammar: {
        title: 'Set The Scene',
        explanation: 'The imperfect paints background: age, weather, time, feelings, and repeated routines.',
      },
      sentence: 'Todos los días comía con mi familia',
      translation: 'Every day I ate with my family',
      dialogue: ['Cuando era niño, jugaba al fútbol.', 'Vivía en Madrid.', 'Todos los días comía con mi familia.'],
    },
    {
      title: 'Preterite Vs Imperfect Intro',
      focus: 'Completed action or background',
      items: [
        ['comí', 'I ate once', 'ko-MEE'],
        ['comía', 'I was eating or used to eat', 'ko-MEE-a'],
        ['hablé', 'I spoke once', 'a-BLE'],
        ['hablaba', 'I was speaking or used to speak', 'a-BLA-ba'],
      ],
      grammar: {
        title: 'Event Or Background',
        explanation: 'Preterite reports completed events. Imperfect describes background, habit, or ongoing action.',
      },
      sentence: 'Comía cuando llegó Juan',
      translation: 'I was eating when Juan arrived',
      dialogue: ['Ayer comí pizza.', 'Antes comía pizza todos los viernes.', 'Mientras comía, llegó Juan.'],
    },
  ],
})
