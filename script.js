document.querySelector('.notion-frame').style.background = '#111';
let $mobile = document.querySelector('.notion-topbar-mobile');
if ($mobile) {
    $mobile.style.background = '#111';
}
list = document.getElementsByTagName('div');

for (let i = 0; i < list.length; i++) {
      list[i].style.color = 'rgb(168, 168, 168)';
}
