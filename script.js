// ========== 预设模板数据 ==========
const presets = {
  xiaohongshu: {
    styleName: '小红书种草风',
    tone: '轻松活泼',
    audience: '年轻女性、购物爱好者',
    contentType: '社交媒体帖子',
    characteristics: '大量使用emoji表情、口语化表达、第一人称视角、感叹号收尾、突出个人体验感',
    avoid: '避免正式书面语、避免长段落、避免说教感'
  },
  academic: {
    styleName: '学术论文风',
    tone: '正式严谨',
    audience: '学者、研究人员',
    contentType: '学术论文',
    characteristics: '客观陈述、逻辑严密、引用规范、避免主观判断、使用专业术语',
    avoid: '避免口语化表达、避免夸张修辞、避免第一人称（视学科而定）'
  },
  storytelling: {
    styleName: '故事叙述风',
    tone: '温暖治愈',
    audience: '大众读者',
    contentType: '小说创作',
    characteristics: '画面感强、细节描写丰富、情感真挚、节奏张弛有度、善用比喻和通感',
    avoid: '避免平铺直叙、避免说教、避免过度抽象'
  },
  marketing: {
    styleName: '营销文案风',
    tone: '犀利幽默',
    audience: '潜在消费者',
    contentType: '产品文案',
    characteristics: '抓住用户痛点、突出产品卖点、制造紧迫感、强有力的行动号召（CTA）、短句为主',
    avoid: '避免冗长介绍、避免技术术语堆砌、避免模糊表达'
  }
};

// ========== DOM 元素 ==========
const elements = {
  styleName: document.getElementById('styleName'),
  tone: document.getElementById('tone'),
  audience: document.getElementById('audience'),
  contentType: document.getElementById('contentType'),
  characteristics: document.getElementById('characteristics'),
  reference: document.getElementById('reference'),
  avoid: document.getElementById('avoid'),
  generateBtn: document.getElementById('generateBtn'),
  outputContent: document.getElementById('outputContent'),
  copyBtn: document.getElementById('copyBtn'),
  downloadBtn: document.getElementById('downloadBtn'),
  toast: document.getElementById('toast'),
  presetsGrid: document.getElementById('presetsGrid')
};

// ========== 工具函数 ==========
function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.classList.add('show');
  clearTimeout(elements.toast._timeout);
  elements.toast._timeout = setTimeout(() => {
    elements.toast.classList.remove('show');
  }, 2000);
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// ========== 生成指令 ==========
function generateInstruction() {
  const styleName = elements.styleName.value.trim();
  if (!styleName) {
    showToast('请至少填写风格名称');
    elements.styleName.focus();
    return;
  }

  const data = {
    styleName,
    tone: elements.tone.value,
    audience: elements.audience.value.trim(),
    contentType: elements.contentType.value,
    characteristics: elements.characteristics.value.trim(),
    reference: elements.reference.value.trim(),
    avoid: elements.avoid.value.trim()
  };

  const html = buildInstructionHTML(data);
  elements.outputContent.innerHTML = html;
  elements.outputContent.scrollTop = 0;
}

function buildInstructionHTML(data) {
  let html = '';

  // 标题
  html += `<div class="instruction-block">`;
  html += `<h3>文风指令：${escapeHtml(data.styleName)}</h3>`;
  html += `<p>请按照以下写作风格指令进行内容创作：</p>`;
  html += `</div>`;

  // 核心定义
  html += `<div class="instruction-block">`;
  html += `<h3>一、风格定义</h3>`;
  html += `<p>你是一位擅长「${escapeHtml(data.styleName)}」风格的写作者。</p>`;
  if (data.tone) {
    html += `<p>整体语气基调为<strong>${escapeHtml(data.tone)}</strong>。</p>`;
  }
  if (data.contentType) {
    html += `<p>内容类型为<strong>${escapeHtml(data.contentType)}</strong>。</p>`;
  }
  html += `</div>`;

  // 受众
  if (data.audience) {
    html += `<div class="instruction-block">`;
    html += `<h3>二、目标受众</h3>`;
    html += `<p>面向<strong>${escapeHtml(data.audience)}</strong>进行写作，使用他们熟悉的语言风格和表达方式。</p>`;
    html += `</div>`;
  }

  // 关键特征
  if (data.characteristics) {
    const items = data.characteristics.split(/[,，、；;]/).filter(s => s.trim());
    html += `<div class="instruction-block">`;
    html += `<h3>${data.audience ? '三' : '二'}、写作特征</h3>`;
    html += `<ul>`;
    items.forEach(item => {
      html += `<li>${escapeHtml(item.trim())}</li>`;
    });
    html += `</ul>`;
    html += `</div>`;
  }

  let sectionNum = 1;
  if (data.audience) sectionNum++;
  if (data.characteristics) sectionNum++;

  // 参考范例
  if (data.reference) {
    html += `<div class="instruction-block">`;
    html += `<h3>${toChineseNum(sectionNum)}、参考范例</h3>`;
    html += `<p>请模仿以下文本的风格和语调：</p>`;
    html += `<blockquote style="background:#f3f4f6;padding:12px 16px;border-left:3px solid #6366f1;border-radius:0 8px 8px 0;margin:8px 0;color:#4b5563;font-style:italic;">${escapeHtml(data.reference)}</blockquote>`;
    html += `</div>`;
    sectionNum++;
  }

  // 避免事项
  if (data.avoid) {
    const items = data.avoid.split(/[,，、；;]/).filter(s => s.trim());
    html += `<div class="instruction-block">`;
    html += `<h3>${toChineseNum(sectionNum)}、避免事项</h3>`;
    html += `<ul>`;
    items.forEach(item => {
      html += `<li>${escapeHtml(item.trim())}</li>`;
    });
    html += `</ul>`;
    html += `</div>`;
  }

  return html;
}

function toChineseNum(n) {
  const map = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
  if (n <= 9) return map[n];
  return String(n);
}

// ========== 复制功能 ==========
function copyOutput() {
  const content = elements.outputContent;
  if (content.querySelector('.placeholder')) {
    showToast('没有可复制的内容');
    return;
  }

  const text = content.innerText;
  navigator.clipboard.writeText(text).then(() => {
    showToast('已复制到剪贴板');
  }).catch(() => {
    showToast('复制失败，请手动选择');
  });
}

// ========== 下载功能 ==========
function downloadOutput() {
  const content = elements.outputContent;
  if (content.querySelector('.placeholder')) {
    showToast('没有可下载的内容');
    return;
  }

  const text = content.innerText;
  const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `文风指令_${elements.styleName.value.trim() || '未命名'}.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast('下载成功');
}

// ========== 预设模板 ==========
function applyPreset(presetKey) {
  const preset = presets[presetKey];
  if (!preset) return;

  elements.styleName.value = preset.styleName;
  elements.tone.value = preset.tone;
  elements.audience.value = preset.audience || '';
  elements.contentType.value = preset.contentType || '';
  elements.characteristics.value = preset.characteristics || '';
  elements.avoid.value = preset.avoid || '';
  elements.reference.value = '';

  showToast(`已加载「${preset.styleName}」模板`);
  generateInstruction();
}

// ========== 事件绑定 ==========
elements.generateBtn.addEventListener('click', generateInstruction);

// 支持 Enter 键提交（在非 textarea 的输入框中）
document.querySelectorAll('.input-panel input[type="text"]').forEach(input => {
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      generateInstruction();
    }
  });
});

elements.copyBtn.addEventListener('click', copyOutput);
elements.downloadBtn.addEventListener('click', downloadOutput);

// 预设模板点击
elements.presetsGrid.addEventListener('click', (e) => {
  const card = e.target.closest('.preset-card');
  if (card) {
    applyPreset(card.dataset.preset);
  }
});

// ========== 键盘快捷键 ==========
document.addEventListener('keydown', (e) => {
  // Ctrl/Cmd + Enter 生成
  if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
    e.preventDefault();
    generateInstruction();
  }
  // Ctrl/Cmd + Shift + C 复制
  if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'C') {
    e.preventDefault();
    copyOutput();
  }
});