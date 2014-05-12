/**
 * @module ui/tag-editor.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class TagEditor
 * @extends Component
 */
exports.TagEditor = Component.specialize(/** @lends TagEditor# */ {
    constructor: {
        value: function TagEditor() {
            this.super();
            this.tags = ["42","43","44","45"];
        }
    },
    tags: {
        value: null
    },
    handleTextFieldAction: {
        value: function(event) {
            this.tags.push(event.detail.inputText);
            this.inputField.value = "";
        }
    }
});
