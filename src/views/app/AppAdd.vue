<template>
  <div class="add-form-card">
    <h3 class="section-title">基本信息</h3>
    <el-form label-width="120px" label-position="right">
      <el-form-item label="应用名称">
        <el-input placeholder="请输入应用名称" style="width: 380px" />
      </el-form-item>
      <el-form-item label="应用图标">
        <el-upload action="#" list-type="picture-card" :auto-upload="false" :limit="1">
          <el-icon><Plus /></el-icon>
        </el-upload>
        <span class="form-tip">建议尺寸 200×200px，jpg/png 格式</span>
      </el-form-item>
      <el-form-item label="应用分类">
        <el-select placeholder="请选择分类" style="width: 240px">
          <el-option v-for="a in ['学科教学','学习辅导','素质拓展','管理工具']" :key="a" :label="a" :value="a" />
        </el-select>
      </el-form-item>
      <el-form-item label="应用简介">
        <el-input type="textarea" :rows="3" placeholder="一句话介绍应用功能" style="width: 580px" />
      </el-form-item>
      <el-form-item label="详细描述">
        <el-input type="textarea" :rows="5" placeholder="详细描述应用的使用场景、功能特点" style="width: 580px" />
      </el-form-item>
    </el-form>

    <h3 class="section-title" style="margin-top: 24px;">模型配置</h3>
    <el-form label-width="120px" label-position="right">
      <el-form-item label="使用模型">
        <el-select placeholder="请选择大模型" style="width: 380px">
          <el-option v-for="a in ['京师大模型 v2.1','京师教育模型','GPT-4 Turbo','Claude 3.5 Sonnet','文心一言 4.0']" :key="a" :label="a" :value="a" />
        </el-select>
      </el-form-item>
      <el-form-item label="温度参数">
        <el-slider style="width: 380px" :model-value="0.7" :min="0" :max="2" :step="0.1" show-input />
      </el-form-item>
      <el-form-item label="最大 Tokens">
        <el-input-number :model-value="4096" :min="100" :max="32000" :step="100" />
      </el-form-item>
      <el-form-item label="System Prompt">
        <el-input type="textarea" :rows="6" placeholder="设置应用的角色 / 任务 / 风格" style="width: 580px" />
      </el-form-item>
    </el-form>

    <h3 class="section-title" style="margin-top: 24px;">关联场景</h3>
    <el-form label-width="120px" label-position="right">
      <el-form-item label="关联场景">
        <el-select multiple placeholder="选择应用所属的场景" style="width: 580px">
          <el-option v-for="a in ['课堂实时问答','课后作业辅导','错题再练','单元测验','小组讨论']" :key="a" :label="a" :value="a" />
        </el-select>
      </el-form-item>
      <el-form-item label="状态">
        <el-radio-group :model-value="1">
          <el-radio :value="1">上架</el-radio>
          <el-radio :value="0">下架</el-radio>
        </el-radio-group>
      </el-form-item>
    </el-form>

    <div class="form-actions">
      <el-button type="primary" size="large">保存并发布</el-button>
      <el-button size="large">存为草稿</el-button>
      <el-button size="large" @click="$router.back()">取消</el-button>
    </div>
  </div>
</template>

<script setup>
import { Plus } from '@element-plus/icons-vue'
</script>

<style scoped>
.form-tip { color: #909399; font-size: 12px; margin-left: 12px; }
.form-actions { margin-top: 24px; padding-left: 120px; }
</style>
