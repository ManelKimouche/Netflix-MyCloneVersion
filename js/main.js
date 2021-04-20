const tabItems = document.querySelectorAll('.tab-item')
const tabContentItems = document.querySelectorAll('.tab-content-item');

function selectItem(e) {
    removeBorder();
    removeShow();
    //add border
    this.classList.add('tab-border');
    //add content item from dom
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    //add show class
    tabContentItem.classList.add('show');
}
function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'));
}

function removeShow() {
    tabContentItems.forEach(item => item.classList.remove('show'));
}

tabItems.forEach(item => {
    item.addEventListener('click', selectItem);
});


//FAQ
$(document).ready(function () {



    $(".item-1").click(function () {
        $("#div1").slideToggle('1000', "linear");
        $("i", this).toggleClass("fas fa-plus fas fa-minus");
    });

    $(".item-2").click(function () {
        $("#div2").slideToggle('1000', "linear");
        $("i", this).toggleClass("fas fa-plus fas fa-minus");

    });

    $(".item-3").click(function () {
        $("#div3").slideToggle('1000', "linear");
        $("i", this).toggleClass("fas fa-plus fas fa-minus");
    });

    $(".item-4").click(function () {
        $("#div4").slideToggle('1000', "linear");
        $("i", this).toggleClass("fas fa-plus fas fa-minus");
    });

    $(".item-5").click(function () {
        $("#div5").slideToggle('1000', "linear");
        $("i", this).toggleClass("fas fa-plus fas fa-minus");
    });
});