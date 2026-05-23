import { makeWeek } from '../lessonFactory.js'

export const lessons = makeWeek({
  month: 2,
  week: 4,
  topics: [
    {
      title: 'Telling Time',
      focus: 'Hours and half hours',
      items: [
        ['¿Qué hora es?', 'What time is it?', 'ke O-ra es'],
        ['Es la una', "It's one o'clock", 'es la OO-na'],
        ['Son las dos', "It's two o'clock", 'son las dos'],
        ['y media', 'and a half', 'ee ME-dya'],
        ['y cuarto', 'quarter past', 'ee KWAR-to'],
      ],
      grammar: {
        title: 'One Is Singular',
        explanation: "Use Es la una for one o'clock. Use Son las with all other hours.",
      },
      sentence: 'Son las dos y media',
      translation: "It's two thirty",
      dialogue: ['¿Qué hora es?', 'Son las tres y media.', 'Gracias.'],
    },
    {
      title: 'Minutes',
      focus: 'Precise time',
      items: [
        ['y diez', 'ten past', 'ee dyez'],
        ['menos cinco', 'five to', 'ME-nos SEEN-ko'],
        ['mediodía', 'noon', 'me-dyo-DEE-a'],
        ['medianoche', 'midnight', 'me-dya-NO-che'],
        ['en punto', "on the dot", 'en POON-to'],
      ],
      grammar: {
        title: 'Y Adds, Menos Subtracts',
        explanation: 'Use y for minutes after the hour and menos for minutes before the next hour.',
      },
      sentence: 'Son las cuatro menos cinco',
      translation: "It's five to four",
      dialogue: ['Son las tres y diez.', 'La clase es a mediodía.', 'La película empieza a medianoche.'],
    },
    {
      title: 'AM And PM',
      focus: 'Parts of the day',
      items: [
        ['de la mañana', 'in the morning', 'de la ma-NYA-na'],
        ['de la tarde', 'in the afternoon', 'de la TAR-de'],
        ['de la noche', 'at night', 'de la NO-che'],
        ['a las ocho', 'at eight', 'a las O-cho'],
      ],
      grammar: {
        title: 'Use A Las For At A Time',
        explanation: 'Use a la una for at one and a las for all other times.',
      },
      sentence: 'Trabajo a las ocho de la mañana',
      translation: 'I work at eight in the morning',
      dialogue: ['¿A qué hora estudias?', 'A las siete de la tarde.', 'Yo trabajo por la mañana.'],
    },
    {
      title: 'Numbers 100-1000',
      focus: 'Hundreds and one thousand',
      items: [
        ['cien', 'one hundred', 'syen'],
        ['ciento uno', 'one hundred one', 'SYEN-to OO-no'],
        ['doscientos', 'two hundred', 'dos-SYEN-tos'],
        ['trescientos', 'three hundred', 'tres-SYEN-tos'],
        ['cuatrocientos', 'four hundred', 'kwa-tro-SYEN-tos'],
        ['quinientos', 'five hundred', 'kee-NYEN-tos'],
        ['seiscientos', 'six hundred', 'says-SYEN-tos'],
        ['mil', 'one thousand', 'meel'],
      ],
      grammar: {
        title: 'Hundreds Can Change Gender',
        explanation: 'Doscientos changes to doscientas before feminine nouns.',
      },
      sentence: 'Cuesta quinientos pesos',
      translation: 'It costs five hundred pesos',
      dialogue: ['¿Cuánto cuesta?', 'Cuesta doscientos euros.', 'Tengo mil pesos.'],
    },
    {
      title: 'Dates',
      focus: 'Calendar dates and birthdays',
      items: [
        ['¿Cuál es la fecha?', 'What is the date?', 'kwal es la FE-cha'],
        ['el cinco de mayo', 'May fifth', 'el SEEN-ko de MA-yo'],
        ['mi cumpleaños', 'my birthday', 'mee koom-ple-A-nyos'],
        ['hoy', 'today', 'oy'],
        ['mañana', 'tomorrow', 'ma-NYA-na'],
      ],
      grammar: {
        title: 'Dates Use El',
        explanation: 'Spanish dates use el plus the number plus de plus the month: el cinco de mayo.',
      },
      sentence: 'Mi cumpleaños es el cinco de mayo',
      translation: 'My birthday is May fifth',
      dialogue: ['¿Cuál es la fecha?', 'Es el cinco de mayo.', 'Mañana es mi cumpleaños.'],
    },
  ],
})
