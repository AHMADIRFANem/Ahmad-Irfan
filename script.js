const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

toggle.onclick = () => {
  nav.classList.toggle("active");
};

// smooth scroll
document.querySelectorAll("a").forEach(link => {
  link.onclick = function(e) {
    if (this.hash) {
      e.preventDefault();
      document.querySelector(this.hash).scrollIntoView({
        behavior: "smooth"
      });
      nav.classList.remove("active");
    }
    /* MOBILE FIX */
@media(max-width:768px){

  .buttons {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .btn {
    width: 100%;
    text-align: center;
  }

  .socials {
    justify-content: center;
  }
}
  };
});