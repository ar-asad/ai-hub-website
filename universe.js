
const loadCardData = () => {
    fetch('https://openapi.programming-hero.com/api/ai/tools')
        .then(res => res.json())
        .then(data => showDataInCard(data.data.tools))
}
const showDataInCard = (items) => {
    const mainContainer = document.getElementById('main-container');
    // show default 6 cards in display
    items = items.slice(0, 6)
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
}
const itemsDetails = (itemsId) => {
    const url = (`https://openapi.programming-hero.com/api/ai/tool/0${itemsId}`)
    fetch(url)
        .then(res => res.json())
        .then(data => showItemsDetails(data.data))
}

const showItemsDetails = (itemsDetails) => {
    console.log(itemsDetails)
    const cardDetailsContainer = document.getElementById('cardDetails-container')
    cardDetailsContainer.innerHTML = `
    <div class="col">
    <div class="card h-100">
        <div class="card-body details-card-first rounded">
            <h5>${itemsDetails.description}
            </h5>
            <div class="d-flex align-items-center justify-content-between m-2 ">
                <div style="color: #03A30A;" class="bg-light p-4 rounded">
                <p>${itemsDetails.pricing[0].price ? itemsDetails.pricing[0].price : "Free of coast/"} <br>${itemsDetails.pricing[0].plan}</p>
                </div >
                <div style="color: #F28927;" class="bg-light p-4 rounded"> <p>${itemsDetails.pricing[1].price ? itemsDetails.pricing[1].price : "Free of coast/"} <br>${itemsDetails.pricing[1].plan}</p>
                </div>
                <div style="color: #EB5757;" class="bg-light p-4 rounded"> <p>${itemsDetails.pricing[2].price ? itemsDetails.pricing[2].price : "Free of coast/"} <br>${itemsDetails.pricing[2].plan}</p>
                </div>
            </div >
    <div class="d-flex align-items-center justify-content-between ">
        <div>
            <h4>Features</h4>
            <ul>
                <li>${itemsDetails.features[1].feature_name}</li>
                <li>${itemsDetails.features[2].feature_name}</li>
                <li>${itemsDetails.features[3].feature_name}</li>
            </ul>
        </div>
        <div>
            <h4>Integrations</h4>
            <ul>
                <li>${itemsDetails.integrations[0]}</li>
                <li>${itemsDetails.integrations[1]}</li>
                <li>${itemsDetails.integrations[2]}</li>
            </ul>
        </div>
    </div>
        </div >
    </div >
</div >
    <div class="col">
        <div class="card h-100">
            <img class="p-3 rounded-5" src=${itemsDetails.image_link[0]} alt="...">
                <div class="card-body">
                    <h5 class="card-title text-center">${itemsDetails.input_output_examples[0].input}</h5>
                    <p>${itemsDetails.input_output_examples[1].output ? itemsDetails.input_output_examples[1].output : "No! Not Yet! Take a break!!!"}</p>
                </div>
        </div>
    </div>
`

}

loadCardData();