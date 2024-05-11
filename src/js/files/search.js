let siteIndex = [
    { title: "Free advertising for your online business", url: "../free-advertising.html" },
    { title: "9 simple ways to improve your design skills", url: "../improve-design-skills.html" },
    { title: "Tips to quickly improve your coding speed.", url: "../coding-speed-tips.html" },
    {
        title: "Effective Social Media Strategies for Small Businesses",
        url: "../social-media-strategies.html",
    },
    {
        title: "The Power of Email Marketing: Tips for Success",
        url: "../email-marketing-tips.html",
    },
    { title: "Mastering SEO: A Guide for Beginners", url: "../seo-guide.html" },
];

let searchInput = document.querySelector("#site-search");
let resultsContainer = document.querySelector("#search-results");

if (searchInput && resultsContainer) {
    searchInput.addEventListener("input", function (e) {
        let searchValue = e.target.value.trim().toLowerCase();

        if (searchValue === "") {
            resultsContainer.style.display = "none";
            return;
        }

        let results = siteIndex.filter((page) => page.title.toLowerCase().includes(searchValue));

        if (results.length > 0) {
            resultsContainer.style.display = "flex";
            resultsContainer.innerHTML = "";
            results.forEach(function (result) {
                let link = document.createElement("a");
                link.href = result.url;
                link.textContent = result.title;
                resultsContainer.appendChild(link);
            });
        } else {
            resultsContainer.style.display = "none";
        }
    });
} else {
    console.log("Search input or results container not found");
}
