
const fs = require('fs');
const content = fs.readFileSync('src/components/admin/home-section-form.tsx', 'utf-8');

const voidTags = new Set(['input', 'img', 'br', 'hr', 'link', 'meta']);
const tagRegex = /<\/?([a-zA-Z0-9\.\-_]+)[^>]*>/g;

let match;
const stack = [];
let i = 0;

while ((match = tagRegex.exec(content)) !== null) {
    const fullTag = match[0];
    const tagName = match[1];
    const isClosing = fullTag.startsWith('</');
    const isSelfClosing = fullTag.endsWith('/>');

    // Line calculation
    const linesBefore = content.substring(0, match.index).split('\n');
    const lineNum = linesBefore.length;

    if (isClosing) {
        if (stack.length === 0) {
            console.log(`Unexpected closing tag </${tagName}> at line ${lineNum}`);
        } else {
            const last = stack[stack.length - 1];
            if (last.tagName === tagName) {
                stack.pop();
            } else {
                // Special case: maybe we are just missing a close for 'last'?
                // Or maybe 'tagName' is a void tag that appeared as open?
                // But void tags are usually checked.
                console.log(`Mismatched closing tag </${tagName}> at line ${lineNum}. Expected </${last.tagName}> (opened at ${last.lineNum})`);
                // stack.pop(); // Try to recover?
            }
        }
    } else if (!isSelfClosing && !voidTags.has(tagName) && verifyComponentHasChildren(tagName)) {
        stack.push({ tagName, lineNum });
    }
}

function verifyComponentHasChildren(name) {
    // Some components might be used as self-closing but written as <Comp ... > without /? 
    // In JSX <Comp> is open unless <Comp />.
    return true;
}

if (stack.length > 0) {
    console.log('Unclosed tags:');
    stack.forEach(item => console.log(`<${item.tagName}> at line ${item.lineNum}`));
} else {
    console.log('All tags balanced (heuristically).');
}
