// console.log(1);

const a = 1;

export default a;

function SaferHTML(templateData) {
    let s = templateData[0];
    for (let i = 1; i < arguments.length; i++) {
        let arg = String(arguments[i]);

        // Escape special characters in the substitution.
        s += arg.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

        // Don't escape special characters in the template.
        s += templateData[i];
    }
    return s;
}

let sender = '<script>alert("abc")</script>'; // 恶意代码
SaferHTML`<p>${sender} has sent you a message.</p>`;
// console.log(message);
