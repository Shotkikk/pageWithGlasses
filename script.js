var btnWeiter = document.querySelector('.btnWeiter');

btnWeiter.addEventListener('click', function(){
    console.log('guzik działa')

})



function addProducts(howManyProducts, howManyLi){
    var productsContainer = document.querySelector('.products');
    var liArray = [];
    var productsDetail = [
        'Braillentyp: Damen, Herren', 'Rahmentyp: Randlose Brille', 'Eckiger Rahmen', 'Ovaler Rahmen', "Runder Rahmen", 'Still: casual, extravagant', 'Einstarkenbrille','Material: Metal'
    ];
    var prices = ['ab 39,90 E', 'ab 149,90 E']

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




        newUl.classList = 'specsList';
        newHeader.innerHTML = 'FUNCHAL';
        newImg.src = './assets/glasses.jpg';

        singleProductContainer.classList = 'singleProduct';

        priceContainer.classList = 'priceContainer';
        priceDetailContainer.classList = 'priceDetail';

        priceExtras.classList= 'priceExtras';
        price.classList = 'price';
        btnBuy.classList = 'btnBuy';
        btnBuy.innerHTML = 'Zum Produkt';
        priceExtras.innerHTML = 'Rahnem inkl.Glasser & Service';
        price.innerHTML = prices[i];



        // switch (i) {
        //     case i == 0:
        //
        //         break;
        //     case i == 1:
        //         price.innerHTML = '149,90E';
        //         break;
        // }


        for(var j = 0; j <= howManyLi - 1 ; j++){
            var newLi = document.createElement('li');
            var check = document.createElement('i');
            check.classList = 'fa fa-check check';


            newLi.innerHTML = productsDetail[j];
            newLi.appendChild(check);


            newUl.appendChild(newLi);
        }

        priceDetailContainer.appendChild(priceExtras)
        priceDetailContainer.appendChild(price);

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



