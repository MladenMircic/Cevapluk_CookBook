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
                alert("radi");
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
                alert("radi");
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
                alert("radi");
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

    $(".rating-name").click(function() {
        let name = $(this).html();

        appetizer.forEach(food => {
            if (food.head == name) {
                localStorage.setItem("recipe-to-show", JSON.stringify(food));
                return;
            }            
        });

        main_course.forEach(food => {
            if (food.head == name) {
                localStorage.setItem("recipe-to-show", JSON.stringify(food));
                return;
            }            
        });

        dessert.forEach(food => {
            if (food.head == name) {
                localStorage.setItem("recipe-to-show", JSON.stringify(food));
                return;
            }            
        });

        snack.forEach(food => {
            if (food.head == name) {
                localStorage.setItem("recipe-to-show", JSON.stringify(food));
                return;
            }            
        });

        predjelo.forEach(food => {
            if (food.head == name) {
                localStorage.setItem("recipe-to-show", JSON.stringify(food));
                return;
            }            
        });

        glavno_jelo.forEach(food => {
            if (food.head == name) {
                localStorage.setItem("recipe-to-show", JSON.stringify(food));
                return;
            }            
        });

        dezert.forEach(food => {
            if (food.head == name) {
                localStorage.setItem("recipe-to-show", JSON.stringify(food));
                return;
            }            
        });

        uzina.forEach(food => {
            if (food.head == name) {
                localStorage.setItem("recipe-to-show", JSON.stringify(food));
                return;
            }            
        });

        window.open("receipe-post-" + localStorage.getItem("language") + ".html", "_self");
    });

    $(".delete-button").click(function() {
        let name = $($($(this).parent()).find(".recipe-name")).html();

        for (let i = 0; i < my_account.recipes.length; i++) {
            if (my_account.recipes[i].head == name) {
                my_account.recipes.splice(i, 1);
                break;
            }
        }

        for (let i = 0; i < my_account.comments.length; i++) {
            if (my_account.comments[i].head_eng == name || my_account.comments[i].head_srb == name) {
                my_account.comments.splice(i, 1);
                break;
            }
        }

        for (let i = 0; i < appetizer.length; i++) {
            if (appetizer[i].head == name || predjelo[i].head == name) {
                appetizer.splice(i, 1);
                predjelo.splice(i, 1);
                localStorage.setItem("appetizer", JSON.stringify(appetizer));
                localStorage.setItem("predjelo", JSON.stringify(predjelo));
                break;
            }     
        }
        
        for (let i = 0; i < main_course.length; i++) {
            if (main_course[i].head == name || glavno_jelo[i] == name) {
                main_course.splice(i, 1);
                glavno_jelo.splice(i, 1);
                localStorage.setItem("main_course", JSON.stringify(main_course));
                localStorage.setItem("glavno_jelo", JSON.stringify(glavno_jelo));
                break;
            }     
        }

        for (let i = 0; i < dessert.length; i++) {
            if (dessert[i].head == name || dezert[i].head == name) {
                dessert.splice(i, 1);
                dezert.splice(i, 1);
                localStorage.setItem("dessert", JSON.stringify(dessert));
                localStorage.setItem("dezert", JSON.stringify(dezert));
                break;
            }     
        }

        for (let i = 0; i < snack.length; i++) {
            if (snack[i].head == name || uzina[i].head == name) {
                snack.splice(i, 1);
                uzina.splice(i, 1);
                localStorage.setItem("snack", JSON.stringify(snack));
                localStorage.setItem("uzina", JSON.stringify(uzina));
                break;
            }     
        }

        for (let i = 0; i < my_account.comments.length; i++) {
            if (my_account.comments[i].head_eng == name) {
                my_account.comments.splice(i, 1);
                break;
            }
        }

        let comments_on_page = $(".recipe-comment");

        for (let i = 0; i < comments_on_page.length; i++) {
            let recipe_comment = $(comments_on_page[i]);
            if (recipe_comment.html() == name) {
                recipe_comment.closest(".comment").hide(1000, function() {
                    $(this).remove();
                });
                break;
            }
        }

        localStorage.setItem("my-account", JSON.stringify(my_account));

        $($(this).parent()).hide(1000, function() {
            $(this).remove();
        });
    });

    function list_my_recipes() {
        my_account.recipes.forEach(recipe => {
            let recipe_col = $("<div></div>").addClass("col-12 col-sm-8 col-lg-4");
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

            let delete_button_div = $("<div></div>").addClass("delete-button");

            let delete_button = $("<button></button>")
                            .attr("type", "submit")
                            .addClass("btn delicious-btn");

            if (language == "eng")
                delete_button.html("Delete");
            else
                delete_button.html("Obrisi");

            delete_button_div.append(delete_button);
            recipe_content.append(recipe_name).append(ratings);
            single_recipe_area.append(recipe_image).append(recipe_content);
            recipe_col.append(single_recipe_area).append(delete_button_div);
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

            let comment_col = $("<div></div>").addClass('col-sm-12 col-lg-6 offset-lg-3 comment')
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
            ScrollReveal().reveal(".my-comments", {
                distance: "200%",
                duration: 1000,
                origin: "bottom",
                opacity: 0
            });
        });
    }

    function list_my_ratings() {
        my_account.stars.forEach(star => {
            let star_col = $("<div></div>").addClass("col-12 col-sm-8 col-lg-4");
            let single_recipe_area = $("<div></div>").addClass("single-best-receipe-area mb-30");

            let star_image = $("<img>").attr("alt", "").addClass("rating-image");

            const star_image_failsafe = new Image();
            star_image_failsafe.src = "img/" + star.head + ".jpg";
            star_image_failsafe.onload = () => {
                star_image.attr("src", "img/" + star.head + ".jpg");
            };
            star_image_failsafe.onerror = () => {
                star_image.attr("src", "img/blog-img/1.jpg");
            }

            let star_content = $("<div></div>").addClass("receipe-content");
            let star_name = $("<h5></h5>").addClass("rating-name").html(star.head);
            let ratings = $("<div></div>").addClass("ratings");

            let stars = star.rating;
            for (let i = 0; i < 5; i++) {
                let star;
                if (stars > 0)
                    star = $("<i></i>").addClass("fa fa-star").attr("aria-hidden", "true");
                else
                    star = $("<i></i>").addClass("fa fa-star-o").attr("aria-hidden", "true");

                ratings.append(star);
                stars--;
            }

            star_content.append(star_name).append(ratings);
            single_recipe_area.append(star_image).append(star_content);
            star_col.append(single_recipe_area);
            $(".my-ratings").append(star_col);
        });

        ScrollReveal().reveal(".my-ratings", {
            distance: "200%",
            duration: 1000,
            origin: "bottom",
            opacity: 0
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
        list_my_ratings();
    }
});