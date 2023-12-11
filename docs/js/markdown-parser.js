import { marked } from "../vendor/marked/js/marked.esm.min.js";

/**
 * Markdown parser based on the marked library by Christopher Jeffrey.
 */

// Override marked renderer
const renderer = {
    // Always output links in a new tab
    link(href, title, text) {
        const output = marked.Renderer.prototype.link(href, title, text);

        return output.replace('<a ', '<a target="_blank" ');
    }
};

marked.use({ renderer });

export default marked;