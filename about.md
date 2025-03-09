---
layout: page
title: 关于
permalink: /about/
---

<div class="about-container">
  <div class="profile-section">
    <div class="profile-header">
      <h1>关于我</h1>
      <div class="tech-badge">/* 技术爱好者 */</div>
    </div>
    
    <p class="intro">
      欢迎来到我的个人空间！我是一名热爱技术的开发者，喜欢探索新知识，分享技术见解。
    </p>
  </div>

  <div class="skills-section">
    <h2><span class="code-tag">&lt;skills&gt;</span> 技能与专长 <span class="code-tag">&lt;/skills&gt;</span></h2>
    
    <div class="skill-grid">
      <div class="skill-card">
        <div class="skill-name">编程语言</div>
        <div class="skill-bar" data-level="85%"><div class="skill-progress"></div></div>
        <div class="skill-tags">
          <span>JavaScript</span>
          <span>Python</span>
          <span>Java</span>
        </div>
      </div>
      
      <div class="skill-card">
        <div class="skill-name">Web开发</div>
        <div class="skill-bar" data-level="80%"><div class="skill-progress"></div></div>
        <div class="skill-tags">
          <span>HTML/CSS</span>
          <span>React</span>
          <span>Node.js</span>
        </div>
      </div>
      
      <div class="skill-card">
        <div class="skill-name">数据分析</div>
        <div class="skill-bar" data-level="75%"><div class="skill-progress"></div></div>
        <div class="skill-tags">
          <span>SQL</span>
          <span>Pandas</span>
          <span>Visualization</span>
        </div>
      </div>
    </div>
  </div>

  <div class="contact-section">
    <h2>联系方式</h2>
    
    <div class="contact-methods">
      <a href="https://github.com/linkaisheng" class="contact-item">
        <span class="contact-icon">&#xf09b;</span>
        <span class="contact-label">GitHub</span>
      </a>
      
      <a href="mailto:your.email@example.com" class="contact-item">
        <span class="contact-icon">&#x2709;</span>
        <span class="contact-label">Email</span>
      </a>
    </div>
  </div>
</div>

<script>
// 初始化技能条动画
document.addEventListener('DOMContentLoaded', function() {
  setTimeout(function() {
    document.querySelectorAll('.skill-progress').forEach(function(bar) {
      const level = bar.parentElement.getAttribute('data-level');
      bar.style.width = level;
    });
  }, 300);
});
</script> 