import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js';

// Viewmodel setup

const my_vm = (() => {
    let vue_VM = new Vue({
        data: {
            message: "Hello from Vue!",

            collection: [
                {name: "Joe", role: "Prof"},
                {name: "John", role: "Prof"},
                {name: "Jarrod", role: "Prof"}
            ]
        },

        methods: {
            logClicked() {
                console.log('clicked on an element');
            }
        }
    }).$mount("#app");
})();