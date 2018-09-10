function include() {
    document.querySelectorAll('*[data-include]')
        .forEach(function(node) {
            node.style.display = 'none'
            fetch(node.attributes['data-include'].value)
                .then(function(res) {
                    if (res.ok)
                        return res.text()
                    else
                        throw Error
                })
                .then(function(data) {
                    node.outerHTML = data
                })
        })
}

include()