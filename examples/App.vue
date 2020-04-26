<template>
  <div>
    <a-button type="primary" :loading="loading">
      Primary
    </a-button>
    <a-button :loading="loading">
      Default
    </a-button>
    <a-button type="dashed" :loading="loading">
      Dashed
    </a-button>
    <a-button type="danger" :loading="loading">
      Danger
    </a-button>
    <a-button type="primary" @click="fun">
      按钮
    </a-button>
    <a-button type="link" :loading="loading">
      Link
    </a-button>
    <a-modal v-model="st" :loading="loading" />
  </div>
</template>

<script>
export default {
  name: 'Demo',
  data() {
    return {
      st: true,
    };
  },
  methods: {
    loading() {
      return new Promise((res, rej) => {
        const timeout = 5000;
        setTimeout(() => {
          if (timeout > 4000) {
            res();
          } else {
            rej();
          }
        }, timeout);
      });
    },
    fun() {
      // this.$message.config({
      //   // top: `100px`,
      //   duration: 0,
      //   maxCount: 3,
      //   onClose: true,
      // });
      this.$message.success({
        content: '这是一条消息提示',
        close: true,
      });
    },
  },
};
</script>
