import Vue from "vue";
export class Http {
  //城市列表
  static citys(callback) {
    Vue.axios
      .get(`https://${this.host}/movie/citys.php`)
      .then(res => {
        // console.log(res);
        callback(res);
      })
      .catch(err => {
        console.error(err);
      });
  }
  //电影列表
  //加载更多利用page展示的页数
  static cinema(cityid, page, callback) {
    Vue.axios
      .get(`https://${this.host}/movie/cinemas.php`, {
        params: {
          id: cityid,
          page: page,
          pagesize: 10
        }
      })
      .then(res => {
        console.log(res);
        callback(res);
      })
      .catch(err => {
        console.error(err);
      });
  }
}
Http.host = "www.bestqingshan.top";
