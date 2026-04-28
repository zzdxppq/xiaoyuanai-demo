<template>
  <div class="add-form-card">
    <h3 class="section-title">基本信息</h3>
    <el-form label-width="140px" label-position="right">
      <el-form-item label="模型名称">
        <el-input placeholder="如：京师大模型 v2.1" style="width: 380px" />
      </el-form-item>
      <el-form-item label="模型提供方">
        <el-select placeholder="请选择" style="width: 240px">
          <el-option v-for="a in ['京师数据','OpenAI','Anthropic','百度','阿里','深度求索','其他']" :key="a" :label="a" :value="a" />
        </el-select>
      </el-form-item>
      <el-form-item label="模型类型">
        <el-radio-group :model-value="'通用大模型'">
          <el-radio v-for="a in ['通用大模型','教育垂直','图像生成','语音合成','OCR 识别']" :key="a" :value="a">{{ a }}</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="模型描述">
        <el-input type="textarea" :rows="3" placeholder="模型的能力说明、适用场景" style="width: 580px" />
      </el-form-item>
    </el-form>

    <h3 class="section-title" style="margin-top: 24px;">接入配置</h3>
    <el-form label-width="140px" label-position="right">
      <el-form-item label="API Endpoint">
        <el-input placeholder="https://api.example.com/v1/chat/completions" style="width: 580px" />
      </el-form-item>
      <el-form-item label="API Key">
        <el-input type="password" show-password placeholder="sk-xxxx" style="width: 380px" />
      </el-form-item>
      <el-form-item label="模型 Code">
        <el-input placeholder="如：gpt-4-turbo" style="width: 380px" />
      </el-form-item>
      <el-form-item label="上下文长度">
        <el-input style="width: 240px">
          <template #append>K Tokens</template>
        </el-input>
      </el-form-item>
      <el-form-item label="单价">
        <el-input style="width: 240px">
          <template #append>元/千 Tokens</template>
        </el-input>
      </el-form-item>
    </el-form>

    <h3 class="section-title" style="margin-top: 24px;">能力开关</h3>
    <el-form label-width="140px" label-position="right">
      <el-form-item label="支持流式输出">
        <el-switch :model-value="true" />
      </el-form-item>
      <el-form-item label="支持函数调用">
        <el-switch :model-value="true" />
      </el-form-item>
      <el-form-item label="支持视觉输入">
        <el-switch :model-value="false" />
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
      <el-button size="large">测试连接</el-button>
      <el-button size="large" @click="$router.back()">取消</el-button>
    </div>
  </div>
</template>

<style scoped>
.form-actions { margin-top: 24px; padding-left: 140px; }
</style>
