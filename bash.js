const pwd = require('./pwd');
const ls = require('./ls');

process.stdout.write('prompt > ');
process.stdin.on('data', data => {
  const cmd = data.toString().trim();
  switch (cmd) {
    case 'pwd':
      pwd()
      break;
    case 'ls':
      ls();
      break;
    default:
      process.stdout.write('command not recognized\n');
      process.stdout.write('prompt > ');
      break;
  }
});

  // process.stdout.write(output);
  // process.stdout.write('\nprompt > ');
