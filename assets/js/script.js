/* Author: Zishan Ansari */
var images = document.querySelectorAll('.images figure');
var totalImages = images.length;
var allCategories = document.querySelectorAll('.categories a');
var allCategoriesLength = allCategories.length;

// Filter function
function filter(categories) {
  if (categories == 'wallpapers') {
    selected(categories);
  } else if (categories == 'logos') {
    selected(categories);
  } else if (categories == 'business-card') {
    selected(categories);
  } else if (categories == 'stationary') {
    selected(categories);
  } else if (categories == 'websites') {
    selected(categories);
  } else if (categories == 'mobile-apps') {
    selected(categories);
  } else {
    selectedAllCategories();
  }
}

// Function to display category according to the selected one
function selected(category) {
  // This will hide all the other images present
  for (var i = 0; i < totalImages; i++) {
    images[i].style.display = 'none';
  }
  // This will display all the images found in selected category
  var selectedCategory = document.querySelectorAll(`.images figure.${category}`);
  for (var i = 0; i < allCategoriesLength; i++) {
    if (allCategories[i].id == selectedCategory[0].className) {
      allCategories[i].setAttribute('class', 'active');
    } else if (allCategories[i].id != selectedCategory[0].className) {
      allCategories[i].removeAttribute('class', 'active');
    }
  }
  for (var i = 0; i < selectedCategory.length; i++) {
    selectedCategory[i].style.display = 'inline-block';
  }
}

function selectedAllCategories() {
  for (var i = 0; i < totalImages; i++) {
    images[i].style.display = 'inline-block';
  }
  for (var i = 0; i < allCategoriesLength; i++) {
    if (allCategories[0].id == 'all') {
      allCategories[i].removeAttribute('class', 'active');
    }
  }
  allCategories[0].setAttribute('class', 'active');
}