const include = () => {
    document.querySelectorAll('*[data-include]')
        .forEach(node => {
            node.style.display = 'none'
            fetch(not.attributes['data-include'].value)
                .then(res => {
                    if (res.ok)
                        return res.text()
                    else
                        throw Error
                })
                .then(data => node.outerHTML = data)
        })
}

include()