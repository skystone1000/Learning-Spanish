import { makeWeek } from '../lessonFactory.js'

export const lessons = makeWeek({
  month: 5,
  week: 2,
  topics: [
    {
      title: 'Ir And Ser In Preterite',
      focus: 'Same forms, context decides',
      items: [
        ['fui', 'I went or was', 'fwee'],
        ['fuiste', 'you went or were', 'FWEES-te'],
        ['fue', 'he or she went or was', 'fwe'],
        ['fuimos', 'we went or were', 'FWEE-mos'],
        ['fueron', 'they went or were', 'FWE-ron'],
      ],
      grammar: {
        title: 'Ir And Ser Share Forms',
        explanation: 'The preterite forms of ir and ser are identical. Context tells you whether it means went or was.',
      },
      sentence: 'Fui al cine',
      translation: 'I went to the movies',
      dialogue: ['Fui al parque.', 'La clase fue interesante.', 'Fuimos al museo.'],
    },
    {
      title: 'Estar And Tener',
      focus: 'Irregular past stems',
      items: [
        ['estuve', 'I was', 'es-TOO-be'],
        ['estuvo', 'he or she was', 'es-TOO-bo'],
        ['tuve', 'I had', 'TOO-be'],
        ['tuvo', 'he or she had', 'TOO-bo'],
        ['un problema', 'a problem', 'oon pro-BLE-ma'],
      ],
      grammar: {
        title: 'Irregular Stems',
        explanation: 'Estar uses estuv- and tener uses tuv- in the preterite.',
      },
      sentence: 'Tuve un problema',
      translation: 'I had a problem',
      dialogue: ['Estuve enfermo.', 'Tuve un problema.', 'Ella estuvo en casa.'],
    },
    {
      title: 'Hacer, Poder, Querer',
      focus: 'More irregular preterites',
      items: [
        ['hice', 'I did or made', 'EE-se'],
        ['hizo', 'he or she did or made', 'EE-so'],
        ['pude', 'I could or managed to', 'POO-de'],
        ['pudo', 'he or she could', 'POO-do'],
        ['quise', 'I wanted or tried', 'KEE-se'],
        ['quiso', 'he or she wanted or tried', 'KEE-so'],
      ],
      grammar: {
        title: 'Meaning Can Shift In Preterite',
        explanation: 'Poder in the preterite often means managed to, and querer can mean tried to.',
      },
      sentence: 'Hice la tarea',
      translation: 'I did the homework',
      dialogue: ['Hice la cena.', 'No pude salir.', 'Quise ayudar.'],
    },
    {
      title: 'Decir, Venir, Saber',
      focus: 'Irregular narrative verbs',
      items: [
        ['dije', 'I said', 'DEE-he'],
        ['dijo', 'he or she said', 'DEE-ho'],
        ['vine', 'I came', 'BEE-ne'],
        ['vino', 'he or she came', 'BEE-no'],
        ['supe', 'I found out', 'SOO-pe'],
        ['supo', 'he or she found out', 'SOO-po'],
      ],
      grammar: {
        title: 'Saber Changes Meaning',
        explanation: 'Saber in preterite often means found out rather than knew.',
      },
      sentence: 'Dije la verdad',
      translation: 'I told the truth',
      dialogue: ['Dije hola.', 'Mi amigo vino tarde.', 'Supe la noticia ayer.'],
    },
    {
      title: 'Mixed Irregular Narrative',
      focus: 'Telling what happened',
      items: [
        ['el fin de semana', 'the weekend', 'el feen de se-MA-na'],
        ['vi', 'I saw', 'bee'],
        ['una película', 'a movie', 'OO-na pe-LEE-koo-la'],
        ['palomitas', 'popcorn', 'pa-lo-MEE-tas'],
        ['divertido', 'fun', 'dee-ber-TEE-do'],
      ],
      grammar: {
        title: 'Narratives Combine Forms',
        explanation: 'Short stories in the past often mix regular and irregular preterite verbs.',
      },
      sentence: 'El fin de semana fui al cine',
      translation: 'On the weekend I went to the movies',
      dialogue: ['El fin de semana fui al cine.', 'Vi una película y comí palomitas.', 'Fue muy divertido.'],
    },
  ],
})
