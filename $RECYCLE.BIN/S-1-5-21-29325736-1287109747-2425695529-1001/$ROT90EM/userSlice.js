import {createSlice} from "@reduxjs/toolkit";

export const userSlice = createSlice({
	name: "user",
	initialState: {
		loggedIn: true
	},
	reducers: {
		setLoggedIn: (state, { payload }) => {
			state.loggedIn = payload;
		}
	}
});

export const {setLoggedIn} = userSlice.actions;

export default userSlice.reducer;
