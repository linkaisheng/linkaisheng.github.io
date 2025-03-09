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

<style>
.about-container {
  max-width: 800px;
  margin: 0 auto;
}

.profile-section {
  margin-bottom: 3rem;
}

.profile-header {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
}

.tech-badge {
  background: #3498db;
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 4px;
  margin-left: 1rem;
  font-family: monospace;
  font-size: 0.9rem;
  position: relative;
  top: 5px;
}

.intro {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #555;
}

.code-tag {
  color: #3498db;
  font-family: monospace;
  font-weight: normal;
  font-size: 0.9rem;
}

.skills-section {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  margin-bottom: 3rem;
}

.skill-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.skill-card {
  background: #f8fdff;
  padding: 1.2rem;
  border-radius: 6px;
  border-left: 3px solid #3498db;
}

.skill-name {
  font-weight: 600;
  margin-bottom: 0.8rem;
  color: #333;
}

.skill-bar {
  height: 6px;
  background: #e0e0e0;
  border-radius: 3px;
  margin-bottom: 0.8rem;
  position: relative;
}

.skill-progress {
  position: absolute;
  height: 100%;
  background: linear-gradient(to right, #3498db, #2980b9);
  border-radius: 3px;
  width: 0;
  transition: width 1.5s ease;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-tags span {
  background: rgba(52, 152, 219, 0.1);
  padding: 0.2rem 0.5rem;
  border-radius: 3px;
  font-size: 0.8rem;
  color: #2980b9;
}

.contact-section {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
}

.contact-methods {
  display: flex;
  gap: 1.5rem;
  margin-top: 1rem;
}

.contact-item {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #333;
  padding: 0.8rem 1.2rem;
  background: #f8fdff;
  border-radius: 6px;
  transition: all 0.3s ease;
}

.contact-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(52, 152, 219, 0.2);
}

.contact-icon {
  margin-right: 0.5rem;
  font-size: 1.2rem;
}

/* 初始化技能条动画 */
document.addEventListener('DOMContentLoaded', function() {
  setTimeout(function() {
    document.querySelectorAll('.skill-progress').forEach(function(bar) {
      const level = bar.parentElement.getAttribute('data-level');
      bar.style.width = level;
    });
  }, 300);
});
</style>

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