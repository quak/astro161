
/*
const initheight = document.getElementById('bg').offsetHeight;
window.addEventListener('scroll',(event) => {
  var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
  

  
  var height = initheight-scrollTop*2;
  console.log(initheight + " : "+scrollTop+" : "+scrollTop*2+" : "+height.toString()+"px");
  document.getElementById('bg').style.height = height.toString()+"px";

  
});*/





document.getElementById('avaxhamburger').addEventListener('click', () => {


  

  document.getElementById('avaxlogo').classList.remove('wateranimate');
  
  
  if(document.getElementById('avaxhamburger').classList.contains('active')){
    document.getElementById('avaxlogo').classList.toggle('wateranimate');
    
    document.getElementById('avax-services-main').classList.remove('avax-blendin');
    document.querySelector('#avaxmenu').classList.add('avax-blendout'); 
    document.querySelector('#avaxmenu').classList.remove('avax-blendin'); 
    
    
    document.querySelector('#avax-services-main').classList.add('avax-blendin');  
    document.querySelector('#avaxmaintitle').classList.toggle('avax-anim-neg');
    document.querySelector('#avaxmaintitle').classList.remove('avax-anim');
  }else{
    document.getElementById('avaxmenu').classList.remove('avax-anim-neg');

    document.getElementById('avax-services-main').classList.remove('avax-blendin');
    document.querySelector('#avax-services-main').classList.add('avax-blendout');
    
    document.querySelector('#avaxmaintitle').classList.toggle('avax-anim');
    document.querySelector('#avaxmaintitle').classList.remove('avax-anim-neg');

    document.querySelector('#avaxmenu').classList.add('avax-blendin');
    document.querySelector('#avaxmenu').classList.remove('avax-blendout');

    document.querySelector('#avaxmenu').classList.remove('contactactivated');
  
  }
  document.getElementById('avaxhamburger').classList.toggle('active');
  document.getElementById('avaxlogo').classList.toggle('fireanimate');
  document.getElementById('avaxmenu').classList.remove('avax-sent');

  const avaxcontact = document.getElementById('avax-Contact');
  if(avaxcontact){
    avaxcontact.addEventListener('click', (e) => {
      e.preventDefault();
      document.getElementById('avaxmenu').classList.toggle('contactactivated');
    });
  }

  const avaxsendagain = document.getElementById('avax-sendagain');
  if(avaxsendagain){
    avaxsendagain.addEventListener('click', (e) => {
      e.preventDefault();
      document.getElementById('avaxmenu').classList.remove('avax-sent');
    });
  }

  const avaxbcktomenu = document.getElementById('avax-bcktomenu');
  if(avaxbcktomenu){
    avaxbcktomenu.addEventListener('click', (e) => {
      e.preventDefault();
      document.getElementById('avaxmenu').classList.toggle('contactactivated');
      document.getElementById('avaxmenu').classList.remove('avax-sent');
    });
  }



  const avaxsendform = document.getElementById('avax-sendform');
  if(avaxsendform){
    avaxsendform.addEventListener('click', (e) => {
      e.preventDefault();

      

      var name = document.getElementById('avax-contact-name').value;
      var send = true;
      if(name==""){
        document.getElementById('avax-contact-name').classList.add("avax-empty");
        send = false;
      }else{
        document.getElementById('avax-contact-name').classList.remove("avax-empty");
      }

      var email = document.getElementById('avax-contact-email').value;
      if(email==""){
        document.getElementById('avax-contact-email').classList.add("avax-empty");
        send = false;
      }else{
        document.getElementById('avax-contact-email').classList.remove("avax-empty");
      }

      var message = document.getElementById('avax-contact-msg').value;
      if(message==""){
        document.getElementById('avax-contact-msg').classList.add("avax-empty");
        send = false;
      }else{
        document.getElementById('avax-contact-msg').classList.remove("avax-empty");
      }

      if(send){

        const avaxform = document.getElementById('avaxmenu');
        avaxform.classList.add("avax-sent");

        let data = {
          name: document.getElementById('avax-contact-name').value,
          email: document.getElementById('avax-contact-email').value,
          message: document.getElementById('avax-contact-msg').value,
        }
        
        fetch("https://avaxtech.at:5678/webhook/27056320-8c00-4331-a778-fa3a16d6e141", {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            return response.json()
        }).then((res) => {
            if (res.status === 201) {
                console.log("Post successfully created!")
            }
        }).catch((error) => {
            console.log(error)
        })
      }
      

    });
  }  
});


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function demo() {
  await sleep(2000);
  document.getElementById('avaxlogo').classList.toggle('firefulldoublerainbowbg');
}

