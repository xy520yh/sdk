"use strict";

var $wrappers = $('.wrapper');
var $header = $('.main-header');

function Item(i) {
  this.$dom = $('.wrapper-' + (i + 1));
}

Item.prototype = {
  constructor: Item,
  show: function show() {
    $wrappers.css('display', 'none');
    this.$dom.css('display', 'block');
  },
  load: function load() {
    console.log(233);
  }
};

function Page() {
  this.count = $wrappers.length;
  this.itemList = [];
  this.scrollTimer = 0;
  this.pageCounter = 0;
  this.lastScroll = 0;
  this.scrolling = false;

  this._init();
}

Page.prototype = {
  changeBarStyle: function changeBarStyle(index) {
    var bars = document.querySelectorAll(".dot");
    console.log(bars[index]);
    bars.forEach(function (bar) {
      if (bar === bars[index]) {
        bars[index].style.background = "#ff6600";
      } else {
        bar.style.background = "#fff";
      }
    });
  },
  constructor: Page,
  _init: function _init() {
    $(document.body).css('height', this.count * 100 + '%');

    for (var i = 0; i < this.count; i++) {
      this.itemList.push(new Item(i));
    }

    var self = this;
    this.lastScroll = $(document).scrollTop();
    if(window.addEventListener){
        window.addEventListener('scroll', function (e) {
            if (self.scrolling) {
              return;
            }
            clearTimeout(self.scrollTimer);
            self.scrollTimer = setTimeout(function () {
              self.dealScroll();
            }, 60);
          });
    }else{
        window.attachEvent('scroll', function (e) {
            if (self.scrolling) {
              return;
            }
            clearTimeout(self.scrollTimer);
            self.scrollTimer = setTimeout(function () {
              self.dealScroll();
            }, 60);
          })
    }
   
    this.pageChange();
    this.bindEvent();
  },
  dealScroll: function dealScroll() {
    if (this.scrolling) {
      return;
    }

    this.scrolling = true;
    var top = $(document).scrollTop();
    var to = top - this.lastScroll;

    if (to > 0 && this.pageCounter < this.count) {
      this.pageCounter++;
    }

    if (to < 0 && this.pageCounter > 0) {
      this.pageCounter--;
    } // console.log("count:",this.pageCounter);


    this.changeBarStyle(this.pageCounter);
    this.pageChange();
  },
  pageChange: function pageChange() {
    this.itemList[this.pageCounter].show();
    $(document.body)[0].className = 'active-' + (this.pageCounter + 1);
    $(document).scrollTop(this.pageCounter * window.innerHeight);
    this.lastScroll = this.pageCounter * window.innerHeight;
    var self = this;
    setTimeout(function () {
      self.scrolling = false;
    }, 200);
  },
  bindEvent: function bindEvent() {
    var self = this;
    $header.find('.menu-icon').on('click', function () {
      $header.toggleClass('menu-slide');
    });
    $('.dot-bar').on('click', '.dot', function () {
      self.pageCounter = $(this).index();
      self.pageChange();
    });
  }
};
new Page();