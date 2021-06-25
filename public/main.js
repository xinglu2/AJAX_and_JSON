let n = 1

getPage.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', `/page${n+1}`)
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const array = JSON.parse(request.response)
            array.forEach(item => {
                const li = document.createElement("li")
                li.textContent = item.id
                xxx.appendChild(li)
            })
            n += 1
        }
    }
    request.send()
}

getJSON.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/5.json')

    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            //把符合JSON语法的字符串变成对应的对象或者是其他东西
            console.log(request.response)
            const object = JSON.parse(request.response)
            myName.textContent = object.name
            console.log(object)
        }
    }
    request.send()
}

getXML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/4.xml') //readyState === 1
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status >= 200 && request.status < 300) {
            const dom = request.responseXML
            const text = dom.getElementsByTagName('body')[0].textContent
            console.log(text)
        }
    };
    request.send() //readyState === 2
}


getHTML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/3.html')
    request.onload = () => {
        const div = document.createElement('div')
        div.innerHTML = request.response
        document.body.appendChild(div)
    }
    request.onerror = () => {

    }
    request.send()
}
getJs.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/2.js')
    request.onload = () => {
        console.log(request.response)
        const script = document.createElement('script')
        script.innerHTML = request.response
        document.body.appendChild(script)
    }
    request.onerror = () => {

    }
    request.send()
}
getCss.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/style.css') //readyState === 1
    request.onreadystatechange = () => {
        console.log(request.readyState)
        //下载完成，但不知道是不是成功，404页面下载完成后也会是4
        if (request.readyState === 4) {
            console.log('下载完成')
        }
        if (request.status >= 200 && request.status < 300) {
            const style = document.createElement('style')
            style.innerHTML = request.response
            document.body.appendChild(style)
        } else {
            alert('加载CSS失败')
        }
    }
    request.send() //readyState === 2
}