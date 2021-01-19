let n = 1
getCss.onclick = () => {
  const request = new XMLHttpRequest()
  request.open('GET', '/style.css')
  request.onload = () => {
    if (request.readyState === 4) {
      console.log('readyState===4了，代表下载ok')
      if (request.status >= 200 && request.status < 300) {
        // 创建style标签
        const style = document.createElement('style')
        // 往里面填内容
        style.innerHTML = request.response
        // 插到头里面
        document.head.appendChild(style)
      } else {
        alert('加载css失败')
      }
    }
  }
  request.onerror = () => {
    console.log('失败咯')
  }
  request.send()
}
getJs.onclick = () => {
  const request = new XMLHttpRequest()
  request.open('GET', '/2.js')
  request.onload = () => {
    console.log('2.js成功')
    // 创建style标签
    const script = document.createElement('script')
    script.innerHTML = request.response
    document.body.appendChild(script)
  }
  request.onerror = () => {
    console.log('2.js失败')
  }
  request.send()
}
getHTML.onclick = () => {
  const request = new XMLHttpRequest()
  request.open('GET', '/2.html')
  request.onload = () => {
    console.log('我onload成功了')
    const html = document.createElement('html')
    html.innerHTML = request.response
    document.body.appendChild(html)
  }
  request.onerror = () => {
    console.log('我onerror了')
  }
  request.send()
}
getXML.onclick = () => {
  const request = new XMLHttpRequest()
  request.open('GET', '/4.xml')
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const dom = request.responseXML
      const text = dom.getElementsByTagName('warning')[0].textContent.trim()
      console.log(text)
    }
  }
  request.send()
}
getJSON.onclick = () => {
  const request = new XMLHttpRequest()
  request.open('GET', '/5.json')
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      console.log(request.response)
      const object = JSON.parse(request.response)
      myName.textContent = object.name
      console.log(object)
    }
  }
  request.send()
}
getPage.onclick = () => {
  let myPage = document.querySelector('#myPage>ul')
  if (myPage.childNodes.length > 20) {
    console.log('我进来了')
    getPage.disabled = true
  }
  const request = new XMLHttpRequest()
  request.open('GET', `/page${n + 1}`)
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const array = JSON.parse(request.response)
      array.forEach((item) => {
        const li = document.createElement('li')
        li.textContent = item.id
        xxx.appendChild(li)
      })
      n += 1
    }
  }
  request.send()
}

let myGetPage = document.querySelector('.myGetPage')

console.log('我进来了')
let myPage = document.querySelector('#myPage>ul')
var i = setInterval(function () {
  if (myPage.childNodes.length > 20) {
    getPage.disabled = true
  }
}, 100)
