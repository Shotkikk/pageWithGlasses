var btnWeiter = document.querySelector('.btnWeiter');
var btnZuruck = document.querySelector('.btnZuruckContainer');

btnWeiter.addEventListener('click', function(e){

    var glassesGallery = document.querySelector('.glasses');
    var slider = e.target.parentElement.previousElementSibling;


    console.log(glassesGallery)

    e.target.parentElement.style = 'display: none';
    slider.style = 'display: none';
    glassesGallery.style = 'display: flex; justify-content: space-around';
    btnZuruck.style = 'display: flex';

})

btnZuruck.addEventListener('click', function () {
	slider.style = 'display: flex';
})



function addProducts(howManyProducts, howManyLi){
    var productsContainer = document.querySelector('.products');
    var productsDetail = [
        'Braillentyp: Damen, Herren', 'Rahmentyp: Randlose Brille', 'Eckiger Rahmen', 'Ovaler Rahmen', "Runder Rahmen", 'Still: casual, extravagant', 'Einstarkenbrille','Material: Metal'
    ];
    var prices = ['ab 39,90€', 'ab 149,90€']

    for(var i = 0; i < howManyProducts; i++){

        var newUl = document.createElement('ul');
        var newImg = document.createElement('img');
        var newHeader = document.createElement('h4');
        var singleProductContainer = document.createElement('div');
        var specificationListContainer =  document.createElement('div');
        var priceContainer = document.createElement('div');
        var priceDetailContainer = document.createElement('div');
        var listHeader = document.createElement('hr');

        var priceExtras = document.createElement('span');
        var price = document.createElement('h6');
        var btnBuy = document.createElement('button');
        var btnDescription = document.createElement('span');
        var btnShoppingCartIcon = document.createElement('i');
        var btnArrowRightIcon = document.createElement('i');





        newUl.classList = 'specsList';
        newHeader.innerHTML = 'FUNCHAL';
        newImg.src = './assets/glasses.jpg';

        singleProductContainer.classList = 'singleProduct';
        priceContainer.classList = 'priceContainer';
        priceDetailContainer.classList = 'priceDetail';

        priceExtras.classList= 'priceExtras';
		priceExtras.innerHTML = 'Rahnem inkl.Glasser & Service';
		price.classList = 'price';
		price.innerHTML = prices[i];

		btnBuy.classList = 'btnBuy';
		btnDescription.classList = 'btnDescription';
		btnDescription.innerHTML = 'Zum Produkt';
		btnShoppingCartIcon.classList = 'fas fa-shopping-cart btnShoppingCartIcon';
        btnArrowRightIcon.classList = 'fas fa-arrow-alt-circle-right btnBuyArrowRight';


        for(var j = 0; j <= howManyLi - 1 ; j++){
			var checkContainer = document.createElement('span');
            var newLi = document.createElement('li');
            var check = document.createElement('i');

            checkContainer.classList = 'fa-li';
            check.classList = 'fas fa-check check';

            checkContainer.appendChild(check);

			newLi.innerHTML = productsDetail[j];
			newLi.appendChild(check);


            newUl.appendChild(newLi);
        }

        priceDetailContainer.appendChild(priceExtras)
        priceDetailContainer.appendChild(price);

        btnBuy.appendChild(btnShoppingCartIcon);
        btnBuy.appendChild(btnDescription);
        btnBuy.appendChild(btnArrowRightIcon);

        priceContainer.appendChild(priceDetailContainer);
        priceContainer.appendChild(btnBuy);

        specificationListContainer.appendChild(newHeader);
        specificationListContainer.appendChild(listHeader);
        specificationListContainer.appendChild(newUl);

        singleProductContainer.appendChild(newImg);
        singleProductContainer.appendChild(specificationListContainer);
        singleProductContainer.appendChild(priceContainer);

        productsContainer.appendChild(singleProductContainer);
    }

}

document.addEventListener("DOMContentLoaded", function(event) {

    addProducts(2,8);


});



