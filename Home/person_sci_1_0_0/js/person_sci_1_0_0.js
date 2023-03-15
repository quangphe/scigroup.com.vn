const tempPerson = (data) => {
  return ` <div class="person_sci_1_0_0__content">
    <img width="1193" height="754" src="${data.img}" alt="">
    <div class="person_sci_1_0_0__sub">
        <p>${data.sub}</p>
        <span>${data.name}</span>
    </div>
</div>`;
};
document.getElementsByClassName("person_sci_1_0_0__right")[0].innerHTML =
  tempPerson(dataPerson[0]);

const tabPerson = document.getElementsByClassName("person_sci_1_0_0__tab");
for (let i = 0; i < tabPerson.length; i++) {
  tabPerson[i].addEventListener("click", () => {
    for (let i = 0; i < tabPerson.length; i++) {
      tabPerson[i].classList.remove("person_sci_1_0_0--active");
    }
    document.getElementsByClassName("person_sci_1_0_0__right")[0].innerHTML =
      tempPerson(dataPerson[i]);
    tabPerson[i].classList.add("person_sci_1_0_0--active");
  });
}
