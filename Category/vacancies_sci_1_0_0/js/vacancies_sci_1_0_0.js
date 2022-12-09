const data = [
  {
    id: "1",
    name: "Trưởng nhóm thiết kế",
    link: "recruitDesign.html",
    deadline: "01/09/2022",
    department: "design",
    location: "Hồ Chí Minh",
  },
  {
    id: "2",
    name: "Trưởng nhóm Truyền thông quảng cáo",
    link: "#",
    deadline: "01/09/2022",
    department: "advertisement",
    location: "Hà Nội",
  },
  {
    id: "3",
    name: "Trưởng nhóm quản trị dịch vụ",
    link: "#",
    department: "service",
    deadline: "01/09/2022",
    location: "Hà Nội",
  },
  {
    id: "4",
    name: "Chuyên viên thiết kế đồ họa",
    link: "#",
    department: "design",
    deadline: "01/09/2022",
    location: "Hồ Chí Minh",
  },
  {
    id: "5",
    name: "Trưởng nhóm IT",
    link: "#",
    department: "it",
    deadline: "01/09/2022",
    location: "Hà Nội",
  },
  {
    id: "6",
    name: "nhân viên IT",
    link: "#",
    department: "it",
    deadline: "01/09/2022",
    location: "Hồ Chí Minh",
  },
  {
    id: "7",
    name: "Trưởng nhóm thiết kế",
    link: "#",
    deadline: "01/09/2022",
    department: "design",
    location: "Hà Nội",
  },
];
const removeAccents = (str) => {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D");
};
const recruitCard = (data) => {
  return ` <div class="vacancies_sci_1_0_0__item">
    <div class="vacancies_sci_1_0_0__name">
        <p>${data.name}</p>
        <span><img width="15" height="15" src="images/calendar.svg" alt="">Deadline:
            ${data.deadline}</span>
        <span><img width="15" height="15" src="images/map.svg" alt="">Địa điểm: ${data.location}</span>
    </div>
    <div class="vacancies_sci_1_0_0__more">
        <a href="${data.link}">Xem thêm</a>
    </div>
</div>`;
};

const getFilter = (departmentChecked, locationChecked, data) => {
  const filter = data.filter((e) => {
    let location = removeAccents(e.location);
    if (departmentChecked === "all" && locationChecked === "all") {
      return e;
    } else if (
      departmentChecked === e.department &&
      locationChecked === "all"
    ) {
      return e.department === departmentChecked;
    } else if (locationChecked === location && departmentChecked === "all") {
      return location === locationChecked;
    } else if (
      departmentChecked === e.department &&
      locationChecked === location
    ) {
      return e.department === departmentChecked && location === locationChecked;
    } else {
      return;
    }
  });
  return filter;
};
const noData = `<div class = "vacancies_sci_1_0_0__nodata">Không có dữ liệu</div>`;
const render = (filter) => {
  if (filter.length === 0) {
    document.getElementById("vacancies_sci_1_0_0__main").innerHTML = noData;
    document.getElementsByClassName(
      "vacancies_sci_1_0_0__showmore"
    )[0].style.display = "none";
  } else {
    function loop(key) {
      document.getElementById("vacancies_sci_1_0_0__main").innerHTML = "";
      for (let i = 0; i < filter.length; i++) {
        if (i <= key) {
          document.getElementById("vacancies_sci_1_0_0__main").innerHTML +=
            recruitCard(filter[i]);
          document.getElementsByClassName(
            "vacancies_sci_1_0_0__showmore"
          )[0].style.display = "block";
        }
        if (key + 2 > filter.length) {
          document.getElementsByClassName(
            "vacancies_sci_1_0_0__showmore"
          )[0].style.display = "none";
        }
      }
    }
    // chay lan dau
    loop(2);
    let count = 2;
    const counter = () => loop((count += 2));
    // xử ly click more
    document
      .getElementsByClassName("vacancies_sci_1_0_0__showmore")[0]
      .addEventListener("click", () => {
        counter();
      });
  }
};

const department = document.querySelectorAll("input[name=department]");
const locate = document.querySelectorAll("input[name=location]");
let departmentChecked;
let locationChecked;
for (let items of department) {
  items.addEventListener("click", () => {
    departmentChecked = items.value;
    // locationChecked
    for (let items of locate) {
      if (items.checked) {
        locationChecked = items.value;
      }
    }
    //call data
    const filterData = getFilter(departmentChecked, locationChecked, data);
    render(filterData);
  });
}

for (let items of locate) {
  items.addEventListener("click", () => {
    locationChecked = items.value;
    for (let items of department) {
      if (items.checked) {
        departmentChecked = items.value;
      }
    }
    //call data
    const filterData = getFilter(departmentChecked, locationChecked, data);
    render(filterData);
  });
}
// get All Data
const allData = getFilter("all", "all", data);
render(allData);

const search = (input, data) => {
  const dataArr = [];
  const getInput = removeAccents(input);
  const nameDatas = [];
  for (let item of data) {
    nameDatas.push(removeAccents(item.name));
  }
  for (let i = 0; i < nameDatas.length; i++) {
    if (nameDatas[i].search(getInput) !== -1) {
      if (nameDatas[i] === removeAccents(data[i].name)) {
        dataArr.push(data[i]);
      }
    }
  }
  return dataArr;
};
const searchInput = document.getElementById("nameInput");
document.getElementById("getInputValue").addEventListener("click", () => {
  document.querySelector(".vacancies_sci_1_0_0__input button").style.display =
    "block";
  if (searchInput.value !== "") {
    const getSearch = search(searchInput.value, data);
    render(getSearch);
  } else {
    document.getElementById("vacancies_sci_1_0_0__main").innerHTML = noData;
  }
});
document
  .querySelector(".vacancies_sci_1_0_0__input button")
  .addEventListener("click", () => {
    document.querySelector(".vacancies_sci_1_0_0__input button").style.display =
      "none";
    searchInput.value = "";
    render(allData);
  });
