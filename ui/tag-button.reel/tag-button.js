/**
 * @module ui/tag-button.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;
var AbstractButton = require("montage/ui/base/abstract-button").AbstractButton;
/**
 * @class TagButton
 * @extends Component
 */
exports.TagButton = AbstractButton.specialize(/** @lends TagButton# */ {
    constructor: {
        value: function TagButton() {
            this.super();
        }
    }
});
