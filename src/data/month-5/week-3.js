import { makeWeek } from '../lessonFactory.js'

export const lessons = makeWeek({
  month: 5,
  week: 3,
  topics: [
    {
      title: 'Simple Future',
      focus: 'Will do',
      items: [
        ['hablaré', 'I will speak', 'a-bla-RE'],
        ['comerás', 'you will eat', 'ko-me-RAS'],
        ['vivirá', 'he or she will live', 'bee-bee-RA'],
        ['viajaremos', 'we will travel', 'bya-ha-RE-mos'],
        ['harán', 'they will do', 'a-RAN'],
      ],
      grammar: {
        title: 'Future Endings Attach To Infinitives',
        explanation: 'For regular future tense, keep the infinitive and add endings like -é, -ás, -á, -emos.',
      },
      sentence: 'Mañana hablaré español',
      translation: 'Tomorrow I will speak Spanish',
      dialogue: ['Viajaré mañana.', 'Comerás con nosotros.', 'Viviremos en Madrid.'],
    },
    {
      title: 'Irregular Future Stems',
      focus: 'Common future shortcuts',
      items: [
        ['tendré', 'I will have', 'ten-DRE'],
        ['haré', 'I will do or make', 'a-RE'],
        ['podré', 'I will be able to', 'po-DRE'],
        ['iré', 'I will go', 'ee-RE'],
        ['seré', 'I will be', 'se-RE'],
        ['diré', 'I will say', 'dee-RE'],
      ],
      grammar: {
        title: 'Irregular Stems Use Regular Endings',
        explanation: 'The stems change, but the future endings are still the same.',
      },
      sentence: 'Iré al banco mañana',
      translation: 'I will go to the bank tomorrow',
      dialogue: ['Tendré tiempo mañana.', 'Haré la tarea.', 'Diré la verdad.'],
    },
    {
      title: 'Reflexive Pronouns',
      focus: 'Actions done to oneself',
      items: [
        ['me', 'myself', 'me'],
        ['te', 'yourself', 'te'],
        ['se', 'himself, herself, yourself, themselves', 'se'],
        ['nos', 'ourselves', 'nos'],
        ['os', 'yourselves in Spain', 'os'],
      ],
      grammar: {
        title: 'Pronouns Before Conjugated Verbs',
        explanation: 'Reflexive pronouns usually come before the conjugated verb: me levanto, te duchas.',
      },
      sentence: 'Me levanto temprano',
      translation: 'I get up early',
      dialogue: ['Me llamo Ana.', 'Te levantas a las siete.', 'Nos acostamos tarde.'],
    },
    {
      title: 'Reflexive Verbs',
      focus: 'Daily self-care actions',
      items: [
        ['levantarse', 'to get up', 'le-ban-TAR-se'],
        ['ducharse', 'to shower', 'doo-CHAR-se'],
        ['vestirse', 'to get dressed', 'bes-TEER-se'],
        ['acostarse', 'to go to bed', 'a-kos-TAR-se'],
        ['despertarse', 'to wake up', 'des-per-TAR-se'],
        ['peinarse', 'to comb hair', 'pey-NAR-se'],
      ],
      grammar: {
        title: 'Se Marks The Infinitive',
        explanation: 'The -se at the end of an infinitive shows that the verb is reflexive.',
      },
      sentence: 'Me ducho por la mañana',
      translation: 'I shower in the morning',
      dialogue: ['Me levanto a las siete.', 'Me ducho y me visto.', 'Me acuesto a las diez.'],
    },
    {
      title: 'Daily Routine',
      focus: 'Sequencing reflexive actions',
      items: [
        ['por la mañana', 'in the morning', 'por la ma-NYA-na'],
        ['después', 'afterward', 'des-PWES'],
        ['antes de', 'before', 'AN-tes de'],
        ['me acuesto', 'I go to bed', 'me a-KWES-to'],
        ['me visto', 'I get dressed', 'me BEES-to'],
      ],
      grammar: {
        title: 'Routine Uses Present Tense',
        explanation: 'Use the present tense for habitual daily routine actions.',
      },
      sentence: 'Me levanto a las siete',
      translation: 'I get up at seven',
      dialogue: ['Me levanto a las siete.', 'Después me ducho y me visto.', 'A las diez me acuesto.'],
    },
  ],
})
