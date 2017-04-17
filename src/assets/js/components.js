/**
 * @desc souche.com vue components store
 * will delete
 * @create 2016-07-02
 */

exports.install = function(Vue) {

    // 页面顶部进度, 后期考虑改为css动画效果
    Vue.component('progress-header', {
        props: {
            src: {
                coerce: function(val) {
                    return `../../assets/images/luotto/pro${val}.png`;
                }
            }
        },
        template: "<header class='main-header'><img v-bind:src='src'></header>"
    });

};
