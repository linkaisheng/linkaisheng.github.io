// 科技混沌效果JS
(function() {
  // 等待页面加载完成
  window.addEventListener('load', function() {
    console.log('Tech Chaos: 初始化科技混沌效果');
    initTechChaos();
  });

  function initTechChaos() {
    try {
      // 创建科技混沌容器
      const container = document.createElement('div');
      container.className = 'tech-chaos-container';
      document.body.appendChild(container);
      
      // 创建随机线条
      for (let i = 0; i < 40; i++) {
        createRandomLine(container);
      }
      
      // 初始化技能条动画（如果存在）
      initSkillBars();
      
      console.log('Tech Chaos: 效果加载完成');
    } catch (e) {
      console.error('Tech Chaos: 初始化出错', e);
    }
  }

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

  function initSkillBars() {
    // 初始化技能条动画（如果关于页面中存在）
    setTimeout(function() {
      const skillBars = document.querySelectorAll('.skill-progress');
      if (skillBars.length > 0) {
        console.log('Tech Chaos: 初始化技能条动画');
        skillBars.forEach(function(bar) {
          const level = bar.parentElement.getAttribute('data-level');
          bar.style.width = level;
        });
      }
    }, 500);
  }
})(); 