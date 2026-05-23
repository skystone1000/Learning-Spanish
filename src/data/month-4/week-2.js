import { makeWeek } from '../lessonFactory.js'

export const lessons = makeWeek({
  month: 4,
  week: 2,
  topics: [
    {
      title: 'Direction Words',
      focus: 'Left, right, straight',
      items: [
        ['a la derecha', 'to the right', 'a la de-RE-cha'],
        ['a la izquierda', 'to the left', 'a la ees-KYER-da'],
        ['recto', 'straight', 'REK-to'],
        ['dobla', 'turn', 'DO-bla'],
        ['gira', 'turn', 'HEE-ra'],
        ['sigue', 'continue', 'SEE-ge'],
        ['cruza', 'cross', 'KROO-sa'],
      ],
      grammar: {
        title: 'Commands For Directions',
        explanation: 'Common direction commands use short forms like sigue, dobla, and cruza.',
      },
      sentence: 'Sigue recto',
      translation: 'Continue straight',
      dialogue: ['Sigue recto.', 'Dobla a la derecha.', 'Cruza la calle.'],
    },
    {
      title: 'Prepositions Of Place',
      focus: 'Where things are',
      items: [
        ['al lado de', 'next to', 'al LA-do de'],
        ['enfrente de', 'in front of', 'en-FREN-te de'],
        ['detrás de', 'behind', 'de-TRAS de'],
        ['delante de', 'in front of', 'de-LAN-te de'],
        ['entre', 'between', 'EN-tre'],
        ['cerca de', 'near', 'SER-ka de'],
        ['lejos de', 'far from', 'LE-hos de'],
        ['encima de', 'on top of', 'en-SEE-ma de'],
        ['debajo de', 'under', 'de-BA-ho de'],
      ],
      grammar: {
        title: 'De Links Location Phrases',
        explanation: 'Many place expressions end with de: cerca de, lejos de, al lado de.',
      },
      sentence: 'Está al lado del banco',
      translation: 'It is next to the bank',
      dialogue: ['La tienda está cerca.', 'El hotel está enfrente del banco.', 'La farmacia está al lado.'],
    },
    {
      title: 'Giving Directions',
      focus: 'Step-by-step route language',
      items: [
        ['la esquina', 'the corner', 'la es-KEE-na'],
        ['la calle', 'the street', 'la KA-ye'],
        ['el semáforo', 'the traffic light', 'el se-MA-fo-ro'],
        ['hasta', 'until', 'AS-ta'],
        ['después', 'after', 'des-PWES'],
      ],
      grammar: {
        title: 'Directions Chain Actions',
        explanation: 'Use short commands in sequence: sigue, dobla, cruza, después...',
      },
      sentence: 'Dobla a la derecha en la esquina',
      translation: 'Turn right at the corner',
      dialogue: ['Sigue recto hasta el semáforo.', 'Después dobla a la izquierda.', 'Está al lado del banco.'],
    },
    {
      title: 'Estar For Location',
      focus: 'Asking where places are',
      items: [
        ['¿Dónde está?', 'Where is it?', 'DON-de es-TA'],
        ['la farmacia', 'the pharmacy', 'la far-MA-sya'],
        ['el hotel', 'the hotel', 'el o-TEL'],
        ['aquí', 'here', 'a-KEE'],
        ['allí', 'there', 'a-YEE'],
      ],
      grammar: {
        title: 'Locations Use Estar',
        explanation: 'Even permanent places use estar when you are saying where they are.',
      },
      sentence: 'El hotel está cerca de aquí',
      translation: 'The hotel is near here',
      dialogue: ['¿Dónde está la farmacia?', 'Está enfrente del hospital.', 'El hotel está cerca de aquí.'],
    },
    {
      title: 'Directions Dialogue',
      focus: 'Asking how to arrive',
      items: [
        ['¿Cómo llego a?', 'How do I get to?', 'KO-mo YE-go a'],
        ['la estación de tren', 'the train station', 'la es-ta-SYON de tren'],
        ['perdone', 'excuse me', 'per-DO-ne'],
        ['muchas gracias', 'thank you very much', 'MOO-chas GRA-syas'],
      ],
      grammar: {
        title: 'Polite Street Questions',
        explanation: 'Start with perdone before asking a stranger for directions.',
      },
      sentence: '¿Cómo llego a la estación?',
      translation: 'How do I get to the station?',
      dialogue: ['Perdone, ¿cómo llego a la estación?', 'Sigue recto y dobla a la derecha.', 'Muchas gracias.'],
    },
  ],
})
