;(function() {

    var fitstuff = {};

    function processNode(node) {

        if (node.getAttribute('data-fitstuff') === 'enabled') {
            return;
        }

        var width = node.getAttribute('width') || node.getAttribute('data-width');
        var height = node.getAttribute('height') || node.getAttribute('data-height');
        var ratio = ((parseInt(height, 10) / parseInt(width, 10)) * 100) + '%';
        var wrapper = document.createElement('div');

        wrapper.style.position = 'relative';
        wrapper.style.height = 0;
        wrapper.style.paddingTop = ratio;

        node.style.position = 'absolute';
        node.style.top = node.style.left = 0;
        node.style.width = node.style.height = '100%';

        node.parentNode.insertBefore(wrapper, node);
        wrapper.appendChild(node);

        node.setAttribute('data-fitstuff', 'enabled');

    }

    function initialize() {

        var nodes = document.querySelectorAll('[data-fitstuff]');

        var i = nodes.length;

        while (i--) {
            processNode(nodes[i]);
        }

    }

    fitstuff.update = function() {

        initialize();

    };

    initialize();

    window.fitstuff = fitstuff;

}());
