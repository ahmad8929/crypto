import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCryptoData = createAsyncThunk("crypto/fetchData", async () => {
  const response = await axios.get(
    `https://api.coingecko.com/api/v3/coins/markets`,
    {
      params: {
        vs_currency: 'usd',
        order: 'market_cap_desc',
        per_page: 20,
        page: 1,
        sparkline: true,
        price_change_percentage: '1h,24h,7d',
      },
    }
  );
  return response.data;
});

const cryptoSlice = createSlice({
  name: "crypto",
  initialState: {
    assets: [],
    status: "idle",
    error: null,
  },
  reducers: {
    updateAsset(state) {
      state.assets = state.assets.map(asset => {
        const fluctuation = (value, scale = 0.05) => value * (1 + (Math.random() - 0.5) * scale);
        return {
          ...asset,
          current_price: fluctuation(asset.current_price),
          price_change_percentage_1h_in_currency: fluctuation(asset.price_change_percentage_1h_in_currency || 0),
          price_change_percentage_24h: fluctuation(asset.price_change_percentage_24h || 0),
          price_change_percentage_7d_in_currency: fluctuation(asset.price_change_percentage_7d_in_currency || 0),
          total_volume: fluctuation(asset.total_volume),
        };
      });
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCryptoData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCryptoData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.assets = action.payload;
      })
      .addCase(fetchCryptoData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { updateAsset } = cryptoSlice.actions;
export const selectCryptoAssets = (state) => state.crypto.assets;
export default cryptoSlice.reducer;