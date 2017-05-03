var moment = require('moment');
let navbar = {
    templateUrl: 'js/components/common/navbar.html',
    controller: ['UsersService', '$state', '$interval', function(UsersService, $state, $interval) {
        'use strict'
        
        let time = "";

        time = () => {
                this.currentTime = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
            },

        console.log(this.currentTime);
        $interval(time, 1000);

        angular.extend(this, {
            $onInit() {
                UsersService.getCurrent().then((user) => {
                    this.user = user
                }).catch((err) => {

                })
            },
            disconnect() {
                UsersService.disconnect().then(() => {
                    Materialize.toast('Disconnected', 4000, 'toast-warning')
                    this.user = null
                    $state.reload()
                })
            },

            

        })
    }]
}

export default navbar