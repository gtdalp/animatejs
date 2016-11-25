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
    function Animatejs(ele, arr) {

        // 第一个参数为数组类型
        if (Array.isArray(ele)) {
            arr = ele;
            this.ele = document.body;
        } else {
            this.ele = document.querySelectorAll(ele);
        }

        if (!Array.isArray(arr)) return;

        this.init(arr);
    }

    Animatejs.prototype = {
        version: '0.0.1',
        // 初始化
        init: function (arr) {
            this.arr = arr;

            // 执行render
            this.render();
        },
        // 入口
        render: function () {
            var arr = this.arr, 
                i = 0, 
                len = arr.length,
                dataF;

            // 执行动画
            for ( ; i < len; i++ ) {
                dataF = arr[i];
                this.animateFn(dataF[0], dataF[1], dataF[2] || '0', dataF[3] || '1');
            }
            this.show(document.body, 'gaga')
        },
        show: function (dom) {
            this.each(dom, function(el) {
                debugger
                if (el.style.display === 'none') {
                    el.style.display = el.getAttribute('o-d') || '';
                };
            });
        },
        // 遍历
        each: function(arr, fn) {
            if (!Array.isArray(arr)) arr = [arr];
            [].forEach.call(arr, fn);
        },
        addClass: function (dom, cls) {
            var domCls;
            this.each(dom, function(el) {
                domCls = el.className + ' ';
                // 添加class
                if (domCls.split(' ').indexOf(cls) === -1) {
                    dom.className = (domCls + cls).trim();
                }
            });
            
        },
        animate: function (ele, cls, t1, t2) {
            var t = (+t2) + 's';
            var dom = this.ele.querySelectorAll(ele);

            if (!dom || dom.length === 0 || !cls) return;

            setTimeout(function () {
                dom.style['-webkit-animation-duration'] = t;
                dom.style['-animation-duration'] = t;
                dom.css(css).show().addClass(cls);
            }, (+t1) * 1000);
        },
        // 销毁
        destroy: function () {
            // 
        },
        // 刷新
        refresh: function () {
            // 执行render
            this.render(); 
        }
    }

    return Animatejs;
}));