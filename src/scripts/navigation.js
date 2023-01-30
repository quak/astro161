
document.getElementById('avaxhamburger').addEventListener('click', () => {
  document.getElementById('avaxlogo').classList.remove('wateranimate');
  
  
  if(document.getElementById('avaxhamburger').classList.contains('active')){
    document.getElementById('avaxlogo').classList.toggle('wateranimate');
    
    document.getElementById('avax-services').classList.remove('avax-blendin');
    document.querySelector('#avaxmenu').classList.add('avax-blendout');  
    
    document.querySelector('#avax-services').classList.add('avax-blendin');  
    document.querySelector('#avaxmaintitle').classList.toggle('avax-anim-neg');
    document.querySelector('#avaxmaintitle').classList.remove('avax-anim');
  }else{
    document.getElementById('avaxmenu').classList.remove('avax-anim-neg');

    document.getElementById('avax-services').classList.remove('avax-blendin');
    document.querySelector('#avax-services').classList.add('avax-blendout');
    
    document.querySelector('#avaxmaintitle').classList.toggle('avax-anim');
    document.querySelector('#avaxmaintitle').classList.remove('avax-anim-neg');
  }
  document.getElementById('avaxhamburger').classList.toggle('active');
  document.getElementById('avaxlogo').classList.toggle('fireanimate');

  document.querySelector('#avaxmenu').classList.toggle('avax-blendin');
  //document.querySelector('#avaxmenu').classList.toggle('avax-animate');
  //document.querySelector('#avaxmaintitle').classList.toggle('hidden');
  
});


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function demo() {
  await sleep(2000);
  document.getElementById('avaxlogo').classList.toggle('firefulldoublerainbowbg');
}

