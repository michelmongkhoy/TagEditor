/**
 * @module ui/main.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Main
 * @extends Component
 */
exports.Main = Component.specialize(/** @lends Main# */ {
    constructor: {
        value: function Main() {
            this.super();
        }
    },
    placeHolderText: {
        value: "write a tag..."
    },
    sampleTags: {
        value: ["😜","Developers", "code", "write", "compile", "debug", "fix", "crash", "wonder", "headache", "think", "Google it", "StackOverflow", "Ask", "Library", "GitHub", "Clone", "Branch", "Commit", "Merge", "Push", "Deliver", "Happy", "☺"]
    }
});
