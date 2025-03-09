// 当页面加载完成时执行
window.addEventListener('DOMContentLoaded', function() {
  console.log('Tech Chaos JS loaded');
  // 创建科技混沌容器
  const container = document.createElement('div');
  container.className = 'tech-chaos-container';
  document.body.appendChild(container);
  
  // 创建50条随机线条
  for (let i = 0; i < 50; i++) {
    createRandomLine(container);
  }
  
  // 数字雨效果
  createDigitalRain();
});

function createRandomLine(container) {
  const line = document.createElement('div');
  line.className = 'tech-line';
  
  // 随机宽度和高度
  const isHorizontal = Math.random() > 0.5;
  const length = Math.random() * 100 + 50;
  const thickness = Math.random() * 2 + 1;
  
  if (isHorizontal) {
    line.style.width = `${length}px`;
    line.style.height = `${thickness}px`;
  } else {
    line.style.width = `${thickness}px`;
    line.style.height = `${length}px`;
  }
  
  // 随机位置
  line.style.left = `${Math.random() * 100}%`;
  line.style.top = `${Math.random() * 100}%`;
  
  // 随机旋转
  line.style.transform = `rotate(${Math.random() * 360}deg)`;
  
  container.appendChild(line);
}

function createDigitalRain() {
  const canvas = document.createElement('canvas');
  canvas.style.position = 'absolute';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.style.pointerEvents = 'none';
  canvas.style.zIndex = '-1';
  canvas.style.opacity = '0.03';
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // 字符集
  const chars = '01'.split('');
  const columns = Math.floor(canvas.width / 20);
  const drops = [];

  // 初始化雨滴
  for (let i = 0; i < columns; i++) {
    drops[i] = Math.random() * -100;
  }

  function draw() {
    ctx.fillStyle = 'rgba(248, 253, 255, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = '#3498db';
    ctx.font = '15px monospace';
    
    for (let i = 0; i < drops.length; i++) {
      const text = chars[Math.floor(Math.random() * chars.length)];
      ctx.fillText(text, i * 20, drops[i] * 20);
      
      if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      
      drops[i]++;
    }
  }

  setInterval(draw, 33);
  
  // 响应窗口大小变化
  window.addEventListener('resize', function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
} 