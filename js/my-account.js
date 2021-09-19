$(document).ready(function() {

    let appetizer = [];
    let main_course = [];
    let dessert = [];
    let snack = [];
    let predjelo = [];
    let glavno_jelo = [];
    let dezert = [];
    let uzina = [];

    let my_account = {};
    let language = localStorage.getItem("language");

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

    $(".recipe-comment").click(function() {
        let food_type = $(this).attr("type");

        switch (food_type) {
            case 'Appetizer': {
                if (language == "eng") {
                    appetizer.forEach(food => {
                        if (food.head == $(this).html()) {
                            localStorage.setItem("recipe-to-show", JSON.stringify(food));
                            return;
                        }
                    });
                }
                else {
                    predjelo.forEach(food => {
                        if (food.head == $(this).html()) {
                            localStorage.setItem("recipe-to-show", JSON.stringify(food));
                            return;
                        }
                    });
                }
               
                break;
            }
            case 'Main course': {
                if (language == "eng") {
                    main_course.forEach(food => {
                        if (food.head == $(this).html()) {
                            localStorage.setItem("recipe-to-show", JSON.stringify(food));
                            return;
                        }
                    });
                }
                else {
                    glavno_jelo.forEach(food => {
                        if (food.head == $(this).html()) {
                            localStorage.setItem("recipe-to-show", JSON.stringify(food));
                            return;
                        }
                    });
                }
                break;
            }
            case 'Dessert': {
                if (language == "eng") {
                    dessert.forEach(food => {
                        if (food.head == $(this).html()) {
                            localStorage.setItem("recipe-to-show", JSON.stringify(food));
                            return;
                        }
                    });
                }
                else {
                    dezert.forEach(food => {
                        if (food.head == $(this).html()) {
                            localStorage.setItem("recipe-to-show", JSON.stringify(food));
                            return;
                        }
                    });
                }
                break;
            }
            case 'Snack': {
                if (language == "eng") {
                    snack.forEach(food => {
                        if (food.head == $(this).html()) {
                            localStorage.setItem("recipe-to-show", JSON.stringify(food));
                            return;
                        }
                    });
                }
                else {
                    uzina.forEach(food => {
                        if (food.head == $(this).html()) {
                            localStorage.setItem("recipe-to-show", JSON.stringify(food));
                            return;
                        }
                    });
                }
                break;
            }
        }
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

    function list_my_comments() {
        my_account.comments.forEach(comment => {

            let comment_col = $("<div></div>").addClass('col-6 offset-3')
                                .css("margin-bottom", "5%");
            let comment_area = $("<div></div>").addClass("contact-form-area");
            let comment_text = $("<input>").attr("type", "text").addClass("form-control");

            let author_data = $("<div></div>").addClass("author-section");
            let author_profile_link = $("<a></a>").attr("href", "receipe-post-" + language + ".html").attr("type", comment.type).addClass("recipe-comment");
            if (language == "eng")
                author_profile_link.html(comment.head_eng);
            else
                author_profile_link.html(comment.head_srb);

            if (language == "srb")
                author_data.append("na ").append(author_profile_link);
            else
                author_data.append("on ").append(author_profile_link);

            comment_text.val(comment.comment);
            comment_area.append(comment_text).append(author_data);
            comment_col.append(comment_area);

            $(".my-comments").append(comment_col);
        });
    }

    function initializeStorage() {
        my_account = JSON.parse(localStorage.getItem("my-account"));
        appetizer = JSON.parse(localStorage.getItem("appetizer"));
        main_course = JSON.parse(localStorage.getItem("main_course"));
        dessert = JSON.parse(localStorage.getItem("dessert"));
        snack = JSON.parse(localStorage.getItem("snack"));
        predjelo = JSON.parse(localStorage.getItem("predjelo"));
        glavno_jelo = JSON.parse(localStorage.getItem("glavno_jelo"));
        dezert = JSON.parse(localStorage.getItem("dezert"));
        uzina = JSON.parse(localStorage.getItem("uzina"));
    }

    function initializePage() {
        initializeStorage();
        list_my_recipes();
        list_my_comments();
    }
});