<template>
  <div class="add-form-card">
    <h3 class="section-title">场景信息</h3>
    <el-form label-width="120px" label-position="right">
      <el-form-item label="场景名称">
        <el-input placeholder="如：课堂实时问答" style="width: 380px" />
      </el-form-item>
      <el-form-item label="场景分类">
        <el-select placeholder="请选择分类" style="width: 240px">
          <el-option v-for="a in ['教学场景','学习场景','管理场景','德育场景']" :key="a" :label="a" :value="a" />
        </el-select>
      </el-form-item>
      <el-form-item label="场景图标">
        <el-upload action="#" list-type="picture-card" :auto-upload="false" :limit="1">
          <el-icon><Plus /></el-icon>
        </el-upload>
      </el-form-item>
      <el-form-item label="场景描述">
        <el-input type="textarea" :rows="4" placeholder="描述该场景的使用情况和目标用户" style="width: 580px" />
      </el-form-item>
    </el-form>

    <h3 class="section-title" style="margin-top: 24px;">Prompt 模板</h3>
    <el-form label-width="120px" label-position="right">
      <el-form-item label="模板版本">
        <el-input placeholder="如：v1.0.0" style="width: 240px" />
      </el-form-item>
      <el-form-item label="System Prompt">
        <el-input type="textarea" :rows="6" placeholder="定义 AI 在该场景下的角色、任务、回答风格" style="width: 580px" />
      </el-form-item>
      <el-form-item label="变量定义">
        <el-input type="textarea" :rows="3" placeholder="如：{科目} {年级} {学生姓名}" style="width: 580px" />
      </el-form-item>
    </el-form>

    <h3 class="section-title" style="margin-top: 24px;">应用与权限</h3>
    <el-form label-width="120px" label-position="right">
      <el-form-item label="关联应用">
        <el-select multiple placeholder="选择该场景下的应用" style="width: 580px">
          <el-option v-for="a in ['智能作文批改','AI 数学解题','英语口语陪练','物理实验模拟']" :key="a" :label="a" :value="a" />
        </el-select>
      </el-form-item>
      <el-form-item label="可见角色">
        <el-checkbox-group :model-value="['教师','学生']">
          <el-checkbox v-for="a in ['教师','学生','家长','校长','管理员']" :key="a" :label="a" :value="a" />
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="状态">
        <el-radio-group :model-value="1">
          <el-radio :value="1">启用</el-radio>
          <el-radio :value="0">停用</el-radio>
        </el-radio-group>
      </el-form-item>
    </el-form>

    <div class="form-actions">
      <el-button type="primary" size="large">保存</el-button>
      <el-button size="large" @click="$router.back()">取消</el-button>
    </div>
  </div>
</template>

<script setup>
import { Plus } from '@element-plus/icons-vue'
</script>

<style scoped>
.form-actions { margin-top: 24px; padding-left: 120px; }
</style>
