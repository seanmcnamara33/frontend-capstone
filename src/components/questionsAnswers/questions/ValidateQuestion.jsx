export default function val({ question, nickname, email }) {
  const errors = {};
  if (question.length > 1000) {
    errors.question = 'Your Question is way to long';
  }
  if (nickname.length > 60) {
    errors.nickname = 'Your nickname is way to long';
  }
  if (/\S+@\S+/i.test(email)) {
    errors.email = 'Please enter a email format';
  }
  return errors;
}
