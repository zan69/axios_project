import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios'

export const getPhotos = createAsyncThunk(
    'photos/getPhotos',
    async () => {
        const response = await axios.get('https://picsum.photos/v2/list?page=3&limit=9');
        return response.data;
    }
)

export const gallerySlice = createSlice({
    name: 'gallery',
    initialState: {
        photos: [],
        isLoading: false,
        error: false,
    },
    reducers: {},
    extraReducers: { // thunk is considered an external action, so we use extraReducers
        [getPhotos.pending]: (state) => {
            state.isLoading = true;
        },
        [getPhotos.fulfilled]: (state, action) => {
            state.photos = action.payload;
            state.isLoading = false;
        },
        [getPhotos.rejected]: (state) => {
            state.isLoading = false;
            state.error = true;
        }
    }
})

const galleryReducer = gallerySlice.reducer
export default galleryReducer