export function countSleeprecordsAverageTime(sleepRecords) {
  if (!sleepRecords) {
    return;
  }

  let sleepTime = 0;
  sleepRecords.forEach((sleepRecord) => {
    const goToBedTime = new Date(sleepRecord.goToBedDateTime);
    const getUpTime = new Date(sleepRecord.getUpDateTime);

    sleepTime += Math.abs(getUpTime - goToBedTime) / 36e5;
  });

  return sleepTime / sleepRecords.length;
}
