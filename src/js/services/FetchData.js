import axios from "axios";
import * as constants from "../Constants";

export const FetchUrlData = async (params) => {
	try {
		const url = `${constants.appLocalBaseUrl}public`;
		const { data } = await axios({
			method: "post",
			url: `url`,
			data: params,
			headers: {
				"x-auth-Token": token,
			},
		});
		return data;
	} catch (error) {
		console.log("Fetch error in FetchUrlData");
		console.log(error);
	}
};

export const getUrlByUrl = async (params) => {
	try {
		const url = `${constants.appLocalBaseUrl}public`;
		const { data } = await axios({
			method: "post",
			url: `url`,
			data: params,
			headers: {
				"x-auth-Token": token,
			},
		});
		return data;
	} catch (error) {
		console.log("Fetch error in FetchUrlData");
		console.log(error);
	}
};
