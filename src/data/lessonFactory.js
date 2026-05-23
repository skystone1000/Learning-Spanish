const FALLBACK_OPTIONS = ['Hello', 'Thank you', 'Goodbye', 'Please']

export function makeWeek({ month, week, topics }) {
  return topics.map((topic, index) => {
    const lessonNumber = index + 1
    const id = `m${month}-w${week}-l${lessonNumber}`
    const audio = `/audio/m${month}/w${week}/`
    const vocabulary = normalizeItems(topic.items || [], audio)
    const main = vocabulary[0] || makeVocabulary(topic.title, topic.focus || topic.title, audio)
    const phrase = topic.sentence || main.spanish
    const content = [
      ...vocabulary,
      topic.grammar ? makeGrammar(topic.grammar, phrase, topic.translation || main.english) : null,
      topic.dialogue ? makeDialogue(topic.dialogue) : makeDialogue(defaultDialogue(main.spanish, topic.translation || main.english)),
    ].filter(Boolean)

    return {
      id,
      month,
      week,
      lesson: lessonNumber,
      title: topic.title,
      topic: topic.focus,
      xp: topic.xp || 10,
      audio,
      content,
      exercises: makeExercises(topic, vocabulary, main, phrase, audio),
    }
  })
}

function normalizeItems(items, audioBase) {
  return items.map((item) => {
    if (Array.isArray(item)) {
      return makeVocabulary(item[0], item[1], audioBase, item[2], item[3])
    }
    return makeVocabulary(item.spanish, item.english, audioBase, item.phonetic, item.notes)
  })
}

function makeVocabulary(spanish, english, audioBase, phonetic = '', notes = '') {
  return {
    type: spanish.split(' ').length > 2 ? 'phrase' : 'vocabulary',
    spanish,
    english,
    phonetic: phonetic || roughPhonetic(spanish),
    audioFile: `${slugify(spanish)}.mp3`,
    notes,
    audioPath: `${audioBase}${slugify(spanish)}.mp3`,
  }
}

function makeGrammar(grammar, exampleSpanish, exampleEnglish) {
  return {
    type: 'grammar',
    title: grammar.title,
    explanation: grammar.explanation,
    examples: grammar.examples || [{ spanish: exampleSpanish, english: exampleEnglish }],
  }
}

function makeDialogue(lines) {
  return {
    type: 'dialogue',
    lines: lines.map((text, index) => ({
      speaker: index % 2 === 0 ? 'A' : 'B',
      text,
    })),
  }
}

function makeExercises(topic, vocabulary, main, phrase, audio) {
  const optionsEnglish = unique([
    ...vocabulary.map((item) => item.english),
    ...(topic.distractors || []),
    ...FALLBACK_OPTIONS,
  ]).slice(0, 4)
  const optionsSpanish = unique([
    ...vocabulary.map((item) => item.spanish),
    main.spanish,
    'Hola',
    'Gracias',
    'Adiós',
  ]).slice(0, 4)
  const pairs = vocabulary.slice(0, 4).map((item) => ({ spanish: item.spanish, english: item.english }))
  const arrangeAnswer = topic.arrange || phrase

  return [
    {
      type: 'multiple-choice',
      question: `What does "${main.spanish}" mean?`,
      options: ensureOption(optionsEnglish, main.english),
      answer: main.english,
    },
    {
      type: 'fill-blank',
      question: blankQuestion(main.spanish, main.english),
      answer: firstAnswer(main.spanish),
    },
    {
      type: 'matching',
      question: 'Match Spanish to English',
      pairs: pairs.length >= 2 ? pairs : [{ spanish: main.spanish, english: main.english }],
    },
    {
      type: 'listen-select',
      question: 'What did you hear?',
      audioFile: `${audio}${main.audioFile}`,
      options: ensureOption(optionsSpanish, main.spanish),
      answer: main.spanish,
    },
    {
      type: 'arrange-words',
      question: 'Arrange the phrase',
      words: arrangeAnswer.split(/\s+/),
      answer: arrangeAnswer,
    },
  ]
}

function defaultDialogue(spanish, english) {
  return [`Escucha: ${spanish}.`, `Significa: ${english}.`]
}

function ensureOption(options, answer) {
  return unique([answer, ...options]).slice(0, 4)
}

function blankQuestion(spanish, english) {
  const parts = spanish.split(/\s+/)
  parts[0] = '___'
  return `${parts.join(' ')} (${english})`
}

function firstAnswer(spanish) {
  return spanish.split(/\s+/)[0].replace(/[¿?¡!,.;:]/g, '')
}

function unique(values) {
  return [...new Set(values.filter(Boolean))]
}

function slugify(value) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/ñ/g, 'n')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

function roughPhonetic(value) {
  return value
    .replace(/[¿?¡!]/g, '')
    .replace(/ll/g, 'y')
    .replace(/ñ/g, 'ny')
}
