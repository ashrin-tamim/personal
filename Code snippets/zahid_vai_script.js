
var displayQuantityWithPrice = {
    init: function () {
        displayQuantityWithPrice.mainJS();
    },
    mainJS: async function () {
        var liElements = document.querySelectorAll('#main #product-content .product-variations li');

        for (var i = 0; i < liElements.length; i++) {

            displayQuantityWithPrice.updatePriceData(liElements, i)

        }
    },
    updatePriceData: async function (liElements, i) {
        var liElement = liElements[i],
            productUrl = liElement.querySelector('a').href;
        priceElement = await displayQuantityWithPrice.getPriceELement(productUrl);

        if (liElement.querySelector(".not-selectable")) {
            liElement.classList.add("stockOut_z")
        }

        liElement.addEventListener('click', function () {
            ABTastyClickTracking("PDP Select size");

            setTimeout(function () {
                console.log("entered");
                displayQuantityWithPrice.mainJS();
                document.querySelector('#main #product-content .product-variations ul li.selected').scrollIntoView({ block: "center", inline: "start" });

            }, 1000);
        });

        if (liElement.querySelector('a .out-of-stock-msg')) liElement.querySelector('a .out-of-stock-msg').innerText = 'Rupture'

        liElement.querySelector('a').appendChild(priceElement);

    },

    getPriceELement: function (url) {
        return new Promise((resolve, reject) => {
            $.ajax({
                method: "GET",
                url,
            }).done(function (response) {
                var replacedData = new DOMParser().parseFromString(response, 'text/html'),
                    bodyNode = replacedData.body,
                    element = bodyNode.querySelector('.product-cart .product-price-wrapper.pdp-price');

                resolve(element);
            });
        })
    }
};


(function pollForDisplayQuantityWithPrice() {
    if (document.readyState === 'complete') {
        try {
            displayQuantityWithPrice.init();
            console.log("[PDP] Iteration_ Price per quantity : other categories - userjs| variation- A: 01");
        } catch (error) {
            console.log("[PDP] Iteration_ Price per quantity : other categories | error:", error);
        }
    } else {
        setTimeout(pollForDisplayQuantityWithPrice, 25);
    }
})();