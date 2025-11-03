console.log('MathJax 论文展示页加载成功');

// 点击图片放大预览
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('img-modal');
  const modalImg = document.getElementById('img-modal-content');

  // 给所有图片添加点击事件
  document.querySelectorAll('img').forEach(img => {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', () => {
      modal.style.display = 'flex';
      modalImg.src = img.src;
    });
  });

  // 点击图片或背景关闭
  modal.addEventListener('click', () => {
    modal.style.display = 'none';
  });
});
