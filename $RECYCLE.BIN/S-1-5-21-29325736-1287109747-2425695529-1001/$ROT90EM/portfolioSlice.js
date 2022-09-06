import {createSlice} from "@reduxjs/toolkit";

export const portfolioSlice = createSlice({
	name: "portfolio",
	initialState: {
		credit: 100,
		portfolios: []
	},
	reducers: {
		setPortfolio: (state, { payload }) => {
			state.portfolios = payload;
		},
		addPortfolio: (state, { payload }) => {
			if (state.portfolios.findIndex(portfolio => portfolio.player_id === payload.player_id) === -1) {
				state.portfolios.push(payload);
			}
		},
		updatePortfolio: (state, { payload }) => {
			const curIndex = state.portfolios.findIndex(portfolio => portfolio.player_id === payload.player_id);
			if (curIndex !== -1) {
				state.portfolios[curIndex] = payload
			}
		},
		removePortfolio: (state, { payload }) => {
			state.portfolios = state.portfolios.filter(coin => coin.player_id !== payload.player_id);
		},
		updateCredit: (state, { payload }) => {
			state.credit = payload;
		},
		refreshCredit: (state) => {
			let initialCredit = 100;
			state.portfolios.forEach((item) => {
				initialCredit -= parseInt(item.player_points);
			});
			state.credit = initialCredit;
		}
	}
});

export const {addPortfolio, setPortfolio, updatePortfolio, removePortfolio, updateCredit, refreshCredit} = portfolioSlice.actions;

export default portfolioSlice.reducer;
