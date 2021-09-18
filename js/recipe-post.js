$(document).ready(function () {

    let appetizer = [];
    let main_course = [];
    let dessert = [];
    let snack = [];
    let predjelo = [];
    let glavno_jelo = [];
    let dezert = [];
    let uzina = [];
    let my_account = {};
    let i = 1;
    let language = localStorage.getItem("language");

    initializePage();

    function find_recipes(type_of_food, name, criteria) {
        let found = [];

        if (language == "eng") {
            if (type_of_food == 'All recipes categories') {
            
                appetizer.forEach(food => {
                    if (name == '' || food.head.toLowerCase().includes(name.toLowerCase()))
                        found.push(food);
                });
    
                main_course.forEach(food => {
                    if (name == '' || food.head.toLowerCase().includes(name.toLowerCase()))
                        found.push(food);
                });
    
                dessert.forEach(food => {
                    if (name == '' || food.head.toLowerCase().includes(name.toLowerCase()))
                        found.push(food);
                });
    
                snack.forEach(food => {
                    if (name == '' || food.head.toLowerCase().includes(name.toLowerCase()))
                        found.push(food);
                });
            }
            else {
                switch (type_of_food != '' ? type_of_food : localStorage.getItem("food-type")) {
                    case 'Appetizer': {
                        appetizer.forEach(food => {
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
            }
        }
        else {
            if (type_of_food == 'Sve kategorije recepata') {
            
                predjelo.forEach(food => {
                    if (name == '' || food.head.toLowerCase().includes(name.toLowerCase()))
                        found.push(food);
                });
    
                glavno_jelo.forEach(food => {
                    if (name == '' || food.head.toLowerCase().includes(name.toLowerCase()))
                        found.push(food);
                });
    
                dezert.forEach(food => {
                    if (name == '' || food.head.toLowerCase().includes(name.toLowerCase()))
                        found.push(food);
                });
    
                uzina.forEach(food => {
                    if (name == '' || food.head.toLowerCase().includes(name.toLowerCase()))
                        found.push(food);
                });
            }
            else {
                switch (type_of_food != '' ? type_of_food : localStorage.getItem("food-type")) {
                    case 'Predjelo': {
                        predjelo.forEach(food => {
                            if (food.head.toLowerCase().includes(name.toLowerCase())) {
                                found.push(food);
                                return;
                            }
                        });
                        break;
                    }
                    case 'Glavno jelo': {
                        glavno_jelo.forEach(food => {
                            if (food.head.toLowerCase().includes(name.toLowerCase())) {
                                found.push(food);
                                return;
                            }
                        });
                        break;
                    }
                    case 'Dezert': {
                        dezert.forEach(food => {
                            if (food.head.toLowerCase().includes(name.toLowerCase())) {
                                found.push(food);
                                return;
                            }
                        });
                        break;
                    }
                    case 'Uzina': {
                        uzina.forEach(food => {
                            if (food.head.toLowerCase().includes(name.toLowerCase())) {
                                found.push(food);
                                return;
                            }
                        });
                        break;
                    }
                }
            }
        }
              

        if (criteria == "Sort by" || criteria == "Sortiraj") {
            for (let i = found.length - 1; i > 0; i--) {
                let change_ind = Math.floor(Math.random() * (i + 1));
                let temp = found[i];
                found[i] = found[change_ind];
                found[change_ind] = temp;
            }
        }
        else if (criteria == "Rating" || criteria == "Ocena") {
            found.sort((first, second) => {
                return second.stars - first.stars;
            });
        }
        else {
            found.sort((first, second) => {
                return second.difficulty - first.difficulty;
            });
        }

        return found;
    }

    $(".delicious-btn").click(function() {
        let selected_options = $(".list").children(".selected");
        let type_of_food = $(selected_options[0]).html();
        let name = $("#food-name").val();
        let sort_criteria = $(selected_options[1]).html();

        if (type_of_food == 'All recipes categories' && name == '' && sort_criteria == "Sort by") {
            return;
        }

        let found_recipes = find_recipes(type_of_food, name, sort_criteria);

        if (found_recipes.length == 0)
            localStorage.setItem("error-msg", "No results!");
        else
            localStorage.setItem("recipes-found", JSON.stringify(found_recipes));
        
    });

    $(".recipe-link").click(function() {
        let recipe_name = $(this).html();
        let found = false;
        appetizer.forEach(food => {
            localStorage.setItem("food-type", "Appetizer");
            if (food.head == recipe_name) {
                localStorage.setItem("recipe-to-show", JSON.stringify(food));
                found = true;
                return;
            }
        });

        if (found)
            return;

        main_course.forEach(food => {
            localStorage.setItem("food-type", "Main course");
            if (food.head == recipe_name) {
                localStorage.setItem("recipe-to-show", JSON.stringify(food));
                found = true;
                return;
            }
        });

        if (found)
            return;

        dessert.forEach(food => {
            localStorage.setItem("food-type", "Dessert");
            if (food.head == recipe_name) {
                localStorage.setItem("recipe-to-show", JSON.stringify(food));
                found = true;
                return;
            }
        });

        if (found)
            return;

        snack.forEach(food => {
            localStorage.setItem("food-type", "Snack");
            if (food.head == recipe_name) {
                localStorage.setItem("recipe-to-show", JSON.stringify(food));
                found = true;
                return;
            }
        });

    });

    function append_recipes(recipes) {

        recipes.forEach(recipe => {
            let container_image = $("<div></div>").addClass("container");
            let row_image = $("<div></div>").addClass("row");
            let col_image = $("<div></div>").addClass("col-12 recipe-image");
            
            const recipe_image_failsafe = new Image();

            let recipe_image = $("<img>").attr("alt", "");

            recipe_image_failsafe.src = "img/" + recipe.head + ".jpg";
            recipe_image_failsafe.onload = () => {
                recipe_image.attr("src", "img/" + recipe.head + ".jpg");
            }
            recipe_image_failsafe.onerror = () => {
                recipe_image.attr("src", "img/blog-img/1.jpg");
            }

            col_image.append(recipe_image);
            row_image.append(col_image);
            container_image.append(row_image);

            let recipe_content = $("<div></div>").addClass("receipe-content-area");
            let container_recipe = $("<div></div>").addClass("container");
            let row_recipe = $("<div></div>").addClass("row");
            let col_recipe_heading_div = $("<div></div>").addClass("col-12 col-md-8");

            let recipe_heading = $("<div></div>").addClass("receipe-headline my-5");
            let date = $("<span></span>");
            let heading_link = $("<a></a>").attr("href", "receipe-post-" + language + ".html");
            let heading = $("<h2></h2>").html(recipe.head).addClass("recipe-link");
            let recipe_duration = $("<div></div>").addClass("receipe-duration");
            let prep_time = $("<h6></h6>");
            let cook_time = $("<h6></h6>");
            let portions = $("<h6></h6>");

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

            heading_link.append(heading)
            recipe_duration.append(prep_time).append(cook_time).append(portions);
            recipe_heading.append(date).append(heading_link).append(recipe_duration);
            col_recipe_heading_div.append(recipe_heading);
            row_recipe.append(col_recipe_heading_div).append(rating_div);
            container_recipe.append(row_recipe);
            recipe_content.append(container_recipe);

            if (language == "eng") {
                prep_time.html("Prep: " + recipe.prep);
                cook_time.html("Cook: " + recipe.cook);
                portions.html("Yields: " + recipe.portions);
                date.html("January 05, 2021")
            }
            else {
                prep_time.html("Priprema: " + recipe.prep);
                cook_time.html("Kuvanje: " + recipe.cook);
                portions.html("Porcije: " + recipe.portions);
                date.html("Januar 05, 2021")
            }

            $("#recipes").append(container_image).append(recipe_content);
        });
    }

    $("#submit-comment").click(function() {
        let comment = $(".new-comment").val();
        $(".new-comment").val('');

        let comment_area = $("<div></div>").addClass("contact-form-area").css("opacity", 0);
        let comment_text = $("<input>")
                            .addClass("form-control")
                            .attr("type", "text")
                            .attr("disabled", "true")
                            .attr("id", "comment" + i)
                            .val(comment);

        let author_data = $("<div></div>").addClass("author-section").attr("id", "by" + i);
        let author_profile_link = $("<a></a>").attr("href", "#").addClass("author-name");
        author_profile_link.html("Mladen Mircic");
        author_data.append("by ").append(author_profile_link);

        comment_area.append(comment_text).append(author_data);
        $(".comment-section").append(comment_area);

        ScrollReveal().reveal("#comment" + i, {
            delay: 500,
            distance: "100%",
            origin: "left",
            easing: "ease-in-out" 
        })
        ScrollReveal().reveal("#by" + i, {
            delay: 500,
            distance: "100%",
            origin: "left",
            easing: "ease-in-out"
        });

        setTimeout(function() {
            comment_area.css("opacity", 1);
        }, 500);
        i++;
        
        set_new_comment(comment);
    });

    function set_new_comment(comment) {
        my_account.comments.push({
            head: $("#heading").html(),
            comment: comment
        });

        let name = $("#heading").html();
        my_account.recipes.forEach(recipe => {
            if (recipe.head == name) {
                recipe.comments.push({
                    head: $("#heading").html(),
                    author: "Mladen Mircic",
                    comment: comment
                });
                return;
            }
        });

        localStorage.setItem("my-account", JSON.stringify(my_account));

        if (language == "eng") {
            for (let i = 0; i < appetizer.length; i++) {
                if (appetizer[i].head == name) {
                    appetizer[i].comments.push({
                        author: "Mladen Mircic",
                        comment: comment
                    });
                    predjelo[i].comments.push({
                        author: "Mladen Mircic",
                        comment: comment
                    });
                }
            }
            for (let i = 0; i < main_course.length; i++) {
                if (main_course[i].head == name) {
                    main_course[i].comments.push({
                        author: "Mladen Mircic",
                        comment: comment
                    });
                    glavno_jelo[i].comments.push({
                        author: "Mladen Mircic",
                        comment: comment
                    });
                }
            }
            for (let i = 0; i < dessert.length; i++) {
                if (dessert[i].head == name) {
                    dessert[i].comments.push({
                        author: "Mladen Mircic",
                        comment: comment
                    });
                    dezert[i].comments.push({
                        author: "Mladen Mircic",
                        comment: comment
                    });
                }
            }
            for (let i = 0; i < snack.length; i++) {
                if (snack[i].head == name) {
                    snack[i].comments.push({
                        author: "Mladen Mircic",
                        comment: comment
                    });
                    uzina[i].comments.push({
                        author: "Mladen Mircic",
                        comment: comment
                    });
                }
            }
        }
        else {
            for (let i = 0; i < predjelo.length; i++) {
                if (predjelo[i].head == name) {
                    appetizer[i].comments.push({
                        author: "Mladen Mircic",
                        comment: comment
                    });
                    predjelo[i].comments.push({
                        author: "Mladen Mircic",
                        comment: comment
                    });
                }
            }
            for (let i = 0; i < glavno_jelo.length; i++) {
                if (glavno_jelo[i].head == name) {
                    main_course[i].comments.push({
                        author: "Mladen Mircic",
                        comment: comment
                    });
                    glavno_jelo[i].comments.push({
                        author: "Mladen Mircic",
                        comment: comment
                    });
                }
            }
            for (let i = 0; i < dezert.length; i++) {
                if (dezert[i].head == name) {
                    dessert[i].comments.push({
                        author: "Mladen Mircic",
                        comment: comment
                    });
                    dezert[i].comments.push({
                        author: "Mladen Mircic",
                        comment: comment
                    });
                }
            }
            for (let i = 0; i < uzina.length; i++) {
                if (uzina[i].head == name) {
                    snack[i].comments.push({
                        author: "Mladen Mircic",
                        comment: comment
                    });
                    uzina[i].comments.push({
                        author: "Mladen Mircic",
                        comment: comment
                    });
                }
            }
        }
    }

    function initializeStorage() {
        my_account = JSON.parse(localStorage.getItem("my-account"));


        if (language == "eng") {
            if (localStorage.getItem("appetizer") != null)
                appetizer = JSON.parse(localStorage.getItem("appetizer"));
            else {
                appetizer = [
                    {
                        head: "Cheese plate",
                        prep: "30 mins",
                        cook: "/",
                        portions: "4 Servings",
                        steps: [
                            "Start with the big items: bowls and cheese. Cheese should be served at room temperature.",
                            "Add meats, bread and crackers. You can add your meats a few different ways: in simple stack, fanned out in a line or half-circle or by folding larger pieces into fun shapes.",
                            "Fill in big spaces with fruit and nuts. Also, add some olives and fill any small bowls.",
                            "Tuck some greenery into any space that's still empty."
                        ],
                        ingredients: [
                            "Cheese (choose 3-5)",
                            "Fruit and vegetables (choose 1-3)",
                            "Nuts (choose 2)",
                            "Bread or crackers (choose 2-4)"
                        ],
                        stars: 5,
                        comments: [ 
                            {
                                author: "Mladen Mircic",
                                comment: 'Fantastik Bombastik'
                            },
                            {
                                author: "Mladen Mircic",
                                comment: 'Prefinjen ukus & miris'
                            },
                            {
                                author: "Mladen Mircic",
                                comment: 'Dominacija od \'rane nema sta!'
                            },
                        ]
                    },{
                        head: "Russian salad",
                        prep: "1 hr",
                        cook: "30 mins",
                        portions: "4 Servings",
                        steps: [
                            "Bring a large pot of water to boil; add potatoes and carrot. Return mixture to a boil and add eggs; cook until potatoes are tender, 20 to 30 minutes. Drain and slightly cool mixture. Chop potatoes and carrot; peel and chop eggs.",
                            "Mix potatoes, carrot, eggs, pickles, peas, ham and parsley together in a large bowl; stir in mayonnaise until salad is evenly coated."
                        ],
                        ingredients: [
                            "6 potatoes, peeled",
                            "1 carrot, or more to taste",
                            "4 eggs",
                            "6 large pickles, cut into cubes",
                            "1 (15 ounce) can peas, drained",
                            "1/2 cup cubed fully cooked ham, or to taste",
                            "1 tablespoon chopped fresh parsley, or to taste",
                            "1/2 cup of mayonnaise, or to taste"
                        ],
                        stars: 3,
                        comments: [ 
                            {
                                author: "Mladen Mircic",
                                comment: 'Fantastik Bombastik'
                            },
                            {
                                author: "Mladen Mircic",
                                comment: 'Prefinjen ukus & miris'
                            },
                            {
                                author: "Mladen Mircic",
                                comment: 'Dominacija od \'rane nema sta!'
                            },
                        ]
                    },{
                        head: "Dreamy fruit dip",
                        prep: "15 mins",
                        cook: "/",
                        portions: "4 Servings",
                        steps: [
                            "In a small bowl, beat cream cheese and butter until smooth. Beat in marshmallow creme. Fold in whipped topping. Serve with fruit. Store in the refrigerator."
                        ],
                        ingredients: [
                            "1 package (8 ounces) cream cheese",
                            "1/2 cup butter, softened",
                            "1/2 cup marshmallow creme",
                            "1 carton (8 ounces) frozen whipped topping, thawed",
                            "Assorted fresh fruit"
                        ],
                        stars: 4,
                        comments: [ 
                            {
                                author: "Mladen Mircic",
                                comment: 'Fantastik Bombastik'
                            },
                            {
                                author: "Mladen Mircic",
                                comment: 'Prefinjen ukus & miris'
                            },
                            {
                                author: "Mladen Mircic",
                                comment: 'Dominacija od \'rane nema sta!'
                            },
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
                        head: "Sarma",
                        prep: "3 hrs",
                        cook: "2 hrs 15 mins",
                        portions: "5 Servings",
                        steps: [
                            "First of all wash cabbage and remove the hard piece of stem in the bottom of the leaf. Be carefull and try not to make hole. Leave a side.",
                            "Fry chopped onion in 2 tbs oil until golden brown. Add splash of water and cook until liquid evaporates and onion are soften, stirring occasionally.",
                            "Add chopped carrot, stir once, add beef, stir again and let it cook for about 15 minutes. Stir occasionally with wooden spoon to break the beef lumps.",
                            "Now it's time to add rice. It's very important to stir constantly when you add it. Cook fot another 5 minutes and remove from heat.",
                            "Season with salt, ground pepper, ground chilly and finelly chopped parsley. Pre-heat the oven to 250 degrees C and prepare baking dish 20x28cm.",
                            "Now you fill the cabbage. Place a spoon of beef in the middle of bottom the leaf. Fold from left then fold from right. Roll the cabbage keeping fingers firmly on the side.",
                            "Place rolls in oiled baking dish. Sprinkle with chilly and parsley. Place bacon slices in the middle. Pour 1 and ⅔ cup of water in.",
                            "Bake covered for 1 hour then reduce temperature to 200 degrees C and bake for another 1 hour.",
                            "In the end, fry shortly flour with 5 tbs of oil in small sauce pan, stirring constantlly and adding chilly gradually. In the same time remove baking dish from the oven, pour ⅔ cup of water and mixture of flour, oil and chilly. Put uncovered dish in the oven for another 15 minutes.",
                            "Serve hot!"
                        ],
                        ingredients: [
                            "20 small sour cabbage leaves",
                            "1 pound (450g) minced beef",
                            "1 onion, finelly chopped",
                            "1 small carrot, finelly chopped",
                            "1/4 cup (50g) rice",
                            "salt, pepper, to taste",
                            "ground chilly, to taste",
                            "7 tbs (105ml) vegetable oil",
                            "2 tbs (30g) flour",
                            "bunch of parsley",
                            "extra chilly and parsley for sprinkling",
                            "4-5 slices of smoked ham or bacon",
                            "1 and 2/3 cup (400ml) water + 2/3 cup (160ml)"
                        ],
                        stars: 3,
                        comments: [ 
                            {
                                author: "Mladen Mircic",
                                comment: 'Fantastik Bombastik'
                            },
                            {
                                author: "Mladen Mircic",
                                comment: 'Prefinjen ukus & miris'
                            },
                            {
                                author: "Mladen Mircic",
                                comment: 'Dominacija od \'rane nema sta!'
                            },
                        ]
                    }, 
                    {
                        head: "Stuffed Peppers",
                        prep: "1 hr 20 mins",
                        cook: "10 mins",
                        portions: "6 Servings",
                        steps: [
                            "Preheat oven to 400°. In a small saucepan, prepare rice according to package instructions. In a large skillet over medium heat, heat oil. Cook onion until soft, about 5 minutes. Stir in tomato paste and garlic and cook until fragrant, about 1 minute more. Add ground beef and cook, breaking up meat with a wooden spoon, until no longer pink, 6 minutes. Drain fat.",
                            "Return beef mixture to skillet, then stir in cooked rice and diced tomatoes. Season with oregano, salt, and pepper. Let simmer until liquid has reduced slightly, about 5 minutes.",
                            "Place peppers cut side-up in a baking dish and drizzle with oil. Spoon beef mixture into each pepper and top with Monterey jack, then cover baking dish with foil.",
                            "Bake until peppers are tender, about 35 minutes. Uncover and bake until cheese is bubbly, 10 minutes more.",
                            "Garnish with parsley before serving."
                        ],
                        ingredients: [
                            "1/2 c. uncooked rice",
                            "2 tbsp. extra-virgin olive oil, plus more for drizzling",
                            "1 medium onion, chopped",
                            "2 tbsp. tomato paste",
                            "3 cloves garlic, minced",
                            "1 lb. ground beef",
                            "1 (14.5-oz.) can diced tomatoes",
                            "1 1/2 tsp. dried oregano",
                            "Kosher salt",
                            "Freshly ground black pepper",
                            "6 bell peppers, tops and cores removed",
                            "1 c. shredded Monterey jack",
                            "Freshly chopped parsley, for garnish"
                        ],
                        stars: 2,
                        comments: [ 
                            {
                                author: "Mladen Mircic",
                                comment: 'Fantastik Bombastik'
                            },
                            {
                                author: "Mladen Mircic",
                                comment: 'Prefinjen ukus & miris'
                            },
                            {
                                author: "Mladen Mircic",
                                comment: 'Dominacija od \'rane nema sta!'
                            },
                        ]
                    }, 
                    {
                        head: "Karadjordje Steak",
                        prep: "1 hr",
                        cook: "15 mins",
                        portions: "4 Servings",
                        steps: [
                            "Pound pork steaks untill they are thin and soft and on each steak put a little kajmak (or cream cheese).",
                            "Wrap the meat into the rolls and secure each piece with a toothpick.",
                            "Coat the steaks in the flour, then dip them into beaten eggs and finally roll in bread crumbs.",
                            "Fry in hot oil untill golden yellow."
                        ],
                        ingredients: [
                            "500 g boneless pork steaks",
                            "150 g kajmak (Serbian creamy dairy product) – you can use some cream cheese instead",
                            "2 eggs",
                            "flour",
                            "bread crumbs",
                            "salt"
                        ],
                        stars: 5,
                        comments: [ 
                            {
                                author: "Mladen Mircic",
                                comment: 'Fantastik Bombastik'
                            },
                            {
                                author: "Mladen Mircic",
                                comment: 'Prefinjen ukus & miris'
                            },
                            {
                                author: "Mladen Mircic",
                                comment: 'Dominacija od \'rane nema sta!'
                            },
                        ]
                    }
                ];

                localStorage.setItem("main_course", JSON.stringify(main_course));
            }

            if (localStorage.getItem("dessert") != null)
                dessert = JSON.parse(localStorage.getItem("dessert"));
            else {
                dessert = [
                    {
                        head: "Vanilice",
                        prep: "1 hr",
                        cook: "15 mins",
                        portions: "60 Cookies",
                        steps: [
                            "A couple of days before making the cookies, mix the confectioners' sugar with the vanilla bean in a small bowl with a tight lid. This is your vanilla sugar. Store in a dry place.",
                            "In a mixer fitted with the paddle, beat the lard with the granulated sugar until creamy. Beat in the egg, egg yolks, lemon juice and lemon zest. Add the walnuts and flour and beat until a uniform dough forms. Cover the dough and refrigerate for at least 3 hours or overnight.",
                            "Preheat the oven to 325° F convection bake (or 350° regular bake). Place the dough on a work surface dusted with flour and roll it out to a 1/4-inch-thick round. Line two baking sheets with parchment paper. Using a small round cookie cutter (I use 1-inch or quarter-size cutters), stamp out the cookies and arrange them one inch apart on the baking sheets.",
                            "Bake for about 12 minutes, so that the rounds remain white. Let the cookies cool on the baking sheets for 5 minutes, and then transfer to a wire rack or flat surface to cool completely.",
                            "Once the cookies are cool, take one cookie round at a time, spread the jam on it, and top with another cookie round.",
                            "Roll each cookie sandwich generously in the vanilla sugar. Put the cookies into a tin box, and wait for one to two days before serving."
                        ],
                        ingredients: [
                            "200 grams confectioners' sugar",
                            "1 vanilla bean, cut into 1/2 inch pieces",
                            "300 grams lard (ideally leaf lard)",
                            "250 grams granulated sugar",
                            "1 whole egg",
                            "2 egg yolks",
                            "Juice of one lemon",
                            "1 teaspoon finely grated lemon zest",
                            "250 grams ground walnuts",
                            "600 grams all-purpose flour",
                            "Rose hip or apricot jam"
                        ],
                        stars: 4,
                        comments: [ 
                            {
                                author: "Mladen Mircic",
                                comment: 'Fantastik Bombastik'
                            },
                            {
                                author: "Mladen Mircic",
                                comment: 'Prefinjen ukus & miris'
                            },
                            {
                                author: "Mladen Mircic",
                                comment: 'Dominacija od \'rane nema sta!'
                            },
                        ]
                    },{
                        head: "Apple pie",
                        prep: "1 hr 30 mins",
                        cook: "45 mins",
                        portions: "6 Servings",
                        steps: [
                            "Preheat oven to 375°. In a small bowl, combine sugars, flour and spices; set aside. In a large bowl, toss apples with lemon juice. Add sugar mixture; toss to coat.",
                            "On a lightly floured surface, roll one half of the dough to a 1/8-in.-thick circle; transfer to a 9-in. pie plate. Trim even with rim. Add filling; dot with butter. Roll remaining dough to a 1/8-in.-thick circle. Place overfilling. Trim, seal and flute edge. Cut slits in top. Beat egg white until foamy; brush over crust. Sprinkle with sugar. Cover edge loosely with foil.",
                            "Bake 25 minutes. Remove foil; bake until crust is golden brown and filling is bubbly, 20-25 minutes longer. Cool on a wire rack."
                        ],
                        ingredients: [
                            "1/2 cup sugar",
                            "1/2 cup packed brown sugar",
                            "3 tablespoons all-purpose flour",
                            "1 teaspoon ground cinnamon",
                            "1/4 teaspoon ground ginger",
                            "1/4 teaspoon ground nutmeg",
                            "6 to 7 cups thinly sliced peeled tart apples",
                            "1 tablespoon lemon juice",
                            "Dough for double-crust pie",
                            "1 tablespoon butter",
                            "1 large egg white",
                            "Additional sugar"
                        ],
                        stars: 3,
                        comments: [ 
                            {
                                author: "Mladen Mircic",
                                comment: 'Fantastik Bombastik'
                            },
                            {
                                author: "Mladen Mircic",
                                comment: 'Prefinjen ukus & miris'
                            },
                            {
                                author: "Mladen Mircic",
                                comment: 'Dominacija od \'rane nema sta!'
                            },
                        ]
                    },{
                        head: "Tart Cherry Pie",
                        prep: "2 hrs",
                        cook: "1 hr",
                        portions: "12 - 16 Servings",
                        steps: [
                            "Place the pitted cherries in a non-staining mixing bowl; use your fingers to double-check for pits. Add the tapioca, lemon zest and tablespoon of confectioners' sugar; stir to incorporate thoroughly. Let the mixture sit at room temperature for 15 minutes, during which time the fruit's juices will thicken.",
                            "Meanwhile, unroll the sheets of filo dough. Immediately cover them with a clean, slightly damp dish towel. Position oven racks in the upper and lower thirds of the oven; preheat to 350 degrees.",
                            "Combine the vegetable oil, olive oil and butter in a liquid measuring cup. Drizzle a little of the oils/butter mixture on a large rimmed baking sheet, then warm the sheet in the oven for 2 or 3 minutes. Position the baking sheet with a wide side facing you, placing it between the bowl of fruit and the stack of filo dough.",
                            "Layer two sheets of the filo dough on the baking sheet so the bottom one becomes coated with the oils/butter. Quickly flip them over, then layer on two more sheets. Drizzle the top sheet of filo dough with a bit of the oils/butter mixture.",
                            "Leaving a 1-inch margin at the edge, spread 1/4 of the sour cream in a 1-inch-wide swath along the edge of the filo closest to you, then spread one-quarter of the cherry mixture in a parallel line an inch away from the sour cream. For variety, or if you run short on cherries, sprinkle the fruit with some dried cranberries, currants or raisins.",
                            "Pick up the corners of filo dough closest to you as you gently make one fold/roll away from you. Brush the top of the roll with a little of the oils/butter mixture, then keep folding in and rolling until you reach the far end of the dough. If the dough cracks, use a little water or some of the oils/buttter mixture to paste it back together.",
                            "Repeat the process to create three more filled filo rolls, using the remaining sour cream and cherry mixture, reserving enough of the oils/butter mixture for a final brushing. Unused sheets of filo dough can be wrapped tightly in plastic wrap and refrigerated or frozen for up to 2 weeks. Arrange the filled filo rolls on the greased baking sheet, spaced evenly apart.",
                            "Use the remaining oils/butter mixture (rewarm as needed) to brush the tops of each roll. Bake for 15 minutes on the lower oven rack, then transfer to the upper middle rack, turning the baking sheet front to back; bake for 15 to 20 minutes, until golden brown and crisped on the edges.",
                            "Cool on the baking sheet for about 10 minutes. Use a thin spatula to release the bottoms as needed. Working with one cherry roll at a time, transfer to a cutting board.",
                            "At this point, the rolls can be wrapped in aluminum foil and refrigerated for a day. Unwrap, place on a greased baking sheet and reheat in a 300-degree oven until warmed through.",
                            "To serve, slice each cherry roll on the diagonal into three or 4 equal pieces and arrange on a serving tray. Use a fine-mesh strainer to sift confectioners' sugar over the top of each piece."
                        ],
                        ingredients: [
                            "48 ounces (5 to 6 cups) fresh pitted sour cherries; may substitute two 48-ounce jars pitted sour cherries, drained; see headnote)",
                            "Generous 1 tablespoon powdered tapioca pudding",
                            "Grated zest of 1 lemon",
                            "1 heaping tablespoon of confectioners' sugar, plus more for dusting",
                            "1 pound thin filo dough, preferably Apollo brand",
                            "1/4 cup vegetable oil",
                            "1/4 cup mild/light olive oil",
                            "8 tablespoons (1 stick) unsalted butter, melted and warm",
                            "1/2 cup regular or low-fat sour cream",
                            "Dried unsweetened cranberries, currants or raisins (optional)",
                            "Water (optional)"
                        ],
                        stars: 1,
                        comments: [ 
                            {
                                author: "Mladen Mircic",
                                comment: 'Fantastik Bombastik'
                            },
                            {
                                author: "Mladen Mircic",
                                comment: 'Prefinjen ukus & miris'
                            },
                            {
                                author: "Mladen Mircic",
                                comment: 'Dominacija od \'rane nema sta!'
                            },
                        ]
                    }
                ];

                localStorage.setItem("dessert", JSON.stringify(dessert));
            }

            if (localStorage.getItem("snack") != null)
                snack = JSON.parse(localStorage.getItem("snack"));
            else {
                snack = [
                    {
                        head: "Komplet lepinja",
                        prep: "15 mins",
                        cook: "10 mins",
                        portions: "1 Serving",
                        steps: [
                            "Cut the bun horizontally creating a slight dent in the middle so that the bun resembles a pot with a lid. Spread kajmak over the lower part of the bun. Whisk an egg and spread it across the kajmak. Then put the lower part of the bun in a heated oven and bake for about 10 minutes (depending how crispy you like your bun). Put the upper part of the bun in the stove just before you take out the lower so that it can be nice and warm too. After baking them, take the buns and pour hot pretop over them."
                        ],
                        ingredients: [
                            "Fresh flat bun",
                            "Kajmak",
                            "An egg",
                            "Pretop (a lard-like substance left after roasting pork or lamb)"
                        ],
                        stars: 4,
                        comments: [ 
                            {
                                author: "Mladen Mircic",
                                comment: 'Fantastik Bombastik'
                            },
                            {
                                author: "Mladen Mircic",
                                comment: 'Prefinjen ukus & miris'
                            },
                            {
                                author: "Mladen Mircic",
                                comment: 'Dominacija od \'rane nema sta!'
                            },
                        ]
                    },
                    {
                        head: "Kajmak",
                        prep: "10 mins",
                        cook: "/",
                        portions: "1 Serving",
                        steps: [
                            "In a bowl whisk the butter with a fork until it’s fluffy. Add crumbled feta cheese and sour cream. Mix it all well. Note: You don’t need to add salt to the kajmak as the feta cheese is salty on its own. If you like a more mild kajmak, add some cream. This 5 minute kajmak makes a wonderful spread and goes great with ćavaps."
                        ],
                        ingredients: [
                            "100 g butter",
                            "100 g hard feta cheese",
                            "100 gr sour cream"
                        ],
                        stars: 5,
                        comments: [ 
                            {
                                author: "Mladen Mircic",
                                comment: 'Fantastik Bombastik'
                            },
                            {
                                author: "Mladen Mircic",
                                comment: 'Prefinjen ukus & miris'
                            },
                            {
                                author: "Mladen Mircic",
                                comment: 'Dominacija od \'rane nema sta!'
                            },
                        ]
                    },
                    {
                        head: "Fruit Salad",
                        prep: "15 mins",
                        cook: "/",
                        portions: "10 Servings",
                        steps: [
                            "Bring orange juice, lemon juice, brown sugar, orange zest, and lemon zest to a boil in a saucepan over medium-high heat. Reduce heat to medium-low, and simmer until slightly thickened, about 5 minutes. Remove from heat, and stir in vanilla extract. Set aside to cool.",
                            "Layer the fruit in a large, clear glass bowl in this order: pineapple, strawberries, kiwi fruit, bananas, oranges, grapes, and blueberries. Pour the cooled sauce over the fruit. Cover and refrigerate for 3 to 4 hours before serving."
                        ],
                        ingredients: [
                            "⅔ cup fresh orange juice",
                            "¼ cup and 1 tablespoon and 1 teaspoons fresh lemon juice",
                            "¼ cup and 1 tablespoon and 1 teaspoons packed brown sugar",
                            "½ teaspoon grated orange zest",
                            "½ teaspoon grated lemon zest",
                            "1 teaspoons vanilla extract",
                            "2 cups cubed fresh pineapple",
                            "2 cups strawberries, hulled and sliced",
                            "3 kiwi fruit, peeled and sliced",
                            "3 bananas, sliced",
                            "2 oranges, peeled and sectioned",
                            "1 cups seedless grapes",
                            "2 cups blueberries"
                        ],
                        stars: 5,
                        comments: [ 
                            {
                                author: "Mladen Mircic",
                                comment: 'Fantastik Bombastik'
                            },
                            {
                                author: "Mladen Mircic",
                                comment: 'Prefinjen ukus & miris'
                            },
                            {
                                author: "Mladen Mircic",
                                comment: 'Dominacija od \'rane nema sta!'
                            },
                        ]
                    }
                ];

                localStorage.setItem("snack", JSON.stringify(snack));
            }
        }
        else {
            if (localStorage.getItem("appetizer") != null)
                appetizer = JSON.parse(localStorage.getItem("appetizer"));
            else {
                appetizer = [
                    {
                        head: "Cheese plate",
                        prep: "30 mins",
                        cook: "/",
                        portions: "4 Servings",
                        steps: [
                            "Start with the big items: bowls and cheese. Cheese should be served at room temperature.",
                            "Add meats, bread and crackers. You can add your meats a few different ways: in simple stack, fanned out in a line or half-circle or by folding larger pieces into fun shapes.",
                            "Fill in big spaces with fruit and nuts. Also, add some olives and fill any small bowls.",
                            "Tuck some greenery into any space that's still empty."
                        ],
                        ingredients: [
                            "Cheese (choose 3-5)",
                            "Fruit and vegetables (choose 1-3)",
                            "Nuts (choose 2)",
                            "Bread or crackers (choose 2-4)"
                        ],
                        stars: 5,
                        comments: [ 
                            {
                                author: "Mladen Mircic",
                                comment: 'Fantastik Bombastik'
                            },
                            {
                                author: "Mladen Mircic",
                                comment: 'Prefinjen ukus & miris'
                            },
                            {
                                author: "Mladen Mircic",
                                comment: 'Dominacija od \'rane nema sta!'
                            },
                        ]
                    },{
                        head: "Russian salad",
                        prep: "1 hr",
                        cook: "30 mins",
                        portions: "4 Servings",
                        steps: [
                            "Bring a large pot of water to boil; add potatoes and carrot. Return mixture to a boil and add eggs; cook until potatoes are tender, 20 to 30 minutes. Drain and slightly cool mixture. Chop potatoes and carrot; peel and chop eggs.",
                            "Mix potatoes, carrot, eggs, pickles, peas, ham and parsley together in a large bowl; stir in mayonnaise until salad is evenly coated."
                        ],
                        ingredients: [
                            "6 potatoes, peeled",
                            "1 carrot, or more to taste",
                            "4 eggs",
                            "6 large pickles, cut into cubes",
                            "1 (15 ounce) can peas, drained",
                            "1/2 cup cubed fully cooked ham, or to taste",
                            "1 tablespoon chopped fresh parsley, or to taste",
                            "1/2 cup of mayonnaise, or to taste"
                        ],
                        stars: 3,
                        comments: [ 
                            {
                                author: "Mladen Mircic",
                                comment: 'Fantastik Bombastik'
                            },
                            {
                                author: "Mladen Mircic",
                                comment: 'Prefinjen ukus & miris'
                            },
                            {
                                author: "Mladen Mircic",
                                comment: 'Dominacija od \'rane nema sta!'
                            },
                        ]
                    },{
                        head: "Dreamy fruit dip",
                        prep: "15 mins",
                        cook: "/",
                        portions: "4 Servings",
                        steps: [
                            "In a small bowl, beat cream cheese and butter until smooth. Beat in marshmallow creme. Fold in whipped topping. Serve with fruit. Store in the refrigerator."
                        ],
                        ingredients: [
                            "1 package (8 ounces) cream cheese",
                            "1/2 cup butter, softened",
                            "1/2 cup marshmallow creme",
                            "1 carton (8 ounces) frozen whipped topping, thawed",
                            "Assorted fresh fruit"
                        ],
                        stars: 4,
                        comments: [ 
                            {
                                author: "Mladen Mircic",
                                comment: 'Fantastik Bombastik'
                            },
                            {
                                author: "Mladen Mircic",
                                comment: 'Prefinjen ukus & miris'
                            },
                            {
                                author: "Mladen Mircic",
                                comment: 'Dominacija od \'rane nema sta!'
                            },
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
                        head: "Sarma",
                        prep: "3 hrs",
                        cook: "2 hrs 15 mins",
                        portions: "5 Servings",
                        steps: [
                            "First of all wash cabbage and remove the hard piece of stem in the bottom of the leaf. Be carefull and try not to make hole. Leave a side.",
                            "Fry chopped onion in 2 tbs oil until golden brown. Add splash of water and cook until liquid evaporates and onion are soften, stirring occasionally.",
                            "Add chopped carrot, stir once, add beef, stir again and let it cook for about 15 minutes. Stir occasionally with wooden spoon to break the beef lumps.",
                            "Now it's time to add rice. It's very important to stir constantly when you add it. Cook fot another 5 minutes and remove from heat.",
                            "Season with salt, ground pepper, ground chilly and finelly chopped parsley. Pre-heat the oven to 250 degrees C and prepare baking dish 20x28cm.",
                            "Now you fill the cabbage. Place a spoon of beef in the middle of bottom the leaf. Fold from left then fold from right. Roll the cabbage keeping fingers firmly on the side.",
                            "Place rolls in oiled baking dish. Sprinkle with chilly and parsley. Place bacon slices in the middle. Pour 1 and ⅔ cup of water in.",
                            "Bake covered for 1 hour then reduce temperature to 200 degrees C and bake for another 1 hour.",
                            "In the end, fry shortly flour with 5 tbs of oil in small sauce pan, stirring constantlly and adding chilly gradually. In the same time remove baking dish from the oven, pour ⅔ cup of water and mixture of flour, oil and chilly. Put uncovered dish in the oven for another 15 minutes.",
                            "Serve hot!"
                        ],
                        ingredients: [
                            "20 small sour cabbage leaves",
                            "1 pound (450g) minced beef",
                            "1 onion, finelly chopped",
                            "1 small carrot, finelly chopped",
                            "1/4 cup (50g) rice",
                            "salt, pepper, to taste",
                            "ground chilly, to taste",
                            "7 tbs (105ml) vegetable oil",
                            "2 tbs (30g) flour",
                            "bunch of parsley",
                            "extra chilly and parsley for sprinkling",
                            "4-5 slices of smoked ham or bacon",
                            "1 and 2/3 cup (400ml) water + 2/3 cup (160ml)"
                        ],
                        stars: 3,
                        comments: [ 
                            {
                                author: "Mladen Mircic",
                                comment: 'Fantastik Bombastik'
                            },
                            {
                                author: "Mladen Mircic",
                                comment: 'Prefinjen ukus & miris'
                            },
                            {
                                author: "Mladen Mircic",
                                comment: 'Dominacija od \'rane nema sta!'
                            },
                        ]
                    }, 
                    {
                        head: "Stuffed Peppers",
                        prep: "1 hr 20 mins",
                        cook: "10 mins",
                        portions: "6 Servings",
                        steps: [
                            "Preheat oven to 400°. In a small saucepan, prepare rice according to package instructions. In a large skillet over medium heat, heat oil. Cook onion until soft, about 5 minutes. Stir in tomato paste and garlic and cook until fragrant, about 1 minute more. Add ground beef and cook, breaking up meat with a wooden spoon, until no longer pink, 6 minutes. Drain fat.",
                            "Return beef mixture to skillet, then stir in cooked rice and diced tomatoes. Season with oregano, salt, and pepper. Let simmer until liquid has reduced slightly, about 5 minutes.",
                            "Place peppers cut side-up in a baking dish and drizzle with oil. Spoon beef mixture into each pepper and top with Monterey jack, then cover baking dish with foil.",
                            "Bake until peppers are tender, about 35 minutes. Uncover and bake until cheese is bubbly, 10 minutes more.",
                            "Garnish with parsley before serving."
                        ],
                        ingredients: [
                            "1/2 c. uncooked rice",
                            "2 tbsp. extra-virgin olive oil, plus more for drizzling",
                            "1 medium onion, chopped",
                            "2 tbsp. tomato paste",
                            "3 cloves garlic, minced",
                            "1 lb. ground beef",
                            "1 (14.5-oz.) can diced tomatoes",
                            "1 1/2 tsp. dried oregano",
                            "Kosher salt",
                            "Freshly ground black pepper",
                            "6 bell peppers, tops and cores removed",
                            "1 c. shredded Monterey jack",
                            "Freshly chopped parsley, for garnish"
                        ],
                        stars: 2,
                        comments: [ 
                            {
                                author: "Mladen Mircic",
                                comment: 'Fantastik Bombastik'
                            },
                            {
                                author: "Mladen Mircic",
                                comment: 'Prefinjen ukus & miris'
                            },
                            {
                                author: "Mladen Mircic",
                                comment: 'Dominacija od \'rane nema sta!'
                            },
                        ]
                    }, 
                    {
                        head: "Karadjordje Steak",
                        prep: "1 hr",
                        cook: "15 mins",
                        portions: "4 Servings",
                        steps: [
                            "Pound pork steaks untill they are thin and soft and on each steak put a little kajmak (or cream cheese).",
                            "Wrap the meat into the rolls and secure each piece with a toothpick.",
                            "Coat the steaks in the flour, then dip them into beaten eggs and finally roll in bread crumbs.",
                            "Fry in hot oil untill golden yellow."
                        ],
                        ingredients: [
                            "500 g boneless pork steaks",
                            "150 g kajmak (Serbian creamy dairy product) – you can use some cream cheese instead",
                            "2 eggs",
                            "flour",
                            "bread crumbs",
                            "salt"
                        ],
                        stars: 5,
                        comments: [ 
                            {
                                author: "Mladen Mircic",
                                comment: 'Fantastik Bombastik'
                            },
                            {
                                author: "Mladen Mircic",
                                comment: 'Prefinjen ukus & miris'
                            },
                            {
                                author: "Mladen Mircic",
                                comment: 'Dominacija od \'rane nema sta!'
                            },
                        ]
                    }
                ];

                localStorage.setItem("main_course", JSON.stringify(main_course));
            }

            if (localStorage.getItem("dessert") != null)
                dessert = JSON.parse(localStorage.getItem("dessert"));
            else {
                dessert = [
                    {
                        head: "Vanilice",
                        prep: "1 hr",
                        cook: "15 mins",
                        portions: "60 Cookies",
                        steps: [
                            "A couple of days before making the cookies, mix the confectioners' sugar with the vanilla bean in a small bowl with a tight lid. This is your vanilla sugar. Store in a dry place.",
                            "In a mixer fitted with the paddle, beat the lard with the granulated sugar until creamy. Beat in the egg, egg yolks, lemon juice and lemon zest. Add the walnuts and flour and beat until a uniform dough forms. Cover the dough and refrigerate for at least 3 hours or overnight.",
                            "Preheat the oven to 325° F convection bake (or 350° regular bake). Place the dough on a work surface dusted with flour and roll it out to a 1/4-inch-thick round. Line two baking sheets with parchment paper. Using a small round cookie cutter (I use 1-inch or quarter-size cutters), stamp out the cookies and arrange them one inch apart on the baking sheets.",
                            "Bake for about 12 minutes, so that the rounds remain white. Let the cookies cool on the baking sheets for 5 minutes, and then transfer to a wire rack or flat surface to cool completely.",
                            "Once the cookies are cool, take one cookie round at a time, spread the jam on it, and top with another cookie round.",
                            "Roll each cookie sandwich generously in the vanilla sugar. Put the cookies into a tin box, and wait for one to two days before serving."
                        ],
                        ingredients: [
                            "200 grams confectioners' sugar",
                            "1 vanilla bean, cut into 1/2 inch pieces",
                            "300 grams lard (ideally leaf lard)",
                            "250 grams granulated sugar",
                            "1 whole egg",
                            "2 egg yolks",
                            "Juice of one lemon",
                            "1 teaspoon finely grated lemon zest",
                            "250 grams ground walnuts",
                            "600 grams all-purpose flour",
                            "Rose hip or apricot jam"
                        ],
                        stars: 4,
                        comments: [ 
                            {
                                author: "Mladen Mircic",
                                comment: 'Fantastik Bombastik'
                            },
                            {
                                author: "Mladen Mircic",
                                comment: 'Prefinjen ukus & miris'
                            },
                            {
                                author: "Mladen Mircic",
                                comment: 'Dominacija od \'rane nema sta!'
                            },
                        ]
                    },{
                        head: "Apple pie",
                        prep: "1 hr 30 mins",
                        cook: "45 mins",
                        portions: "6 Servings",
                        steps: [
                            "Preheat oven to 375°. In a small bowl, combine sugars, flour and spices; set aside. In a large bowl, toss apples with lemon juice. Add sugar mixture; toss to coat.",
                            "On a lightly floured surface, roll one half of the dough to a 1/8-in.-thick circle; transfer to a 9-in. pie plate. Trim even with rim. Add filling; dot with butter. Roll remaining dough to a 1/8-in.-thick circle. Place overfilling. Trim, seal and flute edge. Cut slits in top. Beat egg white until foamy; brush over crust. Sprinkle with sugar. Cover edge loosely with foil.",
                            "Bake 25 minutes. Remove foil; bake until crust is golden brown and filling is bubbly, 20-25 minutes longer. Cool on a wire rack."
                        ],
                        ingredients: [
                            "1/2 cup sugar",
                            "1/2 cup packed brown sugar",
                            "3 tablespoons all-purpose flour",
                            "1 teaspoon ground cinnamon",
                            "1/4 teaspoon ground ginger",
                            "1/4 teaspoon ground nutmeg",
                            "6 to 7 cups thinly sliced peeled tart apples",
                            "1 tablespoon lemon juice",
                            "Dough for double-crust pie",
                            "1 tablespoon butter",
                            "1 large egg white",
                            "Additional sugar"
                        ],
                        stars: 3,
                        comments: [ 
                            {
                                author: "Mladen Mircic",
                                comment: 'Fantastik Bombastik'
                            },
                            {
                                author: "Mladen Mircic",
                                comment: 'Prefinjen ukus & miris'
                            },
                            {
                                author: "Mladen Mircic",
                                comment: 'Dominacija od \'rane nema sta!'
                            },
                        ]
                    },{
                        head: "Tart Cherry Pie",
                        prep: "2 hrs",
                        cook: "1 hr",
                        portions: "12 - 16 Servings",
                        steps: [
                            "Place the pitted cherries in a non-staining mixing bowl; use your fingers to double-check for pits. Add the tapioca, lemon zest and tablespoon of confectioners' sugar; stir to incorporate thoroughly. Let the mixture sit at room temperature for 15 minutes, during which time the fruit's juices will thicken.",
                            "Meanwhile, unroll the sheets of filo dough. Immediately cover them with a clean, slightly damp dish towel. Position oven racks in the upper and lower thirds of the oven; preheat to 350 degrees.",
                            "Combine the vegetable oil, olive oil and butter in a liquid measuring cup. Drizzle a little of the oils/butter mixture on a large rimmed baking sheet, then warm the sheet in the oven for 2 or 3 minutes. Position the baking sheet with a wide side facing you, placing it between the bowl of fruit and the stack of filo dough.",
                            "Layer two sheets of the filo dough on the baking sheet so the bottom one becomes coated with the oils/butter. Quickly flip them over, then layer on two more sheets. Drizzle the top sheet of filo dough with a bit of the oils/butter mixture.",
                            "Leaving a 1-inch margin at the edge, spread 1/4 of the sour cream in a 1-inch-wide swath along the edge of the filo closest to you, then spread one-quarter of the cherry mixture in a parallel line an inch away from the sour cream. For variety, or if you run short on cherries, sprinkle the fruit with some dried cranberries, currants or raisins.",
                            "Pick up the corners of filo dough closest to you as you gently make one fold/roll away from you. Brush the top of the roll with a little of the oils/butter mixture, then keep folding in and rolling until you reach the far end of the dough. If the dough cracks, use a little water or some of the oils/buttter mixture to paste it back together.",
                            "Repeat the process to create three more filled filo rolls, using the remaining sour cream and cherry mixture, reserving enough of the oils/butter mixture for a final brushing. Unused sheets of filo dough can be wrapped tightly in plastic wrap and refrigerated or frozen for up to 2 weeks. Arrange the filled filo rolls on the greased baking sheet, spaced evenly apart.",
                            "Use the remaining oils/butter mixture (rewarm as needed) to brush the tops of each roll. Bake for 15 minutes on the lower oven rack, then transfer to the upper middle rack, turning the baking sheet front to back; bake for 15 to 20 minutes, until golden brown and crisped on the edges.",
                            "Cool on the baking sheet for about 10 minutes. Use a thin spatula to release the bottoms as needed. Working with one cherry roll at a time, transfer to a cutting board.",
                            "At this point, the rolls can be wrapped in aluminum foil and refrigerated for a day. Unwrap, place on a greased baking sheet and reheat in a 300-degree oven until warmed through.",
                            "To serve, slice each cherry roll on the diagonal into three or 4 equal pieces and arrange on a serving tray. Use a fine-mesh strainer to sift confectioners' sugar over the top of each piece."
                        ],
                        ingredients: [
                            "48 ounces (5 to 6 cups) fresh pitted sour cherries; may substitute two 48-ounce jars pitted sour cherries, drained; see headnote)",
                            "Generous 1 tablespoon powdered tapioca pudding",
                            "Grated zest of 1 lemon",
                            "1 heaping tablespoon of confectioners' sugar, plus more for dusting",
                            "1 pound thin filo dough, preferably Apollo brand",
                            "1/4 cup vegetable oil",
                            "1/4 cup mild/light olive oil",
                            "8 tablespoons (1 stick) unsalted butter, melted and warm",
                            "1/2 cup regular or low-fat sour cream",
                            "Dried unsweetened cranberries, currants or raisins (optional)",
                            "Water (optional)"
                        ],
                        stars: 1,
                        comments: [ 
                            {
                                author: "Mladen Mircic",
                                comment: 'Fantastik Bombastik'
                            },
                            {
                                author: "Mladen Mircic",
                                comment: 'Prefinjen ukus & miris'
                            },
                            {
                                author: "Mladen Mircic",
                                comment: 'Dominacija od \'rane nema sta!'
                            },
                        ]
                    }
                ];

                localStorage.setItem("dessert", JSON.stringify(dessert));
            }

            if (localStorage.getItem("snack") != null)
                snack = JSON.parse(localStorage.getItem("snack"));
            else {
                snack = [
                    {
                        head: "Komplet lepinja",
                        prep: "15 mins",
                        cook: "10 mins",
                        portions: "1 Serving",
                        steps: [
                            "Cut the bun horizontally creating a slight dent in the middle so that the bun resembles a pot with a lid. Spread kajmak over the lower part of the bun. Whisk an egg and spread it across the kajmak. Then put the lower part of the bun in a heated oven and bake for about 10 minutes (depending how crispy you like your bun). Put the upper part of the bun in the stove just before you take out the lower so that it can be nice and warm too. After baking them, take the buns and pour hot pretop over them."
                        ],
                        ingredients: [
                            "Fresh flat bun",
                            "Kajmak",
                            "An egg",
                            "Pretop (a lard-like substance left after roasting pork or lamb)"
                        ],
                        stars: 4,
                        comments: [ 
                            {
                                author: "Mladen Mircic",
                                comment: 'Fantastik Bombastik'
                            },
                            {
                                author: "Mladen Mircic",
                                comment: 'Prefinjen ukus & miris'
                            },
                            {
                                author: "Mladen Mircic",
                                comment: 'Dominacija od \'rane nema sta!'
                            },
                        ]
                    },
                    {
                        head: "Kajmak",
                        prep: "10 mins",
                        cook: "/",
                        portions: "1 Serving",
                        steps: [
                            "In a bowl whisk the butter with a fork until it’s fluffy. Add crumbled feta cheese and sour cream. Mix it all well. Note: You don’t need to add salt to the kajmak as the feta cheese is salty on its own. If you like a more mild kajmak, add some cream. This 5 minute kajmak makes a wonderful spread and goes great with ćavaps."
                        ],
                        ingredients: [
                            "100 g butter",
                            "100 g hard feta cheese",
                            "100 gr sour cream"
                        ],
                        stars: 5,
                        comments: [ 
                            {
                                author: "Mladen Mircic",
                                comment: 'Fantastik Bombastik'
                            },
                            {
                                author: "Mladen Mircic",
                                comment: 'Prefinjen ukus & miris'
                            },
                            {
                                author: "Mladen Mircic",
                                comment: 'Dominacija od \'rane nema sta!'
                            },
                        ]
                    },
                    {
                        head: "Fruit Salad",
                        prep: "15 mins",
                        cook: "/",
                        portions: "10 Servings",
                        steps: [
                            "Bring orange juice, lemon juice, brown sugar, orange zest, and lemon zest to a boil in a saucepan over medium-high heat. Reduce heat to medium-low, and simmer until slightly thickened, about 5 minutes. Remove from heat, and stir in vanilla extract. Set aside to cool.",
                            "Layer the fruit in a large, clear glass bowl in this order: pineapple, strawberries, kiwi fruit, bananas, oranges, grapes, and blueberries. Pour the cooled sauce over the fruit. Cover and refrigerate for 3 to 4 hours before serving."
                        ],
                        ingredients: [
                            "⅔ cup fresh orange juice",
                            "¼ cup and 1 tablespoon and 1 teaspoons fresh lemon juice",
                            "¼ cup and 1 tablespoon and 1 teaspoons packed brown sugar",
                            "½ teaspoon grated orange zest",
                            "½ teaspoon grated lemon zest",
                            "1 teaspoons vanilla extract",
                            "2 cups cubed fresh pineapple",
                            "2 cups strawberries, hulled and sliced",
                            "3 kiwi fruit, peeled and sliced",
                            "3 bananas, sliced",
                            "2 oranges, peeled and sectioned",
                            "1 cups seedless grapes",
                            "2 cups blueberries"
                        ],
                        stars: 5,
                        comments: [ 
                            {
                                author: "Mladen Mircic",
                                comment: 'Fantastik Bombastik'
                            },
                            {
                                author: "Mladen Mircic",
                                comment: 'Prefinjen ukus & miris'
                            },
                            {
                                author: "Mladen Mircic",
                                comment: 'Dominacija od \'rane nema sta!'
                            },
                        ]
                    }
                ];

                localStorage.setItem("snack", JSON.stringify(snack));
            }
        }
        
    }

    function append_recipe(recipe) {

        let container_image = $("<div></div>").addClass("container");
        let row_image = $("<div></div>").addClass("row");
        let col_image = $("<div></div>").addClass("col-12 recipe-image");

        const recipe_image_failsafe = new Image();

        let recipe_image = $("<img>").attr("alt", "");

        recipe_image_failsafe.src = "img/" + recipe.head + ".jpg";
        recipe_image_failsafe.onload = () => {
            recipe_image.attr("src", "img/" + recipe.head + ".jpg");
        }
        recipe_image_failsafe.onerror = () => {
            recipe_image.attr("src", "img/blog-img/1.jpg");
        }

        col_image.append(recipe_image);
        row_image.append(col_image);
        container_image.append(row_image);

        let recipe_content = $("<div></div>").addClass("receipe-content-area");
        let container_recipe = $("<div></div>").addClass("container");
        let row_recipe = $("<div></div>").addClass("row");
        let col_recipe_heading_div = $("<div></div>").addClass("col-12 col-md-8");

        let recipe_heading = $("<div></div>").addClass("receipe-headline my-5");
        let date = $("<span></span>");
        let heading = $("<h2></h2>").attr("id", "heading").html(recipe.head);
        let recipe_duration = $("<div></div>").addClass("receipe-duration");
        let prep_time = $("<h6></h6>");
        let cook_time = $("<h6></h6>");
        let portions = $("<h6></h6>");

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

        let preparation_row = $("<div></div>").addClass("row");
        let preparation_col = $("<div></div>").addClass("col-12 col-lg-8");
        let counter = 1;
        recipe.steps.forEach(step => {
            let whole_step = $("<div></div>").addClass("single-preparation-step d-flex");

            let number_step = "";
            number_step = (counter < 10 ? "0" : "") + counter + ".";

            let number = $("<h4></h4>").html(number_step);
            counter++;
            let cooking_step = $("<p></p>").html(step);
            whole_step.append(number).append(cooking_step);
            preparation_col.append(whole_step);
        });

        let comment_section = $("<div></div>").addClass("comment-section");
        preparation_col.append(comment_section);

        recipe.comments.forEach(comment => {
            let comment_area = $("<div></div>").addClass("contact-form-area");
            let comment_text = $("<input>")
                                .addClass("form-control")
                                .attr("type", "text")
                                .attr("disabled", "true")
                                .attr("id", "comment" + i)
                                .val(comment.comment);

            let author_data = $("<div></div>").addClass("author-section").attr("id", "by" + i);
            let author_profile_link = $("<a></a>").attr("href", "#").addClass("author-name");
            author_profile_link.html(comment.author);

            if (language == "srb")
                author_data.append("autor ").append(author_profile_link);
            else
                author_data.append("by ").append(author_profile_link);

            comment_area.append(comment_text).append(author_data);
            comment_section.append(comment_area);
            i++;
        });

        let leave_comment_area = $("<div></div>").addClass("contact-form-area");
        let leave_comment_text = $("<input>")
                            .addClass("form-control new-comment")
                            .attr("type", "text")
                            .css("margin-top", "15%");

        let leave_comment_submit = $("<button></button>").attr("type", "submit").attr("id", "submit-comment").addClass("btn delicious-btn").css("margin-bottom", "5%");

        leave_comment_area.append(leave_comment_text);
        preparation_col.append(leave_comment_area).append(leave_comment_submit);

        preparation_row.append(preparation_col);

        let ingredients_col = $("<div></div>").addClass("col-12 col-lg-4");
        let ingredients = $("<div></div>").addClass("ingredients");

        let ingredients_text = $("<h4></h4>");
        ingredients.html(ingredients_text);
        counter = 1;
        $(".ingredients").html($("<h4></h4>").html("Ingredients"));
            recipe.ingredients.forEach(ingredient => {
            let whole_ingredient = $("<div></div>").addClass("custom-control custom-checkbox");

            let input_checkbox = $("<input>")
                                    .addClass("custom-control-input")
                                    .attr("type", "checkbox")
                                    .attr("id", "customCheck" + counter);

            let ingredient_label = $("<label></label>")
                                        .addClass("custom-control-label")
                                        .attr("for", "customCheck" + counter)
                                        .html(ingredient);
            counter++;

            whole_ingredient.append(input_checkbox).append(ingredient_label);
            ingredients.append(whole_ingredient);
        });

        if (language == "srb") {
            prep_time.html("Priprema: " + recipe.prep);
            cook_time.html("Kuvanje: " + recipe.cook);
            portions.html("Porcije: " + recipe.portions);
            leave_comment_text.attr("placeholder", "Ostavi komentar");
            ingredients_text.html("Sastojci");
            leave_comment_submit.html("Pošalji");
            date.html("Januar 05, 2021");

        }
        else {
            prep_time.html("Prep: " + recipe.prep);
            cook_time.html("Cook: " + recipe.cook);
            portions.html("Yields: " + recipe.portions);
            leave_comment_text.attr("placeholder", "Leave a comment");
            ingredients_text.html("Ingredients");
            leave_comment_submit.html("Publish");
            date.html("January 05, 2021");
        }

        ingredients_col.append(ingredients);
        preparation_row.append(ingredients_col);
        container_recipe.append(preparation_row);

        //Comments area

        let comments = $(".comment-section").find(".form-control");
        let authors = $(".comment-section").find(".author-section");
        for (let i = 0, del = 750; i < comments.length; i++, del += 150) {
            ScrollReveal().reveal("#" + $(comments[i]).attr("id"), {
                delay: del,
                distance: "100%",
                origin: "left",
                easing: "ease-in-out"
            });
            ScrollReveal().reveal("#" + $(authors[i]).attr("id"), {
                delay: del,
                distance: "100%",
                origin: "left",
                easing: "ease-in-out"
            });
        }

        ScrollReveal().reveal(".new-comment", {
            delay: 500,
            distance: "100%",
            origin: "left",
            easing: "ease-in-out"          
        });
        ScrollReveal().reveal("#submit-comment", {
            delay: 500,
            distance: "100%",
            origin: "left",
            easing: "ease-in-out" 
        })
    }

    function initializePage() {

        initializeStorage();

        if (localStorage.getItem("error-msg") != null) {
            $(".error-text").html(localStorage.getItem("error-msg"));
            localStorage.removeItem("error-msg");
        }
        else
            $(".error-text").html('');

        let recipes_found = localStorage.getItem("recipes-found");
        let recipe_to_show = localStorage.getItem("recipe-to-show");

        if (recipes_found == null && recipe_to_show == null) {
            let recipes = find_recipes("All recipes categories", "", "Sort by");
            append_recipes(recipes);
        }
        else if (recipes_found != null) {
            let recipes = JSON.parse(recipes_found);
            append_recipes(recipes);
            localStorage.removeItem("recipes-found");
        }
        else if (localStorage.getItem("recipe-to-show") != null) {
            let recipe = JSON.parse(localStorage.getItem("recipe-to-show"));
            append_recipe(recipe);
            localStorage.removeItem("recipe-to-show");
            localStorage.removeItem("food-type");
        }
    }
})

