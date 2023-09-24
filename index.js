function scuberGreetingForFeet(ride) {
  // Write your code here!
  if (ride <= 400) {
    return 'This one is on me!';
  } else if (400 < ride && ride <= 2000) {
    return 'That will be twenty bucks.';
  } else if (2000 < ride && ride <= 2500) {
    return 'I will gladly take your thirty bucks.';
  } else if (ride > 2500) {
    return 'No can do.';
  }

}

function ternaryCheckCity(city) {
  // Write your code here!
  let yes = "Ok, sounds good.";
  let no = "No go.";
  return (city === "NYC" ? yes : no);

}

function switchOnCharmFromTip(tip) {
  // Write your code here!
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
      break;
    case 'not as generous':
      return 'Thank you.';
      break;
    case 'thanks for everything':
      return 'Bye.';
      break;
  }
}