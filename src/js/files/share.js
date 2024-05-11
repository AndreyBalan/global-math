let shareLinks = document.querySelectorAll(".article__share-link");

shareLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
        event.preventDefault();

        let pageUrl = window.location.href;

        let socialNetwork = this.querySelector("img").alt;

        switch (socialNetwork) {
            case "facebook":
                window.open(
                    `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}&title=${encodeURIComponent(document.title)}&summary=&source=`
                );
                break;
            case "twitter":
                window.open(
                    `https://twitter.com/share?url=${encodeURIComponent(pageUrl)}&title=${encodeURIComponent(document.title)}&summary=&source=`
                );
                break;
            case "pinterest":
                window.open(
                    `http://pinterest.com/pin/create/button/?url=${encodeURIComponent(pageUrl)}&title=${encodeURIComponent(document.title)}&summary=&source=`
                );
                break;
            case "linkedin":
                window.open(
                    `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(pageUrl)}&title=${encodeURIComponent(document.title)}&summary=&source=`
                );

                break;
        }
    });
});
