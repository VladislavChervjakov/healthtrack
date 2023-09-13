export const selectSleepRecords = (state) => state.sleeprecords.records;

export const selectSleepRecordsIsLoading = (state) =>
  state.sleeprecords.loading;

export const selectSleepRecordsError = (state) => state.sleeprecords.error;

export const selectIsSuccess = (state) => state.sleeprecords.success;
