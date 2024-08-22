// Swiperによるスライダー

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    centeredSlides: true,
    spaceBetween: 20,
    autoplay:  { 
      delay: 4000, 
      disableOnInteraction: false, 
    },
    loopAdditionalSlides: 1,
    pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: "clickable"
      },
  });

// Swiperではみ出たスライド画像を非表示にする

  const slide = document.querySelectorAll('.swiper-slide img');
  for(let i = 0; i < slide.length; i++) {
    if(!slide[i].classList.contains('swiper-slide-active') || slide[i].classList.contains('swiper-slide-prev') || 
        slide[i].classList.contains('swiper-slide-next') ) {
            slide[i].classList.add('swiper-slide-hide');
    }
}

// スライドメニュー表示・非表示

const menuClick = document.getElementById('slidemenu');
const menuMove = document.querySelector('.slide-menu');
const closeClick = document.querySelector('.close-button');
const clickMenu = document.querySelectorAll('.menu-list-contents');

// スライドメニューを表示する

menuClick.addEventListener ('click', function () {
  if(menuMove.classList.contains('slideout-menu')) {
    menuMove.classList.remove('slideout-menu');
    menuMove.classList.add('slide-menu-click');
  } else {
    menuMove.classList.add('slide-menu-click');
  }
});

// スライドメニューを閉じる

closeClick.addEventListener('click', function () {
    menuMove.classList.remove('slide-menu-click');
    menuMove.classList.add('slideout-menu');
  });

for(let i = 0; i < clickMenu.length; i++) {
  clickMenu[i].addEventListener('click', function () {
    menuMove.classList.remove('slide-menu-click');
    menuMove.classList.add('slideout-menu');
  })};

// 「法人の方はこちら」のナビ表示

const companyBtn = document.getElementById('company-navi');
const companyNavi = document.querySelector('.company-navi-container');
let companyNaviShow = false;

function naviShow () {
  companyNavi.classList.remove('company-navi-container');
  companyNavi.classList.add('company-navi-container-hover');
};

function naviHide () {
  if(!companyNaviShow) {
  companyNavi.classList.add('company-navi-container');
  companyNavi.classList.remove('company-navi-container-hover');
  }
};

companyBtn.addEventListener('mouseover', function () {
  companyNaviShow = true;
  naviShow ();
});
companyNavi.addEventListener('mouseover', function () {
  companyNaviShow = true;
  naviShow ();
});

companyBtn.addEventListener('mouseleave', function () {
  companyNaviShow = false;
  naviHide ();
});

companyNavi.addEventListener('mouseleave', function () {
  companyNaviShow = false;
  naviHide ();
});

// 検索BOXアコーディオンの開閉

const accordionBtn = document.querySelector('.accordion-btn');
const accordionContents = document.querySelector('.accordion-section');
const plusIcon = document.querySelector('.accordion-plusmark')
const minusIcon = document.querySelector('.accordion-minusmark');

accordionBtn.addEventListener('click', function () {
  if(plusIcon.classList.contains('accordion-plusmark')) {
  accordionContents.classList.remove('accordion-section');
  accordionContents.classList.add('accordion-section-open');
  plusIcon.classList.remove('accordion-plusmark');
  minusIcon.classList.remove('accordion-minusmark');
  plusIcon.classList.add('accordion-plusmark2');
  minusIcon.classList.add('accordion-minusmark2');
  } else {
    accordionContents.classList.add('accordion-section');
    accordionContents.classList.remove('accordion-section-open');
    plusIcon.classList.add('accordion-plusmark');
    minusIcon.classList.add('accordion-minusmark');
    plusIcon.classList.remove('accordion-plusmark2');
    minusIcon.classList.remove('accordion-minusmark2');
  }
});

// チェックボックス選択（個別）
document.addEventListener('click', function(event) {
  const target = event.target;
  if (target.classList.contains('checkbox-input')) {

      if (target.checked) {
        target.parentElement.parentElement.classList.add('checkbox-label-border');
        target.parentNode.classList.remove('checkbox-label');
        target.nextElementSibling.classList.add('checkbox-text-checked');
        target.nextElementSibling.classList.remove('checkbox-text');
      } else {
        target.parentElement.parentElement.classList.remove('checkbox-label-border');
        target.parentNode.classList.add('checkbox-label');
        target.nextElementSibling.classList.remove('checkbox-text-checked');
        target.nextElementSibling.classList.add('checkbox-text');
      }
    }
  }
);

// 勤務地モーダルチェックボックス選択
let allAreaValueArray = [];

function getAreaValue() {
  const selectAllArray = document.querySelectorAll('[name="selectallarea[]"]');
  let getAreaValueArray = [];

  function updateSelectAllCheckbox(selectCheckbox, index) {
    const allCheckboxChecked = selectCheckbox.closest('.checkbox-all-container').querySelector('.checkbox-input-all');
    const allCheckboxContainer = selectCheckbox.closest('.checkbox-all-container');
    const allCheckboxes = allCheckboxContainer.querySelectorAll('.checkbox-input-area');
    const allSelected = Array.from(allCheckboxes).every(checkbox => checkbox.checked);
  
    //「全て選択」の状態を更新
    allCheckboxChecked.checked = allSelected;
    if (allSelected) {
      allCheckboxChecked.nextElementSibling.classList.add('checkbox-text-all-checked');
      allCheckboxChecked.nextElementSibling.classList.remove('checkbox-text-all');
    } else {
      allCheckboxChecked.nextElementSibling.classList.add('checkbox-text-all');
      allCheckboxChecked.nextElementSibling.classList.remove('checkbox-text-all-checked');
    }
  };

  // それぞれの勤務地エリアの配列を取得
    selectAllArray.forEach((selectCheckbox) => {
      const checkboxesInput = '.checkbox-input-area';
      const checkboxes = selectCheckbox.closest('.checkbox-all-container').querySelectorAll(checkboxesInput);
      const valuesArray = [];

      checkboxes.forEach((checkbox) => {
        valuesArray.push(checkbox.value);
      });
      allAreaValueArray.push(valuesArray);
    });

  // 勤務地のチェックボックスで選択されたものの配列を取得
  selectAllArray.forEach((selectCheckbox, index) => {
    const checkboxesInput = '.checkbox-input-area';
    const checkboxes = selectCheckbox.closest('.checkbox-all-container').querySelectorAll(checkboxesInput);

    getAreaValueArray[index] = [];

    checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('click', function () {
      if (checkbox.checked) {
        getAreaValueArray[index].push(checkbox.value);
      } else {
        const areaValueRemove = getAreaValueArray[index].indexOf(checkbox.value);
        if (areaValueRemove !== -1) {
          getAreaValueArray[index].splice(areaValueRemove, 1);
        }
      };

        // 個別の勤務地を選択・解除
        checkboxes.forEach((childCheckbox) => {

          if (childCheckbox.checked) {
            childCheckbox.parentElement.parentElement.classList.add('checkbox-label-border-area');
            childCheckbox.parentNode.classList.remove('checkbox-label-area');
            childCheckbox.parentNode.classList.add('checkbox-label-area-checked');
            childCheckbox.nextElementSibling.classList.add('checkbox-text-area-checked');
            childCheckbox.nextElementSibling.classList.remove('checkbox-text-area');
          } else {
            childCheckbox.parentNode.classList.add('checkbox-label-area');
            childCheckbox.parentNode.classList.remove('checkbox-label-area-checked');
            childCheckbox.nextElementSibling.classList.remove('checkbox-text-area-checked');
            childCheckbox.nextElementSibling.classList.add('checkbox-text-area');
            childCheckbox.parentElement.parentElement.classList.remove('checkbox-label-border-area');
          }
        });

      // 配列同士が順番関係なく一致するかどうかの判定
      updateSelectAllCheckbox(selectCheckbox, index);
      });
    });
  });
}

// チェックボックス選択（モーダルの「全てを選択」）
const selectAllCheckboxes = document.querySelectorAll('[name="selectallarea[]"]');
let getAreaValueArray = [];

selectAllCheckboxes.forEach((selectAllCheckbox) => {
  const checkboxListContents = selectAllCheckbox.closest('.checkbox-all-container').querySelector('.checkbox-list-container');

  selectAllCheckbox.addEventListener('click', function () {
    const areaCheckboxes = checkboxListContents.querySelectorAll('.checkbox-input-area');
    const textAreas = checkboxListContents.querySelectorAll('.checkbox-text-area');
    const textLength = Array.from(textAreas).some(area => area.classList.contains('text3'));
    
    areaCheckboxes.forEach((checkbox, index) => {
      checkbox.checked = selectAllCheckbox.checked;

      if (checkbox.checked) {
        getAreaValueArray[index] = Array.from(areaCheckboxes).map(checkbox => checkbox.value);
        
        checkbox.parentElement.parentElement.classList.add('checkbox-label-border-area');
        checkbox.parentNode.classList.add('checkbox-label-area-checked');
        checkbox.parentNode.classList.remove('checkbox-label-area');
        checkbox.nextElementSibling.classList.add('checkbox-text-area-checked');
  
        if (textLength) {
          const specialPref = ['神奈川県', '和歌山県', '鹿児島県'];
            if (specialPref.includes(checkbox.value)) {
              checkbox.nextElementSibling.classList.add('text3-checked');
              checkbox.nextElementSibling.classList.remove('checkbox-text-area');
            } else {
              checkbox.nextElementSibling.classList.remove('checkbox-text-area');
            }
        } else {
            checkbox.nextElementSibling.classList.remove('checkbox-text-area');
      }
      } else {
        getAreaValueArray[index] = [];
        checkbox.parentNode.classList.add('checkbox-label-area');
        checkbox.parentElement.parentElement.classList.remove('checkbox-label-border-area');
        checkbox.parentNode.classList.remove('checkbox-label-area-checked');
        checkbox.nextElementSibling.classList.remove('checkbox-text-area-checked');

          if (textLength) {
            const specialPref = ['神奈川県', '和歌山県', '鹿児島県'];
            if (specialPref.includes(checkbox.value)) {
                checkbox.nextElementSibling.classList.remove('text3-checked');
                checkbox.nextElementSibling.classList.add('checkbox-text-area');
              } else {
                checkbox.nextElementSibling.classList.add('checkbox-text-area');
            }
        } else {
            checkbox.nextElementSibling.classList.add('checkbox-text-area');
      }
    }
    // 対象の「全てを選択」ボタンの表示を変更する処理
    const checkboxLabelAll = selectAllCheckbox.closest('.checkbox-label-all');
    const checkboxTextAll = checkboxLabelAll ? checkboxLabelAll.querySelector('.checkbox-text-all') : null;

      if (checkboxTextAll) {
        if (selectAllCheckbox.checked) {
          checkboxTextAll.classList.add('checkbox-text-all-checked');
          checkboxTextAll.classList.remove('checkbox-text-all');
        } else {
          checkboxTextAll.classList.remove('checkbox-text-all-checked');
          checkboxTextAll.classList.add('checkbox-text-all');
        }
      }
    });
  });
});

// 関数を呼び出して初期化
getAreaValue();


// 勤務地チェックボックス選択解除
const selectedAreaReset = document.querySelector('#reset-area');
const selectedAreaAll = document.querySelectorAll('.checkbox-input-all');
const selectedAreas = document.querySelectorAll('.checkbox-input-area');

selectedAreaReset.addEventListener('click', function () {
  modalAreaReset();
});

function modalAreaReset() {
  for(let i=0; i < selectedAreaAll.length; i++) {
    if (selectedAreaAll[i].checked) {
        selectedAreaAll[i].checked = false;
        selectedAreaAll[i].nextElementSibling.classList.remove('checkbox-text-all-checked');
        selectedAreaAll[i].nextElementSibling.classList.add('checkbox-text-all');
      };
    };
  for(let i=0; i < selectedAreas.length; i++) {
    if(selectedAreas[i].checked) {
      const selectedAreatext = document.querySelectorAll('.checkbox-text-area-checked');
      const areaText = Array.from(selectedAreatext).some(area => area.classList.contains('text3'));

        selectedAreas[i].checked = false;
        selectedAreas[i].parentNode.classList.add('checkbox-label-area');
        selectedAreas[i].parentElement.parentElement.classList.remove('checkbox-label-border-area');
        selectedAreas[i].parentNode.classList.remove('checkbox-label-area-checked');
        selectedAreas[i].nextElementSibling.classList.remove('checkbox-text-area-checked');

        if (areaText) {
          const specialPref = ['神奈川県', '和歌山県', '鹿児島県'];
            if (specialPref.includes(selectedAreas.value)) {
                  selectedAreas[i].checked = false;
                  selectedAreas[i].nextElementSibling.classList.remove('text3-checked');
                  selectedAreas[i].nextElementSibling.classList.add('checkbox-text-area');
                  
                } else {
                  selectedAreas[i].checked = false;
                  selectedAreas[i].nextElementSibling.classList.add('checkbox-text-area');
              }
          } else {
              selectedAreas[i].checked = false;
              selectedAreas[i].nextElementSibling.classList.add('checkbox-text-area');
        }
      }
    }
  };
  
// 勤務地モーダルの選択をPHPへ送信し、値を受け取る
const postArea = document.querySelector('#submit-area');

postArea.addEventListener('click', function() {
  // Ajaxを使用してPHPにデータを送信し、都道府県情報を取得
  const formData = new FormData();
  const selectedAllArea = document.querySelectorAll('[name="selectallarea[]"]');

  selectedAllArea.forEach((selectCheckbox) => {
    const checkboxesInput = '.checkbox-input-area';
    const checkboxes = selectCheckbox.closest('.checkbox-all-container').querySelectorAll(checkboxesInput);

    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        formData.append('selectarea[]', checkbox.value);
      }
    });
  });

  formData.append('action', 'selectarea');
  const httpRequest = new XMLHttpRequest();
  httpRequest.open('POST', 'php/search-select-output.php');
  httpRequest.send(formData);

  httpRequest.addEventListener('loadend', receivedResponseArea);

  function receivedResponseArea(event) {
    const target = event.currentTarget;
    if (target.status === 200) {
      try {
        const response = JSON.parse(target.responseText);
        // チェックした都道府県を検索画面へ反映する
        const listContainer = document.querySelector('#area-push');
        const allList = [...response.selectareas];

        if(allList.length > 0) {
          listContainer.innerHTML = '';
            const deleteElements = document.querySelectorAll('.selected-checked-list');
            for (let i = 0; i < deleteElements.length; i++) {
              if (listContainer.contains(deleteElements[i])) {
                  listContainer.removeChild(deleteElements[i]);
                }
              }
            for (let i = 0; i < allList.length; i++) {
              const liTag = document.createElement('li');
                liTag.className = 'selected-checked-list';
      
              const divTag = document.createElement('div');
                divTag.className = 'label-area-selected';
                  
              const spanTag = document.createElement('span');
                spanTag.className = 'input-area-selected';
                  
              const spanTag2 = document.createElement('span');
                spanTag2.className = 'text-area-selected';
                spanTag2.innerHTML = allList[i];
                  
              const ulTag = document.querySelector('#area-push');
                ulTag.appendChild(liTag);
                liTag.appendChild(divTag);
                divTag.appendChild(spanTag);
                spanTag.appendChild(spanTag2);
              }
        } else {
        listContainer.innerHTML = '指定なし';
      }
    } catch (error) {
        console.error('Error parsing JSON or unexpected response:', error);
  }
}}});

// 検索条件リセット

const resetClick = document.querySelector('.reset-button');
const noSelectArea = document.querySelector('#area-noselect');
const allListArea = document.querySelector('#area-push');
const noSelectFocus = document.querySelector('#focus-noselect');
const allListFocus = document.querySelector('#focus-push');

// チェックボタンリセット
resetClick.addEventListener('click', function() {
  const checkList = document.querySelectorAll('.checkbox-input')
  for(let i=0; i < checkList.length; i++) {
    if(checkList[i].checked) {
      checkList[i].parentElement.parentElement.classList.remove('checkbox-label-border');
      checkList[i].parentNode.classList.add('checkbox-label');
      checkList[i].nextElementSibling.classList.remove('checkbox-text-checked');
      checkList[i].nextElementSibling.classList.add('checkbox-text');
    }
  };
  if (noSelectArea) {
    allListArea.innerHTML = '';
    allListArea.innerHTML = '指定なし';
    const deleteElements = document.querySelectorAll('.selected-checked-list');
    for (let i = 0; i < deleteElements.length; i++) {
      if (allListArea.contains(deleteElements[i])) {
          allListArea.removeChild(deleteElements[i]);
        }
      };
    const areaCheckList = document.querySelectorAll('.checkbox-input-area');
    areaCheckList.forEach(checkedbox => {
      if (checkedbox.checked) {
        checkedbox.checked = false;
        checkedbox.parentNode.classList.add('checkbox-label-area');
        checkedbox.parentNode.classList.remove('checkbox-label-area-checked');
        checkedbox.nextElementSibling.classList.remove('checkbox-text-area-checked');
        checkedbox.nextElementSibling.classList.add('checkbox-text-area');
        checkedbox.parentElement.parentElement.classList.remove('checkbox-label-border-area');
      }
    });
  }

  if (noSelectFocus) {
    allListFocus.innerHTML = '';
    allListFocus.innerHTML = '指定なし';
    const deleteElements = document.querySelectorAll('.selected-checked-list');
    for (let i = 0; i < deleteElements.length; i++) {
      if (allListFocus.contains(deleteElements[i])) {
        allListFocus.removeChild(deleteElements[i]);
        }
      };
    const focusCheckList = document.querySelectorAll('.focus-input');
    focusCheckList.forEach(checkedbox => {
    if (checkedbox.checked) {
      checkedbox.checked = false;
      checkedbox.parentNode.classList.add('checkbox-label');
      checkedbox.parentNode.classList.remove('checkbox-label-border');
      checkedbox.nextElementSibling.classList.add('checkbox-text');
      checkedbox.parentElement.parentElement.classList.remove('checkbox-text-checked');
    }
  });
}
});

// ラジオボタンリセット
const radioList = document.querySelectorAll('.radio-list');
resetClick.addEventListener ('click',function () {
  for(let i=0; i < radioList.length; i++) {
    if(radioList[i].checked) {
      radioList[i].checked = false;
    }
  }
});

// テキストボックスリセット
const freeWord = document.querySelector('.free-wordbox');
const incomeDetail = document.querySelector('.income-detail .income-detail-box');
resetClick.addEventListener ('click', function () {
  freeWord.value ='';
  incomeDetail.value ='';
});

//勤務地モーダルウィンドウ開く
const modalBackground = document.querySelector('.modal-background');
const modal = document.querySelector('#area-modal-container');
const areaSelectBtn = document.getElementById('workplace-select');
const bodyFix = document.querySelector('.body');
const firstVisible = document.getElementById('first-visible')
areaSelectBtn.addEventListener('click', function () {
  modalBackground.classList.remove('modal-background');
  modalBackground.classList.add('modal-background-open');
  modal.classList.remove('modal-container');
  modal.classList.add('modal-container-open');
  bodyFix.classList.add('body-fixed');
  firstVisible.classList.add('modal-main-container-visible');
  firstVisible.classList.remove('modal-main-container');
});

// 勤務地エリアを選択
const areaList = document.querySelectorAll('.modal-menu-list-contents');
const selectedArea = document.querySelectorAll('.modal-main-container');

for(let i=0; i<areaList.length; i++) {
    areaSelectAction(areaList[i],i);
    }
function areaSelectAction(clickArea,selectId){
    clickArea.addEventListener('click', function (){
    for (let i=0; i<areaList.length; i++) {
        if(selectId !== i){
        if(selectedArea[i].classList.contains('modal-main-container-visible')){
        selectedArea[i].classList.remove('modal-main-container-visible');
        selectedArea[i].classList.add('modal-main-container');
        }
        } else {
          selectedArea[i].classList.add('modal-main-container-visible');
          selectedArea[i].classList.remove('modal-main-container');
        }
       }
  })};

// 勤務地モーダルウィンドウ閉じる
const modalClose = document.querySelector('.modal-close-button');
const visibleModal = document.querySelector('.modal-main-container-visible')

postArea.addEventListener('click', function() {
  modalBackground.classList.add('modal-background');
  modalBackground.classList.remove('modal-background-open');
  modal.classList.add('modal-container');
  modal.classList.remove('modal-conatiner-open');
  bodyFix.classList.remove('body-fixed');

    for (let i = 0; i<selectedArea.length; i++) {
      if (selectedArea[i].classList.contains('modal-main-container-visible')){
        selectedArea[i].classList.remove('modal-main-container-visible');
        selectedArea[i].classList.add('modal-main-container');
      };
    };
});

modalClose.addEventListener('click', function() {
  modalBackground.classList.add('modal-background');
  modalBackground.classList.remove('modal-background-open');
  modal.classList.add('modal-container');
  modal.classList.remove('modal-conatiner-open');
  bodyFix.classList.remove('body-fixed');

    for (let i = 0; i<selectedArea.length; i++) {
      if (selectedArea[i].classList.contains('modal-main-container-visible')){
        selectedArea[i].classList.remove('modal-main-container-visible');
        selectedArea[i].classList.add('modal-main-container');
      };
    };
  });

modalBackground.addEventListener('click', function(event) {
  if(event.target.closest('#area-modal-container') === null) {
      modalBackground.classList.add('modal-background');
      modalBackground.classList.remove('modal-background-open');
      modal.classList.add('modal-container');
      modal.classList.remove('modal-conatiner-open');
      bodyFix.classList.remove('body-fixed');

      for (let i = 0; i<selectedArea.length; i++) {
        if (selectedArea[i].classList.contains('modal-main-container-visible')){
          selectedArea[i].classList.remove('modal-main-container-visible');
          selectedArea[i].classList.add('modal-main-container');
        };
      };
    }
  });

//こだわり条件モーダルウィンドウ開く
const focusModalBackground = document.querySelector('#focus-modal-background');
const focusModal = document.querySelector('#focus-modal-container');
const focusSelectBtn = document.getElementById('focus-select');
focusSelectBtn.addEventListener('click', function () {
  focusModalBackground.classList.remove('modal-background');
  focusModalBackground.classList.add('modal-background-open');
  focusModal.classList.remove('focus-modal-container');
  focusModal.classList.add('focus-modal-container-open');
  bodyFix.classList.add('body-fixed');

  const existingFocusContainer = document.querySelector('.focus-container');
  if(!existingFocusContainer) {
  // Ajaxリクエストを送信
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      // Ajaxリクエストが成功した場合の処理
      const responseData = JSON.parse(xhr.responseText);
      // この関数を呼び出してJSONデータからHTMLを生成
      generateHTML(responseData.data, responseData.grouptypenum);
    }
  };
  // PHPファイルへのリクエストを設定
  xhr.open('GET', 'php/search-select-output.php', true);
  xhr.send();
}
  // JSONデータからHTMLを生成する関数
  function generateHTML(data) {

    const focusDecision = document.querySelector('#focus-decision');

    // 既存のセクションが存在しない場合にのみ生成する
 
      const focusContainer = document.querySelector('#focus-modal-section');
      const groupContainer = document.createElement('div');
      groupContainer.className = 'focus-container';

      for (const groupType in data) {
        if (data.hasOwnProperty(groupType)) {
          const groupSection = document.createElement('div');
          groupSection.className = 'focus-section';
          const groupTitle = document.createElement('h1');
          groupTitle.className = 'focus-title';
          groupTitle.textContent = groupType;
          const checkboxList = document.createElement('div');
          checkboxList.className = 'checkbox-list';

          // 各アイテムに対して処理
          data[groupType].forEach((item, index) => {
            const checkboxWrapper = document.createElement('span');
            checkboxWrapper.className = 'checked-border';
            const checkboxLabel = document.createElement('label');
            const itemName = item.name;
            const itemGroupTypeNum = item.grouptypenum;
            const groupTypeNumber = index + 1;
            const checkboxInput = document.createElement('input');
            checkboxInput.type = 'checkbox';
            checkboxInput.name = 'focus[]';
            checkboxInput.value = itemName;
            checkboxInput.className = 'checkbox-input focus-input';
            checkboxInput.id = `modal-focuscheck${itemGroupTypeNum}-${groupTypeNumber}`;
            checkboxLabel.htmlFor = checkboxInput.id;
            checkboxLabel.className = 'checkbox-label';
            const checkboxText = document.createElement('span');
            checkboxText.className = 'checkbox-text';
            checkboxText.textContent = itemName;

            checkboxLabel.appendChild(checkboxInput);
            checkboxLabel.appendChild(checkboxText);
            checkboxWrapper.appendChild(checkboxLabel);
            checkboxList.appendChild(checkboxWrapper);
          });

          groupSection.appendChild(groupTitle);
          groupSection.appendChild(checkboxList);
          groupContainer.appendChild(groupSection);
          focusContainer.appendChild(groupContainer);
        }
      }
      // focusDecisionをfocusContainerの最後に追加する
      focusContainer.appendChild(focusDecision);
    }
  }
);

// こだわり条件モーダルの選択をPHPへ送信し、値を受け取る
const postFocus = document.querySelector('#submit-focus');

postFocus.addEventListener('click', function() {
  // Ajaxを使用してPHPにデータを送信し、こだわり条件情報を取得
  const formData = new FormData();
  const selectedAllFocus = document.querySelectorAll('[name="focus[]"]');

  selectedAllFocus.forEach((checkbox) => {
    if (checkbox.checked) {
      formData.append('focus[]', checkbox.value);
    }
  });
  formData.append('action', 'focus');

  const httpRequest = new XMLHttpRequest();
  httpRequest.open('POST', 'php/search-select-output.php');
  httpRequest.send(formData);

  httpRequest.addEventListener('loadend', receivedResponseFocus);

  function receivedResponseFocus(event) {
    const target = event.currentTarget;
    if (target.status === 200) {
      try {
        const response = JSON.parse(target.responseText);
        // チェックしたこだわり条件を検索画面へ反映する
        const listContainer = document.querySelector('#focus-push');
        const allList = [...response.selectfocus];

        if(allList.length > 0) {
          listContainer.innerHTML = '';
          const deleteElements = document.querySelectorAll('.selected-checked-list');
          for (let i = 0; i < deleteElements.length; i++) {
            if (listContainer.contains(deleteElements[i])) {
              listContainer.removeChild(deleteElements[i]);
            }
          }
          for (let i = 0; i < allList.length; i++) {
            const liTag = document.createElement('li');
            liTag.className = 'selected-checked-list';

            const divTag = document.createElement('div');
            divTag.className = 'label-area-selected';

            const spanTag = document.createElement('span');
            spanTag.className = 'input-area-selected';

            const spanTag2 = document.createElement('span');
            spanTag2.className = 'text-area-selected';
            spanTag2.innerHTML = allList[i];

            const ulTag = document.querySelector('#focus-push');
            ulTag.appendChild(liTag);
            liTag.appendChild(divTag);
            divTag.appendChild(spanTag);
            spanTag.appendChild(spanTag2);
          }
        } else {
          listContainer.innerHTML = '指定なし';
        }
      } catch (error) {
        console.error('Error parsing JSON or unexpected response:', error);
      }
    }
  }
});

// こだわり条件チェックボックス選択解除
const selectedFocusReset = document.querySelector('#reset-focus');

selectedFocusReset.addEventListener('click', function () {
  const selectedFocus = document.querySelectorAll('.focus-input');

  for(let i=0; i < selectedFocus.length; i++) {
    if (selectedFocus[i].checked) {
      selectedFocus[i].checked = false;
      selectedFocus[i].parentNode.classList.add('checkbox-label');
      selectedFocus[i].parentElement.parentElement.classList.remove('checkbox-label-border');
      selectedFocus[i].nextElementSibling.classList.add('checkbox-text');
      selectedFocus[i].nextElementSibling.classList.remove('checkbox-text-checked');
      };
    };
});

// こだわり条件モーダルウィンドウ閉じる
const focusModalClose = document.querySelector('#focus-modal-close');

postFocus.addEventListener('click', function() {
  focusModalBackground.classList.add('modal-background');
  focusModalBackground.classList.remove('modal-background-open');
  focusModal.classList.add('focus-modal-container');
  focusModal.classList.remove('focus-modal-container-open');
  bodyFix.classList.remove('body-fixed');
});

focusModalClose.addEventListener('click', function() {
  focusModalBackground.classList.add('modal-background');
  focusModalBackground.classList.remove('modal-background-open');
  focusModal.classList.add('focus-modal-container');
  focusModal.classList.remove('focus-modal-container-open');
  bodyFix.classList.remove('body-fixed');
});

focusModalBackground.addEventListener('click', function(event) {
  if(event.target.closest('#focus-modal-container') === null) {
    focusModalBackground.classList.add('modal-background');
    focusModalBackground.classList.remove('modal-background-open');
    focusModal.classList.add('focus-modal-container');
    focusModal.classList.remove('focus-modal-container-open');
      bodyFix.classList.remove('body-fixed');
    }
  });


// 都道府県求人一覧アコーディオンを開閉
const accordOpen = document.querySelectorAll('.area-title');
const accordNone = document.querySelectorAll('.area-close-on')
const turnUp = document.querySelectorAll('.turn-up-before');

for(let i = 0; i < accordOpen.length; i++) {
  accordOpen[i].addEventListener('mouseover', function() {
    accordOpen[i].classList.add('area-title-hover')
  });

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
};

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
const saveBefore = document.querySelectorAll('.save-text');
const saveDone = document.querySelectorAll('.save-done-text');

for(let i = 0; i < saveButton.length; i++) {
  saveButton[i].addEventListener('click', function() {
    saveButton[i].classList.toggle('save-after');
    saveBefore[i].classList.toggle('save-text-after');
    saveDone[i].classList.toggle('save-done');
  });
}

