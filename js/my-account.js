$(document).ready(function() {

    let my_account = {};

    initializePage();

    $(".recipe-name").click(function() {

        let recipe_to_show;
        my_account.recipes.forEach(recipe => {
            if (recipe.head == $(this).html()) {
                recipe_to_show = recipe;
                return;
            }
        });
        localStorage.setItem("recipe-to-show", JSON.stringify(recipe_to_show));
        window.open("receipe-post-" + localStorage.getItem("language") + ".html", "_self");
    });

    function list_my_recipes() {
        my_account.recipes.forEach(recipe => {
            let recipe_col = $("<div></div>").addClass("col-12 col-sm-6 col-lg-4");
            let single_recipe_area = $("<div></div>").addClass("single-best-receipe-area mb-30");

            let recipe_image = $("<img>").attr("alt", "");

            const recipe_image_failsafe = new Image();
            recipe_image_failsafe.src = "img/" + recipe.head + ".jpg";
            recipe_image_failsafe.onload = () => {
                recipe_image.attr("src", "img/" + recipe.head + ".jpg");
            };
            recipe_image_failsafe.onerror = () => {
                recipe_image.attr("src", "img/blog-img/1.jpg");
            }

            let recipe_content = $("<div></div>").addClass("receipe-content");
            let recipe_name = $("<h5></h5>").addClass("recipe-name").html(recipe.head);
            let ratings = $("<div></div>").addClass("ratings");

            let stars = recipe.stars;
            for (let i = 0; i < 5; i++) {
                let star;
                if (stars > 0)
                    star = $("<i></i>").addClass("fa fa-star").attr("aria-hidden", "true");
                else
                    star = $("<i></i>").addClass("fa fa-star-o").attr("aria-hidden", "true");

                ratings.append(star);
                stars--;
            }

            recipe_content.append(recipe_name).append(ratings);
            single_recipe_area.append(recipe_image).append(recipe_content);
            recipe_col.append(single_recipe_area);
            $(".my-recipes").append(recipe_col);
        });

        ScrollReveal().reveal(".my-recipes", {
            distance: "200%",
            duration: 1000,
            origin: "bottom",
            opacity: 0
        });
    }

    function initializePage() {
        my_account = JSON.parse(localStorage.getItem("my-account"));

        list_my_recipes();
    }
});