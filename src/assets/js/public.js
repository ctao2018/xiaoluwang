$(function () {
  FastClick.attach(document.body);
});

//获取离顶部高度
function getTop(e) {
  var offset = e.offsetTop;
  if (e.offsetParent != null) offset += getTop(e.offsetParent);
  return offset;
}

/* 短信验证码 */
var getMsgCode = function (elem) {
  var el = $(elem);
  var count = 60;
  var msgTimed = setInterval(function () {
    el.prop("disabled", true);
    el.text(count + 's');
    count--;
    if (count <= 0) {
      el.prop("disabled", false);
      el.text("获取验证码");
      clearTimeout(msgTimed)
    }
  }, 1000)
}

/* tips消息 */
var showTips = function (msg, sec, callback) {
  var speed = sec != undefined ? sec : 2;
  var _html = "<div class='show-tips'></div>";
  var _el = $(_html);
  $("body").append(_el);
  _el.html("<p>" + msg + "</p >");
  var tipsTimed = setTimeout(function () {
    _el.fadeOut(function () {
      _el.remove();
      if (callback != undefined) {
        callback();
      }
    })
    clearTimeout(tipsTimed)
  }, speed * 1000)
}

// 弹窗滚动优化
var alphaScroll = {
  flagTop: 0,
  addTo: function () {
    this.flagTop = $(window).scrollTop();
    $("html").addClass("alpha");
  },
  removeTo: function () {
    var that = this;
    $("html").removeClass("alpha");
    $(window).scrollTop(that.flagTop);
  }
}

/* 显示loading提示 */
var showLoading = function () {
  var _html = "<div class='show-loading'></div>";
  var _el = $(_html);
  $("body").append(_el);
  _el.html("<img src='front/images/icon/icon-loading.png'><p>请稍等...</p>");
  window.addEventListener('click', function (ev) {
    if ($(".show-loading").length > 0) {
      ev.stopPropagation();
      ev.preventDefault();
    }
  }, true);
}

/* 关闭loading提示 */
var hideLoading = function () {
  $(".show-loading").fadeOut(function () {
    $(".show-loading").remove()
  })
}


/* 显示上拉加载loading提示 */
var showReachLoading = function (elem) {
  $(".show-null-reach").slideUp(function () {
    $(".show-null-reach").remove()
  })
  var _html = "<div class='show-reach-loading'></div>";
  var _el = $(_html);
  elem.append(_el);
  _el.html("<img src='front/images/icon/reach-loading.png'><span>正在加载...</span>");
  $("html,body").animate({
    scrollTop: $("html")[0].scrollHeight
  }, 0);
  window.addEventListener('click', function (ev) {
    if ($(".show-reach-loading").length > 0) {
      ev.stopPropagation();
      ev.preventDefault();
    }
  }, true);
}

/* 关闭上拉加载loading提示 */
var hideReachLoading = function () {
  $(".show-reach-loading").slideUp(function () {
    $(".show-reach-loading").remove()
  })
}

/* 显示nodata提示 */
var showNullReach = function (elem) {
  var _html = "<div class='show-null-reach'></div>";
  var _el = $(_html);
  elem.append(_el);
  _el.html("<span>- 暂无更多数据 -</span>");
}

/* 触底加载 */
var onReachBottom = {
  hasNextPage: true,
  currPage: 1,
  option: {
    now: 0,
    old: 0
  },
  init: function (elem, callback) {
    var that = this;
    $(document).scroll(function () {
      that.option.now = $(this).scrollTop();

      if (that.option.old < that.option.now) {
        //下滚
        var doc_hei = $(document).outerHeight(true);
        var sr_top = $(window).scrollTop();
        var win_hei = $(window).outerHeight(true);
        if (win_hei + sr_top + 1 >= doc_hei) {
          if (!that.hasNextPage) {
            if (!$(".show-reach-loading").length > 0 && !$(".show-null-reach").length > 0) {
              showNullReach($(elem))
            }
            return false
          }
          that.hasNextPage = false;
          showReachLoading($(elem));
          callback()
        }
      } else {
        //上滚            

      }
      setTimeout(function () {
        that.option.old = that.option.now;
      }, 0)

    })
  }
}

// 时间戳格式化
var filter = {
  zero: function (num) {
    if (parseInt(num) < 10) {
      num = '0' + num
    }
    return num
  },
  setDate: function (date) {
    var that = this;
    var d = new Date(parseInt(date));
    var r = {
      year: d.getFullYear(),
      month: that.zero(d.getMonth() + 1),
      day: that.zero(d.getDate()),
      hour: that.zero(d.getHours()),
      minute: that.zero(d.getMinutes()),
      second: that.zero(d.getSeconds()),
      apm: d.getHours() < 12 ? '上午' : '下午'
    }
    return r;
  },
  dateByApm: function (date) {
    var r = this.setDate(date);
    return r.year + '年' + r.month + '月' + r.day + '日 ' + r.apm + ' ' + r.hour + ':' + r.minute + ':' + r.second
  },
  dateByHms: function (date) {
    var r = this.setDate(date);
    return r.year + '-' + r.month + '-' + r.day + ' ' + r.hour + ':' + r.minute + ':' + r.second
  }
}

var dropFunc = {
  elem: '',
  show: function (el) {
    var _drop = "<div class='bg-drop'></div>";
    var _dl = $(_drop);
    this.elem = _dl;
    $(el).before(_dl);
    alphaScroll.addTo();
    $(".body-main").addClass("fix-main");
  },
  hide: function () {
    var _dl = this.elem;
    _dl.fadeOut(function () {
      _dl.remove();
    });
    $(".body-main").removeClass("fix-main");
    alphaScroll.removeTo();
  }
}

// 确认框
function showConfirm(str, cbAccept, cbCancel, btnOpt) {
  if (typeof cbCancel != 'function') {
    btnOpt = cbCancel
  }
  if (btnOpt == undefined) {
    btnOpt = {
      confirm: '确认',
      cancel: '取消'
    }
  }
  var _drop = "<div class='bg-drop'></div>";
  var _html = "<div class='show-confirm'></div>";
  var _el = $(_html);
  var _dl = $(_drop);
  $("body").append(_el);
  $("body").append(_dl);
  var h_cont = "<div class='sc-cont'>" + str + "</div>";
  var h_btn = "<div style='text-align:center'>" +
    "<button type='button' class='btn-accept'>" + btnOpt.confirm + "</button>" +
    (btnOpt.cancel != '' ? "<button type='button' class='btn-cancel'>" + btnOpt.cancel + "</button>" : "") +
    "</div>"
  _el.append(h_cont);
  _el.append(h_btn);
  $(".show-confirm .btn-accept").on("click", function () {
    $(".bg-drop").fadeOut();
    $(".show-confirm").fadeOut(
      function () {
        _dl.remove();
        _el.remove();
        if (cbAccept) {
          cbAccept();
        }
      }
    );
  });
  $(".show-confirm .btn-cancel").on("click", function () {
    $(".bg-drop").fadeOut();
    $(".show-confirm").fadeOut(
      function () {
        _dl.remove();
        _el.remove();
        if (cbCancel) {
          cbCancel();
        }
      }
    );
  });
  _dl.on('click', function (ev) {
    ev.stopPropagation();
    ev.preventDefault();
  });
}

// 返回
$(function () {
  $(".back-to").on('click', function () {
    window.history.back(-1);
    return false;
  })
})

// 如果无底部，则将内容区的padding-bottom清空
$(function () {
  if ($(".fix-footer").length <= 0) {
    $(".page-main").css("paddingBottom", 0)
  }
})

// tab切换方法
function initTabSelect(elem, callback) {
  $(elem).each(function (i, el) {
    var taTto = $(el).find("[data-tabto]");
    taTto.each(function (k, sl) {
      if ($(sl).hasClass("active")) {
        // 回显
        var idx = $(this).data("tabto");
        $(this).addClass("active").siblings("[data-tabto]").removeClass("active");
        $("[data-tabbox=" + idx + "]").show().siblings("[data-tabbox]").hide();
        $("[data-tabbox=" + idx + "]").siblings("[data-tabbox]").removeClass("active");
      }
      $(sl).unbind("click").on("click", function () {
        // 绑定点击切换事件
        var idx = $(this).data("tabto");
        $(this).addClass("active").siblings("[data-tabto]").removeClass("active");
        $("[data-tabbox=" + idx + "]").show().siblings("[data-tabbox]").hide();
        $("[data-tabbox=" + idx + "]").siblings("[data-tabbox]").removeClass("active");
        if (callback) {
          // 向回调中传入被点击的对象和被显示的对象
          callback($(this), $("[data-tabbox=" + idx + "]"))
        }
      })
    })
  })
}

$(function () {
  initTabSelect(".page-tabbox");
})

function scaleImg(ev) {
  var winWid = document.documentElement.clientWidth;
  var winHgt = document.documentElement.clientHeight;
  var ntWid = ev.naturalWidth;
  var ntHgt = ev.naturalHeight;
  var _domDark = "<div class='img-scale-dark'></div>";
  var _domWrap = "<div class='img-scale-wrap'></div>";
  var _domImg = "<img src='" + $(ev).attr("src") + "'/>";
  var _domDel = "<button type='button'>点击此处关闭</button>";
  var _elemDark = $(_domDark);
  var _elemWrap = $(_domWrap);
  var _elemImg = $(_domImg);
  var _elemDel = $(_domDel);
  $("body").append(_elemDark);
  $("body").append(_elemWrap);
  $(_elemWrap).append(_elemImg);
  $(_elemWrap).append(_elemDel);
  _elemDark.css({
    "display": "none",
    "position": "fixed",
    "zIndex": "998",
    "left": "0",
    "top": "0",
    "width": "100%",
    "height": "100%",
    "background": "rgba(102,102,102,.7)"
  }).fadeIn(300);
  var boxWid, boxHgt, point = .8;
  if (ntWid <= (winWid * point) && ntHgt <= (winHgt * point)) {
    boxWid = ntWid;
    boxHgt = ntHgt;
    // console.log("小图")
  } else if (ntWid > (winWid * point) && ntHgt > (winHgt * point)) {
    if (ntHgt > ntWid) {
      boxHgt = (winHgt * point);
      boxWid = boxHgt * (ntWid / ntHgt);
    } else {
      boxWid = (winWid * point);
      boxHgt = boxWid * (ntHgt / ntWid);
    };
    // console.log("大图")
  } else if (ntWid >= (winWid * point) && ntHgt <= (winHgt * point)) {
    boxWid = (winWid * point);
    boxHgt = boxWid * (ntHgt / ntWid);
    // console.log("横图")
  } else if (ntWid < (winWid * point) && ntHgt > (winHgt * point)) {
    boxHgt = (winHgt * point);
    boxWid = boxHgt * (ntWid / ntHgt);
    // console.log("竖图")
  } else {
    boxWid = 300;
    boxHgt = 300
  };
  _elemWrap.css({
    "display": "none",
    "position": "fixed",
    "zIndex": "999",
    "left": "0",
    "top": "0",
    "bottom": "0",
    "right": "0",
    "margin": "auto",
    "width": boxWid,
    "height": boxHgt
  }).fadeIn(500);
  _elemImg.css({
    "width": "100%",
    "height": "auto"
  });
  _elemDel.css({
    "position": "absolute",
    "zIndex": "999",
    "left": "0",
    "bottom": "-30px",
    "width": boxWid,
    "height": "30px",
    "background": "rgba(255,119,46,.8)",
    "color": "#fff",
    "border": "0",
    "outline": "none"
  });
  _elemDel.on("click", function () {
    _elemDark.fadeOut(function () {
      _elemDark.remove();
    });
    _elemWrap.fadeOut(function () {
      _elemWrap.remove();
    });
  })
}

$(function () {
  $(".scale-img img").each(function (i, el) {
    $(el).on('click', function () {
      scaleImg(el)
    })
  })
})