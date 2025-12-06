const fs = require('fs')
const path = require('path')

const envPath = path.join(process.cwd(), '.env')

try {
    const envContent = fs.readFileSync(envPath, 'utf8')
    console.log('File .env found.')
    const lines = envContent.split('\n')
    const keys = lines.map(line => line.split('=')[0].trim()).filter(key => key && !key.startsWith('#'))
    console.log('Keys found in .env:', keys)
} catch (error) {
    console.error('Error reading .env:', error.message)
}
