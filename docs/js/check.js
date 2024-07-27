
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const targetImage = document.getElementById('targetImage');

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', () => {
    const checkedValues = [...checkboxes]
      .filter(box => box.checked)
      .map(box => box.id);

    // 2つ選択された場合にのみ画像を変更
    if (checkedValues.length === 2) {
      // 2つの組み合わせによって画像を決定
      if (checkedValues.includes('oya') && checkedValues.includes('hito')) {
        targetImage.src = 'image/teppo.png';
      } else if (checkedValues.includes('oya') && checkedValues.includes('naka')) {
        targetImage.src = 'image/dekopin.png';
      } else if (checkedValues.includes('oya') && checkedValues.includes('kusuri')) {
        targetImage.src = 'image/no.png';
      } else if (checkedValues.includes('oya') && checkedValues.includes('ko')) {
        targetImage.src = 'image/wei.png';
      } else if (checkedValues.includes('hito') && checkedValues.includes('naka')) {
        targetImage.src = 'image/ryoiki.png';
      } else if (checkedValues.includes('hito') && checkedValues.includes('kusuri')) {
        targetImage.src = 'image/dora.png';
      } else if (checkedValues.includes('hito') && checkedValues.includes('ko')) {
        targetImage.src = 'image/kon.png';
      } else if (checkedValues.includes('naka') && checkedValues.includes('kusuri')) {
        targetImage.src = 'image/choki.png';
      } else if (checkedValues.includes('naka') && checkedValues.includes('ko')) {
        targetImage.src = 'image/no.png';
      } else if (checkedValues.includes('kusuri') && checkedValues.includes('ko')) {
        targetImage.src = 'image/ja.png';
      }
    } else {
      // 2つ以外の場合は初期画像に戻す
      targetImage.src = 'image/no.png';
    }
  });
});

