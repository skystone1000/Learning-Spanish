import { makeWeek } from '../lessonFactory.js'

export const lessons = makeWeek({
  month: 6,
  week: 4,
  topics: [
    {
      title: 'Travel Conversation',
      focus: 'Airport and hotel language',
      items: [
        ['facturar el equipaje', 'to check luggage', 'fak-too-RAR el e-kee-PA-he'],
        ['la puerta de embarque', 'the gate', 'la PWER-ta de em-BAR-ke'],
        ['el vuelo está retrasado', 'the flight is delayed', 'el BWE-lo es-TA re-tra-SA-do'],
        ['el hotel', 'the hotel', 'el o-TEL'],
        ['la reserva', 'the reservation', 'la re-SER-ba'],
      ],
      grammar: {
        title: 'Travel Needs Polite Questions',
        explanation: 'Use ¿Dónde está...? and ¿Podría...? to navigate travel problems politely.',
      },
      sentence: '¿Dónde está la puerta de embarque?',
      translation: 'Where is the gate?',
      dialogue: ['Quiero facturar el equipaje.', 'Su vuelo está retrasado.', '¿Dónde está el hotel?'],
    },
    {
      title: 'Social Conversation',
      focus: 'Meeting and making plans',
      items: [
        ['¿A qué te dedicas?', 'What do you do?', 'a ke te de-DEE-kas'],
        ['¿Qué haces este fin de semana?', 'What are you doing this weekend?', 'ke A-ses ES-te feen de se-MA-na'],
        ['¿Quieres tomar café?', 'Do you want to get coffee?', 'KYE-res to-MAR ka-FE'],
        ['nos vemos', 'see you', 'nos BE-mos'],
      ],
      grammar: {
        title: 'Plans Use Present And Future',
        explanation: 'Spanish often uses the present or ir a future to talk about near plans.',
      },
      sentence: '¿Quieres tomar café mañana?',
      translation: 'Do you want to get coffee tomorrow?',
      dialogue: ['Mucho gusto. ¿A qué te dedicas?', 'Soy ingeniera. ¿Y tú?', '¿Quieres tomar café mañana?'],
    },
    {
      title: 'Work Conversation',
      focus: 'Interview basics',
      items: [
        ['la entrevista', 'the interview', 'la en-tre-BEES-ta'],
        ['la experiencia', 'experience', 'la eks-pe-RYEN-sya'],
        ['las habilidades', 'skills', 'las a-bee-lee-DA-des'],
        ['el trabajo', 'the job', 'el tra-BA-ho'],
        ['quiero este trabajo', 'I want this job', 'KYE-ro ES-te tra-BA-ho'],
      ],
      grammar: {
        title: 'Professional Identity Uses Ser',
        explanation: 'Use ser for profession, role, and identity in work conversations.',
      },
      sentence: 'Mis habilidades son importantes',
      translation: 'My skills are important',
      dialogue: ['¿Cuál es tu experiencia?', 'Tengo cinco años de experiencia.', 'Quiero este trabajo porque me interesa.'],
    },
    {
      title: 'Reading Passage',
      focus: 'All tenses in one story',
      items: [
        ['el mercado', 'the market', 'el mer-KA-do'],
        ['la plaza', 'the square', 'la PLA-sa'],
        ['conoció', 'he or she met', 'ko-no-SYO'],
        ['había', 'there was', 'a-BEE-a'],
        ['regresará', 'he or she will return', 're-gre-sa-RA'],
      ],
      grammar: {
        title: 'Read For Time Clues',
        explanation: 'Look for markers that show present, past, future, and background information.',
      },
      sentence: 'Ayer conoció a una amiga en la plaza',
      translation: 'Yesterday he or she met a friend in the square',
      dialogue: ['Lucía vivía cerca del mercado.', 'Ayer conoció a una amiga en la plaza.', 'Mañana regresará para comprar fruta.'],
    },
    {
      title: 'Grand Review',
      focus: 'Six-month diagnostic',
      items: [
        ['repasar', 'to review', 're-pa-SAR'],
        ['la gramática', 'grammar', 'la gra-MA-tee-ka'],
        ['el vocabulario', 'vocabulary', 'el bo-ka-boo-LA-ryo'],
        ['la conversación', 'conversation', 'la kon-ber-sa-SYON'],
        ['la meta', 'the goal', 'la ME-ta'],
      ],
      grammar: {
        title: 'From Words To Conversation',
        explanation: 'Review vocabulary, tense choices, questions, and connector words to build full conversations.',
      },
      sentence: 'Mi meta es hablar con confianza',
      translation: 'My goal is to speak with confidence',
      dialogue: ['¿Cuál es tu meta?', 'Mi meta es hablar con confianza.', 'Ya puedo tener una conversación sencilla.'],
    },
  ],
})
