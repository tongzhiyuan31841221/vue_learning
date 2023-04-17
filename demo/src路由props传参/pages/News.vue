<template>
  <div>
    <ul>
      <li  v-for="(item, index) in info.news" :key="index">
        <!-- 这个异步请求搞得这边很怪异, -->
        <router-link
          active-class="active"
          :to="{
            name: 'xijie',
            params: {
              joke: info.jokes[index],
              id:123
            },
          }"
          >{{ item }}</router-link
        >
      </li>
    </ul>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "News",
  data() {
    return {
      info: {
        news: ["messages001", "messages002", "messages003"],
      },
    };
  },
  //   methods: {
  //     getNews() {
  //       console.log("应该没错就是服务器不给了");
  //       axios
  //         .get("http://api.btstu.cn/yan/api.php")
  //         .then((result) => {
  //           console.log(22222222222,result)
  //           this.$set(this.info, "joke", result.data);
  //         })
  //         .catch((reason) => {
  //           console.log(reason);
  //         });
  //       return this.info.joke
  //     },
  //   },、
  mounted() {
    this.$set(this.info, "jokes", []);
    const p = new Promise(function (resolve, reject) {
      let xhr = new XMLHttpRequest();
      xhr.open("get", "http://api.btstu.cn/yan/api.php");
      xhr.send();
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
          resolve(xhr.responseText);
        }
      };
    })
      .then(
        (value) => {
          console.log(value);
          this.info.jokes.push(value);
          return new Promise(function (resolve, reject) {
            let xhr = new XMLHttpRequest();
            xhr.open("get", "http://api.btstu.cn/yan/api.php");
            xhr.send();
            xhr.onreadystatechange = function () {
              if (xhr.readyState === 4 && xhr.status === 200) {
                resolve(xhr.responseText);
              }
            };
          });
        },
        (reason) => {
          console.log(reason);
        }
      )
      .then(
        (value) => {
          console.log(value);
          this.info.jokes.push(value);
          return new Promise(function (resolve, reject) {
            let xhr = new XMLHttpRequest();
            xhr.open("get", "http://api.btstu.cn/yan/api.php");
            xhr.send();
            xhr.onreadystatechange = function () {
              if (xhr.readyState === 4 && xhr.status === 200) {
                resolve(xhr.responseText);
              }
            };
          });
        },
        (reason) => {
          console.log(reason);
        }
      )
      .then((value) => {
        this.info.jokes.push(value);
      });
  },
};
</script>

<style>
</style>