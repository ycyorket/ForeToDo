// components/searchBox/searchBox.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isToSearch: {
      type: Boolean,
      value: false,
    },
    buttonStr:{
      type: String,
      value: ''
    },
    searchStr: {     //input  值
      type: String,
      value: 'value'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //获得焦点
    getFocus() {
      this.setData({
        isToSearch: true,
      })
    },

    //失去焦点
    blurFocus() {
      this.setData({
        isToSearch: false,
      });
      this.triggerEvent("blurFocus");
    },

    //搜索框右侧按钮事件
    handle() {
      this.triggerEvent("handle");
    },

    //输入搜索
    input(e) {
      this.triggerEvent("input", e);
    },

    //查询
    search(e) {
      this.triggerEvent("search");
    },

    //清除搜索框的内容
    clear(e) {
      this.triggerEvent("clear");
    },

    //搜索框旁的按钮对应事件
    handle() {
      this.triggerEvent("handle");
    },
  }
})
