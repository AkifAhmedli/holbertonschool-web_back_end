// Display the initial welcome message
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Listen for user input from stdin
process.stdin.on('readable', () => {
  const chunk = process.stdin.read();

  if (chunk !== null) {
    process.stdout.write(`Your name is: ${chunk}`);
  }
});

// Listen for the end of the input stream to display the exit message
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
