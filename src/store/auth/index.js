import { createSlice } from '@reduxjs/toolkit';

const auth = createSlice({
  name: 'auth',
  initialState: {
    currentAccount: {
      id: 1,
      username: 'incidenbiri',
      fullName: 'Caner Ağkaya',
      email: 'agkayacaner@gmail.com',
      avatar:
        'https://pbs.twimg.com/profile_images/1672665257888579587/g0L3vENF_400x400.jpg',
    },
    accounts: [
      {
        id: 1,
        username: 'incidenbiri',
        fullName: 'Caner Ağkaya',
        email: 'agkayacaner@gmail.com',
        avatar:
          'https://pbs.twimg.com/profile_images/1672665257888579587/g0L3vENF_400x400.jpg',
      },
      {
        id: 2,
        username: 'dev_caneragkaya',
        fullName: './dev_caneragkaya',
        email: 'dev.caneragkaya@gmail.com',
        avatar:
          'https://pbs.twimg.com/profile_images/1710302355349012481/M6tbiLT0_400x400.png',
      },
    ],
  },
  reducers: {
    _addAccount(state, action) {
      state.accounts.push(action.payload);
    },
    _removeAccount(state, action) {
      state.accounts = state.accounts.filter(
        (account) => account.id !== action.payload
      );

      if (state.currentAccount && state.currentAccount.id !== action.payload) {
        this._setCurrentAccount(false);
      }
    },
    _setCurrentAccount(state, action) {
      state.currentAccount = action.payload;
    },
  },
});

export const { _addAccount, _removeAccount, _setCurrentAccount } = auth.actions;
export default auth.reducer;
