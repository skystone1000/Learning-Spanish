import { makeWeek } from '../lessonFactory.js'

export const lessons = makeWeek({
  month: 1,
  week: 2,
  topics: [
    {
      title: 'Spanish Vowels',
      focus: 'Pure vowel sounds',
      items: [
        ['a', 'a as in father', 'AH'],
        ['e', 'e as in met', 'EH'],
        ['i', 'i as in machine', 'EE'],
        ['o', 'o as in open', 'OH'],
        ['u', 'u as in flute', 'OO'],
      ],
      grammar: {
        title: 'Vowels Stay Consistent',
        explanation: 'Spanish vowels are pure and short. They do not glide the way many English vowels do.',
      },
      sentence: 'a e i o u',
      translation: 'the five Spanish vowels',
      dialogue: ['La palabra casa tiene dos vocales.', 'A y a. Suenan igual cada vez.'],
    },
    {
      title: 'Core Consonants',
      focus: 'b, v, c, d, and g',
      items: [
        ['bebé', 'baby', 'beh-BEH'],
        ['vino', 'wine', 'BEE-no', 'b and v sound very close'],
        ['casa', 'house', 'KA-sa'],
        ['cero', 'zero', 'SEH-ro'],
        ['gato', 'cat', 'GA-to'],
        ['gente', 'people', 'HEN-te'],
      ],
      grammar: {
        title: 'C And G Change Before E And I',
        explanation: 'C sounds like k except before e or i. G is hard except before e or i, where it sounds like h.',
      },
      sentence: 'La casa y el gato',
      translation: 'The house and the cat',
      dialogue: ['Casa empieza con sonido k.', 'Cero empieza con sonido s.', 'Gente empieza con sonido h.'],
    },
    {
      title: 'Special Letters',
      focus: 'h, j, ll, ñ, r, and rr',
      items: [
        ['hola', 'hello', 'OH-lah', 'h is silent'],
        ['jamón', 'ham', 'ha-MON', 'j sounds like English h'],
        ['llama', 'is called', 'YA-ma'],
        ['niño', 'boy', 'NEE-nyo'],
        ['pero', 'but', 'PEH-ro', 'single tapped r'],
        ['perro', 'dog', 'PEH-rro', 'rolled rr'],
      ],
      grammar: {
        title: 'One Letter Can Change Meaning',
        explanation: 'Pero means but, while perro means dog. The r sound matters.',
      },
      sentence: 'El niño llama al perro',
      translation: 'The boy calls the dog',
      dialogue: ['La h en hola no suena.', 'La ñ en niño suena como ny.', 'Perro tiene erre fuerte.'],
    },
    {
      title: 'Accent Marks',
      focus: 'Stress and punctuation marks',
      items: [
        ['á', 'stressed a', 'AH'],
        ['é', 'stressed e', 'EH'],
        ['í', 'stressed i', 'EE'],
        ['ó', 'stressed o', 'OH'],
        ['ú', 'stressed u', 'OO'],
        ['¿Qué?', 'What?', 'KEH'],
        ['¡Hola!', 'Hello!', 'OH-lah'],
      ],
      grammar: {
        title: 'Accent Marks Show Stress',
        explanation: 'Written accents tell you which syllable receives emphasis. Spanish also opens questions and exclamations with inverted marks.',
      },
      sentence: '¿Qué día es?',
      translation: 'What day is it?',
      dialogue: ['¿Qué significa esta palabra?', 'Significa hello.', '¡Perfecto!'],
    },
    {
      title: 'Stress Rules',
      focus: 'Predictable pronunciation',
      items: [
        ['casa', 'house', 'KA-sa'],
        ['hablo', 'I speak', 'AH-blo'],
        ['papel', 'paper', 'pa-PEL'],
        ['español', 'Spanish', 'es-pa-NYOL'],
        ['teléfono', 'telephone', 'te-LE-fo-no'],
      ],
      grammar: {
        title: 'Default Stress',
        explanation: 'Words ending in a vowel, n, or s usually stress the second-to-last syllable. Other endings usually stress the last syllable.',
      },
      sentence: 'Hablo español',
      translation: 'I speak Spanish',
      dialogue: ['Casa termina en vocal.', 'Papel termina en consonante.', 'Teléfono tiene acento escrito.'],
    },
  ],
})
