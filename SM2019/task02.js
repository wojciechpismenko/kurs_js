const A = ['2017-03-10 08:13:11', '2017-03-10 19:01:27', '2017-03-11 07:35:55', '2017-03-11 16:15:11', '2017-03-12 08:01:41', '2017-03-12 17:19:08'];
const B = ['2017-03-10 18:58:11', '2017-03-10 19:01:27', '2017-03-11 07:35:55', '2017-03-11 16:15:11', '2017-03-12 08:01:41', '2017-03-12 17:19:08'];
const C = ['2017-03-08 17:11:13', '2017-03-11 17:22:47', '2017-03-11 19:23:51', '2017-03-11 22:03:12', '2017-03-12 08:32:04', '2017-03-12 13:19:08', '2017-03-12 17:19:08'];

const checkLogs = (logs) => {
  const msLogs = [];

  logs.forEach(el => msLogs.push(Date.parse(el)));

  const msInDay = 24 * 60 * 60 * 1000;
  let numberOfDay = 0;
  let sessionsPerDay = [1, 0, 0];
  let numberOfSessions = 1;

  const isSession = (a, b) => {
    if (a - b >= 30 * 60 * 1000) {
      numberOfSessions += 1;
      sessionsPerDay[numberOfDay] += 1;
    }
  }

  for (let i = msLogs.length-1; i > 0; i -= 1) {
    const a = msLogs[i];
    const b = msLogs[i-1];

    const daysDifference = Math.floor(Math.floor(a / msInDay) - Math.floor(b / msInDay));

    if (daysDifference < 1) {
      isSession(a, b);
    } else if (daysDifference === 1) {
      numberOfDay += 1;
      numberOfSessions += 1;
      sessionsPerDay[numberOfDay] += 1;

      if (numberOfDay === 3) {
        numberOfSessions -= sessionsPerDay[0];
        sessionsPerDay.splice(0, 1);
        numberOfDay = 2;
      }
    } else if (daysDifference > 1) {
        numberOfDays = 0;
        numberOfSessions = 1;
        sessionsPerDay = [1, 0, 0];
    }

    if (numberOfDay === 2 && numberOfSessions >= 6) {
      return true;
    }
  }

  if (numberOfDay === 2 && numberOfSessions >= 6) {
    return true;
  } else {
    return false;
  };
}

console.log(checkLogs(A));
console.log(checkLogs(B));
console.log(checkLogs(C));