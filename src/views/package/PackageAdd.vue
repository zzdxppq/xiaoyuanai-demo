<template>
  <div class="add-form-card">
    <h3 class="section-title">套餐基本信息</h3>
    <el-form label-width="140px" label-position="right">
      <el-form-item label="套餐名称">
        <el-input placeholder="如：校园套餐 (大)" style="width: 380px" />
      </el-form-item>
      <el-form-item label="适用对象">
        <el-radio-group :model-value="'个人'">
          <el-radio value="个人">个人</el-radio>
          <el-radio value="团体">团体</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="套餐封面">
        <el-upload action="#" list-type="picture-card" :auto-upload="false" :limit="1">
          <el-icon><Plus /></el-icon>
        </el-upload>
      </el-form-item>
      <el-form-item label="套餐简介">
        <el-input type="textarea" :rows="3" placeholder="一句话突出套餐价值" style="width: 580px" />
      </el-form-item>
    </el-form>

    <h3 class="section-title" style="margin-top: 24px;">价格与周期</h3>
    <el-form label-width="140px" label-position="right">
      <el-form-item label="价格">
        <el-input style="width: 240px"><template #append>元</template></el-input>
      </el-form-item>
      <el-form-item label="原价">
        <el-input style="width: 240px"><template #append>元</template></el-input>
      </el-form-item>
      <el-form-item label="计费周期">
        <el-select :model-value="'月'" style="width: 240px">
          <el-option v-for="a in ['月','季','半年','年','永久']" :key="a" :label="a" :value="a" />
        </el-select>
      </el-form-item>
    </el-form>

    <h3 class="section-title" style="margin-top: 24px;">配额与权限</h3>
    <el-form label-width="140px" label-position="right">
      <el-form-item label="Tokens 配额">
        <el-input style="width: 240px"><template #append>万 / 月</template></el-input>
      </el-form-item>
      <el-form-item label="可用应用">
        <el-radio-group :model-value="'all'">
          <el-radio value="all">全部应用</el-radio>
          <el-radio value="part">部分应用</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="用户上限">
        <el-input-number :model-value="1" :min="1" :max="100000" />
        <span class="form-tip">团体套餐请填实际人数</span>
      </el-form-item>
      <el-form-item label="支持模型">
        <el-checkbox-group :model-value="['京师大模型 v2.1','GPT-4 Turbo']">
          <el-checkbox v-for="a in ['京师大模型 v2.1','京师教育模型','GPT-4 Turbo','Claude 3.5 Sonnet','文心一言 4.0']" :key="a" :label="a" :value="a" />
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="状态">
        <el-radio-group :model-value="1">
          <el-radio :value="1">上架</el-radio>
          <el-radio :value="0">下架</el-radio>
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
.form-tip { color: #909399; font-size: 12px; margin-left: 12px; }
.form-actions { margin-top: 24px; padding-left: 140px; }
</style>
