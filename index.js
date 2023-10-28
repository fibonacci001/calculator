const display = document.querySelector('.display');
const typednumber = document.querySelectorAll(".number");
const signs = document.querySelectorAll(".signs");
const opreator = document.querySelectorAll(".opreator");
const opreators = document.querySelector(".opreators");
let expression = "";
const slider = document.querySelector(".ranger");
const body = document.querySelector(".body");
const keypad = document.querySelector(".numbers");
const cal = document.querySelector(".cal");
const range = document.querySelector('.ouy');
const attribute = document.querySelector('.attribution')
const linker = document.querySelector('.linker');

console.log(display);
console.log(typednumber);
console.log(opreator);
console.log(opreators);

typednumber.forEach((num) => 
{
    console.log(num);
    num.addEventListener('click', () => {
      // Get the text content of the button
      let btnum = num.textContent;
      

      console.log(btnum);

      // Check if the button text content is a dot
      if (btnum === ".") {
        
        if (display.value.includes(".")) {
          
          return;
        } else {
          expression += btnum;
          display.value = expression;
        }
      } else {
        
        btnum = parseFloat(btnum);
        
        expression += btnum;
        display.value = expression;
      }
    })
})




signs.forEach((sign) => {
  // Add a click event listener
  sign.addEventListener('click', () => {
    let btnsign = sign.textContent;
    expression += " " + btnsign + " ";
    display.value = expression;
  })
});

function formatExpression(expression) {
  
  expression = expression.trim();
  
  expression = expression.replace(/\.0+(?![\d\.])/g, "");
  return expression;
};
opreator.forEach((optate) => {
  optate.addEventListener('click', () => {
    console.log(optate);
    let opreatetext = optate.textContent;
    console.log(opreatetext);
    switch (opreatetext) {
      case"DEL":
      expression = expression.slice(0, -1);
        display.value = display.value.slice(0, -1);
        
        break;
        case "RESET":
          expression = "";
          display.value = "";
          break;
      
      
    }
  } )
})

opreators.addEventListener('click', (event) => {

  display.value = eval(display.value);
  expression = display.value;
});

slider.addEventListener("input", (slide) => {

  const display = document.querySelector('.display');
  const typednumber = document.querySelectorAll(".number");
  const signs = document.querySelectorAll(".signs");
const opreator = document.querySelectorAll(".opreator");
const opreators = document.querySelector(".opreators");
const slider = document.querySelector(".ranger");
const body = document.querySelector(".body");
const keypad = document.querySelector(".numbers");






  let slidenum = Number(slide.target.value);
  
  console.log(slidenum);
  switch (slidenum) {
    case 1 :
      display.classList.add('firstdisplaystyle');
      display.classList.remove('seconddisplaystyle');
      display.classList.remove('thirddisplaystyle');


      typednumber.forEach(num => {
  num.classList.add('firstnumstyle');
  num.classList.remove('secondnumstyle');
  num.classList.remove('thirdnumstyle');
  

});
      
      signs.forEach(sig => {
  sig.classList.add("firstnumstyle");
  sig.classList.remove("secondnumstyle");
  sig.classList.remove("thirdnumstyle");

      });
      
    opreator.forEach(opr => {
        opr.classList.add("firstsignstyle");
        opr.classList.remove("secondsignstyle");
        opr.classList.remove("thirdsignstyle");
            });

      opreators.classList.add("firstopreators_style");
      opreators.classList.remove("secondopreators_style");
      opreators.classList.remove("thirdopreators_style");

      attribute.classList.add("atstyle1");
      attribute.classList.remove("atstyle2");
      attribute.classList.remove("atstyle3");

      linker.classList.add("linkstyle1");
      linker.classList.remove("linkstyle2");
      linker.classList.remove("linkstyle3");


      range.classList.add("firstrangestyle");
      range.classList.remove("secondrangestyle");
      range.classList.remove("thirdrangestyle");

      cal.classList.add("firstcalstyle");
      cal.classList.remove("secondcalstyle");
      cal.classList.remove("thirdcalstyle");


      if (body.classList.contains('thirdbodystyle')) {
        body.classList.remove("thirdbodystyle");
      }
        body.classList.add("firstbodystyle");
      
       
        body.classList.remove("secondbodystyle");
      
       
        
      
      
      
      keypad.classList.add("firstnumhold");
      keypad.classList.remove("secondnumhold");
      keypad.classList.remove("thirdnumhold");


      
      slider.classList.add("firstrangerstyle");
      slider.classList.remove("secondrangerstyle");
      slider.classList.remove("thirdrangerstyle");



      break;

      case 2 :

      
        body.classList.add("secondbodystyle");
      

      
        body.classList.remove("firstbodystyle");
      
      
        body.classList.remove("thirdbodystyle");
      
        display.classList.remove('firstdisplaystyle');
        display.classList.add('seconddisplaystyle');
        display.classList.remove('thirddisplaystyle');



        typednumber.forEach(num => {
    num.classList.remove('firstnumstyle');
    num.classList.add('secondnumstyle');
    num.classList.remove('thirdnumstyle');
    
  
  });

  signs.forEach(sig => {
    sig.classList.remove("firstnumstyle");
    sig.classList.add("secondnumstyle");
    sig.classList.remove("thirdnumstyle");
  
        });      
        
        opreator.forEach(opr => {
          opr.classList.remove("firstsignstyle");
          opr.classList.add("secondsignstyle");
          opr.classList.remove("thirdsignstyle");
              });
        

              opreators.classList.remove("firstopreators_style");
      opreators.classList.add("secondopreators_style");
      opreators.classList.remove("thirdopreators_style");

     
      range.classList.remove("firstrangestyle");
      range.classList.add("secondrangestyle");
      range.classList.remove("thirdrangestyle");

      attribute.classList.remove("atstyle1");
      attribute.classList.add("atstyle2");
      attribute.classList.remove("atstyle3");

      linker.classList.remove("linkstyle1");
      linker.classList.add("linkstyle2");
      linker.classList.remove("linkstyle3");

      cal.classList.remove("firstcalstyle");
      cal.classList.add("secondcalstyle");
      cal.classList.remove("thirdcalstyle");

      keypad.classList.remove("firstnumhold");
      keypad.classList.add("secondnumhold");
      keypad.classList.remove("thirdnumhold");


      
      slider.classList.remove("firstrangerstyle");
      slider.classList.add("secondrangerstyle");
      slider.classList.remove("thirdrangerstyle");

      break;

      case 3 :

      
        body.classList.add("thirdbodystyle");
      

       
        body.classList.remove("firstbodystyle");
      
       
        body.classList.remove("secondbodystyle");
      

        display.classList.remove('firstdisplaystyle');
        display.classList.remove('seconddisplaystyle');
        display.classList.add('thirddisplaystyle');



        typednumber.forEach(num => {
    num.classList.remove('firstnumstyle');
    num.classList.remove('secondnumstyle');
    num.classList.add('thirdnumstyle');
    
  
  });

  signs.forEach(sig => {
    sig.classList.remove("firstnumstyle");
    sig.classList.remove("secondnumstyle");
    sig.classList.add("thirdnumstyle");
  
        });  

        opreator.forEach(opr => {
          opr.classList.remove("firstsignstyle");
          opr.classList.remove("secondsignstyle");
          opr.classList.add("thirdsignstyle");
              });
        

              opreators.classList.remove("firstopreators_style");
      opreators.classList.remove("secondopreators_style");
      opreators.classList.add("thirdopreators_style");

      range.classList.remove("firstrangestyle");
      range.classList.remove("secondrangestyle");
      range.classList.add("thirdrangestyle");

      cal.classList.remove("firstcalstyle");
      cal.classList.remove("secondcalstyle");
      cal.classList.add("thirdcalstyle");

      attribute.classList.remove("atstyle1");
      attribute.classList.remove("atstyle2");
      attribute.classList.add("atstyle3");

      linker.classList.remove("linkstyle1");
      linker.classList.remove("linkstyle2");
      linker.classList.add("linkstyle3");

        
      keypad.classList.remove("firstnumhold");
      keypad.classList.remove("secondnumhold");
      keypad.classList.add("thirdnumhold");


      
      slider.classList.remove("firstrangerstyle");
      slider.classList.remove("secondrangerstyle");
      slider.classList.add("thirdrangerstyle");



      break;

  
    
  }
})
