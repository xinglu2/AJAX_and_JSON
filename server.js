var http = require('http')
var fs = require('fs')
var url = require('url')
var port = process.argv[2] || process.env.PORT

if (!port) {
    console.log('请指定端口号好不啦？\nnode server.js 8888 这样不会吗？')
    process.exit(1)
}

var server = http.createServer(function (request, response) {
    const {
        pathname: path,
        searchParams: query,
        search
    } =
    new url.URL(request.url, `http://localhost:${port}`)
    const {
        method
    } = request

    /******** 从这里开始看，上面不要看 ************/
    // 请确保你的 Node.js 的版本号 >= 14

    console.log('------------------')
    console.log('有人发过来了请求！')
    console.log('路径为：' + path)
    console.log('查询参数为：' + search)

    if (path === '/index.html') {
        response.statusCode = 200
        response.setHeader('Content-Type', 'text/html;charset=utf-8')
        let string = fs.readFileSync('public/index.html').toString()
        const page1 = fs.readFileSync('db/page1.json').toString()
        const array = JSON.parse(page1)
        const result = array.map(item => `<li>${item.id}</li>`).join('')
        string = string.replace('{{page1}}', `<ul id="xxx">${result}</ul>`)
        response.write(string)
        response.end()
    } else if (path === '/main.js') {
        response.statusCode = 200
        response.setHeader('Content-Type', 'text/javascript;charset=utf-8')
        response.write(fs.readFileSync('public/main.js'))
        response.end()
    } else if (path === '/style.css') {
        response.statusCode = 200
        response.setHeader('Content-Type', 'text/css;charset=utf-8')
        response.write(fs.readFileSync('public/style.css'))
        response.end()
    } else if (path === '/2.js') {
        response.statusCode = 200
        response.setHeader('Content-Type', 'text/javascript;charset=utf-8')
        response.write(fs.readFileSync('public/2.js'))
        response.end()
    } else if (path === '/3.html') {
        response.statusCode = 200
        response.setHeader('Content-Type', 'text/html;charset=utf-8')
        response.write(fs.readFileSync('public/3.html'))
        response.end()
    } else if (path === '/4.xml') {
        response.statusCode = 200
        response.setHeader('Content-Type', 'text/xml;charset=utf-8')
        response.write(fs.readFileSync('public/4.xml'))
        response.end()
    } else if (path === '/5.json') {
        response.statusCode = 200
        response.setHeader('Content-Type', 'text/json;charset=utf-8')
        response.write(fs.readFileSync('public/5.json'))
        response.end()
    }else if (path === '/page2') {
        response.statusCode = 200
        response.setHeader('Content-Type', 'text/json;charset=utf-8')
        response.write(fs.readFileSync('db/page2.json'))
        response.end()
    }else if (path === '/page3') {
        response.statusCode = 200
        response.setHeader('Content-Type', 'text/json;charset=utf-8')
        response.write(fs.readFileSync('db/page3.json'))
        response.end()
    } else {
        response.statusCode = 404
        response.setHeader('Content-Type', 'text/html;charset=utf-8')
        response.write(`当前页面的状态码为 404，因为你输入的路径没有对应的内容`)
        response.end()
    }

    console.log('请求处理完毕\n')
    /******** 代码结束，下面不要看 ************/
})

server.listen(port)
console.log('监听 ' + port + ' 成功\n请用在空中转体720度然后用电饭煲打开 http://localhost:' + port)