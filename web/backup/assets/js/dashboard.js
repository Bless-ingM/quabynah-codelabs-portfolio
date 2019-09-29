// Mock Products
var products = [
  {
    key: "dummy",
    title: "Zeniteck IT Solutions",
    desc:
      "A robust application which bridges the gap between service providers and customers",
    platform: ["Android", "iOS", "Web"],
    logo: "../assets/img/faces/marc.jpg",
    screenshots: []
  },
  {
    key: "dummy1",
    title: "Companion Lite",
    desc:
      "This is a student assistant application which intends to aid and inform students of the various lectures, venues and news that take place on campus in real-time.It also educates students on upcoming events.",
    platform: ["Android", "iOS"],
    logo: null,
    screenshots: []
  }
];

// Mock Tutorials
var tutorials = [
  {
    key: "dummy",
    title: "Basic HTML, CSS &amp; JavaScript",
    desc: "Web development",
    platform: ["Android", "iOS", "Web"],
    logo: null,
    screenshots: []
  }
];

$(document).ready(function() {
  // Load products
  products.forEach(product => {
    $("#apps_grid").append(
      `<div class="row featurette">
            <div class="col-md-7 order-md-1  my-auto">
            <h2 class="featurette-heading">
                ${product.title}
            </h2>
            <p class="">
                ${product.desc}
            </p>
            <a href="#edit" class="btn btn-outline-primary" data-href="${
              product.key
            }">Edit
            </a>
            <a href="#remove" class="btn btn-outline-danger" data-href="${
              product.key
            }">Remove
            </a>
            </div>
            <div class="col-md-5 order-md-2">
                <img class="bd-placeholder-img bd-placeholder-img-lg app-image img-fluid mx-auto" src="${
                  product.logo ? product.logo : "../assets/svg/default.svg"
                }" alt="logo"/>
            </div>
        </div>
        <hr class="featurette-divider-small" />`
    );
  });

  // Load tutorials
  tutorials.forEach(item => {
    $("#tutorials_grid").append(
      `<div class="row featurette">
            <div class="col-md-7 order-md-1  my-auto">
            <h2 class="featurette-heading">
                ${item.title}
            </h2>
            <p class="">
                ${item.desc}
            </p>
            <a href="#edit" class="btn btn-outline-primary" data-href="${
              item.key
            }">Edit
            </a>
            <a href="#remove" class="btn btn-outline-danger remove-item" data-href="${
              item.key
            }">Remove
            </a>
            </div>
            <div class="col-md-5 order-md-2">
                <img class="bd-placeholder-img bd-placeholder-img-lg app-image img-fluid mx-auto" src="${
                  item.logo ? item.logo : "../assets/svg/default.svg"
                }" alt="logo"/>
            </div>
        </div>
        <hr class="featurette-divider-small" />`
    );
  });

  //   Click action
  $(document).on("click", "a[data-href]", function() {
    if (this.classList.contains("remove-item")) {
      console.log("Remove button");
    } else {
      console.log(this.classList);
      window.localStorage.setItem("item-key", this.dataset.href);
      window.location.href = "../admin/details.html";
    }
  });
});
