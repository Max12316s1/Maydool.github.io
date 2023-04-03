$(document).ready(function () {
    $('.menu-icon').click(function () {
      $('ul.menu').toggleClass('open');
      $('.menu-icon').toggleClass('open');
    });
  });