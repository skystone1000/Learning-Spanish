import { makeWeek } from '../lessonFactory.js'

export const lessons = makeWeek({
  month: 5,
  week: 4,
  topics: [
    {
      title: 'Gustar',
      focus: 'Saying what you like',
      items: [
        ['me gusta', 'I like singular or infinitive', 'me GOOS-ta'],
        ['me gustan', 'I like plural things', 'me GOOS-tan'],
        ['te gusta', 'you like', 'te GOOS-ta'],
        ['le gusta', 'he or she likes', 'le GOOS-ta'],
        ['nos gusta', 'we like', 'nos GOOS-ta'],
      ],
      grammar: {
        title: 'The Liked Thing Controls Gustar',
        explanation: 'Use gusta for one thing or an infinitive. Use gustan for plural things.',
      },
      sentence: 'Me gusta el fútbol',
      translation: 'I like soccer',
      dialogue: ['Me gusta leer.', 'Me gustan los libros.', '¿Te gusta la música?'],
    },
    {
      title: 'Verbs Like Gustar',
      focus: 'Love, bother, interest, hurt',
      items: [
        ['me encanta', 'I love it', 'me en-KAN-ta'],
        ['me molesta', 'it bothers me', 'me mo-LES-ta'],
        ['me interesa', 'it interests me', 'me een-te-RE-sa'],
        ['me duele', 'it hurts me', 'me DWE-le'],
        ['me falta', 'I am missing or lack', 'me FAL-ta'],
      ],
      grammar: {
        title: 'Same Pattern, New Meanings',
        explanation: 'These verbs use indirect object pronouns just like gustar: me, te, le, nos, les.',
      },
      sentence: 'Me duele la cabeza',
      translation: 'My head hurts',
      dialogue: ['Me encanta cocinar.', 'Me interesa la historia.', 'Me duele el pie.'],
    },
    {
      title: 'Hobbies',
      focus: 'Activities you enjoy',
      items: [
        ['leer', 'to read', 'le-ER'],
        ['nadar', 'to swim', 'na-DAR'],
        ['cocinar', 'to cook', 'ko-see-NAR'],
        ['bailar', 'to dance', 'by-LAR'],
        ['dibujar', 'to draw', 'dee-boo-HAR'],
        ['pintar', 'to paint', 'peen-TAR'],
        ['tocar la guitarra', 'to play guitar', 'to-KAR la gee-TA-rra'],
        ['hacer yoga', 'to do yoga', 'a-SER YO-ga'],
      ],
      grammar: {
        title: 'Gustar Plus Infinitive',
        explanation: 'Use me gusta plus an infinitive to say you like doing something.',
      },
      sentence: 'Me gusta tocar la guitarra',
      translation: 'I like to play guitar',
      dialogue: ['Me gusta nadar.', 'A ella le encanta cocinar.', 'Nos gusta ver películas.'],
    },
    {
      title: 'Sports',
      focus: 'Sports and games',
      items: [
        ['el fútbol', 'soccer', 'el FOOT-bol'],
        ['el tenis', 'tennis', 'el TE-nees'],
        ['el baloncesto', 'basketball', 'el ba-lon-SES-to'],
        ['el béisbol', 'baseball', 'el BASE-bol'],
        ['correr', 'to run', 'ko-RRER'],
        ['hacer senderismo', 'to hike', 'a-SER sen-de-REES-mo'],
        ['jugar al ajedrez', 'to play chess', 'hoo-GAR al a-he-DRES'],
      ],
      grammar: {
        title: 'Jugar A',
        explanation: 'Use jugar a plus a sport or game: jugar al fútbol, jugar al ajedrez.',
      },
      sentence: 'Juego al tenis',
      translation: 'I play tennis',
      dialogue: ['Me gusta el fútbol.', 'Juego al tenis los sábados.', 'A mi padre le gusta el béisbol.'],
    },
    {
      title: 'Expressing Preferences',
      focus: 'Comparing likes and dislikes',
      items: [
        ['me encanta', 'I love', 'me en-KAN-ta'],
        ['no me gusta', 'I do not like', 'no me GOOS-ta'],
        ['pero', 'but', 'PE-ro'],
        ['más', 'more', 'mas'],
        ['prefiero', 'I prefer', 'pre-FYE-ro'],
      ],
      grammar: {
        title: 'Pero Connects Contrasts',
        explanation: 'Use pero to contrast preferences: me gusta esto, pero no me gusta aquello.',
      },
      sentence: 'Me encanta el fútbol pero no me gusta el tenis',
      translation: 'I love soccer but I do not like tennis',
      dialogue: ['¿Qué deporte te gusta más?', 'Me encanta el fútbol.', 'Pero prefiero nadar.'],
    },
  ],
})
