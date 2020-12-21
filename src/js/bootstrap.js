

import Vue from 'vue';
import VueRouter from 'vue-router';
import Axios from 'axios';
import moment from 'moment';
import lodash from 'lodash';
import Dotdotdoter from 'dotdotdot-js/dist/dotdotdot.es6';


window.Vue = Vue;
window.axios = Axios;
window.moment = moment;
window._ = lodash;
window.Dotdotdot = Dotdotdoter;

Vue.use(VueRouter);


/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

try {
    window.Popper = require('popper.js').default;
    window.$ = window.jQuery = require('jquery');

    require('bootstrap');
} catch (e) {}

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */



window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';