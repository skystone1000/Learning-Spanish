import { makeWeek } from '../lessonFactory.js'

export const lessons = makeWeek({
  month: 3,
  week: 2,
  topics: [
    {
      title: '-ER Verbs',
      focus: 'Eating, drinking, reading, understanding',
      items: [
        ['comer', 'to eat', 'ko-MER'],
        ['beber', 'to drink', 'be-BER'],
        ['leer', 'to read', 'le-ER'],
        ['comprender', 'to understand', 'kom-pren-DER'],
        ['vender', 'to sell', 'ben-DER'],
      ],
      grammar: {
        title: 'Regular -ER Present',
        explanation: 'Remove -er and add -o, -es, -e, -emos, -éis, or -en.',
      },
      sentence: 'Como arroz',
      translation: 'I eat rice',
      dialogue: ['Como pan.', 'Bebo agua.', 'Leo un libro.'],
    },
    {
      title: '-IR Verbs',
      focus: 'Living, writing, opening, receiving',
      items: [
        ['vivir', 'to live', 'bee-BEER'],
        ['escribir', 'to write', 'es-kree-BEER'],
        ['abrir', 'to open', 'a-BREER'],
        ['recibir', 'to receive', 're-see-BEER'],
        ['subir', 'to go up', 'soo-BEER'],
      ],
      grammar: {
        title: 'Regular -IR Present',
        explanation: '-IR verbs share most endings with -ER verbs but use -imos for nosotros.',
      },
      sentence: 'Vivo en Madrid',
      translation: 'I live in Madrid',
      dialogue: ['Vivo en México.', 'Escribo una carta.', 'Abrimos la puerta.'],
    },
    {
      title: 'Mixed Present Verbs',
      focus: 'Questions with regular verbs',
      items: [
        ['¿Dónde vives?', 'Where do you live?', 'DON-de BEE-bes'],
        ['¿Qué comes?', 'What do you eat?', 'ke KO-mes'],
        ['¿Qué estudias?', 'What do you study?', 'ke es-TOO-dyas'],
        ['Vivo aquí', 'I live here', 'BEE-bo a-KEE'],
      ],
      grammar: {
        title: 'Questions Can Keep Word Order',
        explanation: 'Rising intonation and question marks can turn a statement into a question.',
      },
      sentence: '¿Dónde vives?',
      translation: 'Where do you live?',
      dialogue: ['¿Dónde vives?', 'Vivo en Lima.', '¿Qué comes?', 'Como pollo.'],
    },
    {
      title: 'Querer',
      focus: 'To want',
      items: [
        ['quiero', 'I want', 'KYE-ro'],
        ['quieres', 'you want', 'KYE-res'],
        ['quiere', 'he or she wants', 'KYE-re'],
        ['queremos', 'we want', 'ke-RE-mos'],
        ['quieren', 'they want', 'KYE-ren'],
      ],
      grammar: {
        title: 'Querer Changes Stem',
        explanation: 'Querer changes e to ie in most present tense forms: quiero, quieres, quiere.',
      },
      sentence: 'Quiero café',
      translation: 'I want coffee',
      dialogue: ['¿Qué quieres?', 'Quiero agua.', 'Nosotros queremos comer.'],
    },
    {
      title: 'Poder',
      focus: 'To be able to',
      items: [
        ['puedo', 'I can', 'PWE-do'],
        ['puedes', 'you can', 'PWE-des'],
        ['puede', 'he or she can', 'PWE-de'],
        ['podemos', 'we can', 'po-DE-mos'],
        ['pueden', 'they can', 'PWE-den'],
      ],
      grammar: {
        title: 'Poder Plus Infinitive',
        explanation: 'Use poder with another verb in infinitive form: puedo ayudar, puedes venir.',
      },
      sentence: '¿Puedes ayudarme?',
      translation: 'Can you help me?',
      dialogue: ['¿Puedes abrir la puerta?', 'Sí, puedo.', 'No podemos salir ahora.'],
    },
  ],
})
