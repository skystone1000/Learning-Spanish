import { makeWeek } from '../lessonFactory.js'

export const lessons = makeWeek({
  month: 4,
  week: 3,
  topics: [
    {
      title: 'Clothing',
      focus: 'Common clothes',
      items: [
        ['la camisa', 'the shirt', 'la ka-MEE-sa'],
        ['los pantalones', 'the pants', 'los pan-ta-LO-nes'],
        ['los zapatos', 'the shoes', 'los sa-PA-tos'],
        ['el vestido', 'the dress', 'el bes-TEE-do'],
        ['el abrigo', 'the coat', 'el a-BREE-go'],
        ['la chaqueta', 'the jacket', 'la cha-KE-ta'],
        ['los calcetines', 'the socks', 'los kal-se-TEE-nes'],
        ['la falda', 'the skirt', 'la FAL-da'],
        ['el sombrero', 'the hat', 'el som-BRE-ro'],
      ],
      grammar: {
        title: 'Plural Clothing',
        explanation: 'Some clothing words are commonly plural, such as los pantalones and los zapatos.',
      },
      sentence: 'Quiero la camisa roja',
      translation: 'I want the red shirt',
      dialogue: ['Busco una camisa.', '¿Qué color quiere?', 'Quiero la camisa azul.'],
    },
    {
      title: 'Shopping Phrases',
      focus: 'Asking and buying',
      items: [
        ['¿Cuánto cuesta?', 'How much does it cost?', 'KWAN-to KWES-ta'],
        ['¿Tiene?', 'Do you have?', 'TYE-ne'],
        ['¿Qué talla usa?', 'What size do you wear?', 'ke TA-ya OO-sa'],
        ['¿Lo tiene en azul?', 'Do you have it in blue?', 'lo TYE-ne en a-SOOL'],
        ['Me lo llevo', "I'll take it", 'me lo YE-bo'],
      ],
      grammar: {
        title: 'Lo Refers To It',
        explanation: 'Lo can stand in for a masculine thing you are buying: me lo llevo.',
      },
      sentence: '¿Cuánto cuesta la chaqueta?',
      translation: 'How much does the jacket cost?',
      dialogue: ['¿Tiene esta camisa en azul?', 'Sí, ¿qué talla usa?', 'Me la llevo.'],
    },
    {
      title: 'Colors In Shopping',
      focus: 'Adjective placement with clothes',
      items: [
        ['camisa roja', 'red shirt', 'ka-MEE-sa RO-ha'],
        ['zapatos negros', 'black shoes', 'sa-PA-tos NE-gros'],
        ['vestido azul', 'blue dress', 'bes-TEE-do a-SOOL'],
        ['falda blanca', 'white skirt', 'FAL-da BLAN-ka'],
      ],
      grammar: {
        title: 'Colors Usually Follow',
        explanation: 'Color adjectives generally come after the noun and agree when possible.',
      },
      sentence: 'Quiero los zapatos negros',
      translation: 'I want the black shoes',
      dialogue: ['¿Tiene los zapatos en negro?', 'Sí, aquí están.', 'Son perfectos.'],
    },
    {
      title: 'Prices',
      focus: 'Money and discounts',
      items: [
        ['cuesta', 'it costs', 'KWES-ta'],
        ['euros', 'euros', 'EW-ros'],
        ['centavos', 'cents', 'sen-TA-bos'],
        ['caro', 'expensive', 'KA-ro'],
        ['descuento', 'discount', 'des-KWEN-to'],
        ['en oferta', 'on sale', 'en o-FER-ta'],
      ],
      grammar: {
        title: 'Costar Works Like Gustar',
        explanation: 'Cuesta is used for one item. Cuestan is used for plural items.',
      },
      sentence: 'Cuesta dos euros',
      translation: 'It costs two euros',
      dialogue: ['Es muy caro.', '¿Me hace un descuento?', 'Está en oferta.'],
    },
    {
      title: 'Shopping Dialogue',
      focus: 'Entering, asking, paying',
      items: [
        ['buenas', 'hello in a shop', 'BWE-nas'],
        ['probador', 'fitting room', 'pro-ba-DOR'],
        ['tarjeta', 'card', 'tar-HE-ta'],
        ['efectivo', 'cash', 'e-fek-TEE-bo'],
        ['recibo', 'receipt', 're-SEE-bo'],
      ],
      grammar: {
        title: 'Useful Store Flow',
        explanation: 'A shopping conversation often moves from greeting to size, fitting room, and payment.',
      },
      sentence: 'Pago con tarjeta',
      translation: 'I pay by card',
      dialogue: ['Buenas, busco una chaqueta.', 'El probador está allí.', 'Pago con tarjeta.'],
    },
  ],
})
