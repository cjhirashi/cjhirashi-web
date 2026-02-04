
const fs = require('fs');
const content = fs.readFileSync('src/components/admin/home-section-form.tsx', 'utf-8');

const stack = [];
const lines = content.split('\n');

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    for (let j = 0; j < line.length; j++) {
        const char = line[j];
        if (char === '{' || char === '(') {
            stack.push({ char, line: i + 1, col: j + 1 });
        } else if (char === '}' || char === ')') {
            if (stack.length === 0) {
                console.log(`Unmatched ${char} at line ${i + 1}:${j + 1}`);
            } else {
                const last = stack[stack.length - 1];
                if ((char === '}' && last.char === '{') || (char === ')' && last.char === '(')) {
                    stack.pop();
                } else {
                    console.log(`Mismatched ${char} at line ${i + 1}:${j + 1}. Expected closing for ${last.char} from line ${last.line}:${last.col}`);
                    // Don't pop to reveal deeper errors, or pop? 
                    // Usually parser stops or gets confused.
                }
            }
        }
    }
}

if (stack.length > 0) {
    console.log('Unclosed items:');
    stack.forEach(item => console.log(`${item.char} at line ${item.line}:${item.col}`));
} else {
    console.log('All braces balanced.');
}
