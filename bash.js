const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');

process.stdout.write('prompt > ');
process.stdin.on('data', data => {
  let cmd = data.toString().trim();
  const file = cmd.split(' ')[1];
  cmd = cmd.split(' ')[0];
  switch (cmd) {
    case 'pwd':
      pwd();
      break;
    case 'ls':
      ls();
      break;
    case 'cat':
      cat(file);
      break;
    default:
      process.stdout.write('command not recognized\n');
      process.stdout.write('prompt > ');
      break;
  }
});

// process.stdout.write(output);
// process.stdout.write('\nprompt > ');
