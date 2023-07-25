export const selectCurrentUser = (state) => state.user.currentUser;

export const selectUserIsLoading = (state) => state.user.loading;

export const selectUserError = (state) => state.user.error;

export const selectIsSuccess = (state) => state.user.success;

export const selectUserToken = (state) => state.user.userToken;
