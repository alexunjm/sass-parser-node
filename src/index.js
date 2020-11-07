const reader = require('./app/scss-file-reader')

const FILENAME = process.env.SCSS_FILENAME

const start = () => {
    reader.read(FILENAME)
}

start()

