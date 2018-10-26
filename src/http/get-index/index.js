const arc = require('@architect/functions')
const asset = arc.http.helpers.static
const Layout = require('@architect/views/layout')
const script = asset('/bundle.js')

exports.handler = async function http (request) {
  return {
    type: 'text/html; charset=utf8',
    body: Layout({script})
  }
}
