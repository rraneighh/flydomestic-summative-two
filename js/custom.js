(function(){
  var logo = document.querySelector('#logo');
  var infoPage = document.querySelector('.info-page');
  var userName = document.querySelector('#name');
  var userEmail = document.querySelector('#email');
  var userPhone = document.querySelector('#phoneNum');

  var btnNext = document.querySelector('#next');
  var btnSkip = document.querySelector('#skip');
  btnSkip.style.display = 'none';
  btnNext.style.display = 'block';
  btnNext.addEventListener('click', nextPage, false);
  btnSkip.addEventListener('click', skipPage, false);
  var pageNum = 0;
  btnNext.style.display = 'none';


// START Parsley for User Info -------------------------------------------------
  var $selector = $('#infoPage'),
      form = $selector.parsley();
  $selector.find('#infoPageBtn').click(function () {
      form.validate();
  });
  form.subscribe('parsley:form:success', function (e) {
    nextPage();
  });
// END Parsley for User Info ---------------------------------------------------


  var locationPage = document.querySelector('.location-page');
  var coromandelCard = document.querySelector('.coromandel-card');
  coromandelCard.addEventListener('click', nextPage, false);
  var nightPage = document.querySelector('.night-page');
  var peoplePage = document.querySelector('.people-page');
  var mapPage = document.querySelector('.map-page');

  locationPage.style.display = 'none';
  nightPage.style.display = 'none';
  peoplePage.style.display = 'none';
  mapPage.style.display = 'none';


  function nextPage() {
    if (pageNum === 0) {
      locationPage.style.display = 'block';
      infoPage.style.display = 'none';
      btnNext.style.display = 'none';
      userDetails.fullName = userName.value;
      userDetails.email = userEmail.value;
      userDetails.phoneNum = userPhone.value;
      pageNum = pageNum + 1;
    }
    else if (pageNum === 1) {
      locationPage.style.display = 'none';
      nightPage.style.display = 'block';
      btnSkip.style.display = 'block';
      btnNext.style.display = 'block';
      pageNum = pageNum + 1;
    } else if (pageNum === 2) {
      nightPage.style.display = 'none';
      peoplePage.style.display = 'block';
      pageNum = pageNum + 1;
    } else {
      mapPage.style.display = 'block';
      logo.style.color = "rgb(38, 38, 38)";
      nightPage.style.display = 'none';
      peoplePage.style.display = 'none';
      btnNext.style.display = 'none';
      btnSkip.style.display = 'none';
      filterAccomodation();
    }
  }
// END Next Page Function ------------------------------------------------------


  var maxPricePref = document.querySelector('.price-input');
  var nightPref = document.querySelector('.night-input');
  var peoplePref = document.querySelector('.people-input');


// START Counter Functions -----------------------------------------------------
  // START Night Counter // // // // // // // // // // // // // // // // // // /
  var nightBtnMinus = document.querySelector('.night-counter-minus');
  var nightBtnAdd = document.querySelector('.night-counter-add');
  var nightNumber = document.querySelector('.night-counter-number');
  var nightCounter = 1;
  var nightImg = document.querySelector('.night-img');
  nightBtnAdd.addEventListener('click', addToNight, false);
  nightBtnMinus.addEventListener('click', minusToNight, false);

  function addToNight() {
    if (nightCounter < 15) {
      nightCounter = nightCounter + 1;
      nightNumber.textContent = nightCounter;
    } else {
      console.log('15 is max');
    }
    if (nightCounter >= 5 && nightCounter <=9) {
      nightImg.style.backgroundImage = "url('css/images/medNights.png')";
    } else if (nightCounter >= 10){
      nightImg.style.backgroundImage = "url('css/images/longNights.png')";
    } else {
      nightImg.style.backgroundImage = "url('css/images/shortNights.png')";
    }
    nightPref.value = nightCounter;
    nightPref.placeholder = nightCounter;
    filterAccomodation();
  }

  function minusToNight() {
    if (nightCounter > 1  ) {
      nightCounter = nightCounter - 1;
      nightNumber.textContent = nightCounter;
    } else {
      console.log('1 is min');
    }
    nightPref.value = nightCounter;
    nightPref.placeholder = nightCounter;
    filterAccomodation();
  }
  // END Night Counter // // // // // // // // // // // // // // // // // // //

  // START People Counter // // // // // // // // // // // // // // // // // //
  var peopleBtnMinus = document.querySelector('.people-counter-minus');
  var peopleBtnAdd = document.querySelector('.people-counter-add');
  var peopleNumber = document.querySelector('.people-counter-number');
  var peopleCounter = 1;
  var peopleImg = document.querySelector('.people-img');
  peopleBtnAdd.addEventListener('click', addToPeople, false);
  peopleBtnMinus.addEventListener('click', minusToPeople, false);

  function addToPeople() {
    if (peopleCounter < 4) {
      peopleCounter = peopleCounter + 1;
      peopleNumber.textContent = peopleCounter;
    } else {
      console.log('4 is max');
    }
    if (peopleCounter === 1) {
      peopleImg.style.backgroundImage = "url('css/images/onePerson.png')";
    } else if (peopleCounter === 2){
      peopleImg.style.backgroundImage = "url('css/images/twoPeople.png')";
    } else if (peopleCounter === 3){
      peopleImg.style.backgroundImage = "url('css/images/threePeople.png')";
    } else {
      peopleImg.style.backgroundImage = "url('css/images/fourPeople.png')";
    }
    peoplePref.value = peopleCounter;
    peoplePref.placeholder = peopleCounter;
    filterAccomodation();
  }

  function minusToPeople() {
    if (peopleCounter > 1  ) {
      peopleCounter = peopleCounter - 1;
      peopleNumber.textContent = peopleCounter;
    } else {
      console.log('1 is min');
    }
    peoplePref.value = peopleCounter;
    peoplePref.placeholder = peopleCounter;
    filterAccomodation();

  }
  // END People Counter // // // // // // // // // // // // // // // // // //
// END of Counter Code ---------------------------------------------------------

  function skipPage() {
    if (pageNum === 0) {
      infoPage.style.display = 'none';
      nightPage.style.display = 'block';
      pageNum = pageNum + 1;
    } else if (pageNum === 1) {
      nightPage.style.display = 'none';
      peoplePage.style.display = 'block';
      pageNum = pageNum + 1;
    } else {
      nightPage.style.display = 'none';
      peoplePage.style.display = 'none';
      mapPage.style.display = 'block';
      btnNext.style.display = 'none';
      btnSkip.style.display = 'none';
      logo.style.color = "rgb(38, 38, 38)";
      showAllAcc();
    }
  }
// END of Skip Page Function -------------------------------------------------

// START Parsley for Filter ----------------------------------------------------
    var $filterSelector = $('.filter-container'),
        filterForm = $filterSelector.parsley();
    $filterSelector.find('#searchBtn').click(function () {
        filterForm.validate();
    });
    filterForm.subscribe('parsley:form:success', function (e) {
      filterAccomodation();
      hideFilter();
    });
// END Parsley for Filter ------------------------------------------------------


// // // // // // // // // // // // // // // // // // // // // // // // // // //
// // // // // // // // // START MAP PAGE FUNCTIONS // // // // // // // // // /
// // // // // // // // // // // // // // // // // // // // // // // // // // //

  var hotelMarker = document.querySelector("#map > div.mapboxgl-canvas-container.mapboxgl-interactive.mapboxgl-touch-drag-pan.mapboxgl-touch-zoom-rotate > div:nth-child(3)");
  var hostelMarker = document.querySelector("#map > div.mapboxgl-canvas-container.mapboxgl-interactive.mapboxgl-touch-drag-pan.mapboxgl-touch-zoom-rotate > div:nth-child(2)");
  var motelMarker = document.querySelector("#map > div.mapboxgl-canvas-container.mapboxgl-interactive.mapboxgl-touch-drag-pan.mapboxgl-touch-zoom-rotate > div:nth-child(4)");
  var houseMarker = document.querySelector("#map > div.mapboxgl-canvas-container.mapboxgl-interactive.mapboxgl-touch-drag-pan.mapboxgl-touch-zoom-rotate > div:nth-child(5)");
  var accData = Object.values(accommodationData);
  var showAllBtn = document.querySelector('#showAllBtn');
  showAllBtn.addEventListener('click', showAllAcc, false);

  function filterAccomodation(){
    for (var i = 0; i < accData.length; i++) {
      if (peoplePref.value >= accData[i].minGroupSize && peoplePref.value <= accData[i].maxGroupSize && nightPref.value >= accData[i].minNights && nightPref.value <= accData[i].maxNights && maxPricePref.value >= accData[i].pricePerNight) {
        accData[i].markerState = 'block';
      } else {
        accData[i].markerState = 'none';
      }
    }
    houseMarker.style.display = accommodationData.house.markerState;
    hostelMarker.style.display = accommodationData.hostel.markerState;
    hotelMarker.style.display = accommodationData.hotel.markerState;
    motelMarker.style.display = accommodationData.motel.markerState;
    if (filterCont.classList.contains('show-filter')){
      hideFilter();
    }
  }
// END Accommodation Filter ----------------------------------------------------

  function showAllAcc(){
    for (var i = 0; i < accData.length; i++) {
        accData[i].markerState = 'block';
    }
    houseMarker.style.display = accommodationData.house.markerState;
    hostelMarker.style.display = accommodationData.hostel.markerState;
    hotelMarker.style.display = accommodationData.hotel.markerState;
    motelMarker.style.display = accommodationData.motel.markerState;
    if (filterCont.classList.contains('show-filter')){
      hideFilter();
    }
  }
// END Show All Accommodation --------------------------------------------------

  var filter = document.querySelector('#filterIcon');
  var backArrow = document.querySelector('#backIcon');
  var filterExit = document.querySelector('#filterExit');
  var filterCont = document.querySelector('.filter-container');
  var accCard = document.querySelector('.acc-card');
  var accInfo = document.querySelector('.acc-info');
  var accFullDetails = document.querySelector('.acc-full-details');
  accFullDetails.style.display = 'none';
  backArrow.style.display = 'none';
  filterExit.style.display = 'none';
  filterExit.addEventListener('click', hideFilter, false);
  accCard.addEventListener('click', cardClicked, false);
  filter.addEventListener('click', showFilter, false);
  backArrow.addEventListener('click', collapseCard, false);

  function cardClicked(){
    accImg.classList.add('enlargeImg');
    accImg.classList.remove('shrinkImg');
    accInfo.classList.add('expand-info-cont');
    accInfo.classList.remove('shrink-info-cont');
    accCard.classList.add('card-expand');
    accCard.classList.remove('card-collapse');
    filter.style.display = 'none';
    backArrow.style.display = 'block';
    accFullDetails.style.display = 'block';
    if (filterCont.classList.contains('show-filter')){
      hideFilter();
      filter.style.display = 'none';
    }
  }
// END Card Clicked ------------------------------------------------------------

  function collapseCard(){
    accImg.classList.remove('enlargeImg');
    accImg.classList.add('shrinkImg');
    accInfo.classList.remove('expand-info-cont');
    accInfo.classList.add('shrink-info-cont');
    accCard.classList.add('card-collapse');
    accCard.classList.remove('card-expand');
    filter.style.display = 'block';
    backArrow.style.display = 'none';
    accFullDetails.style.display = 'none';
  }
// END Collapse Card -----------------------------------------------------------

  function showFilter() {
    filterCont.classList.add('show-filter');
    filterCont.classList.remove('hide-filter');
    filter.style.display = 'none';
    filterExit.style.display = 'block';
  }
// END Show Filter -------------------------------------------------------------

  function hideFilter() {
    filterCont.classList.remove('show-filter');
    filterCont.classList.add('hide-filter');
    filter.style.display = 'block';
    filterExit.style.display = 'none';
  }
// END Hide Filter -------------------------------------------------------------


  var accImg = document.querySelector('.acc-card-img');
  var accInfoRating = document.querySelector('.acc-card-info-rating');
  var accInfoName = document.querySelector('.acc-card-info-name');
  var accInfoSumm = document.querySelector('.acc-card-info-summ');
  var accInfoPrice = document.querySelector('.acc-card-info-price');
  var accDescription = document.querySelector('.acc-description');
  var accMeals = document.querySelector('.acc-meals');

// START Location Marker Clicked Functions -------------------------------------
  hotelMarker.addEventListener('click', hotelMarkerClicked, false);
  function hotelMarkerClicked() {
    updateCard(accommodationData.hotel.name, accommodationData.hotel.pricePerNight, accommodationData.hotel.starRating, accommodationData.hotel.summary, accommodationData.hotel.fullDetail,
    accommodationData.hotel.mealsProvided, accommodationData.hotel.image);
    accCard.style.display = 'flex';

  }
  hostelMarker.addEventListener('click', hostelMarkerClicked, false);
  function hostelMarkerClicked() {
    updateCard(accommodationData.hostel.name, accommodationData.hostel.pricePerNight, accommodationData.hostel.starRating, accommodationData.hostel.summary,  accommodationData.hostel.fullDetail,
    accommodationData.hostel.mealsProvided, accommodationData.hostel.image);
    accCard.style.display = 'flex';
  }
  motelMarker.addEventListener('click', motelMarkerClicked, false);
  function motelMarkerClicked() {
    updateCard(accommodationData.motel.name, accommodationData.motel.pricePerNight, accommodationData.motel.starRating, accommodationData.motel.summary, accommodationData.motel.fullDetail,
    accommodationData.motel.mealsProvided, accommodationData.motel.image);
    accCard.style.display = 'flex';
  }
  houseMarker.addEventListener('click', houseMarkerClicked, false);
  function houseMarkerClicked() {
    updateCard(accommodationData.house.name, accommodationData.house.pricePerNight, accommodationData.house.starRating, accommodationData.house.summary,  accommodationData.house.fullDetail, accommodationData.house.mealsProvided, accommodationData.house.image);
    accCard.style.display = 'flex';
  }

  function updateCard(name, price, rating, summary, fullDetail, meals, img) {
    accInfoName.textContent = name;
    accInfoPrice.textContent = price;
    accInfoSumm.textContent = summary;
    accInfoRating.textContent = rating;
    accDescription.textContent = fullDetail;
    accMeals.textContent = meals;
    accImg.style.backgroundImage = img;
  }
// END Location Marker Clicked Functions ---------------------------------------

// // // // // // // // // // // // // // // // // // // // // // // // // // //
// // // // // // // // END MAP PAGE FUNCTIONS // // // // // // // // // // //
// // // // // // // // // // // // // // // // // // // // // // // // // // //

// START Booking Page Functions ------------------------------------------------
  var bookingPage = document.querySelector('.booking-summ-cont');
  var hotelName = document.querySelector('.hotel-name');
  var hotelBlurb = document.querySelector('.hotel-blurb');
  var finalAccImg = document.querySelector('.acc-img');
  var finalMeal = document.querySelector('.final-meal');
  var finalNights = document.querySelector('.final-nights');
  var finalPeople = document.querySelector('.final-people');
  var finalEmail = document.querySelector('.final-email');
  var finalPhNumber = document.querySelector('.final-number');
  var finalPrice = document.querySelector('.final-price');

  var letsBook = document.querySelector('#letsBookBtn');
  letsBookBtn.addEventListener('click', letsBookClicked, false);
  function letsBookClicked() {
    logo.style.color = "rgb(238, 238, 238)";
    mapPage.style.display = 'none';
    bookingPage.style.display = 'block';
    finalAccImg.style.backgroundImage = accImg.style.backgroundImage;
    hotelName.textContent = accInfoName.textContent;
    hotelBlurb.textContent = accInfoSumm.textContent;
    finalMeal.textContent = accMeals.textContent;
    finalNights.textContent = nightPref.value;
    finalPeople.textContent = peoplePref.value;
    finalEmail.textContent = userDetails.email;
    finalPhNumber.textContent = userDetails.phoneNum;
    totalPrice();
    finalPrice.textContent = totalPrice();
  }
// END Lets Book Clicked -------------------------------------------------------
  function totalPrice() {
    var accPrice = parseInt(accInfoPrice.textContent);
    return nightPref.value * accPrice;
  }
// END Total Price Calculation -------------------------------------------------

  var cancelBooking = document.querySelector('#cancelBooking');
  cancelBooking.addEventListener('click', cancelBook, false);
  function cancelBook() {
    bookingPage.style.display = 'none';
    mapPage.style.display = 'block';
    logo.style.color = "rgb(38, 38, 38)";
    collapseCard();
  }
// END Cancel Booking  ---------------------------------------------------------

  var thankYouPage = document.querySelector('.thank-you-page');
  thankYouPage.style.display = 'none';
  var thankYouExit = document.querySelector('#thankYouExit');
  var bookBtn = document.querySelector('#book');
  bookBtn.addEventListener('click', finalBook, false);
  thankYouExit.addEventListener('click', backToStart, false);
  function finalBook() {
    bookingPage.style.display = 'none';
    thankYouPage.style.display = 'block';
  }
  function backToStart() {
    location.reload();
  }
// END Thank You Page  ---------------------------------------------------------


}());
// END OF CODE
