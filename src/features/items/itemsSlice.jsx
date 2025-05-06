import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// 1) Async thunk: sayfa numarası alıp API’den öğeleri çeker
export const fetchItems = createAsyncThunk(
  'items/fetchItems',
  async (page, thunkAPI) => {
    const res = await fetch(`/api/items?page=${page}`)
    if (!res.ok) {
      // Hata fırlatılırsa rejected case’e düşer
      throw new Error('Sunucudan veri alınamadı')
    }
    return await res.json() // { items: [...], totalPages: N }
  }
)

const initialState = {
  list: [],        // çekilen öğeler
  page: 1,         // aktif sayfa
  totalPages: 1,   // toplam sayfa sayısı
  loading: false,  // yükleniyor durumu
  error: null,     // hata mesajı
}

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    // Artık direkt setList/setTotalPages kullanmayacağız, thunk yönetecek
    setPage(state, action) {
      state.page = action.payload
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchItems.pending, state => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.loading = false
        state.list = action.payload.items
        state.totalPages = action.payload.totalPages
      })
      .addCase(fetchItems.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  },
})

export const { setPage } = itemsSlice.actions
export default itemsSlice.reducer