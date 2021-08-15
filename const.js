if (document.querySelector(".navigation") !== null) {
document.querySelector(".navigation").innerHTML = `

<div class="nav" style="height:100px">

<a class="nav_button"><img class="nav_button_img" src="/images/nav/left_most_example_button.png"></a>


<a href="/art" onmouseenter="update_button_activation(this)" onmouseleave="update_button_activation(this)" class="nav_button"><img class="nav_button_img" src="/images/nav/example_button.png"></a>
<a href="/art" onmouseenter="update_button_activation(this)" onmouseleave="update_button_activation(this)" class="nav_button"><img class="nav_button_img" src="/images/nav/example_button.png"></a>
<a href="/art" onmouseenter="update_button_activation(this)" onmouseleave="update_button_activation(this)" class="nav_button"><img class="nav_button_img" src="/images/nav/example_button.png"></a>


<a class="nav_button"><img class="nav_button_img" src="/images/nav/right_most_example_button.png"></a>

</div>


`
document.querySelector(".header").innerHTML = `

<div class="header_text">MUSHEMIIA pog</div>


`

}

function update_button_activation(self) {
let source = self.children[0];
image_path = source.src;
  if ((source.src.replace("_active.png", ".png"))==image_path) {
    source.src = source.src.slice(0,source.src.length-4) + "_active.png";
  } else {
    source.src = source.src.replace("_active.png", ".png")
  }
}


function reportWindowSize() {
  let button_width_sum = 0;
  let nav = document.getElementsByClassName("nav")[0];
  for (let i=0;i<nav.children.length;i++) {
    button_width_sum += nav.children[i].children[0].getBoundingClientRect().width;
  };
  button_width_sum += 30;

  if (((parseInt(nav.style.height) * window.innerWidth) / button_width_sum) > 100) {
    nav.style.height = "100px";
  } else {
    nav.style.height = (parseInt(nav.style.height) * window.innerWidth) / button_width_sum + "px";
  };
}
reportWindowSize()
window.addEventListener('resize', reportWindowSize);
