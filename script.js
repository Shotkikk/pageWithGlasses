function pageGallery() {
    var btnWeiter = document.querySelector('.btnWeiter');
    var changeGallery = true;

    btnWeiter.addEventListener('click', function(e){
        changeGallery = !changeGallery;
        if(changeGallery === true) {
            e.target.parentElement.style = 'justify-content: flex-end;';
            e.target.parentElement.parentElement.children[0].style = 'display: flex';
            e.target.parentElement.parentElement.children[1].style = 'display: none';
            e.target.style = 'background-color: #6600a1';
            e.target.children[0].style = 'clip-path: polygon(44% 0, 51% 0, 100% 50%, 51% 100%, 44% 100%, 92% 50%)';
            e.target.parentElement.children[0].style = 'display: block';
            e.target.parentElement.children[2].style = 'display: none';
        }
        else {
            e.target.parentElement.style = 'justify-content: flex-start;';
            e.target.parentElement.parentElement.children[0].style = 'display: none';
            e.target.parentElement.parentElement.children[1].style = 'display: block';
            e.target.style = 'background-color: #EDEDED';
            e.target.children[0].style = 'clip-path: polygon(100% 0, 48% 50%, 100% 100%, 92% 100%, 41% 50%, 92% 0)';
            e.target.parentElement.children[0].style = 'display: none';
            e.target.parentElement.children[2].style = 'display: block';

        }
    });
}

function changePage() {
    var changeBtn = document.querySelector('.changePageLayout');
    var toggleStyle = false;
    changeBtn.addEventListener('click', function() {
        toggleStyle = !toggleStyle
        console.log(toggleStyle)
        if(toggleStyle == true) {
            var head  = document.getElementsByTagName('head')[0];
            var link  = document.createElement('link');
            link.rel  = 'stylesheet';
            link.type = 'text/css';
            link.href = './newStyle.css';
            link.media = 'all';
            head.appendChild(link);
        }
        else{
            window.location.reload();
        }
    })
}

function addProducts(howManyProducts){
    var productsContainer = document.querySelector('.products');
    var productsDetail = [
        'Braillentyp: Damen, Herren', 'Rahmentyp: Randlose Brille', 'Eckiger Rahmen', 'Ovaler Rahmen', "Runder Rahmen", 'Still: casual, extravagant', 'Einstarkenbrille','Material: Metal'
    ];
    var prices = ['ab 39,90€', 'ab 149,90€'];
    var liStatus = [1,1,1,1,1,1,0,0];

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


        for(var j = 0; j <= productsDetail.length - 1 ; j++){
			var checkContainer = document.createElement('span');
            var newLi = document.createElement('li');
            var check = document.createElement('i');

            checkContainer.classList = 'fa-li';
            liStatus[j] == 1 ?  check.classList = 'fas fa-check check' :  check.classList = 'fas fa-circle dot';

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

document.addEventListener("DOMContentLoaded", function() {
    addProducts(2);
    pageGallery();
    changePage();
});



