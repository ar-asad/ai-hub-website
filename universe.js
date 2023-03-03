let fetchData;
const loadCardData = (dataLimit, sort) => {
    toggleSpiner(true)
    fetch('https://openapi.programming-hero.com/api/ai/tools')
        .then(res => res.json())
        .then(data => {

            showDataInCard(data.data.tools, dataLimit, sort);
        })
}
const showDataInCard = (items, dataLimit, sort) => {

    const mainContainer = document.getElementById('main-container');
    const seeMore = document.getElementById('see-more')
    // show default 6 cards in display
    if (!sort && dataLimit && items.length > 6) {
        items = items.slice(0, 6)
        seeMore.classList.remove('d-none');
    }
    else {
        mainContainer.innerText = '';
        seeMore.classList.add('d-none');

    }
    if (sort) {


        items.sort((a, b) => (new Date(a.published_in) > new Date(b.published_in)) ? 1 : ((new Date(b.published_in) > new Date(a.published_in)) ? -1 : 0));


    }
    for (const item of items) {
        // console.log(item)
        const cardDiv = document.createElement('div')
        cardDiv.classList.add('col')
        cardDiv.innerHTML = `
        <div class="card h-100">
            <img class="p-3 rounded-5" src=${item.image} alt="...">
            <div class="card-body">
                <h5 class="card-title">Features</h5>
               <ul>
               <li>${item.features[0]}
               <li>${item.features[1]}
               <li>${item.features[2]}
               </ul>
            </div>
            <div class="card-footer bg-body d-flex  align-items-center justify-content-between">
            <div>
            <h5 class="card-title">${item.name}</h5>
            <p>${item.published_in}</p>
            </div>
            <!-- Button trigger modal -->
            <button onClick="itemsDetails(${item.id})" type="button" class="btn btn-outline-danger" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Details</button>

            </div>
    </div>
        `
        mainContainer.appendChild(cardDiv);
    }
    toggleSpiner(false)
}
const itemsDetails = (itemId) => {
    console.log(itemId)
    // console.log(item.id);
    const url = (`https://openapi.programming-hero.com/api/ai/tool/${String(itemId).padStart(2, '0')}`)
    fetch(url)
        .then(res => res.json())
        .then(data => showItemsDetails(data.data))
}

const showItemsDetails = (itemsDetails) => {
    const cardDetailsContainer = document.getElementById('cardDetails-container')
    cardDetailsContainer.innerHTML = `
    <div class="col">
    <div class="card h-100">
        <div class="card-body details-card-first rounded">
            <h5>${itemsDetails.description}
            </h5>
            <div class="row row-cols-1 row-cols-md-3 mb-3">
                <div style="color: #03A30A;" class="col bg-light fw-bold p-4 rounded">
                <p>${itemsDetails.pricing[0].price ? itemsDetails.pricing[0].price : "Free of coast/"} <br>${itemsDetails.pricing[0].plan}</p>
                </div >
                <div style="color: #F28927;" class="col bg-light fw-bold p-4 rounded"> <p>${itemsDetails.pricing[1].price ? itemsDetails.pricing[1].price : "Free of coast/"} <br>${itemsDetails.pricing[1].plan}</p>
                </div>
                <div style="color: #EB5757;" class="col bg-light fw-bold p-4 rounded"> <p>${itemsDetails.pricing[2].price ? itemsDetails.pricing[2].price : "Free of coast/"} <br>${itemsDetails.pricing[2].plan}</p>
                </div>
            </div >
    <div class="row row-cols-1 row-cols-md-2 justify-content-between ">
        <div class='col'>
            <h4>Features</h4>
            <ul>
                <li>${itemsDetails.features[1].feature_name}</li>
                <li>${itemsDetails.features[2].feature_name}</li>
                <li>${itemsDetails.features[3].feature_name}</li>
            </ul>
        </div>
        <div class='col'>
            <h4>Integrations</h4>
            <ul>
                <li>${itemsDetails.integrations[0] ? itemsDetails.integrations[0] : "No data found"}</li>
                <li>${itemsDetails.integrations[1] ? itemsDetails.integrations[1] : "No data found"}</li>
                <li>${itemsDetails.integrations[2] ? itemsDetails.integrations[2] : "No data found"}</li>
            </ul>
        </div>
    </div>
        </div >
    </div >
</div >
    <div class="col modarl-right-container">
        <div class="card h-100">
            <img class="p-3 rounded-5" src=${itemsDetails.image_link[0]} alt="...">
            <p class="card-accurecy p-2 fw-semibold">${itemsDetails.accuracy.score}% accuracy</p>
                <div class="card-body">
                    <h5 class="card-title text-center">${itemsDetails.input_output_examples[0].input}</h5>
                    <p>${itemsDetails.input_output_examples[1].output ? itemsDetails.input_output_examples[1].output : "No! Not Yet! Take a break!!!"}</p>
                </div>
        </div>
    </div>
`

}

// toggleSppiner function....
const toggleSpiner = (isLoading) => {
    const spinerDiv = document.getElementById('toggle-spiner')
    if (isLoading) {
        spinerDiv.classList.remove('d-none')
    }
    else {
        spinerDiv.classList.add('d-none')
    }
}

// show all card......
document.getElementById('btn-see-more').addEventListener('click', () => {
    loadCardData();

})
// short card by date...
document.getElementById('btn-sort-card').addEventListener('click', () => {
    loadCardData(6, true);
})

loadCardData(6);