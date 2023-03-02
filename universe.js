
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
        console.log(item)
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
            <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
            </div>
    </div>
        `
        mainContainer.appendChild(cardDiv);
    }

}

loadCardData();