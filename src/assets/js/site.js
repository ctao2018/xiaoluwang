// 生成评论的星星
$(function () {
  $("[data-star]").each(function (i, el) {
    var num = $(el).data("star");
    for (var k = 0; k < num; k++) {
      $(el).append("<i></i>")
    }
    for (var j = 0; j < 5 - num; j++) {
      $(el).append("<em></em>")
    }
  })
})

var followFunc = {
  elem: '',
  changeFollow: function (elem) {
    var that = this;
    that.elem = $(elem);
    if (that.elem.hasClass("followed")) {
      showConfirm('确定取消关注吗？', function () {
        that.unFollow();
      })
    } else {
      that.toFollow();
    }
  },
  toFollow: function () {
    var that = this;
    that.elem.addClass("followed").text("已关注");
    that.callback(true);
    showTips('关注成功');
  },
  unFollow: function () {
    var that = this;
    that.elem.removeClass("followed").text("关注");
    that.callback(false);
  },
  callback: function (status) {
    //  true为关注
    //  false为取消
    //  do something
  }
}

var collectFunc = {
  elem: '',
  changeCollect: function (elem) {
    var that = this;
    that.elem = $(elem);
    if (that.elem.hasClass("collected")) {
      showConfirm('确定取消收藏吗？', function () {
        that.unCollect();
      })
    } else {
      that.toCollect();
    }
  },
  toCollect: function () {
    var that = this;
    that.elem.addClass("collected").children("span").text("已收藏");
    that.callback(true);
    showTips('已添加至收藏');
  },
  unCollect: function () {
    var that = this;
    that.elem.removeClass("collected").children("span").text("收藏");
    that.callback(false);
  },
  callback: function (status) {
    //  true为关注
    //  false为取消
    //  do something
  }
}