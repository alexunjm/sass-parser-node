const reader = require('./app/scss-file-reader')

const start = () => {
    reader.read(process.env.SCSS_FILENAME)
}

start()

