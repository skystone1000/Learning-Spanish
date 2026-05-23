import { makeWeek } from '../lessonFactory.js'

export const lessons = makeWeek({
  month: 4,
  week: 4,
  topics: [
    {
      title: 'Present Progressive',
      focus: 'Estar plus gerund',
      items: [
        ['hablando', 'speaking', 'a-BLAN-do'],
        ['comiendo', 'eating', 'ko-MYEN-do'],
        ['viviendo', 'living', 'bee-BYEN-do'],
        ['estoy hablando', 'I am speaking', 'es-TOY a-BLAN-do'],
      ],
      grammar: {
        title: 'Actions Happening Now',
        explanation: 'Use estar plus -ando for -AR verbs and -iendo for -ER and -IR verbs.',
      },
      sentence: 'Estoy hablando español',
      translation: 'I am speaking Spanish',
      dialogue: ['¿Qué estás haciendo?', 'Estoy estudiando.', 'Estamos comiendo.'],
    },
    {
      title: 'Common Progressive Forms',
      focus: 'Talking about now',
      items: [
        ['estoy comiendo', 'I am eating', 'es-TOY ko-MYEN-do'],
        ['estás hablando', 'you are speaking', 'es-TAS a-BLAN-do'],
        ['está durmiendo', 'he or she is sleeping', 'es-TA door-MYEN-do'],
        ['estamos trabajando', 'we are working', 'es-TA-mos tra-ba-HAN-do'],
      ],
      grammar: {
        title: 'Some Gerunds Are Irregular',
        explanation: 'Dormir becomes durmiendo, and decir becomes diciendo.',
      },
      sentence: 'Estamos trabajando ahora',
      translation: 'We are working now',
      dialogue: ['Estoy comiendo.', 'Mi hermano está durmiendo.', 'Nosotros estamos trabajando.'],
    },
    {
      title: 'Weather',
      focus: 'Weather conditions',
      items: [
        ['hace sol', "it's sunny", 'A-se sol'],
        ['hace calor', "it's hot", 'A-se ka-LOR'],
        ['hace frío', "it's cold", 'A-se FREE-o'],
        ['hace viento', "it's windy", 'A-se BYEN-to'],
        ['llueve', 'it rains', 'YWE-be'],
        ['nieva', 'it snows', 'NYE-ba'],
        ['está nublado', "it's cloudy", 'es-TA noo-BLA-do'],
        ['hay niebla', "it's foggy", 'ay NYE-bla'],
      ],
      grammar: {
        title: 'Weather Uses Different Verbs',
        explanation: 'Spanish weather phrases use hace, está, hay, and weather-only verbs like llueve.',
      },
      sentence: 'Hoy hace sol',
      translation: 'Today it is sunny',
      dialogue: ['¿Qué tiempo hace?', 'Hace viento y está nublado.', 'Creo que va a llover.'],
    },
    {
      title: 'Seasons With Weather',
      focus: 'Weather across the year',
      items: [
        ['en verano', 'in summer', 'en be-RA-no'],
        ['en invierno', 'in winter', 'en een-BYER-no'],
        ['en primavera', 'in spring', 'en pree-ma-VE-ra'],
        ['llueve mucho', 'it rains a lot', 'YWE-be MOO-cho'],
      ],
      grammar: {
        title: 'En With Seasons',
        explanation: 'Use en before seasons: en verano, en invierno, en primavera.',
      },
      sentence: 'En invierno nieva mucho',
      translation: 'In winter it snows a lot',
      dialogue: ['En verano hace calor.', 'En invierno nieva mucho.', 'En primavera llueve.'],
    },
    {
      title: 'What Are You Doing?',
      focus: 'Phone conversation',
      items: [
        ['¿Qué estás haciendo?', 'What are you doing?', 'ke es-TAS a-SYEN-do'],
        ['estoy descansando', 'I am resting', 'es-TOY des-kan-SAN-do'],
        ['estoy viendo una película', 'I am watching a movie', 'es-TOY BYEN-do OO-na pe-LEE-koo-la'],
        ['hace mal tiempo', 'the weather is bad', 'A-se mal TYEM-po'],
      ],
      grammar: {
        title: 'Progressive In Conversation',
        explanation: 'Use the present progressive when asking what someone is doing right now.',
      },
      sentence: 'Estoy viendo una película',
      translation: 'I am watching a movie',
      dialogue: ['¿Qué estás haciendo?', 'Estoy viendo una película.', 'Aquí llueve mucho.'],
    },
  ],
})
