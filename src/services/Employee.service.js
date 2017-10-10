/**
 * Created by svs on 9/10/17.
 */
const request = require('superagent');

export const createEmployee = (employeeData) => {
  const url = 'http://0.0.0.0:9000/employees';
  request.post(url)
  .send(employeeData)
  .set('access_token', 'masterKey')
  .set('Accept', 'application/json')
    .end((err, res) => {
      if (err || !res.ok) {
        console.log('Oh no! error');
      } else {
        console.log(JSON.stringify(res.body));
      }
    });
};
