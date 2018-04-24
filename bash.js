
process.stdout.write('prompt > ')
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim()
  let output
  switch (cmd) {
    case 'pwd':
      output = process.cwd()
      break
    default:
      output = 'command not recognized'
      break
  }
  process.stdout.write(output)
  process.stdout.write('\nprompt > ')
})
