import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// 1) Async thunk: API’den ürünleri çekecek
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (_, thunkAPI) => {
    const baseUrl = import.meta.env.VITE_REACT_APP_API_URL
    const res = await fetch(`${baseUrl}/products`)
    if (!res.ok) {
      throw new Error('Ürünler yüklenemedi')
    }
    const data = await res.json()
    return data.data  // API’niz data alanında dizi döndürüyorsa
  }
)

export const fetchProductById = createAsyncThunk(
  'products/fetchProductById',
  async (id, thunkAPI) => {
    const baseUrl = import.meta.env.VITE_REACT_APP_API_URL
    // Eğer baseUrl = ".../api/products" ise:
    const url = `${baseUrl}/products/getbyid?id=${id}`        // veya `${baseUrl}/${id}` 
    console.log('[FETCH DEBUG] URL →', url)

    const res = await fetch(url, { mode: 'cors' })
    console.log('[FETCH DEBUG] Status →', res.status)

    const text = await res.clone().text()
    console.log('[FETCH DEBUG] Body →', text)

    if (!res.ok) throw new Error('Ürün detayı alınamadı')
    return (await res.json()).data ?? await res.json()
  }
)


const initialState = {
  list: [],      // Ürünler listesi
  loading: false,
  error: null,

  detail: null,        // Seçilen ürün detayı
  loadingDetail: false,
  detailError: null,
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    // İleride ek senkron işlemler eklemek isterseniz
  },
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.pending, state => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false
        state.list = action.payload
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
      .addCase(fetchProductById.pending, state => {
        state.loadingDetail = true
        state.detailError = null
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.loadingDetail = false
        state.detail = action.payload
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.loadingDetail = false
        state.detailError = action.error.message
      })
  },
})

export default productsSlice.reducer