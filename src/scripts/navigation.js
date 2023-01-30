
document.getElementById('avaxhamburger').addEventListener('click', () => {
  document.getElementById('avaxlogo').classList.remove('wateranimate');
  if(document.getElementById('avaxhamburger').classList.contains('active')){
    document.getElementById('avaxlogo').classList.toggle('wateranimate');
  }
  document.getElementById('avaxhamburger').classList.toggle('active');
  document.getElementById('avaxlogo').classList.toggle('fireanimate');

  document.querySelector('#avaxmenu').classList.toggle('hidden');
  document.querySelector('#avaxmenu').classList.toggle('avax-animate');
  //document.querySelector('#avaxmaintitle').classList.toggle('hidden');
  document.querySelector('#avaxmaintitle').classList.toggle('avax-anim');

  
});


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function demo() {
  await sleep(2000);
  document.getElementById('avaxlogo').classList.toggle('firefulldoublerainbowbg');
}

