export default function val(values) {
  const errors = {};
  if (values.body === '') {
    errors.body = 'Please Enter A body';
  } else if (values.body.length > 1000) {
    errors.body = 'Your body is way to long';
  }
  if (values.name === '') {
    errors.name = 'Please Enter A Nickname';
  } else if (values.name.length > 60) {
    errors.name = 'Your nickname is way to long';
  }
  if (values.email === '') {
    errors.email = 'Please enter a email';
  } else if (!/^(.+)@(.+)$/i.test(values.email)) {
    errors.email = 'Please enter a email format';
  }
  return errors;
}
