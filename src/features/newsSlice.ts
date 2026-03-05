import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchNews } from '../apiCall/app';

export interface News {
  title: string;
  url: string;
  urlToImage: string;
  content: string;
}

interface NewsState {
  newsList: News[];
  loading: boolean;
  error: string | null;
}

const initialState: NewsState = {
  newsList: [],
  loading: false,
  error: '',
};

export const getNews = createAsyncThunk('news/getNews', async () => {
  const resp = await fetchNews();
  return resp;
});

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    clearNewsList: (state) => {
      state.newsList = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getNews.pending, (state) => {
        state.loading = true;
      })
      .addCase(getNews.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.newsList = payload;
      })
      .addCase(getNews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? '';
      });
  },
});

export const { clearNewsList } = newsSlice.actions;

export default newsSlice.reducer;
