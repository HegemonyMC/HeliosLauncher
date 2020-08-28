setTimeout(()=> {
    for (let item of document.getElementsByClassName('mute-container')) {
        item.onclick = () => {
            let ev = new Event('mute')
            document.dispatchEvent(ev)
        }
    }
}, 2000) // i hate this works


