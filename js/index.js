$(document).ready(function() {

    let appetizer = [];
    let main_course = [];
    let dessert = [];
    let snack = [];

    let found_recipes = [];

    let my_account = {};

    initializePage();

    function initializeStorage() {
        if (localStorage.getItem("my-account") != null)
            my_account = JSON.parse(localStorage.getItem("my-account"));
        else {
            my_account = {
                recipes: [],
                comments: [],
                stars: []
            }
            localStorage.setItem("my-account", JSON.stringify(my_account));
        }

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
                    ],
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

    function get_random_recipes() {
        while(found_recipes.length < 2) {
            let recipe_picked = Math.floor(Math.random() * 4);

            switch (recipe_picked) {
                case 0: {
                    let current_recipe = appetizer[Math.floor(Math.random() * appetizer.length)];
                    if (!found_recipes.includes(current_recipe))
                        found_recipes.push(current_recipe);

                    break;
                }
                case 1: {
                    let current_recipe = main_course[Math.floor(Math.random() * main_course.length)];
                    if (!found_recipes.includes(current_recipe))
                        found_recipes.push(current_recipe);

                    break;
                }
                case 2: {
                    let current_recipe = dessert[Math.floor(Math.random() * dessert.length)];
                    if (!found_recipes.includes(current_recipe))
                        found_recipes.push(current_recipe);

                    break;
                }
                case 3: {
                    let current_recipe = snack[Math.floor(Math.random() * snack.length)];
                    if (!found_recipes.includes(current_recipe))
                        found_recipes.push(current_recipe);

                    break;
                }
            }
        }
    }

    function initializePage() {

        let path = window.location.pathname;
        let page = path.split("/").pop();
        let language = page.split(".")[0].split("-")[1];
        localStorage.setItem("language", language);

        initializeStorage();
        
        $("#1-recipe").html('');
        $("#2-recipe").html('');

        get_random_recipes();
        for (let i = 0; i < 2; i++) {

            const recipe_image_failsafe = new Image();
            recipe_image_failsafe.src = "img/" + found_recipes[i].head + ".jpg";
            let recipe_image = $("<img>").attr("alt", "").addClass("recipe-img");

            recipe_image_failsafe.onload = () => {
                recipe_image.attr("src", "img/" + found_recipes[i].head + ".jpg")
            }
            recipe_image_failsafe.onerror = () => {
                recipe_image.attr("src", "img/blog-img/1.jpg");
            }

            let recipe_div = $("<div></div>").addClass("top-cta-content");
            let recipe_head = $("<h3></h3>").html(found_recipes[i].head);
            let recipe_descr = $("<h6></h6>");

            let recipe_link = $("<a></a>").attr("href", "receipe-post-" + localStorage.getItem("language") + ".html").addClass("btn delicious-btn recipe-button").html("See Full Recipe").attr("id", i + 1);

            if (language == "srb") {
                recipe_link.html("Pogledaj Ceo Recept");
                recipe_descr.html("Jednostavno &amp; Ukusno");
            }
            else {
                recipe_link.html("See Full Recipe")
                recipe_descr.html("Simple &amp; Delicious");
            }

            recipe_div.append(recipe_head).append(recipe_descr).append(recipe_link);
            $("#" + (i + 1) + "-recipe").append(recipe_image).append(recipe_div);
        }
    }

    $(".fa").on({
        mouseenter: function() {
            let all_stars = $($(this).parent());
            let stars = all_stars.children(".fa");
            let j = -1;
    
            for (let i = 0; i < stars.length; i++) {
                let curr_star = $(stars[i]);
                if (j == 1) {
                    if(curr_star.hasClass("fa-star"))
                        curr_star.removeClass("fa-star");
                    curr_star.addClass("fa-star-o");
                }
                else {
                    if(curr_star.hasClass("fa-star-o"))
                        curr_star.removeClass("fa-star-o");
                    curr_star.addClass("fa-star");
                }
                if (stars[i] == this)
                    j = 1;
            }
        },
        mouseleave: function() {

        }
    })

    $(".recipe-button").click(function() {
        localStorage.setItem("recipe-to-show", JSON.stringify(found_recipes[parseInt($(this).attr("id")) - 1]));
        window.open("receipe-post.html", "_self");
    });

    $(".flag").click(function() {
        let lang = $(this).attr("id");
        window.open("index-" + lang + ".html", "_self");
    });
});
