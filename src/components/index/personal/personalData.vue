<script setup lang="ts">
// 个人信息数据
import { ref } from 'vue';
const personalInfo = {
  name: '张三',
  gender: '男',
  birthday: '1990-01-01',
  qq: '123456789',
  email: 'zhangsan@example.com',
  account: 'zhangsan123',
};
const activeTab = ref('sent');
// 树洞数据
const sentTreeHoles = [
  { id: 1, recipient: '李四', theme: '默认主题', content: '你好，最近怎么样？', date: '2024-01-20', isRead: true },
  { id: 2, recipient: '王五', theme: '默认主题', content: '今天天气不错！', date: '2024-01-19', isRead: false }
];

const receivedTreeHoles = [
  { id: 1, sender: '李四', theme: '默认主题', content: '我很好，谢谢！', date: '2024-01-20', isRead: true },
  { id: 2, sender: '王五', theme: '默认主题', content: '是啊，适合出去走走！', date: '2024-01-19', isRead: false }
];
</script>
<template>
  <div class="personal-data-container">
    <!-- 个人信息板块 -->
    <div class="section" style="margin-bottom: 60px;">
      <h2 class="section-title" style="margin-bottom: 30px;">个人信息</h2>
      <div class="info-grid">
        <div class="info-item">
          <span class="label">账号名：</span>
          <span class="value">{{ personalInfo.account }}</span>
        </div>
        <div class="info-item">
          <span class="label">姓 名：</span>
          <span class="value">{{ personalInfo.name }}</span>
        </div>
        <div class="info-item">
          <span class="label">性 别：</span>
          <span class="value">{{ personalInfo.gender }}</span>
        </div>
        <div class="info-item">
          <span class="label">生 日：</span>
          <span class="value">{{ personalInfo.birthday }}</span>
        </div>
        <div class="info-item">
          <span class="label">QQ：</span>
          <span class="value">{{ personalInfo.qq }}</span>
        </div>
        <div class="info-item">
          <span class="label">邮 箱：</span>
          <span class="value">{{ personalInfo.email }}</span>
        </div>
      </div>
      <button class="edit-btn">修改信息</button>
    </div>

    <!-- 树洞板块 -->
    <div class="section" style="margin-bottom: 60px;">
      <h2 class="section-title">树 洞</h2>
      <div class="tree-hole-tabs">
        <button
          class="tab-btn"
          :class="{ active: activeTab === 'sent' }"
          @click="activeTab = 'sent'"
        >已发出的树洞</button>
        <button
          class="tab-btn"
          :class="{ active: activeTab === 'received' }"
          @click="activeTab = 'received'"
        >收到的树洞</button>
      </div>
      <div class="tree-hole-content">
        <div class="tree-hole-list">
          <!-- 已发出的树洞 -->
          <div
            v-if="activeTab === 'sent'"
            v-for="hole in sentTreeHoles"
            :key="hole.id"
            class="tree-hole-item"
          >
            <div class="hole-header">
              <span class="hole-theme">主题：{{ hole.theme }}</span>
              <span class="hole-recipient">收件人：{{ hole.recipient }}</span>
              <span class="hole-date">{{ hole.date }}</span>
              <span class="hole-status">{{ hole.isRead ? '已读' : '未读' }}</span>
            </div>
            <div class="hole-content">{{ hole.content }}</div>
          </div>

          <!-- 收到的树洞 -->
          <div
            v-else
            v-for="hole in receivedTreeHoles"
            :key="hole.id"
            class="tree-hole-item"
          >
            <div class="hole-header">
              <span class="hole-theme">主题：{{ hole.theme }}</span>
              <span class="hole-sender">发件人：{{ hole.sender }}</span>
              <span class="hole-date">{{ hole.date }}</span>
              <span class="hole-status">{{ hole.isRead ? '已读' : '未读' }}</span>
            </div>
            <div class="hole-content">{{ hole.content }}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- 树洞编辑板块 -->
    <div class="section">
      <h2 class="section-title">写树洞</h2>
      <div class="editor-form">
        <div class="form-item">
          <label for="theme">树洞主题：</label>
          <input type="text" style="width: 400px;" id="theme" placeholder="请输入树洞主题">
        </div>
        <div class="form-item">
          <label for="recipient">指定收件人：</label>
          <input type="text" style="width: 400px;" id="recipient" placeholder="请输入收件人账号">
        </div>
        <div class="form-item">
          <label for="content">树洞内容：</label>
          <div class="rich-text-editor">
            <div class="editor-toolbar">
              <button class="toolbar-btn">B</button>
              <button class="toolbar-btn">I</button>
              <button class="toolbar-btn">U</button>
              <button class="toolbar-btn">✎</button>
            </div>
            <textarea id="content" class="editor-textarea" placeholder="请输入树洞内容..."></textarea>
          </div>
        </div>
        <div class="form-actions">
          <button class="clear-btn">清空内容</button>
          <button class="confirm-btn">确认发送</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 基础样式重置 */
* {
  background-color: white;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* 容器样式 */
.personal-data-container {
  width: 80vw;
  margin: 0;
  padding: 60px 200px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  min-height: 100vh;
  line-height: 1.6;
}

/* 板块通用样式 */
.section {
  background-color: white;
  border-radius: 12px;
  padding: 0px;
  margin-bottom: 24px;
  transition: all 0.3s ease;
  max-width:900px;
}

.section-title {
  font-size: 22px;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 24px;
  text-align: left;
  letter-spacing: 1px;
  padding-bottom: 12px;
  border-bottom: 2px solid #f0f2f5;
}

/* 个人信息板块样式 */
.info-grid {
  display: grid;
  grid-template-columns: repeat(2, 460px);
  gap: 30px;
  column-gap: 60px;
  margin-bottom: 28px;
}

.info-item {
  display: flex;
  align-items: center;
  padding: 16px;
  background-color: white;
  font-size: 20px;
}

.label {
  font-weight: 500;
  color: #64748b;
  margin-right: 16px;
  min-width: 90px;
  font-size: 19px;
}

.value {
  color: #1e293b;
  flex: 1;
  font-weight: 400;
}

.edit-btn {
  display: block;
  margin: 0px auto;
  margin-top:60px;
  padding: 14px 32px;
  background: linear-gradient(135deg, #ff7e5f 0%, #feb47b 100%);
  color: white;
  border: none;
  border-radius: 30px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  letter-spacing: 0.5px;
}
/* 树洞板块样式 */
.tree-hole-tabs {
  display: flex;
  margin-bottom: 24px;
  border-bottom: 2px solid #f0f2f5;
  padding: 0;
  border-radius: 8px;
}

.tab-btn {
  max-width: 900px;
  flex: 1;
  padding: 14px 24px;
  background: transparent;
  border: none;
  font-size: 20px;
  font-weight: 500;
  color: #64748b;
  cursor: pointer;
  transition: all 0.3s ease;
  margin: 0 2px;
  letter-spacing: 0.5px;
}

.tab-btn:hover {
  color: #ff7e5f;
  background-color: #f1f5f9;
}

.tab-btn.active {
  color: white;
  background: linear-gradient(135deg, #ff7e5f 0%, #feb47b 100%);
}

.tree-hole-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.tree-hole-item {
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  border: 1px solid #e2e8f0;
}
.hole-header {
  display: flex;
  justify-content: flex-start;
  gap:80px;
  margin-bottom: 10px;
  font-size: 16px;
  color: #64748b;
  padding-bottom: 8px;
  border-bottom: 1px solid #e2e8f0;
}d

.hole-recipient, .hole-sender .hole-theme {
  font-weight: 500;
  font-size: 16px;
  color: #475569;
}

.hole-date {
  font-size: 16px;
  opacity: 0.8;
}

.hole-content {
  font-size: 15px;
  color: #1e293b;
  line-height: 1.7;
  padding-top: 8px;
}

/* 树洞编辑板块样式 */
.editor-form {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.form-item {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.form-item label {
  font-size: 15px;
  font-weight: 500;
  color: #334155;
}

.form-item input {
  padding: 14px 16px;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  font-size: 16px;
  transition: all 0.2s ease;
  background-color: white;
}

.form-item input:focus {
  outline: none;
  border-color: #ff7e5f;
  box-shadow: 0 0 0 3px rgba(255, 126, 95, 0.1);
  background-color: white;
}

.rich-text-editor {
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  overflow: hidden;
  background-color: white;
  transition: all 0.2s ease;
}

.rich-text-editor:focus-within {
  border-color: #ff7e5f;
  box-shadow: 0 0 0 3px rgba(255, 126, 95, 0.1);
}

.editor-toolbar {
  display: flex;
  gap: 8px;
  padding: 10px;
  background-color: white;
  border-bottom: 1px solid #e2e8f0;
}

.toolbar-btn {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: 600;
}

.toolbar-btn:hover {
  background-color: white;
  border-color: #ff7e5f;
  color: #ff7e5f;
}

.editor-textarea {
  width: 100%;
  min-height: 200px;
  padding: 16px;
  border: none;
  resize: vertical;
  font-size: 16px;
  line-height: 1.7;
  font-family: inherit;
  background-color: white;
  color: #1e293b;
}

.editor-textarea:focus {
  outline: none;
}

.form-actions {
  display: flex;
  gap: 30px;
  justify-content: flex-end;
  padding-top: 8px;
  padding-right: 20px;
}

.confirm-btn, .clear-btn {
  padding: 14px 32px;
  border: none;
  border-radius: 30px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  letter-spacing: 0.5px;
}

.confirm-btn {
  background: linear-gradient(135deg, #ff7e5f 0%, #feb47b 100%);
  color: white;
}


.clear-btn {
  background-color: white;
  color: #64748b;
  border: 1px solid #cbd5e1;
}

.clear-btn:hover {
  background-color: white;
  border-color: #94a3b8;
}

/* 响应式设计优化 */
@media (max-width: 768px) {
  .personal-data-container {
    padding: 12px;
  }

  .section {
    padding: 20px;
  }

  .info-grid {
    grid-template-columns: 1fr;
    row-gap: 16px;
  }

  .section-title {
    font-size: 20px;
    text-align: center;
  }

  .tree-hole-tabs {
    flex-direction: column;
  }

  .tab-btn {
    margin: 2px 0;
  }

  .form-actions {
    flex-direction: column;
  }

  .confirm-btn, .clear-btn {
    width: 100%;
  }
}
</style>
