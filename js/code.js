'use strict'
window.addEventListener('DOMContentLoaded', (event) => {
// メニュー表示
const menu =document.getElementById('menu-btn');
const menuContents =document.getElementById('mainmenu-contents');
menu.addEventListener ('click', function(){
    menuContents.classList.toggle('clicked');
});

const closeMenu =document.getElementById('close-menu-button');
closeMenu.addEventListener('click', function(){
    menuContents.classList.remove('clicked');
});

// 法人の方はこちら
const houjinClick = document.getElementById('houjin-navi');
const hoverOpen = document.getElementById('houjin-hover');
houjinClick.addEventListener('click', function() {
 hoverOpen.classList.toggle('hover-list');
 hoverOpen.classList.toggle ('hover-list-open');
});

// スライダー
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  centeredSlides: true,
  slidesPerView: 1,
  spaceBetween: 0,
  autoplay:  { 
    delay: 3000, 
    disableOnInteraction: false, 
  },
  initialSlide: 1,
});

const swiper2 = new Swiper('.swiper-left', {
  direction: 'horizontal',
  loop: true,
  centeredSlides: true,
  slidesPerView: 1,
  spaceBetween: 0,
  autoplay:  { 
    delay: 3000, 
    disableOnInteraction: false, 
  },
  initialSlide: 1,
});

const swiper3 = new Swiper('.swiper-right', {
  direction: 'horizontal',
  loop: true,
  centeredSlides: true,
  slidesPerView: 1,
  spaceBetween: 0,
  autoplay:  { 
    delay: 3000, 
    disableOnInteraction: false, 
  },
  initialSlide: 5,
});

const controlSwiper= new Swiper ('.swiper', {
  controller: {
    inverse: false,
    control: swiper3,
    by: 'slide'
  },
});

const controlSwiper2= new Swiper('.swiper-left', {
  controller: {
    control: swiper,
    inverse: false,
    by: 'slide'
  },
});

const controlSwiper3=new Swiper('.swiper-right', {
  controller: {
		control: swiper2,
    inverse: false,
		by: 'slide'
	},
});

const bullets = new Swiper(".swiper", {
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: "clickable"
    },
    direction: 'horizontal',
    loop: true,
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay:  { 
      delay: 3000, 
      disableOnInteraction: false, 
    },
    initialSlide: 0,
  });


// チェックボックス（検索）
 const chclass = document.querySelectorAll('.ch');
const chdetail = document.querySelectorAll('.check-detail');
const chLabel = document.querySelectorAll('.ch1');
  for(let i = 0; i < chclass.length; i++) {
    chclass[i].addEventListener('click', function(){
      if(!chLabel[i].classList.contains('ch1-border')) {
        chclass[i].parentNode.classList.add('ch1-border');
        chclass[i].parentNode.classList.remove('ch1');
        chdetail[i].style.color = "#11296C";
      } else {
        chclass[i].parentNode.classList.remove('ch1-border');
        chclass[i].parentNode.classList.add('ch1');
        chdetail[i].style.color = "#333";
      }
    });
  }

// 検索条件リセット
const resetClick = document.getElementById('reset');

// チェックボタンリセット
const checkList = document.getElementsByClassName('ch');
const uncheckAll = function () {
  for(let i=0; i<checkList.length; i++) 
  checkList[i].checked = false;
}
resetClick.addEventListener ('click', uncheckAll, false);
resetClick.addEventListener('click', function() {
  for(let i=0; i<checkList.length; i++) 
  checkList[i].parentNode.classList.remove('ch1-border') + checkList[i].parentNode.classList.add('ch1');
});

// ラジオボタンリセット
const radioList = document.getElementsByClassName('radio');
const uncheckRadio =function () {
  for(let i=0; i<radioList.length; i++)
  radioList[i].checked = false;
}
resetClick.addEventListener ('click', uncheckRadio, false);

// テキストボックスリセット
const fwClear = document.getElementsByClassName('free-wordbox');
resetClick.addEventListener ('click', function () {
  fwClear[0].value ='';
});
const txClear = document.getElementsByClassName('text-in');
resetClick.addEventListener ('click', function () {
  txClear[0].value ='';
});

// 検索アコーディオン
  const open = document.getElementById('detail-search');
  const clickOpen = document.getElementById('click-detail-open');
  const changeButton = document.getElementById('change-plus');
  clickOpen.addEventListener('click', function() {
    if(changeButton.style.display == "inline-block") {
      changeButton.style.display = "none";
      open.classList.remove('detail-search-container');
      open.classList.add ('detail-search-container-open') ;
    }else{
      changeButton.style.display = "inline-block";
      open.classList.add('detail-search-container');
      open.classList.remove ('detail-search-container-open') ;
    }
 });

// 新しい要素を追加する関数
function addToArray(arr, value) {
  if (!arr.includes(value)) {
    arr.push(value);
  }
}

function addToNameArray(arr, value) {
    arr.push(value);
  }

// 新しい要素を削除する関数
function removeFromArray(arr, value) {
  const index = arr.indexOf(value);
  if (index !== -1) {
    arr.splice(index, 1);
  }
}

// チェックボックス（全て選択）
const allSelect2 = document.querySelectorAll('.ch-bl');
const allCheck = document.querySelectorAll('.check-detail-bl-before');
const allchArea = document.querySelectorAll('.ch-area');
const allchMark = document.querySelectorAll('.check-detail-area-before');
const allColorbl = document.querySelectorAll('.check-detail-area');
let newArray = [];
let newArray2 = [];
let newArray3 = [];
let newArray4 = [];
let newArray5 = [];
let newArray6 = [];
let nameArray = ["list-detail0","list-detail0","list-detail0","list-detail0","list-detail0","list-detail0","list-detail0","list-detail1","list-detail1","list-detail1","list-detail1","list-detail1","list-detail1","list-detail1","list-detail2","list-detail2","list-detail2","list-detail2","list-detail2","list-detail2","list-detail3","list-detail3","list-detail3","list-detail3","list-detail4","list-detail4","list-detail4","list-detail4","list-detail4","list-detail4","list-detail5","list-detail5","list-detail5","list-detail5","list-detail5","list-detail5","list-detail5","list-detail5","list-detail5","list-detail6","list-detail6","list-detail6","list-detail6","list-detail6","list-detail6","list-detail6","list-detail6"];

const listContents = Array.from({ length: 7 }, (_, index) =>
  document.querySelectorAll(`.list-contents${index + 1} label.ch1-area`)
);
console.log(listContents)

const allListContents = [...listContents];

const idArrays = allListContents.map((nodeList) => {
  const ids = [];
  nodeList.forEach((label) => {
    const id = label.getAttribute('id');
    if (id) {
      ids.push(id);
    }
  });
  return ids;
});

const listContents2 = Array.from({ length: 7 }, (_, index) =>
  document.querySelectorAll(`.list-contents${index + 1} input.ch-area`)
);
const nameArrays = listContents2.map(inputs => {
  return Array.from(inputs).map(input => input.getAttribute('name'));
});

for (let i = 0; i < allchArea.length; i++) {
  allchArea[i].addEventListener('click', function () {
    this.parentNode.classList.toggle('ch1-area-border');
    this.parentNode.classList.toggle('ch1-area');
    allchMark[i].classList.toggle('ch-area-before-style');
    allColorbl[i].classList.toggle('checked-color');
    
    if (this.parentNode.classList.contains('ch1-area-border')) {
      addToArray(newArray2, this.id);
      document.querySelector('[name=pusharea1]').value = newArray2.join(',');
    } else {
      removeFromArray(newArray2, this.id); 
        document.querySelector('[name=pusharea1]').value = newArray2.join(',');
      }

    if (this.parentNode.classList.contains('ch1-area-border')) {
      addToArray(newArray3, this.value);
      document.querySelector('[name=pusharea2]').value = newArray3.join(',');
    } else {
      removeFromArray(newArray3, this.value); 
        document.querySelector('[name=pusharea2]').value = newArray3.join(',');
      }
    
    if (!allchMark[i].classList.contains('ch-area-before-style')) {
      addToNameArray(newArray4, this.name);
      document.querySelector('[name=pusharea3]').value = newArray4.join(',');
    } else {
      removeFromArray(newArray4, this.name); 
        document.querySelector('[name=pusharea3]').value = newArray4.join(',');
      }

    if (this.parentNode.classList.contains('ch1-area-border')) {
      const prefText = this.parentElement.querySelector('.check-detail-area').textContent.trim();
      addToArray(newArray6, prefText);
      document.querySelector('[name=pusharea5]').value = newArray6.join(',');
    } else {
      const prefText = this.parentElement.querySelector('.check-detail-area').textContent.trim();
      removeFromArray(newArray6, prefText); 
        document.querySelector('[name=pusharea5]').value = newArray6.join(',');
      }

    if (!this.checked) {
      for (let j = 0; j<allSelect2.length; j++) {
        allSelect2[j].checked = false;
      }
      const arrIndex3 = newArray3.indexOf(this.value);
      if (arrIndex3 !== -1) {
        newArray3.splice(arrIndex3, 1);
        document.querySelector('[name=pusharea2]').value = newArray3.join(',');
      }
      const prefTexts2 = this.parentElement.querySelector('.check-detail-area').textContent.trim();
      const arrIndex6 = newArray6.indexOf(prefTexts2);
      if (arrIndex6 !== -1) {
        newArray6.splice(arrIndex6, 1);
        document.querySelector('[name=pusharea5]').value = newArray6.join(',');
      }
    }

    updateSelectAllCheckbox();
  });
}

const allchAreaArray = Array.from(allchArea);
for (let i = 0; i < allSelect2.length; i++) {

  allSelect2[i].addEventListener('click', function () {
    const isCheckAll = this.checked;
    const groupIndex = this.getAttribute('data-select');
    const ids = idArrays[groupIndex];
    const chAreas = allchAreaArray.filter(chArea => ids.includes(chArea.value));
    const selectNameArrays = nameArrays[groupIndex];

    if (isCheckAll) {
      allCheck[groupIndex].classList.remove('ch-bl-before-style');

      for (const chArea of chAreas) {
        chArea.checked = true;
        chArea.parentNode.classList.add('ch1-area-border');
        chArea.parentNode.classList.remove('ch1-area');
        chArea.nextElementSibling.firstElementChild.classList.remove('ch-area-before-style');
        chArea.nextElementSibling.classList.add('checked-color');

        if (!newArray3.includes(chArea.value)) {
        newArray3.push(chArea.value);
        document.querySelector('[name=pusharea2]').value = newArray3.join(',');
      }

      const nameAllChecked = selectNameArrays.some(name => newArray4.includes(name));
      if (nameAllChecked) {
        // 選択した要素の配下にある部分の配列だけを取得
        const selectedNameArray = selectNameArrays.map(name => nameArrays[groupIndex].find(inputName => inputName === name)).filter(Boolean);
    
         selectedNameArray.forEach(selectedName => {
          const existingIndex = newArray4.indexOf(selectedName);
          if (existingIndex !== -1) {
            newArray4.splice(existingIndex, 1);
          }
        });
      
        newArray4.push(...selectedNameArray);
        document.querySelector('[name=pusharea3]').value = newArray4.join(',');
        } else {
          newArray4.push(chArea.name);
          document.querySelector('[name=pusharea3]').value = newArray4.join(',');
        }

      const prefTexts = chArea.parentElement.querySelector('.check-detail-area').textContent.trim();
        if (!newArray6.includes(prefTexts)) {
          newArray6.push(prefTexts);
          document.querySelector('[name=pusharea5]').value = newArray6.join(',');
        }
    }
    } else {
      allCheck[groupIndex].classList.add('ch-bl-before-style');
      for (const chArea of chAreas) {
        chArea.checked = false;
        chArea.parentNode.classList.remove('ch1-area-border');
        chArea.parentNode.classList.add('ch1-area');
        chArea.nextElementSibling.firstElementChild.classList.add('ch-area-before-style');
        chArea.nextElementSibling.classList.remove('checked-color');
        const arrIndex3 = newArray3.indexOf(chArea.value);
        if (arrIndex3 !== -1) {
        newArray3.splice(arrIndex3, 1);
        document.querySelector('[name=pusharea2]').value = newArray3.join(',');
      }
        const arrIndex2 = newArray2.indexOf(chArea.id);
        if (arrIndex2 !== -1) {
        newArray2.splice(arrIndex2, 1);
        document.querySelector('[name=pusharea1]').value = newArray2.join(',');
      }
        const arrIndex4 = newArray4.indexOf(chArea.name);
        if (arrIndex4 !== -1) {
        newArray4.splice(arrIndex4, 1);
        document.querySelector('[name=pusharea3]').value = newArray4.join(',');
      }
        const arrIndex5 = newArray5.indexOf(chArea.name);
        if (arrIndex5 !== -1) {
        newArray5.splice(arrIndex5, 1);
        document.querySelector('[name=pusharea4]').value = newArray5.join(',');
      }
      const prefTexts2 = chArea.parentElement.querySelector('.check-detail-area').textContent.trim();
      const arrIndex6 = newArray6.indexOf(prefTexts2);
      if (arrIndex6 !== -1) {
      newArray6.splice(arrIndex6, 1);
      document.querySelector('[name=pusharea5]').value = newArray6.join(',');
    }
    }
    }
    updateSelectAllCheckbox();
  });
}

function updateSelectAllCheckbox() {
  idArrays.forEach((ids, index) => {
    const isAllChecked = ids.every(id => newArray.includes(id));
    const isChecked = ids.every(value => newArray3.includes(value));
    const correspondingAllCheck = allCheck[index];
    const correspondingAllCheck2 = allSelect2[index];
    const chAreas = allchAreaArray.filter(chArea => ids.includes(chArea.value));

    if (correspondingAllCheck) {
      if (!newArray3.length == 0 && isAllChecked || isChecked) {
        correspondingAllCheck.classList.remove('ch-bl-before-style');
        correspondingAllCheck2.checked = true;
        for (const chArea of chAreas) {
          chArea.checked = true;
        }
      } else {
        correspondingAllCheck.classList.add('ch-bl-before-style');
        correspondingAllCheck2.checked = false;
        for (const chArea of chAreas) {
          chArea.checked = false;
        }
      }
    }
  });
}

  updateSelectAllCheckbox();


// 都道府県の選択解除
  const checkAreaList = document.querySelectorAll('.ch-area');
  const checkAreaReset = document.getElementById('area-reset');
  const chAreadetail2 = document.getElementsByClassName('check-detail-area');
  const chMark2 = document.getElementsByClassName('check-detail-area-before');
  const allCheckReset = document.getElementsByClassName('check-detail-bl-before');
  const uncheckAreaAll = function () {
    for(let i=0; i<checkAreaList.length; i++) 
      checkAreaList[i].checked = false;
    }
    checkAreaReset.addEventListener ('click', uncheckAreaAll, false);
    checkAreaReset.addEventListener('click', function() {
      for(let i=0; i<checkAreaList.length; i++) {
        checkAreaList[i].parentNode.classList.remove('ch1-area-border') + checkAreaList[i].parentNode.classList.add('ch1-area')
        +chMark2[i].classList.add('ch-area-before-style') + chAreadetail2[i].classList.remove('checked-color');
  

      removeFromArray(newArray2, checkAreaList[i].id);
      document.querySelector('[name=pusharea1]').value = newArray2.join(',');
      
      removeFromArray(newArray3, checkAreaList[i].value);
      document.querySelector('[name=pusharea2]').value = newArray3.join(',');

      removeFromArray(newArray4, checkAreaList[i].name);
      document.querySelector('[name=pusharea3]').value = newArray3.join(',');

      const prefText = checkAreaList[i].parentElement.querySelector('.check-detail-area').textContent.trim();
      removeFromArray(newArray6, prefText);
      document.querySelector('[name=pusharea5]').value = newArray3.join(',');

}});
    checkAreaReset.addEventListener('click', function () {
      for(let i =0; i<allCheckReset.length; i++) {
        allCheckReset[i].classList.add('ch-bl-before-style');
      }
    });

// 勤務地エリアを選択
const selectArea = document.querySelectorAll('.area-list');
const areaContents = document.querySelectorAll('.modal-right-container');

for(let i=0; i<selectArea.length; i++) {
    selectAction(selectArea[i],i);
    }
function selectAction(clickAct,selectId){
    clickAct.addEventListener('click', function (){
    for (let i=0; i<selectArea.length; i++) {
        if(selectId !== i){
        if(areaContents[i].classList.contains('md-first-container')){
        areaContents[i].classList.remove('md-first-container');
        areaContents[i].classList.add('modal-right-container');
        }
        } else {
          areaContents[i].classList.add('md-first-container');
          areaContents[i].classList.remove('modal-right-container');
        }
       }
  })};

// モーダルウィンドウ開く
const wpModal = document.getElementById('wp-modalallid');
const wpButton = document.getElementById('wp-select');
const bdFix = document.getElementById('bd-back');
const firstOpen = document.getElementById('md-open1');
 wpButton.addEventListener('click', modalOpen);
 function modalOpen () {
  wpModal.classList.remove('wp-modalall');
  bdFix.classList.add('body-fixed');
  firstOpen.classList.add('md-first-container');
  firstOpen.classList.remove('modal-right-container');
 };

 
// モーダルウィンドウ閉じる
const wpMdClose = document.getElementById('close-md');
const lastArea = document.getElementsByClassName ('md-first-container');
wpMdClose.addEventListener('click',function(){
  wpModal.classList.add('wp-modalall');
  bdFix.classList.remove('body-fixed');

for (let i = 0; i<lastArea.length; i++) {
  if (lastArea[i].classList.contains('md-first-container')){
    lastArea[i].classList.add('modal-right-container');
    lastArea[i].classList.remove('md-first-container');
  }
}
})

// チェックした都道府県を検索画面へ反映する
const listUp = document.getElementById('go-word');
const noSelect = document.querySelector('.work-place-list');
let allPrefArray = ["北海道","青森県","岩手県","宮城県","秋田県","山形県","福島県","栃木県","茨木県","群馬県","埼玉県","千葉県","東京都","神奈川県","新潟県","長野県","山梨県","富山県","石川県","福井県","静岡県","愛知県","岐阜県","三重県","大阪府","京都府","兵庫県","奈良県","滋賀県","和歌山県","鳥取県","島根県","岡山県","広島県","山口県","香川県","徳島県","愛媛県","高知県","福岡県","佐賀県","長崎県","熊本県","大分県","宮崎県","鹿児島県","沖縄県"];
let allIdArray =["Hokkaido","Aomori","Iwate","Miygagi","Akita","Yamagata","Fukushima","Tochigi","Ibaragi","Gunma","Saitama","Chiba","Tokyo","Kanagawa","Niigata","Nagano","Yamanashi","Toyama","Ishikawa","Fukui","Sizuoka","Aichi","Gifu","Mie","Osaka","Kyoto","Hyogo","Nara","Shiga","Wakayama","Tottri","Shimane","Okayama","Hiroshima","Yamaguchi","Kagawa","Tokushima","Ehime","Kouchi","Fukuoka","Saga","Nagasaki","Kumamoto","Oita","Miyazaki","Kagoshima","Okinawa"];
let allPrefNameArray = ["list-detail0","list-detail0","list-detail0","list-detail0","list-detail0","list-detail0","list-detail0","list-detail1","list-detail1","list-detail1","list-detail1","list-detail1","list-detail1","list-detail1","list-detail2","list-detail2","list-detail2","list-detail2","list-detail2","list-detail2","list-detail3","list-detail3","list-detail3","list-detail3","list-detail4","list-detail4","list-detail4","list-detail4","list-detail4","list-detail4","list-detail5","list-detail5","list-detail5","list-detail5","list-detail5","list-detail5","list-detail5","list-detail5","list-detail5","list-detail6","list-detail6","list-detail6","list-detail6","list-detail6","list-detail6","list-detail6","list-detail6"];

listUp.addEventListener('click', function () {

  const getElement = document.querySelectorAll('.work-place-list-checked');
  if(getElement.length > 0) {
    const deleteParent = document.getElementById('work-place-checked');
    const deleteElements = document.querySelectorAll('.work-place-list-checked');

    if (deleteElements.length > 0) {
      for (let i = 0; i < deleteElements.length; i++) {
        deleteParent.removeChild(deleteElements[i]);
      }
    }
  }
  if(newArray3.length > 0) {
  noSelect.classList.add('work-place-list-selected');
  const connectArray = [...newArray3];
  const connectNameArray = [...newArray4];
  const connectTextArray = [...newArray6];

  const lastArray = allPrefArray.filter(prefText => !connectTextArray.includes(prefText));
  const resultArray = allPrefArray.filter(pref => !lastArray.includes(pref));

  const lastIdArray = allIdArray.filter(idText => !connectArray.includes(idText));
  const resultIdArray = allIdArray.filter(id => !lastIdArray.includes(id));

  const selectedNames = [];
for (let i = 0; i < connectNameArray.length; i++) {
  const name = connectNameArray[i];
  const index = allPrefNameArray.indexOf(name);
  if (index !== -1) {
    selectedNames.push(allPrefNameArray[index]);
  }
}

const resultNameArray = selectedNames.sort((a, b) => {
  // 数字を取り出して比較
  const numA = parseInt(a.match(/\d+/)[0]);
  const numB = parseInt(b.match(/\d+/)[0]);
  
  // 数字を比較して昇順にソート
  return numA - numB;
});
 
  for (let i = 0; i < connectArray.length, i < connectNameArray.length; i++) {
    const listUpText = resultIdArray[i];
    const listPrefText = resultArray[i];
    const listName = resultNameArray[i];

    const liTag = document.createElement('li');
    liTag.className = 'work-place-list-checked';

    const labelTag = document.createElement('label');
    labelTag.className = 'ch1-area-border-checked';
    labelTag.setAttribute('id', listUpText + '-select');
    labelTag.setAttribute('for', listUpText + '-checked');

    const inputTag = document.createElement('input');
    inputTag.className = 'ch-area-checked';
    inputTag.setAttribute('id', listUpText + '-checked');
    inputTag.setAttribute('type', 'checkbox');
    inputTag.setAttribute('name', listName);
    inputTag.setAttribute('value', listUpText);

    const spanTag = document.createElement('span');
    spanTag.className = 'detail-area-checked';

    const spanTag2 = document.createElement('span');
    spanTag2.className = 'detail-area-checked-before';

    const spanTag3 = document.createElement('span');
    spanTag3.className = 'checked-color-selected';
    spanTag3.innerText = listPrefText;

    const ulTag = document.getElementById('work-place-checked');

    ulTag.appendChild(liTag);
    liTag.appendChild(labelTag);
    labelTag.appendChild(inputTag);
    inputTag.after(spanTag);
    spanTag.appendChild(spanTag2);
    spanTag.appendChild(spanTag3);

    const padding = document.querySelector('.work-place-container');
    padding.classList.remove('work-place-prim');
  }
} else {
  noSelect.classList.remove('work-place-list-selected');
}
});

// 都道府県求人一覧アコーディオンを開閉
const accordOpen = document.querySelectorAll('.area-title');
const accordNone = document.querySelectorAll('.area-close-on')
const turnUp = document.querySelectorAll('.turn-up-before');

for(let i = 0; i < accordOpen.length; i++) {
  accordOpen[i].addEventListener('mouseover', function() {
    accordOpen[i].classList.add('area-title-hover')
  })

  accordOpen[i].addEventListener('mouseleave', function() {
    accordOpen[i].classList.remove('area-title-hover')
  });

  accordOpen[i].addEventListener('click', function() {
    accordNone[i].classList.toggle('area-close-on');
    accordOpen[i].classList.toggle('area-title-radius');
    turnUp[i].classList.toggle('turn-up');
    accordOpen[i].classList.toggle('area-open-hover')
    accordOpen[i].classList.toggle('area-title-hover')
});
}

// 求人票詳細を見るhover
const moreDetail = document.querySelectorAll('.more');
const defaultNavi = document.querySelectorAll('.default');
const hoverNavi = document.querySelectorAll('.hover');

for(let i = 0; i < moreDetail.length; i++) {
  moreDetail[i].addEventListener('mouseover', function(){
    defaultNavi[i].classList.add('default-after');
    hoverNavi[i].classList.remove('hover');
  });
}
for(let i = 0; i < moreDetail.length; i++) {
  moreDetail[i].addEventListener('mouseleave', function(){
    defaultNavi[i].classList.remove('default-after');
    hoverNavi[i].classList.add('hover');
  });
}

// 保存ボタン操作
const saveButton = document.querySelectorAll('.save');
const saveBefore = document.querySelectorAll('.save-sentence');
const saveDone = document.querySelectorAll('.save-done-sentence');

for(let i = 0; i < saveButton.length; i++) {
  saveButton[i].addEventListener('click', function() {
    saveButton[i].classList.toggle('save-after');
    saveBefore[i].classList.toggle('save-sentence-after');
    saveDone[i].classList.toggle('save-done');
  })
}

})
