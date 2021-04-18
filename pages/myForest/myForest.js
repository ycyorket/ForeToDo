/*
* item对象，其属性有
* time: 表示时间，Object
* title: 规定标题，String
* isComplete: 是否完成，Boolean
*/

Page({
  data: {
    toDoList: [],
    searchStr: '',
    buttonStr: '编辑',
    isEditing: false,
    addItemStr: "我要种树!!",
    timeStr: "DDL"
  },

  onShow: function () {
    this.setData({
      toDoList: 
        wx.getStorageSync('toDoList') || 
        [{ deadline: "now", remind: "now", title: "nothing", place: "nowhere", isComplete: true, index: 0 }, 
          { deadline: "just now", remind: "now", title: "nothing", place: "nowhere", isComplete: false, index: 1 }]
    });

    wx.setNavigationBarTitle({
      title: "我的森林"
    });
  },

  /*
  * 组件事件
  */
  //搜索框输入
  input(event) {
    console.log("hh");
    let e = event.detail;
    this.setData({
      searchStr: e.detail.value
    });
  },

  // 搜索
  search(e) {
    //
  },

  // 失去焦点，取消搜索
  blurFocus() {
    this.setData({
      searchStr: ''
    })
  },

  //清空搜索框
  clear(e) {
    this.setData({
      searchStr: ''
    })
  },

  //搜索框右边的按钮事件
  handle() {
    if (this.data.isEditing) {
      this.setData({
        buttonStr: '编辑',
        isEditing: false
      })
    } else {
      this.setData({
        buttonStr: '取消',
        isEditing: true
      })
    }
  },

  //删除事项
  deleteItem(e) {
    if (this.data.isEditing) {
      console.log("delete");
      let ev = e.currentTarget.dataset;
      console.log(ev.value);
    }
  },

  //编辑事项的内容
  editContent(e) {
    if (this.data.isEditing) {
      console.log("edit");
    }
  },

  //新建事项
  addItem() {
    if (this.data.isEditing) {
      console.log("add");
      wx.navigateTo({
        url: '../newItem/newItem',
      })
    }
  }
})
