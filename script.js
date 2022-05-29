'use strict';

{
  const menuItems = document.querySelectorAll('.container-menu li a')
  const contents = document.querySelectorAll('.content')
  const closes = document.querySelectorAll('.close')

    menuItems.forEach(clickedItem => {
      clickedItem.addEventListener('mouseover', e => {
        e.preventDefault();

        menuItems.forEach(item => {
          item.classList.remove('active');
        });
        clickedItem.classList.add('active');

        contents.forEach(content => {
          content.classList.remove('active');
        });
        document.getElementById(clickedItem.dataset.id).classList.add('active');
      });

      clickedItem.addEventListener('mouseleave', () => {
        clickedItem.classList.remove('active');
        // contents.classList.remove('active');
        contents.forEach(content => {
          content.classList.remove('active');
        });
      });
    });

    contents.forEach(clickedContent => {
      clickedContent.addEventListener('mouseover', () => {
        contents.forEach(content => {
          content.classList.remove('active');
        });
        clickedContent.classList.add('active');

        menuItems.forEach(menu => {
          menu.classList.remove('active');
        });
        document.getElementById(clickedContent.dataset.id).classList.add('active');
      });

      clickedContent.addEventListener('mouseleave', () => {
        clickedContent.classList.remove('active');
        menuItems.forEach(menu => {
          menu.classList.remove('active');
        });
      });
    });

    closes.forEach(clickedClose => { 
      clickedClose.addEventListener('click', () => {
        menuItems.forEach(menu => {
          menu.classList.remove('active');
        });
        contents.forEach(content => {
          content.classList.remove('active');
        });
      });
    });


    

// ハンバーガーメニュー　表示
 document.querySelector('.fa-bars').addEventListener('click', function(){
  document.querySelector('.hamburger-menu').classList.add('is-active');
});

document.querySelector('.fa-bars').addEventListener('click', function(){
document.querySelector('body').classList.add('iss-active');
});

// ハンバーガーメニュー　初期化
document.querySelector('.fa-times').addEventListener('click', function(){
document.querySelector('body').classList.add('iss-remove');
});

document.querySelector('.fa-times').addEventListener('click', function(){
  document.querySelector('body').classList.remove('iss-active');
  });

  document.querySelector('.fa-bars').addEventListener('click', function(){
    document.querySelector('body').classList.remove('iss-remove');
    });







  const containerMenus = document.querySelectorAll('.container-30-menu li a');
  const contents30 = document.querySelectorAll('.content-30');

  containerMenus.forEach(clickedItem => {
    clickedItem.addEventListener('click', e => {
      e.preventDefault();

      containerMenus.forEach(item => {
        item.classList.remove('content-30-active');
      });
      clickedItem.classList.add('content-30-active');

      contents30.forEach(content => {
        content.classList.remove('content-30-active');
      });
      document.getElementById(clickedItem.dataset.id).classList.add('content-30-active');
    });
  });

















}

