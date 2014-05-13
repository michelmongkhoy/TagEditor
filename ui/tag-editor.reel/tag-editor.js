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
            this.tags = [];
        }
    },
    tags: {
        value: null
    },
    _placeHolderText: {
        value: null
    },
    placeHolderText: {
        get: function(){
            return _placeHolderText;
        },
        set: function(value) {
            if (this._placeHolderText !== value) {
                this._placeHolderText = value;
                this.needsDraw = true;
            }
        }
    },
    textFieldShouldAcceptValue: {
        value: function() {
            return true;
        }
    },
    tagTextFieldShouldAcceptValue: {
        value: function() {
            return true;
        }
    },
    handleTextFieldAction: {
        value: function(event) {
            this.tags.push(event.detail.inputValue);
            event.detail.inputValue = "";
        }
    },
    handleTagTextFieldAction: {
        value: function(event) {
            this.tags.push(event.detail.inputValue);
            event.detail.inputValue = "";
        }
    },
    handleTagButtonAction: {
        value: function(event) {
            this.tags.splice(event.detail.tagIndex, 1);
        }
    }
});
