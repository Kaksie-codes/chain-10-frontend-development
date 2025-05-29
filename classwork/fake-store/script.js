const productWrapper = document.querySelector('.products-wrapper');


fetch('https://fakestoreapi.com/products')
  .then((response) => {
    console.log('raw response >>>', response);
    return response.json()
})
  .then(data => {
    console.log('processed response >>>>', data);
    data.forEach((item) => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <h3>${item.title}</h3>
            <p>${item.description}</p>
            <span>$${item.price}</span>
        `;
        productWrapper.appendChild(productCard);
    })
});