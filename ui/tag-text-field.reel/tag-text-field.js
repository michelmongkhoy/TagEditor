/**
 * @module ui/tag-text-field.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;
var AbstractTextField = require("montage/ui/base/abstract-text-field").AbstractTextField;
/**
 * @class TagTextField
 * @extends Component
 */
exports.TagTextField = AbstractTextField.specialize(/** @lends TagTextField# */ {
     hasTemplate: {
         value: true
     },
    constructor: {
        value: function TagTextField() {
            this.super();
        }
    }
});
