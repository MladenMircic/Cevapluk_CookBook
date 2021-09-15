$(document).ready(function () {

    let appetizer = [];
    let main_course = [];
    let dessert = [];
    let snack = [];

    initializeStorage();

    function find_recipes(type_of_food, name) {
        let found = [];
        switch (type_of_food) {
            case 'Appetizer': {
                appetizer.forEach(food => {
                    alert(JSON.stringify(food));
                    if (food.head.toLowerCase().includes(name.toLowerCase())) {
                        found.push(food);
                        return;
                    }
                });
                break;
            }
            case 'Main course': {
                main_course.forEach(food => {
                    if (food.head.toLowerCase().includes(name.toLowerCase())) {
                        found.push(food);
                        return;
                    }
                });
                break;
            }
            case 'Dessert': {
                dessert.forEach(food => {
                    if (food.head.toLowerCase().includes(name.toLowerCase())) {
                        found.push(food);
                        return;
                    }
                });
                break;
            }
            case 'Snack': {
                snack.forEach(food => {
                    if (food.head.toLowerCase().includes(name.toLowerCase())) {
                        found.push(food);
                        return;
                    }
                });
                break;
            }
        }
        return found;
    }

    $(".delicious-btn").click(function() {
        let type_of_food = $($(".list").children(".selected")).html();
        let name = $("#food-name").val();

        if (type_of_food == 'All recipes categories' || name == '') {
            localStorage.setItem("error-msg", 'You have to fill both fields!');
            return;
        }

        let found_recipes = find_recipes(type_of_food, name);

        if (found_recipes.length == 0)
            localStorage.setItem("error-msg", "No results!");
        else
            localStorage.setItem("recipes-found", JSON.stringify(found_recipes));
        
    });

    function initializeStorage() {

        if (localStorage.getItem("error-msg") != null) {
            $(".error-text").html(localStorage.getItem("error-msg"));
            localStorage.removeItem("error-msg");
        }
        else
            $(".error-text").html('');

        if (localStorage.getItem("recipes-found") != null) {
            let recipes = JSON.parse(localStorage.getItem("recipes-found"));

            recipes.forEach(recipe => {
                let container_image = $("<div></div>").addClass("container");
                let row_image = $("<div></div>").addClass("row");
                let col_image = $("<div></div>").addClass("col-12");
                let recipe_image = $("<img>").attr("src", "img/bg-img/bg5.jpg").attr("alt", "");

                col_image.append(recipe_image);
                row_image.append(col_image);
                container_image.append(row_image);

                let recipe_content = $("<div></div>").addClass("receipe-content-area");
                let container_recipe = $("<div></div>").addClass("container");
                let row_recipe = $("<div></div>").addClass("row");
                let col_recipe_heading_div = $("<div></div>").addClass("col-12 col-md-8");

                let recipe_heading = $("<div></div>").addClass("receipe-headline my-5");
                let date = $("<span></span>").html("January 05, 2021");
                let heading = $("<h2></h2>").html(recipe.head);
                let recipe_duration = $("<div></div>").addClass("receipe-duration");
                let prep_time = $("<h6></h6>").html("Prep: " + recipe.prep);
                let cook_time = $("<h6></h6>").html("Cook: " + recipe.cook);
                let portions = $("<h6></h6>").html("Yields: " + recipe.portions);

                let rating_div = $("<div></div>").addClass("col-12 col-md-4");
                let recipe_rating = $("<div></div>").addClass("receipe-ratings text-right my-5");
                let stars = $("<div></div>").addClass("ratings");

                let recipe_stars = recipe.stars;
                for (let i = 0; i < 5; i++) {
                    let star = "";
                    if (recipe_stars > 0)
                        star = $("<i></i>").addClass("fa fa-star").attr("aria-hidden", "true");
                    else
                        star = $("<i></i>").addClass("fa fa-star-o").attr("aria-hidden", "true");
                    recipe_stars--;
                    stars.append(star);
                }

                recipe_rating.append(stars);
                rating_div.append(recipe_rating);

                recipe_duration.append(prep_time).append(cook_time).append(portions);
                recipe_heading.append(date).append(heading).append(recipe_duration);
                col_recipe_heading_div.append(recipe_heading);
                row_recipe.append(col_recipe_heading_div).append(rating_div);
                container_recipe.append(row_recipe);
                recipe_content.append(container_recipe);

                $("#recipes").append(container_image).append(recipe_content);
            });

            localStorage.removeItem("recipes-found");

            /*$("#head").html(recipe.head);
            $("#prep").html("Prep: " + recipe.prep);
            $("#cook").html("Cook: " + recipe.cook);
            $("#portions").html("Yields: " + recipe.portions);

            $("#preparation").html('');
            let counter = 1;
            recipe.steps.forEach(step => {
                let whole_step = $("<div></div>").addClass("single-preparation-step d-flex");
                let number = $("<h4></h4>").html("0" + counter + ".");
                counter++;
                let cooking_step = $("<p></p>").html(step);
                whole_step.append(number).append(cooking_step);
                $("#preparation").append(whole_step);
            });

            counter = 1;
            $(".ingredients").html($("<h4></h4>").html("Ingredients"));
            recipe.ingredients.forEach(ingredient => {
                let whole_ingredient = $("<div></div>").addClass("custom-control custom-checkbox");
                let input_checkbox = $("<input>").addClass("custom-control-input").attr("type", "checkbox").attr("id", "customCheck" + counter);
                let ingredient_label = $("<label></label>").addClass("custom-control-label").attr("for", "customCheck" + counter).html(ingredient);
                counter++;

                whole_ingredient.append(input_checkbox).append(ingredient_label);
                $(".ingredients").append(whole_ingredient);
            });

            localStorage.removeItem("food-to-show");*/
        }


        if (localStorage.getItem("appetizer") != null)
            appetizer = JSON.parse(localStorage.getItem("appetizer"));
        else {
            appetizer = [
                {
                    head: "Chopped Pork",
                    prep: "sgbsgfb",
                    cook: "sfgbsfgb",
                    portions: "sfgnsfgn",
                    steps: [
                        "ergergerg",
                        "ergergerg",
                        "irngiobpeitpbn",
                        "oijeoqof"
                    ],
                    ingredients: [
                        "jnr gberugj",
                        "ihweiohfwoijeg",
                        "qhuehroqenfip",
                        "poomefpwn",
                        "iwnoginweg"
                    ],
                    stars: 3
                },
                {
                    head: "Pork n Beef",
                    prep: "sgbsgfb",
                    cook: "sfgbsfgb",
                    portions: "sfgnsfgn",
                    steps: [
                        "ergergerg",
                        "ergergerg",
                        "irngiobpeitpbn",
                        "oijeoqof"
                    ],
                    ingredients: [
                        "jnr gberugj",
                        "ihweiohfwoijeg",
                        "qhuehroqenfip",
                        "poomefpwn",
                        "iwnoginweg"
                    ],
                    stars: 5
                }
            ];

            localStorage.setItem("appetizer", JSON.stringify(appetizer));
        }

        if (localStorage.getItem("main_course") != null)
            main_course = JSON.parse(localStorage.getItem("main_course"));
        else {
            main_course = [
                {
                    head: "",
                    prep: "",
                    cook: "",
                    portions: "",
                    steps: [
        
                    ],
                    ingredients: [
        
                    ],
                }
            ];

            localStorage.setItem("main_course", JSON.stringify(main_course));
        }

        if (localStorage.getItem("dessert") != null)
            dessert = JSON.parse(localStorage.getItem("dessert"));
        else {
            dessert = [
                {
                    head: "",
                    prep: "",
                    cook: "",
                    portions: "",
                    steps: [
        
                    ],
                    ingredients: [
        
                    ],
                }
            ];

            localStorage.setItem("dessert", JSON.stringify(dessert));
        }

        if (localStorage.getItem("snack") != null)
            snack = JSON.parse(localStorage.getItem("snack"));
        else {
            snack = [
                {
                    head: "",
                    prep: "",
                    cook: "",
                    portions: "",
                    steps: [
        
                    ],
                    ingredients: [
        
                    ],
                }
            ];

            localStorage.setItem("snack", JSON.stringify(snack));
        }
    }
})

