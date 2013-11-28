/*global kitchensink, M*/

kitchensink.Views = kitchensink.Views || {};

(function() {
    'use strict';

    kitchensink.Views.BackheaderView = M.View.extend({},{

        first: M.ButtonView.extend({
            cssClass:'first',
            value: 'back',
            events: {
                tap: function(){
                    history.back();
                }
            }
        })

    });

})();