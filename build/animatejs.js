/**
 * animatejs
 * xisa
 * 0.0.1(2014-2016)
 */
 /*
    底层库使用 Zepto 或者 jQuery
 */
;(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.Animatejs = factory();
  }
}(this, function() {
    'use strict';
    function Animatejs(element, options) {
        this.ele = $(element);
        this.init(options);
    }

    Animatejs.prototype = {
        version: '0.0.1',
        // 初始化
        init: function (options) {
            this.options = $.extend(true, {
                //
            }, options);

            // 执行render
            this.render();
        },
        // 入口
        render: function () {
            //
        },
        // 销毁
        destroy: function () {
            // 
        },
        // 刷新
        refresh: function (refresh) {
            // 
        }
    }

    return Animatejs;
}));