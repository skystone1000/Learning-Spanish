import { makeWeek } from '../lessonFactory.js'

export const lessons = makeWeek({
  month: 6,
  week: 3,
  topics: [
    {
      title: 'Conditional',
      focus: 'Would and polite requests',
      items: [
        ['hablaría', 'I would speak', 'a-bla-REE-a'],
        ['comerías', 'you would eat', 'ko-me-REE-as'],
        ['viviría', 'he or she would live', 'bee-bee-REE-a'],
        ['me gustaría', 'I would like', 'me goos-ta-REE-a'],
        ['¿Podría ayudarme?', 'Could you help me?', 'po-DREE-a a-yoo-DAR-me'],
      ],
      grammar: {
        title: 'Conditional Endings',
        explanation: 'Conditional endings attach to the infinitive and are the same for -AR, -ER, and -IR verbs.',
      },
      sentence: 'Me gustaría un café',
      translation: 'I would like a coffee',
      dialogue: ['Me gustaría viajar.', '¿Podría ayudarme?', 'Yo viviría en Madrid.'],
    },
    {
      title: 'Subjunctive Intro',
      focus: 'Wants and hopes',
      items: [
        ['quiero que', 'I want that', 'KYE-ro ke'],
        ['espero que', 'I hope that', 'es-PE-ro ke'],
        ['es importante que', 'it is important that', 'es eem-por-TAN-te ke'],
        ['hables', 'you speak subjunctive', 'A-bles'],
        ['comas', 'you eat subjunctive', 'KO-mas'],
        ['vivas', 'you live subjunctive', 'BEE-bas'],
      ],
      grammar: {
        title: 'Subjunctive After Que',
        explanation: 'Use subjunctive after expressions of desire, hope, or importance with a change of subject.',
      },
      sentence: 'Quiero que hables español',
      translation: 'I want you to speak Spanish',
      dialogue: ['Quiero que estudies.', 'Espero que comas bien.', 'Es importante que descanses.'],
    },
    {
      title: 'Conjunctions',
      focus: 'Connecting ideas',
      items: [
        ['pero', 'but', 'PE-ro'],
        ['porque', 'because', 'POR-ke'],
        ['aunque', 'although', 'OWN-ke'],
        ['sin embargo', 'however', 'seen em-BAR-go'],
        ['además', 'furthermore', 'a-de-MAS'],
        ['por eso', 'therefore', 'por EH-so'],
        ['así que', 'so', 'a-SEE ke'],
      ],
      grammar: {
        title: 'Connectors Build Fluency',
        explanation: 'Conjunctions let you combine short sentences into richer explanations.',
      },
      sentence: 'Estudio porque quiero viajar',
      translation: 'I study because I want to travel',
      dialogue: ['Quiero ir, pero no puedo.', 'Hace frío, así que llevo abrigo.', 'Además, tengo tiempo.'],
    },
    {
      title: 'Formal And Informal',
      focus: 'Choosing tú or usted',
      items: [
        ['tú', 'informal you', 'too'],
        ['usted', 'formal you', 'oos-TED'],
        ['don', 'Mr. or respectful title', 'don'],
        ['doña', 'Mrs. or respectful title', 'DO-nya'],
        ['¿Cómo está?', 'How are you formal?', 'KO-mo es-TA'],
      ],
      grammar: {
        title: 'Usted Uses Third Person Verbs',
        explanation: 'Usted means you, but it uses the same verb form as él or ella.',
      },
      sentence: '¿Cómo está usted?',
      translation: 'How are you?',
      dialogue: ['Hola, don Luis.', '¿Cómo está usted?', 'Muy bien, gracias.'],
    },
    {
      title: 'Complex Sentences',
      focus: 'Combining clauses and tenses',
      items: [
        ['cuando', 'when', 'KWAN-do'],
        ['si', 'if', 'see'],
        ['mientras', 'while', 'MYEN-tras'],
        ['después de que', 'after', 'des-PWES de ke'],
        ['antes de que', 'before', 'AN-tes de ke'],
      ],
      grammar: {
        title: 'Two Clauses, One Idea',
        explanation: 'A complex sentence links clauses with connectors such as cuando, si, mientras, and aunque.',
      },
      sentence: 'Cuando termine, iré al parque',
      translation: 'When I finish, I will go to the park',
      dialogue: ['Si tengo tiempo, estudiaré.', 'Mientras cocino, escucho música.', 'Aunque estoy cansado, saldré.'],
    },
  ],
})
