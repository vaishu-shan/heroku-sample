import ls from "local-storage";

export default class StorageManager {
	static setPortfolioData (items) {
		return ls.set("portfolio_data", (items));
	}

	static addPortfolioData (item) {
		let current = StorageManager.getPortfolioData();
		if (current.findIndex(coin => coin.player_id === item.player_id) === -1) {
			current.push(item);
			StorageManager.setPortfolioData(current);
		}
	}

	static getPortfolioData () {
		const lineData = ls.get("portfolio_data");
		if (lineData) {
			return (lineData);
		}
		return [];
	}

	static removePortfolioData (item) {
		let current = StorageManager.getPortfolioData();
		current = current.filter(coin => coin.player_id !== item.player_id);
		StorageManager.setPortfolioData(current);
	}

	static setFavorites (items) {
		return ls.set("favorites", items);
	}

	static getFavorites () {
		return ls.get("favorites");
	}

	static setGameInfo (game) {
		return ls.set("current_game", game);
	}

	static getGameInfo () {
		return ls.get("current_game");
	}

	static setCurrentPoolId (pool_id) {
		ls.set("current_pool_id", pool_id);
	}

	static getCurrentPoolId () {
		return ls.get("current_pool_id") || 1;
	}

	static setCurrentPool (pool) {
		ls.set("current_pool", pool);
	}

	static getCurrentPool () {
		return ls.get("current_pool");
	}
}
