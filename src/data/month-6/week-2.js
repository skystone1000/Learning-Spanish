import { makeWeek } from '../lessonFactory.js'

export const lessons = makeWeek({
  month: 6,
  week: 2,
  topics: [
    {
      title: 'Specific Event Vs Background',
      focus: 'Preterite and imperfect together',
      items: [
        ['ayer comí', 'yesterday I ate', 'a-YER ko-MEE'],
        ['mientras comía', 'while I was eating', 'MYEN-tras ko-MEE-a'],
        ['llegó', 'he or she arrived', 'ye-GO'],
        ['de repente', 'suddenly', 'de re-PEN-te'],
      ],
      grammar: {
        title: 'Interrupted Action',
        explanation: 'Use imperfect for the action in progress and preterite for the interrupting event.',
      },
      sentence: 'Mientras comía, llegó Juan',
      translation: 'While I was eating, Juan arrived',
      dialogue: ['Ayer comí pizza.', 'Mientras comía, llegó Juan.', 'Fue una sorpresa.'],
    },
    {
      title: 'Signal Words',
      focus: 'Clues for past tenses',
      items: [
        ['una vez', 'one time', 'OO-na bes'],
        ['finalmente', 'finally', 'fee-nal-MEN-te'],
        ['siempre', 'always', 'SYEM-pre'],
        ['a veces', 'sometimes', 'a BE-ses'],
        ['cuando era joven', 'when I was young', 'KWAN-do EH-ra HO-ben'],
      ],
      grammar: {
        title: 'Signals Help, But Context Rules',
        explanation: 'Ayer and una vez often point to preterite. Siempre and a veces often point to imperfect.',
      },
      sentence: 'Cuando era joven, siempre leía',
      translation: 'When I was young, I always read',
      dialogue: ['Una vez viajé a Perú.', 'Cuando era joven, viajaba mucho.', 'Finalmente llegué a casa.'],
    },
    {
      title: 'Both In One Sentence',
      focus: 'Narrative combinations',
      items: [
        ['estaba durmiendo', 'I was sleeping', 'es-TA-ba door-MYEN-do'],
        ['sonó el teléfono', 'the phone rang', 'so-NO el te-LE-fo-no'],
        ['mientras llovía', 'while it was raining', 'MYEN-tras yo-BEE-a'],
        ['yo leía', 'I was reading', 'yo le-EE-a'],
      ],
      grammar: {
        title: 'Imperfect Frames The Scene',
        explanation: 'The imperfect can describe what was happening when a preterite event occurred.',
      },
      sentence: 'Estaba durmiendo cuando sonó el teléfono',
      translation: 'I was sleeping when the phone rang',
      dialogue: ['Mientras llovía, yo leía.', 'Estaba durmiendo.', 'Entonces sonó el teléfono.'],
    },
    {
      title: 'Narrating A Past Story',
      focus: 'Scene plus event',
      items: [
        ['eran las tres', "it was three o'clock", 'EH-ran las tres'],
        ['hacía sol', 'it was sunny', 'a-SEE-a sol'],
        ['llegó una carta', 'a letter arrived', 'ye-GO OO-na KAR-ta'],
        ['una historia', 'a story', 'OO-na ees-TO-rya'],
      ],
      grammar: {
        title: 'Set Then Move',
        explanation: 'Start with imperfect background, then use preterite for the event that moves the story forward.',
      },
      sentence: 'Hacía sol y llegó una carta',
      translation: 'It was sunny and a letter arrived',
      dialogue: ['Eran las tres de la tarde.', 'Hacía sol.', 'De repente llegó una carta.'],
    },
    {
      title: 'Story Time',
      focus: 'Reading in past tenses',
      items: [
        ['el pueblo', 'the town', 'el PWE-blo'],
        ['la carta', 'the letter', 'la KAR-ta'],
        ['el viaje', 'the trip', 'el BYA-he'],
        ['recordó', 'he or she remembered', 're-kor-DO'],
        ['sonreía', 'he or she was smiling', 'son-rre-EE-a'],
      ],
      grammar: {
        title: 'Comprehension Strategy',
        explanation: 'Identify background details first, then underline the completed events.',
      },
      sentence: 'La niña leyó la carta',
      translation: 'The girl read the letter',
      dialogue: ['La niña vivía en un pueblo.', 'Un día recibió una carta.', 'Mientras leía, sonreía.'],
    },
  ],
})
