export function setupCounter(element) {
  
  let childBox = document.querySelector('#menu-bar');
  // let counter = 0
  // const setCounter = (count) => {
  //   counter = count
  //   element.innerHTML = `count is ${counter}`
  // }
  element.addEventListener('click', () => {
    if (childBox.classList.contains("hidden")){
      childBox.classList.remove("hidden")
    }else{
      childBox.classList.add("hidden")
    }
  
  });
}
