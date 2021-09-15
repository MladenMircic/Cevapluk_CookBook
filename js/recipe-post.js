$(document).ready(function () {

    let appetizer = []
    let main_course = []
    let dessert = []
    let snack = []

    initializeStorage();

    function find_recipe(type_of_food, name) {
        let found = false;
        switch (type_of_food) {
            case 'Appetizer': {
                appetizer.forEach(food => {
                    if (food.head.toLowerCase().includes(name.toLowerCase())) {
                        localStorage.setItem("food-to-show", JSON.stringify(food));
                        found = true;
                        return;
                    }
                });
                break;
            }
            case 'Main course': {
                main_course.forEach(food => {
                    if (food.head.toLowerCase().includes(name.toLowerCase())) {
                        localStorage.setItem("food-to-show", JSON.stringify(food));
                        found = true;
                        return;
                    }
                });
                break;
            }
            case 'Dessert': {
                dessert.forEach(food => {
                    if (food.head.toLowerCase().includes(name.toLowerCase())) {
                        localStorage.setItem("food-to-show", JSON.stringify(food));
                        return;
                    }
                });
                break;
            }
            case 'Snack': {
                snack.forEach(food => {
                    if (food.head.toLowerCase().includes(name.toLowerCase())) {
                        localStorage.setItem("food-to-show", JSON.stringify(food));
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

        if (!find_recipe(type_of_food, name))
            localStorage.setItem("error-msg", "No results!");
        
    });

    function initializeStorage() {

        if (localStorage.getItem("error-msg") != null) {
            $(".error-text").html(localStorage.getItem("error-msg"));
            localStorage.removeItem("error-msg");
        }
        else
            $(".error-text").html('');

        if (localStorage.getItem("food-to-show") != null) {
            let recipe = JSON.parse(localStorage.getItem("food-to-show"));
            $("#head").html(recipe.head);
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

            localStorage.removeItem("food-to-show");
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
                    ]
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

