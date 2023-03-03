
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
            <h5>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, fuga.
            </h5>
            <div class="d-flex align-items-center justify-content-between m-2 ">
                <div style="color: #03A30A;" class="bg-light p-4 rounded">amrs</div>
                <div style="color: #F28927;" class="bg-light p-4 rounded">tomar</div>
                <div style="color: #EB5757;" class="bg-light p-4 rounded">somar</div>
            </div>
            <div class="d-flex align-items-center justify-content-between ">
                <div>
                    <h4>fetuares</h4>
                    <ul>
                        <li>card</li>
                        <li>card</li>
                        <li>card</li>
                    </ul>
                </div>
                <div>
                    <h4>fetuares</h4>
                    <ul>
                        <li>card</li>
                        <li>card</li>
                        <li>card</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="col">
    <div class="card h-100">
        <img class="p-3" src="..." class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title text-center">Card title</h5>
            <p class="card-text text-center">This is a longer card with supporting text
                below as a
                natural lead-in to additional content. This content is a little bit
                longer.</p>
        </div>
    </div>
</div>
    `

}

loadCardData();