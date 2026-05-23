import { makeWeek } from '../lessonFactory.js'

export const lessons = makeWeek({
  month: 1,
  week: 4,
  topics: [
    {
      title: 'Masculine Nouns',
      focus: 'El and common masculine nouns',
      items: [
        ['el libro', 'the book', 'el LEE-bro'],
        ['el hombre', 'the man', 'el OM-bre'],
        ['el perro', 'the dog', 'el PEH-rro'],
        ['el coche', 'the car', 'el KO-che'],
        ['el día', 'the day', 'el DEE-a', 'Exception: día is masculine'],
      ],
      grammar: {
        title: 'El Marks Masculine Nouns',
        explanation: 'Most nouns ending in -o are masculine and use el for the.',
      },
      sentence: 'El libro es nuevo',
      translation: 'The book is new',
      dialogue: ['¿Dónde está el libro?', 'El libro está en la mesa.', 'El libro es nuevo.'],
    },
    {
      title: 'Feminine Nouns',
      focus: 'La and common feminine nouns',
      items: [
        ['la mesa', 'the table', 'la ME-sa'],
        ['la mujer', 'the woman', 'la moo-HER'],
        ['la casa', 'the house', 'la KA-sa'],
        ['la noche', 'the night', 'la NO-che'],
        ['la mano', 'the hand', 'la MA-no', 'Exception: mano is feminine'],
      ],
      grammar: {
        title: 'La Marks Feminine Nouns',
        explanation: 'Most nouns ending in -a are feminine and use la for the.',
      },
      sentence: 'La casa es blanca',
      translation: 'The house is white',
      dialogue: ['La mesa es grande.', 'La casa es blanca.', 'La mano es pequeña.'],
    },
    {
      title: 'Plural Nouns',
      focus: 'Los, las, -s, and -es',
      items: [
        ['los libros', 'the books', 'los LEE-bros'],
        ['las mesas', 'the tables', 'las ME-sas'],
        ['los hombres', 'the men', 'los OM-bres'],
        ['las mujeres', 'the women', 'las moo-HE-res'],
        ['los días', 'the days', 'los DEE-as'],
      ],
      grammar: {
        title: 'Plural Articles',
        explanation: 'Use los for masculine plural nouns and las for feminine plural nouns. Add -s after vowels and -es after consonants.',
      },
      sentence: 'Los libros están aquí',
      translation: 'The books are here',
      dialogue: ['Tengo dos libros.', 'Las mesas son grandes.', 'Los hombres hablan español.'],
    },
    {
      title: 'Indefinite Articles',
      focus: 'Un, una, unos, and unas',
      items: [
        ['un libro', 'a book', 'oon LEE-bro'],
        ['una mesa', 'a table', 'OO-na ME-sa'],
        ['unos libros', 'some books', 'OO-nos LEE-bros'],
        ['unas mesas', 'some tables', 'OO-nas ME-sas'],
        ['una casa', 'a house', 'OO-na KA-sa'],
      ],
      grammar: {
        title: 'A And Some',
        explanation: 'Un and una mean a or an. Unos and unas often mean some.',
      },
      sentence: 'Tengo una mesa',
      translation: 'I have a table',
      dialogue: ['Tengo un libro.', 'Tengo una mesa.', 'Tengo unos cuadernos.'],
    },
    {
      title: 'Classroom & Home Objects',
      focus: 'Useful objects around you',
      items: [
        ['el bolígrafo', 'the pen', 'el bo-LEE-gra-fo'],
        ['el cuaderno', 'the notebook', 'el kwa-DER-no'],
        ['la silla', 'the chair', 'la SEE-ya'],
        ['la ventana', 'the window', 'la ben-TA-na'],
        ['la puerta', 'the door', 'la PWER-ta'],
        ['el teléfono', 'the phone', 'el te-LE-fo-no'],
        ['la computadora', 'the computer', 'la kom-poo-ta-DO-ra'],
      ],
      grammar: {
        title: 'Learn Nouns With Articles',
        explanation: 'Memorize el or la together with every noun. The article carries gender information.',
      },
      sentence: 'El bolígrafo está en el cuaderno',
      translation: 'The pen is in the notebook',
      dialogue: ['¿Dónde está el teléfono?', 'Está en la mesa.', 'La ventana está abierta.'],
    },
  ],
})
