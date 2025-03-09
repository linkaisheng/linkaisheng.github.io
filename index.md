---
layout: home-custom
title: 首页
---

<div class="hero-section">
  <div class="hero-glitch-container">
    <h1 class="hero-title">Neural<span class="hero-highlight">Net</span>Space</h1>
  </div>
  <p class="hero-subtitle">探索LLM技术的奥秘，解构AI思维的边界</p>
  <div class="hero-code-badge">$ ./explore.sh --mode=advanced --ai-model=latest</div>
</div>

<div class="quantum-thought-container">
  <div class="tech-circle"></div>
  <h2 class="quantum-title"><span class="tech-bracket">{</span> 量子思维花园 <span class="tech-bracket">}</span></h2>
  <p class="quantum-description">在算法与灵感的交汇处，碰撞出思想的火花。这里记录我与AI共同探索的轨迹，解构语言模型背后的逻辑与哲思。</p>
</div>

## 关于我

热爱人工智能技术，专注于大语言模型(LLM)的研究与应用。这个博客将是我分享LLM相关知识、经验和前沿思考的平台。

<style>
.hero-section {
  text-align: center;
  margin: 3rem 0;
  padding: 3.5rem 1rem;
  background: linear-gradient(120deg, rgba(52, 152, 219, 0.08) 0%, rgba(44, 62, 80, 0.12) 100%);
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  border-top: 1px solid rgba(52, 152, 219, 0.2);
  border-left: 1px solid rgba(52, 152, 219, 0.2);
}

.hero-glitch-container {
  position: relative;
  display: inline-block;
  margin-bottom: 0.5rem;
}

.hero-glitch-container:before, .hero-glitch-container:after {
  content: "NeuralNetSpace";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.8;
}

.hero-glitch-container:before {
  color: #3498db;
  z-index: -1;
  animation: glitch 3s infinite alternate-reverse;
}

.hero-glitch-container:after {
  color: #e74c3c;
  z-index: -2;
  animation: glitch 2s infinite alternate-reverse;
}

.hero-title {
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #2c3e50;
  letter-spacing: -1px;
  position: relative;
}

.hero-highlight {
  color: #3498db;
  position: relative;
}

.hero-highlight:after {
  content: "";
  position: absolute;
  width: 100%;
  height: 3px;
  bottom: 5px;
  left: 0;
  background-color: rgba(52, 152, 219, 0.3);
}

.hero-subtitle {
  font-size: 1.2rem;
  color: #555;
  max-width: 600px;
  margin: 0 auto 1.5rem;
}

.hero-code-badge {
  display: inline-block;
  background-color: #2c3e50;
  color: #ecf0f1;
  font-family: 'Courier New', monospace;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-size: 0.9rem;
  box-shadow: 0 3px 6px rgba(0,0,0,0.1);
}

.quantum-thought-container {
  background: linear-gradient(135deg, rgba(52, 152, 219, 0.05) 0%, rgba(41, 128, 185, 0.1) 100%);
  border-radius: 10px;
  padding: 2rem;
  margin: 2.5rem 0;
  position: relative;
  overflow: hidden;
  border-left: 4px solid #3498db;
  box-shadow: 0 5px 20px rgba(52, 152, 219, 0.1);
}

.tech-circle {
  position: absolute;
  top: -50px;
  right: -50px;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 2px solid rgba(52, 152, 219, 0.3);
  opacity: 0.5;
}

.tech-circle::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 70%;
  height: 70%;
  border-radius: 50%;
  border: 1px dashed rgba(52, 152, 219, 0.5);
  transform: translate(-50%, -50%);
}

.tech-circle::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 20px;
  height: 20px;
  background-color: rgba(52, 152, 219, 0.2);
  border-radius: 50%;
  transform: translate(-50%, -50%);
}

.quantum-title {
  font-size: 1.8rem;
  color: #2980b9;
  margin-bottom: 1rem;
  border-left: none;
  padding-left: 0;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
}

.tech-bracket {
  color: #3498db;
  opacity: 0.8;
  font-weight: 300;
}

.quantum-description {
  color: #555;
  line-height: 1.7;
  position: relative;
  z-index: 1;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.3rem;
  }
  
  .hero-code-badge {
    font-size: 0.8rem;
    padding: 0.4rem 0.8rem;
  }
}
</style>
