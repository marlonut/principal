const mobileToggleDOMEL=document.getElementById("mobile-nav-toggle")
const primaryNavigationDOMEL=document.getElementById("primary-navigation")
const primaryHeaderDOMEL = document.getElementById("primary-header");
const iconCrossDOMEL=document.getElementById("icon-cross");
const iconHamburgerDOMEL=document.getElementById("icon-hamburger");

mobileToggleDOMEL.addEventListener("click",()=>{
  primaryNavigationDOMEL.toggleAttribute("data-visible");
  primaryHeaderDOMEL.toggleAttribute("data-overlay");
  // toggle
  primaryNavigationDOMEL.hasAttribute("data-visible")
    ?mobileToggleDOMEL.setAttribute("aria-expanded", false)
    :mobileToggleDOMEL.setAttribute("aria-expanded", true)
  iconCrossDOMEL.classList.toggle("display-none")
  iconHamburgerDOMEL.classList.toggle("display-none")
})