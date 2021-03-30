//Function to get the petdata

import axios from "axios";
import { useEffect } from "react";

async function getPetData(petid) {
	console.log(petid);
	try {
		const { data } = await axios.get(`/api/pet/${petid}`, {
			headers: { "x-auth-token": localStorage.getItem("auth-token") },
		});
		return data;
	} catch (error) {
		console.log(error);
	}
}

const loadUserPets = async (user) => {
	let url = `/api/getpetbyuser/${user}`;
	try {
		const { data } = await axios.get(url, {
			headers: { "x-auth-token": localStorage.getItem("auth-token") },
		});
		return data;
	} catch (error) {
		console.log(error);
	}
};

// const savePet = async (e) => {
// 	e.preventDefault();
// 	try {
// 		var formData = new FormData();

// 		formData.append("file", file);

// 		if (REACT_APP_LOCAL_STORAGE && file) {
// 			await axios
// 				.post("/api/saveLocImage", formData, {
// 					headers: { "x-auth-token": localStorage.getItem("auth-token") },
// 				})
// 				.then((data) => (newPet.PetImageLoc = data.data.fileUrl));
// 		}

// 		if (!REACT_APP_LOCAL_STORAGE && file) {
// 			await axios
// 				.post("/api/saveImage", formData, {
// 					headers: { "x-auth-token": localStorage.getItem("auth-token") },
// 				})
// 				.then((data) => (newPet.PetImageLoc = data.data.fileUrl));
// 		}

// 		await axios.post("/api/pet", newPet, {
// 			headers: { "x-auth-token": localStorage.getItem("auth-token") },
// 		});

// 		setNewPetData(true);
// 		window.location.reload();
// 	} catch (error) {
// 		console.log(error);
// 	}
// };








const useEffectOnlyOnce = (func) => useEffect(func, [func]);

export { getPetData, loadUserPets, useEffectOnlyOnce };
