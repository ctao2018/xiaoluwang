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
  elem: '', //当前点击的元素的对象，可通过此对象获取ID，类型，等信息
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
    //  this.elem 为 当前点击的对象
    //  do something
  }
}

var collectFunc = {
  elem: '', //当前点击的元素的对象，可通过此对象获取ID，类型，等信息
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
    //  this.elem 为 当前点击的对象
    //  do something
  }
}

var likedFunc = {
  elem: '', //当前点击的元素的对象，可通过此对象获取ID，类型，等信息
  changeLiked: function (elem) {
    var that = this;
    that.elem = $(elem);
    if (that.elem.hasClass("liked")) {
      that.unLiked();
    } else {
      that.toLiked();
    }
  },
  toLiked: function () {
    var that = this;
    that.elem.addClass("liked")
    that.callback(true);
    showTips('+1');
  },
  unLiked: function () {
    var that = this;
    that.elem.removeClass("liked")
    that.callback(false);
  },
  callback: function (status) {
    //  true为关注
    //  false为取消
    //  this.elem 为 当前点击的对象
    //  do something
  }

}


var linkzan = {
  elem: '',//当前点击的元素的对象，可通过此对象获取ID，类型，等信息
  changeLiked: function (elem) {
    var that = this;
    that.elem = $(elem);
    if (that.elem.hasClass("collected")) {
      that.unLiked();
    } else {
      that.toLiked();
    }
  },
  toLiked: function () {
    var that = this;
    that.elem.addClass("collected")
    that.callback(true);
    showTips('+1');
  },
  unLiked: function () {
    var that = this;
    that.elem.removeClass("collected")
    that.callback(false);
  },
  callback: function (status) {
    //  true为关注
    //  false为取消
    //  this.elem 为 当前点击的对象
    //  do something
  }
}


var shoucFun = {
  elem: '',//当前点击的元素的对象，可通过此对象获取ID，类型，等信息
  changeCollect: function (elem) {
    var that = this;
    that.elem = $(elem);
    if (that.elem.hasClass("collected")) {
      showConfirm('确定取消点赞吗？', function () {
        that.unCollect();
      })
    } else {
      that.toCollect();
    }
  },
  toCollect: function () {
    var that = this;
    that.elem.addClass("collected")
    that.callback(true);
    showTips('点赞成功');
  },
  unCollect: function () {
    var that = this;
    that.elem.removeClass("collected");
    that.callback(false);
  },
  callback: function (status) {
    //  true为关注
    //  false为取消
    //  this.elem 为 当前点击的对象
    //  do something
  }
}


$(function () {
  if ($(".bg-opacity").length > 0) {
    $(window).scroll(function (e) {
      var _top = $(this).scrollTop()
      if (_top > 100) {
        $(".bg-opacity").addClass("in-scroll")
      }else{
        $(".bg-opacity").removeClass("in-scroll")
      }
    })
  }
})
