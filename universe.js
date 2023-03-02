
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
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.</p>
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