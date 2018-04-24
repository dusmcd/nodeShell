const pwd = require('./pwd');
const ls = require('./ls');

process.stdout.write('prompt > ');
process.stdin.on('data', data => {
  const cmd = data.toString().trim();
  let output;
  switch (cmd) {
    case 'pwd':
      output = pwd();
      break;
    case 'ls':
      ls();
      break;
    default:
      output = 'command not recognized';
      break;
  }
  // process.stdout.write(output);
  process.stdout.write('\nprompt > ');
});
