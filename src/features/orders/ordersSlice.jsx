import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// API'ye sipariş gönderme
export const postOrder = createAsyncThunk('orders/postOrder', async (orderData, thunkAPI) => {
  try {
    const baseUrl = import.meta.env.VITE_REACT_APP_API_URL // ✅ buraya taşı
    const response = await fetch(`${baseUrl}/orders`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(orderData)
    })

    if (!response.ok) throw new Error(`Hata: ${response.status}`)

    const result = await response.json()
    return result
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})

const ordersSlice = createSlice({
  name: 'orders',
  initialState: {
    loading: false,
    error: null,
    lastOrder: null
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(postOrder.pending, state => {
        state.loading = true
        state.error = null
      })
      .addCase(postOrder.fulfilled, (state, action) => {
        state.loading = false
        state.lastOrder = action.payload
      })
      .addCase(postOrder.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  }
})

export default ordersSlice.reducer
