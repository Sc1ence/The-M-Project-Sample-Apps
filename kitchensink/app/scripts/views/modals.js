/*global kitchensink, M*/

kitchensink.Views = kitchensink.Views || {};

(function() {
    'use strict';

    kitchensink.Views.ModalsView = M.View.extend({
        grid: 'col-xs-12'
    }, {

        toastExample: M.View.extend({
            value: 'M.Toast',
            grid: 'row'
        }, {
            showRawToast: M.ButtonView.extend({
                grid: 'col-xs-12 col-sm-6 col-md-4',
                value: 'Show raw Toast',
                events: {
                    tap: function() {
                        M.Toast.show({text: 'Displayed ' + M.Toast.RAW + ' ms', timeout: M.Toast.RAW});
                    }
                }
            }),

            showMediumToast: M.ButtonView.extend({
                grid: 'col-xs-12 col-sm-6 col-md-4',
                value: 'Show medium Toast',
                events: {
                    tap: function() {
                        M.Toast.show('Displayed ' + M.Toast.MEDIUM + ' ms')
                    }
                }
            }),

            showCrispyToast: M.ButtonView.extend({
                grid: 'col-xs-12 col-sm-6 col-md-4',
                value: 'Show crispy Toast',
                events: {
                    tap: function() {
                        M.Toast.show({text: 'Displayed ' + M.Toast.CRISPY + ' ms', timeout: M.Toast.CRISPY});
                    }
                }
            })
        }),

        laoderExample: M.View.extend({
            value: 'M.Loader',
            grid: 'row'
        }, {
            toggleLoader: M.ButtonView.extend({
                grid: 'col-xs-12 col-sm-6 col-md-4',
                value: 'Show Loader for 1 sec',
                events: {
                    tap: function() {
                        M.Loader.toggle();
                        setTimeout(function(){
                            M.Loader.toggle();
                        }, 1000);
                    }
                }
            }),

            toggleLoaderText: M.ButtonView.extend({
                grid: 'col-xs-12 col-sm-6 col-md-4',
                value: 'Show Loader with Text for 1 sec',
                events: {
                    tap: function() {
                        M.Loader.toggle('Loading');
                        setTimeout(function(){
                            M.Loader.toggle();
                        }, 1000);
                    }
                }
            })
        })

    });

})();