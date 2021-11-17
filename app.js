const url = `https://dog.ceo/api/breeds/list/all`;
fetch(url)
	.then((res) => res.json())
	.then((breeds) => showAllBreeds(breeds));

const showAllBreeds = (breeds) => {
	// console.log(breeds);
	const breedNames = breeds.message;
	for (let breed in breedNames) {
		// console.log(`${breed}`);
		const breedList = document.getElementById('breed-list');
		const li = document.createElement('li');
		li.innerText = breed;
		breedList.appendChild(li);
	}
};

// Search breed name and show the photo of that breed
const searchBreedBtn = document.getElementById('search-btn');
searchBreedBtn.addEventListener('click', () => {
	const breedName = document.getElementById('search-breed').value;
	// console.log(breedName);
	const url2 = `https://dog.ceo/api/breed/${breedName}/images/random`;
	console.log(url2);
	fetch(url2)
		.then((res) => res.json())
		.then((breedInfo) => showBreedImg(breedInfo));
});

const showBreedImg = (breedInfo) => {
	// console.log(breedInfo.message);
	let breedImg = breedInfo.message;
	let showBreedInfo = `
        <img  src='${breedImg}' style="width:300px;height:200px;"/>
    `;
	const breedImgDiv = document.getElementById('breed-img');
	breedImgDiv.innerHTML = showBreedInfo;
};
