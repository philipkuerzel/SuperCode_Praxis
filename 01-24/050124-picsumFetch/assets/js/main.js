fetch("https://picsum.photos/v2/list")
.then((response) => response.json())
.then((data) => {
    console.log(data)
    data.forEach((element) => {
        const imgAuthor = element.author
        // console.log(imgAuthor);

        const imgUrl = element.download_url
        console.log(imgUrl);

        const imgInfo = element.url
        // console.log(imgID);


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
        document.body.appendChild(imgBox)
    });
})
