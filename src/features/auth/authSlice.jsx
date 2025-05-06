import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Thunk: Kullanıcı kaydı
export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (userInfo, thunkAPI) => {
    const response = await fetch(
      'https://modabu-api01-afcsa3adhudsgkey.francecentral-01.azurewebsites.net/api/Auth/register',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userInfo),
      }
    );
    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      return thunkAPI.rejectWithValue(error.message || 'Kayıt başarısız');
    }
    return await response.json();
  }
);

// Thunk: Kullanıcı girişi
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({ email, password }, thunkAPI) => {
    const response = await fetch(
      'https://modabu-api01-afcsa3adhudsgkey.francecentral-01.azurewebsites.net/api/Auth/login',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      }
    );
    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      return thunkAPI.rejectWithValue(error.message || 'Giriş başarısız');
    }
    const data = await response.json();
    // Token ve expiration localStorage'a kaydet
    localStorage.setItem('token', data.token);
    localStorage.setItem('expiration', data.expiration);
    return data;
  }
);

const initialState = {
  token: localStorage.getItem('token') || null,
  expiration: localStorage.getItem('expiration') || null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null;
      state.expiration = null;
      localStorage.removeItem('token');
      localStorage.removeItem('expiration');
    },
  },
  extraReducers: (builder) => {
    builder
      // register
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      })
      // login
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        state.expiration = action.payload.expiration;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
