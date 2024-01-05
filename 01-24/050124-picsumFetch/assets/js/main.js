fetch("https://picsum.photos/v2/list")
.then((response) => response.json())
.then((data) => {
    console.log(data)

    // h1 für Überschrift
    let h1 = document.createElement("h1")
    h1.textContent = "Picsum Fetch"
    document.body.appendChild(h1)

    // section für Bildergallery
    let gallery = document.createElement("section")
    document.body.appendChild(gallery)


    data.forEach((element) => {
        const imgAuthor = element.author
        // console.log(imgAuthor);

        const imgUrl = element.download_url
        console.log(imgUrl);

        const imgInfo = element.url
        // console.log(imgInfo);


        // div für Bilder erstellen
        let imgBox = document.createElement("div")

        // img
        let img = document.createElement("img")
        img.setAttribute("src", imgUrl)
        imgBox.appendChild(img)

        // Author
        let p = document.createElement("p")
        p.textContent = imgAuthor
        imgBox.appendChild(p)

        // button SeeMore
        let seeMoreBtn = document.createElement("button")
        seeMoreBtn.textContent = "SeeMore"
        seeMoreBtn.addEventListener("click", () => {
            fetch(`https://picsum.photos/v2/list/${imgInfo}`)
                .then((resp) => resp.json())
                .then((data) => console.log(data))
                .catch((error) => console.log(error))
        })
        imgBox.appendChild(seeMoreBtn)
        gallery.appendChild(imgBox)
    });
})
