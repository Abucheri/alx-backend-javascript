// Display welcome message
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Listen for user input
process.stdin.on('readable', () => {
  const name = process.stdin.read();

  // If input is provided
  if (name !== null) {
    // Display user's name
    process.stdout.write(`Your name is: ${name}`);
  }
});

// Handle end of input
process.stdin.on('end', () => {
  // Display closing message
  process.stdout.write('This important software is now closing\n');
});
