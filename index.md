---
layout: home
title: 首页
---

<div class="hero-section">
  <h1 class="hero-title">欢迎来到我的个人博客</h1>
  <p class="hero-subtitle">探索知识的海洋，分享技术的魅力</p>
</div>

## 技术领域

```
function explore() {
  const knowledge = ['编程', '设计', '创新'];
  return knowledge.map(item => `探索${item}的奥秘`);
}
```

## 近期文章

<div class="post-grid">
  <div class="post-card">
    <h3>暂无文章，敬请期待！</h3>
    <p class="post-excerpt">第一篇文章即将发布，敬请关注...</p>
    <div class="post-meta">预计发布时间: 即将到来</div>
  </div>
</div>

## 关于我

热爱技术，喜欢探索新事物。这个博客将是我分享知识、经验和想法的平台。

<style>
.hero-section {
  text-align: center;
  margin: 3rem 0;
  padding: 3rem 1rem;
  background: linear-gradient(120deg, rgba(52, 152, 219, 0.1) 0%, rgba(41, 128, 185, 0.2) 100%);
  border-radius: 8px;
  position: relative;
  overflow: hidden;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 10% 20%, rgba(52, 152, 219, 0.1) 0%, transparent 20%),
    radial-gradient(circle at 90% 80%, rgba(41, 128, 185, 0.1) 0%, transparent 20%);
  z-index: -1;
}

.hero-title {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  background: linear-gradient(90deg, #3498db, #2c3e50);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 1.2rem;
  color: #555;
  max-width: 600px;
  margin: 0 auto;
}

.post-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.post-card {
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 20px rgba(52, 152, 219, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-left: 4px solid #3498db;
}

.post-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(52, 152, 219, 0.2);
}

.post-excerpt {
  color: #666;
  margin: 1rem 0;
}

code {
  background: rgba(52, 152, 219, 0.1);
  border-radius: 4px;
  border-left: 3px solid #3498db;
  padding: 1rem;
  margin: 1.5rem 0;
  font-family: "Courier New", monospace;
  display: block;
}
</style>
