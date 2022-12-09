let slider1 = [
    {
        title: 'Khuyến mãi',
        background: 'media/images/khuyen-mai.jpg',
        link: '#',
    },
    {
        title: 'Khuyến mãi 2',
        background: 'media/images/khuyen-mai.jpg',
        link: '#',
    },
];
let currentSlideIndex = 0;

function buildSlider(slideArray, sliderContainer) {
    let myHTML = '', myStyle, slide = sliderContainer;
    let nav = `
        <div id="sliderNav" class="sliderNav">
            <div id="sliderPrev" class="sliderPrev" onclick="prevSlide(slider1, 'slider1');">
                <img width="32" height="32" src="media/images/left-arrow.svg" alt="left">
            </div>
        </div>
    `;

    for (let i = 0; i < slideArray.length; i++) {

        if (i == 0) {
            myStyle = `style="left:0"`;
        } else {
            myStyle = '';
        }

        myHTML += `
      <a href="${slideArray[i].link}">
        <img id="${slide}${i}" class="slider__item responsive__item" ${myStyle} src="${slideArray[i].background}" alt="${slideArray[i].title}"  width="1920" height="480" />
      </a>
    `;
    }
    document.getElementById(sliderContainer).innerHTML = myHTML + nav;
}

function prevSlide(slideArray, slide) {
    let nextSlideIndex;
    if (currentSlideIndex === 0) {
        nextSlideIndex = slideArray.length - 1;
    } else {
        nextSlideIndex = currentSlideIndex - 1;
    }

    document.getElementById(slide + nextSlideIndex).style.left = "-100%";
    document.getElementById(slide + currentSlideIndex).style.left = 0;
    document
        .getElementById(slide + nextSlideIndex)
        .setAttribute("class", "slider__item slideInLeft");
    document
        .getElementById(slide + currentSlideIndex)
        .setAttribute("class", "slider__item slideOutRight");
    currentSlideIndex = nextSlideIndex;
}

function nextSlide(slideArray, slide) {
    let nextSlideIndex;
    if (currentSlideIndex === slideArray.length - 1) {
        nextSlideIndex = 0;
    } else {
        nextSlideIndex = currentSlideIndex + 1;
    }
    document.getElementById(slide + nextSlideIndex).style.left = "100%";
    document.getElementById(slide + currentSlideIndex).style.left = 0;
    document
        .getElementById(slide + nextSlideIndex)
        .setAttribute("class", "slider__item slideInRight");
    document
        .getElementById(slide + currentSlideIndex)
        .setAttribute("class", "slider__item slideOutLeft");
    currentSlideIndex = nextSlideIndex;
}

function buildSliderMobile(slideArray, slide) {
    let myHTML = '';

    myHTML = `
        <a href="${slideArray[0].link}">
            <img id="${slide}${0}" class="slider__item responsive__item" style="left:0" src="${slideArray[0].background}" alt="${slideArray[0].title}"  width="1920" height="480" />
        </a>
    `;
    document.getElementById(slide).innerHTML = myHTML;
};

function buildSliderMobileRand(slideArray, sliderContainer) {
    let random = Math.floor(Math.random() * slideArray.length);

    document
        .querySelector(`#${sliderContainer} a`)
        .setAttribute("href", slideArray[random].link);

    document
        .querySelector(`#${sliderContainer} img`)
        .setAttribute("src", slideArray[random].background);

    document
        .querySelector(`#${sliderContainer} img`)
        .setAttribute("alt", slideArray[random].title);
}


//
const doctor = [{
    img: "media/images/page4-p1.jpg",
    name: `
    <ul>
        <li>aa</li>
        <li>Giám đốc điều hành bệnh viện</li>
    </ul>
    `,
    info: `
    <ul>
        <li>Tốt nghiệp trường Đại Học Y Hà Nội</li>
        <li>25 năm kinh ngiệm công tác trong lĩnh vực chuyên khoa Ngoại, Tai Mũi Họng.</li>
        <li>Nguyên phó Giám đốc Bệnh viện Đa Khoa Tỉnh Mộc Châu</li>
        <li>Hơn 25 năm kinh nghiệm trong lĩnh vực y khoa cũng như điều hành bệnh viện</li>
    </ul>
    `,
},
{
    img: "media/images/page4-p1.jpg",
    name: `
    <ul>
        <li>Dr John Chen</li>
        <li>Chuyên gia Trung Tâm Phẫu Thuật Thẩm Mỹ LGBT Hồng Hà</li>
    </ul>
    `,
    info: `
    <ul>
        <li>Tốt nghiệp trường Đại Học Y Hà Nội</li>
    </ul>
    `,
},
{
    img: "media/images/page4-p1.jpg",
    name: `
    <ul>
        <li>ThS.BS Vũ Thị Hồng Hạnh</li>
        <li>Trưởng khoa Phụ sản BVĐK Hồng Hà</li>
    </ul>
    `,
    info: `
    <ul>
        <li>Tốt nghiệp trường Đại Học Y Hà Nội</li>
    </ul>
    `,
},
{
    img: "media/images/page4-p1.jpg",
    name: `
    <ul>
        <li>ThS.BS Vũ Bá Quyết</li>
        <li>Khoa nhi</li>
    </ul>
    `,
    info: `
    <ul>
        <li>Tốt nghiệp trường Đại Học Y Hà Nội</li>
    </ul>
    `,
},
{
    img: "media/images/page4-p1.jpg",
    name: `
    <ul>
        <li>BSCKII Đào Thu Hiền</li>
        <li>Bác sĩ Phụ sản</li>
    </ul>
    `,
    info: `
    <ul>
        <li>Tốt nghiệp trường Đại Học Y Hà Nội</li>
    </ul>
    `,
},
{
    img: "media/images/page4-p1.jpg",
    name: `
    <ul>
        <li>BS Phạm Đình Thuận</li>
        <li>Khoa nam học Tiết liệu</li>
    </ul>
    `,
    info: `
    <ul>
        <li>Tốt nghiệp trường Đại Học Y Hà Nội</li>
    </ul>
    `,
},
{
    img: "media/images/page4-p1.jpg",
    name: `
    <ul>
        <li>BS.CKI Nguyễn Thế Nam</li>
        <li>Khoa nhi</li>
    </ul>
    `,
    info: `
    <ul>
        <li>Tốt nghiệp trường Đại Học Y Hà Nội</li>
    </ul>
    `,
},
];

const doctorItem = document.getElementsByClassName("screen4__doctor");
console.log(doctorItem);
const doctorBox = document.getElementsByClassName("screen4__detail")[0];

for (let i = 0; i < doctorItem.length; i++) {
    // const doctor = array[i];
    let HTML = "";
    doctorItem[i].addEventListener("click", function () {
        HTML = `
        <div class="screen4__info">
            ${doctor[i].info}
        </div>
        <div class="screen4__pic">
            <img src="${doctor[i].img}" alt="">
        </div>`;
        console.log(HTML);
        doctorBox.innerHTML = HTML;
    });
}

function setActiveDoctor(element, className, event) {
    let elements = document.querySelectorAll(element);

    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener(event, function (event) {
            [].forEach.call(elements, function (el) {
                el.classList.remove(className);
            });
            this.classList.add(className);
        });
    }
}

setActiveDoctor(".screen4__doctor", "active", "click");

const scrollTo = function (activeEl) {
    const height = activeEl.offsetHeight;
    doctorBox.style.height = `${height}px`;
};
scrollTo(doctorBox);

