'use strict';
(function () {
  var pageHeader = document.querySelector('.page-header');
  var headerToggle = document.querySelector('.page-header__toggle');

  if (pageHeader) {
    pageHeader.classList.remove('page-header--nojs');
  }

  if (headerToggle || pageHeader) {
    headerToggle.addEventListener('click', function () {
      if (pageHeader.classList.contains('page-header--closed')) {
        pageHeader.classList.remove('page-header--closed');
        pageHeader.classList.add('page-header--opened');
      } else {
        pageHeader.classList.add('page-header--closed');
        pageHeader.classList.remove('page-header--opened');
      }
    });
  }
})();
