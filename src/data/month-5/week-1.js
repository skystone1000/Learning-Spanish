import { makeWeek } from '../lessonFactory.js'

export const lessons = makeWeek({
  month: 5,
  week: 1,
  topics: [
    {
      title: 'Preterite -AR',
      focus: 'Completed past actions',
      items: [
        ['hablé', 'I spoke', 'a-BLE'],
        ['hablaste', 'you spoke', 'a-BLAS-te'],
        ['habló', 'he or she spoke', 'a-BLO'],
        ['hablamos', 'we spoke', 'a-BLA-mos'],
        ['hablasteis', 'you all spoke in Spain', 'a-blas-TAYS'],
        ['hablaron', 'they spoke', 'a-BLA-ron'],
      ],
      grammar: {
        title: 'Regular -AR Preterite',
        explanation: 'Use the preterite for completed past actions. -AR endings are -é, -aste, -ó, -amos, -asteis, -aron.',
      },
      sentence: 'Ayer hablé con mi madre',
      translation: 'Yesterday I spoke with my mother',
      dialogue: ['Ayer hablé español.', 'Ella estudió mucho.', 'Nosotros viajamos el lunes.'],
    },
    {
      title: 'Preterite -ER And -IR',
      focus: 'Completed actions with -ER and -IR',
      items: [
        ['comí', 'I ate', 'ko-MEE'],
        ['comiste', 'you ate', 'ko-MEES-te'],
        ['comió', 'he or she ate', 'ko-MYO'],
        ['viví', 'I lived', 'bee-BEE'],
        ['viviste', 'you lived', 'bee-BEES-te'],
        ['vivió', 'he or she lived', 'bee-BYO'],
      ],
      grammar: {
        title: '-ER And -IR Share Preterite Endings',
        explanation: 'Regular -ER and -IR verbs use the same preterite endings.',
      },
      sentence: 'El lunes comí pizza',
      translation: 'On Monday I ate pizza',
      dialogue: ['Comí arroz.', 'Ella vivió en Madrid.', 'Nosotros bebimos café.'],
    },
    {
      title: 'Past Time Markers',
      focus: 'Words that signal completed past',
      items: [
        ['ayer', 'yesterday', 'a-YER'],
        ['anoche', 'last night', 'a-NO-che'],
        ['la semana pasada', 'last week', 'la se-MA-na pa-SA-da'],
        ['el mes pasado', 'last month', 'el mes pa-SA-do'],
        ['el año pasado', 'last year', 'el A-nyo pa-SA-do'],
        ['hace dos días', 'two days ago', 'A-se dos DEE-as'],
      ],
      grammar: {
        title: 'Time Markers Guide Tense',
        explanation: 'Words like ayer and anoche often point to the preterite because the action is finished.',
      },
      sentence: 'Anoche estudié español',
      translation: 'Last night I studied Spanish',
      dialogue: ['Ayer trabajé.', 'La semana pasada viajé.', 'Hace dos días compré pan.'],
    },
    {
      title: 'Preterite In Context',
      focus: 'Past tense sentences',
      items: [
        ['hice', 'I did or made', 'EE-se'],
        ['fui', 'I went or was', 'fwee'],
        ['hablé con', 'I spoke with', 'a-BLE kon'],
        ['comí pizza', 'I ate pizza', 'ko-MEE PEET-sa'],
      ],
      grammar: {
        title: 'Ask What Happened',
        explanation: '¿Qué hiciste ayer? is a useful question for asking what someone did yesterday.',
      },
      sentence: '¿Qué hiciste ayer?',
      translation: 'What did you do yesterday?',
      dialogue: ['¿Qué hiciste ayer?', 'Hablé con mi madre y comí pizza.', 'Fue un buen día.'],
    },
    {
      title: 'Negative Preterite',
      focus: 'Saying what did not happen',
      items: [
        ['no hablé', 'I did not speak', 'no a-BLE'],
        ['no comí', 'I did not eat', 'no ko-MEE'],
        ['nadie', 'nobody', 'NA-dye'],
        ['nada', 'nothing', 'NA-da'],
        ['no fui', 'I did not go', 'no fwee'],
      ],
      grammar: {
        title: 'No Still Comes Before The Verb',
        explanation: 'The same negation pattern works in past tense: no hablé, no comí, no fui.',
      },
      sentence: 'No comí nada',
      translation: 'I did not eat anything',
      dialogue: ['No hablé con nadie.', 'No comí nada.', 'No fui al trabajo.'],
    },
  ],
})
