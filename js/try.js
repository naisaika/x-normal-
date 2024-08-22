// JavaScriptでHTML生成
document.addEventListener("DOMContentLoaded", function() {
  // focusData変数が存在するか確認
  if (typeof focusData !== 'undefined') {
      // focusDataを利用してHTML生成
      focusData.forEach(function(item) {
          var checkboxLabel = document.createElement('label');
          checkboxLabel.setAttribute('for', 'dynamic-checkbox-' + item.id);
          checkboxLabel.className = 'checked-border';

          var checkboxInput = document.createElement('input');
          checkboxInput.setAttribute('type', 'checkbox');
          checkboxInput.setAttribute('name', 'focus[]');
          checkboxInput.setAttribute('value', item.name);
          checkboxInput.className = 'checkbox-input focus-input';
          checkboxInput.id = 'dynamic-checkbox-' + item.id;

          var checkboxText = document.createElement('span');
          checkboxText.className = 'checkbox-text';
          checkboxText.textContent = item.name;

          checkboxLabel.appendChild(checkboxInput);
          checkboxLabel.appendChild(checkboxText);

          var checkboxContainer = document.querySelector('.checkbox-list');
          checkboxContainer.appendChild(checkboxLabel);
      });
  }
});
  