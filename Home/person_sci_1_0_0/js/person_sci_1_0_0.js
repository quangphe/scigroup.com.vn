const dataPerson = [
  {
    id: "tabPerson0",
    name: "Mr. Nguyễn Bá Úy",
    img: "Home/person_sci_1_0_0/images/person-pic1.jpg",
    sub: "Luôn nhìn vào điểm tích cực của nhân viên & <br> giúp đỡ họ tốt lên mỗi ngày",
  },
  {
    id: "tabPerson1",
    name: "Mr. Nguyễn Bá Úy1",
    img: "Home/person_sci_1_0_0/images/person-pic1.jpg",
    sub: "Luôn nhìn vào điểm tích cực của nhân viên & <br> giúp đỡ họ tốt lên mỗi ngày",
  },
  {
    id: "tabPerson2",
    name: "Mr. Nguyễn Bá Úy2",
    img: "Home/person_sci_1_0_0/images/person-pic1.jpg",
    sub: "Luôn nhìn vào điểm tích cực của nhân viên & <br> giúp đỡ họ tốt lên mỗi ngày",
  },
];

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
