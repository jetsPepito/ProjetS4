function Search() {
  // Declare variables
  var input, filter, li, i, img, idValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  li = document.getElementsByTagName('li');

  //loop through all list item, and those who don't match the search query

  for (i = 0; i < li.lenght; i++) {
    img = li[i].getElementsByTagName('img')[0];
    idValue = img.getElementsById();
    if (idValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = '';
    } else {
      li[i].style.display = 'none';
    }
  }
}
