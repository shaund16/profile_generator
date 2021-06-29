const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Whats your name? ', (name) => {
  rl.question('Whats an activity you like doing? ', (activity) => {
    rl.question('What do you listen to while doing that? ', (listening) => {
      rl.question('Which meal is your favourite? ', (meal) => {
        rl.question('Which sport is your absolute favourite? ', (sport) => {
          rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (superPower) => {
            console.log(`Thank you for your valuable feedback: Hi ${name}, you like ${activity} while listening to ${listening}, when you get hungry and have a choice to eat any meal of your choosing you would choose ${meal}. After eating your meal, you enjoy playing ${sport}, and if there was a game on tonight you would call your friends over to watch ${sport}. You also told us a unique ability you have to ${superPower}.`);
            rl.close();
          });
        });
      });
    });
  });
});



