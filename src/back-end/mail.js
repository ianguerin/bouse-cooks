const sgMail = require('@sendgrid/mail');

const { FROM } = require('./constants');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const send = ({ subject, to, from, html }) => {
  const message = {
    to,
    from,
    subject,
    html,
    bcc: 'bouseattle@gmail.com'
  };

  if (process.env.NODE_ENV === 'production') {
    return sgMail.send(message);
  } else {
    console.warn('[[DEV ENV]]');
    console.log(message);

    return Promise.resolve();
  }
};

const createSuggestionLink = suggestion =>
  `<a href=${suggestion.href}>${suggestion.title}</a>`;

const createContent = (names, suggestions, week) => {
  const contentString = `The crew: ${names}

You're cooking dinner this week (shoot for 10 servings)!
That includes groceries, cooking, and dishes.

${
    suggestions.length
      ? `Need some suggestions?<br/>${suggestions
          .map(createSuggestionLink)
          .join('<br/>')}<br/><br/>`
      : ''
  }
love-
tim the robot

ps- peep this week @ <a href="http://bouse.website/cookbot/week/${week}">bouse's cookbot</a>`;

  return contentString.replace(/\n/g, '<br/>');
};

const createMail = digest => {
  const names = digest.cooks.map(cook => cook.name).join(', ');
  const to = digest.cooks.map(cook =>
    process.env.NODE_ENV === 'production' ? cook.email : cook.devEmail
  );
  const subject = `You are cooking a meal on ${digest.date}!`;
  const html = createContent(names, digest.suggestions, digest.actualWeek);

  return {
    from: FROM,
    to,
    subject,
    html
  };
};

module.exports = {
  send,
  createMail
};
