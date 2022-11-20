const inDev = true

const dev = {
  host: 'http://localhos:3000'
}

const prod = {

}

const config = (inDev) ? dev : prod

export default config
