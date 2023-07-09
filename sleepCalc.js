const getSleepHours = (day) => {
  switch (day) {
    case "sunday":
      return 8;
      break;
    case "monday":
      return 6;
      break;
    case "tuesday":
      return 7;
      break;
    case "wednesday":
      return 7;
      break;
    case "thursday":
      return 7;
      break;
    case "friday":
      return 7;
      break;
    case "saturday":
      return 4;
      break;
  }
};

const getActualSleepHours = () =>
  getSleepHours("sunday") +
  getSleepHours("monday") +
  getSleepHours("tuesday") +
  getSleepHours("wednesday") +
  getSleepHours("thursday") +
  getSleepHours("friday") +
  getSleepHours("saturday");

const getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours * 7;
};

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
    console.log('You got the perfect amount of sleep!')
  } else if (actualSleepHours > idealSleepHours) {
    console.log(`You got ${idealSleepHours - actualSleepHours} hours more sleep than you needed!`)
  } else {
    console.log(`You got ${actualSleepHours - idealSleepHours} hours less sleep. Gotta rest more!`)
  }
};

calculateSleepDebt();