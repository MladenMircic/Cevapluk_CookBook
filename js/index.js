$(document).ready(function() {

    let appetizer = [];
    let main_course = [];
    let dessert = [];
    let snack = [];
    let predjelo = [];
    let glavno_jelo = [];
    let dezert = [];
    let uzina = [];

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
            };
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
                        ],
                        difficulty: 5
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
                        difficulty: 7
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
                        ],
                        difficulty: 3
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
                            "Place rolls in oiled baking dish. Sprinkle with chilly and parsley. Place bacon slices in the middle. Pour 1 and ??? cup of water in.",
                            "Bake covered for 1 hour then reduce temperature to 200 degrees C and bake for another 1 hour.",
                            "In the end, fry shortly flour with 5 tbs of oil in small sauce pan, stirring constantlly and adding chilly gradually. In the same time remove baking dish from the oven, pour ??? cup of water and mixture of flour, oil and chilly. Put uncovered dish in the oven for another 15 minutes.",
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
                        ],
                        difficulty: 6
                    }, 
                    {
                        head: "Stuffed Peppers",
                        prep: "1 hr 20 mins",
                        cook: "10 mins",
                        portions: "6 Servings",
                        steps: [
                            "Preheat oven to 400??. In a small saucepan, prepare rice according to package instructions. In a large skillet over medium heat, heat oil. Cook onion until soft, about 5 minutes. Stir in tomato paste and garlic and cook until fragrant, about 1 minute more. Add ground beef and cook, breaking up meat with a wooden spoon, until no longer pink, 6 minutes. Drain fat.",
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
                        ],
                        difficulty: 8
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
                            "150 g kajmak (Serbian creamy dairy product) ??? you can use some cream cheese instead",
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
                        ],
                        difficulty: 3
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
                            "Preheat the oven to 325?? F convection bake (or 350?? regular bake). Place the dough on a work surface dusted with flour and roll it out to a 1/4-inch-thick round. Line two baking sheets with parchment paper. Using a small round cookie cutter (I use 1-inch or quarter-size cutters), stamp out the cookies and arrange them one inch apart on the baking sheets.",
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
                        ],
                        difficulty: 5
                    },{
                        head: "Apple pie",
                        prep: "1 hr 30 mins",
                        cook: "45 mins",
                        portions: "6 Servings",
                        steps: [
                            "Preheat oven to 375??. In a small bowl, combine sugars, flour and spices; set aside. In a large bowl, toss apples with lemon juice. Add sugar mixture; toss to coat.",
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
                        ],
                        difficulty: 9
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
                        ],
                        difficulty: 2
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
                        ],
                        difficulty: 7
                    },
                    {
                        head: "Kajmak",
                        prep: "10 mins",
                        cook: "/",
                        portions: "1 Serving",
                        steps: [
                            "In a bowl whisk the butter with a fork until it???s fluffy. Add crumbled feta cheese and sour cream. Mix it all well. Note: You don???t need to add salt to the kajmak as the feta cheese is salty on its own. If you like a more mild kajmak, add some cream. This 5 minute kajmak makes a wonderful spread and goes great with ??avaps."
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
                        ],
                        difficulty: 5
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
                            "??? cup fresh orange juice",
                            "?? cup and 1 tablespoon and 1 teaspoons fresh lemon juice",
                            "?? cup and 1 tablespoon and 1 teaspoons packed brown sugar",
                            "?? teaspoon grated orange zest",
                            "?? teaspoon grated lemon zest",
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
                        ],
                        difficulty: 8
                    }
                ];

                localStorage.setItem("snack", JSON.stringify(snack));
            }
        

            if (localStorage.getItem("predjelo") != null)
            predjelo = JSON.parse(localStorage.getItem("predjelo"));
        else {
            predjelo = [
                {
                    head: "Tanjir sa sirom",
                    prep: "30 mins",
                    cook: "/",
                    portions: "4 Porcije",
                    steps: [
                        "Po??nite sa velikim stvarima: ??inije i sir. Sir treba poslu??iti na sobnoj temperaturi.",
                        "Dodajte meso, hleb i krekere. Meso mo??ete dodati na nekoliko razli??itih na??ina: jednostavnim snopom, rastavljenim u liniju ili polukrug ili presavijanjem vec??ih komada u zabavne oblike.",
                        "Popunite velike prostore voc??em i ora??astim plodovima. Tako??e, dodajte malo maslina i napunite sve male ??inije.",
                        "Ugurajte malo zelenila u bilo koji prostor koji je jo?? prazan."
                    ],
                    ingredients: [
                        "Sir (izaberite 3-5)",
                        "Voc??e i povrc??e (izaberite 1-3)",
                        "Orasi (izaberite 2)",
                        "Hleb ili krekeri (izaberite 2-4)"
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
                    ],
                    difficulty: 4
                },{
                    head: "Ruska salata",
                    prep: "1 hr",
                    cook: "30 mins",
                    portions: "4 Porcije",
                    steps: [
                        "Donesite veliki lonac vode da provri; dodajte krompir i ??argarepu. Vratite sme??u do klju??anja i dodajte jaja; kuvati dok krompir ne omek??a, 20 do 30 minuta. Ocijedite i malo ohladite sme??u. Iseckati krompir i ??argarepu; oguliti i iseckati jaja.",
                        "Pomesajte krompir, ??argarepu, jaja, kisele krastavce, gra??ak, ??unku i per??un zajedno u velikoj ??iniji; ume??ajte majonez dok salata ne bude ravnomerno premazana."
                    ],
                    ingredients: [
                        "6 krompira, olju??teno",
                        "1 ??argarepa, ili vi??e po ukusu",
                        "4 jaja",
                        "6 veliki kiseli krastavci, ise??eni na kockice",
                        "1 konzerva graska, iscedjena",
                        "1/2 ??olja potpuno skuvane ??unke, ili po ukusu",
                        "1 ka??ika seckanog sve??eg per??una, ili po ukusu",
                        "1/2 ??olja majoneza ili po ukusu"
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
                    difficulty: 4
                },{
                    head: "Vocni umak",
                    prep: "15 mins",
                    cook: "/",
                    portions: "4 Servings",
                    steps: [
                        "U manjoj ??iniji umutite krem sir i puter dok ne postane glatko. Umutite kremu od belog sleza. Preklopite umuc??enim prelivom. Poslu??ite sa voc??em. ??uvati u fri??ideru."
                    ],
                    ingredients: [
                        "1 kesica krem sira",
                        "1/2 ??olja putera, omek??ano",
                        "1/2 ??olja krem od sleza",
                        "1 karton smrznut ??lag preliven, odmrznut",
                        "Asortiman sve??eg voc??a"
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
                    ],
                    difficulty: 6
                }
            ];

            localStorage.setItem("predjelo", JSON.stringify(predjelo));
        }

        if (localStorage.getItem("glavno_jelo") != null)
            glavno_jelo = JSON.parse(localStorage.getItem("glavno_jelo"));
        else {
            glavno_jelo = [
                {
                    head: "Sarma",
                    prep: "3 hrs",
                    cook: "2 hrs 15 mins",
                    portions: "5 Porcija",
                    steps: [
                        "Najpre operite kupus i uklonite tvrdi komad stabljike na dnu lista. Budite oprezni i poku??ajte da ne napravite rupu. Ostavi stranu.",
                        "Na 2 ka??ike ulja propr??ite seckani luk do zlatno sme??e boje. Dodajte malo vode i kuvajte dok te??nost ne ispari i luk omek??a, povremeno me??ajuc??i.",
                        "Dodajte seckanu ??argarepu, prome??ajte jednom, dodajte govedinu, ponovo prome??ajte i ostavite da se kuva oko 15 minuta. Povremeno prome??ajte drvenom ka??ikom da se gove??i grudvi slome.",
                        "Sada je vreme da dodate pirina??. Veoma je va??no stalno me??ati kada ga dodajete. Kuvajte jo?? 5 minuta i sklonite sa vatre.",
                        "Za??inite solju, mlevenim biberom, mljevenim ??ilijem i sitno sjeckanim per??unom. Prethodno zagrejte rernu na 250 stepeni C i pripremite posudu za pe??enje 20k28cm.",
                        "Sada napunite kupus. Stavite ka??iku govedine na sredinu donjeg dela lista. Preklopite s leve strane, a zatim sa desne. Zarolajte kupus dr??ec??i prste sa strane.",
                        "Stavite kiflice u nauljenu posudu za pe??enje. Pospite ??ilijem i per??unom. Na sredinu stavite kri??ke slanine. Ulijte 1 i ??? ??olje vode.",
                        "Pecite poklopljeno 1 sat, a zatim smanjite temperaturu na 200 stepeni C i pecite jo?? 1 sat.",
                        "Na kraju kratko propr??ite bra??no sa 5 ka??ika ulja u maloj ??erpi, neprestano me??ajuc??i i postepeno dodavajuc??i hladno. U isto vreme izvadite posudu za pe??enje iz rerne, prelijte ??? ??olje vode i me??avine bra??na, ulja i hladnog. Stavite nepokriveno jelo u rernu jo?? 15 minuta.",
                        "Poslu??ite toplo!"
                    ],
                    ingredients: [
                        "20 mali kiseli listovi kupusa",
                        "450 grama mlevenog junec??eg mesa",
                        "1 luk, sitno iseckan",
                        "1 mala ??argarepa, sitno iseckana",
                        "1/4 solje (50g) pirinca",
                        "so, biber, po ukusu",
                        "sitnjen ??ili, po ukusu",
                        "7 kasicica (105ml) povrtnog ulja",
                        "2 kasicica (30g) brasna",
                        "dosta persuna",
                        "dodatno cilija i persuna za ukras",
                        "4-5 kolutova sunke ili slanine",
                        "1 i 2/3 soljica (400ml) vode + 2/3 soljica (160ml)"
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
                    difficulty: 9
                }, 
                {
                    head: "Punjena paprika",
                    prep: "1 hr 20 mins",
                    cook: "10 mins",
                    portions: "6 Porcija",
                    steps: [
                        "Zagrejati rernu na 400 ??. U malom tiganju pripremite pirina?? prema uputstvima na pakovanju. U velikoj tavi na srednjoj vatri zagrejte ulje. Kuvajte luk dok ne omek??a, oko 5 minuta. Ume??ajte paradajz pastu i beli luk i kuvajte dok ne zamiri??e, jo?? oko 1 minut. Dodajte mleveno gove??e meso i kuvajte, razbijajuc??i meso drvenom ka??ikom, dok vi??e ne postane ru??i??asto, 6 minuta. Iscedite mast.",
                        "Vratite gove??u me??avinu u tiganj, a zatim ume??ajte kuvani pirina?? i paradajz ise??en na kockice. Za??inite origanom, solju i biberom. Pustite da se kr??ka dok se te??nost malo ne smanji, oko 5 minuta.",
                        "Paprike izrezane okrenute nagore stavite u posudu za pe??enje i pokapajte uljem. U svaku papriku ka??ikom dodajte gove??u smesu i prelijte Monterei d??ekom, pa posudu za pe??enje prekrijte folijom.",
                        "Pecite dok paprike ne omek??aju, oko 35 minuta. Otkrijte i pecite dok sir ne zakipi, jo?? 10 minuta.",
                        "Pre slu??enja ukrasite per??unom."
                    ],
                    ingredients: [
                        "1/2 c. nekuvani pirina??",
                        "2 tbsp. ekstra devi??ansko maslinovo ulje, plus jo?? za ki??u",
                        "1 srednji luk, iseckan",
                        "2 tbsp. paradajz sos",
                        "3 cena belog luka, mlevenih",
                        "1 lb. mlevena junetina",
                        "1 (14.5-oz.) konzerve paradajza ise??ene na kockice",
                        "1 1/2 tsp. su??eni origano",
                        "Ko??er soli",
                        "Sve??e mleveni crni biber",
                        "6 paprike, vrhovi i jezgra uklonjeni",
                        "1 c. iseckan priklju??ak Monterei",
                        "Sve??e iseckani per??un, za ukra??avanje"
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
                    ],
                    difficulty: 5
                }, 
                {
                    head: "Kardjordjeva snicla",
                    prep: "1 hr",
                    cook: "15 mins",
                    portions: "4 Porcija",
                    steps: [
                        "Pilec??i odresci od svinjetine dok ne budu tanki i mekani i na svaki odrezak stavite malo kajmaka (ili krem sira).",
                        "Umotajte meso u kolute i svaki komad u??vrstite ??a??kalicom.",
                        "Odreske prema??ite bra??nom, pa ih umo??ite u umuc??ena jaja i na kraju uvaljajte u mrvice hleba.",
                        "Pr??ite u vrelom ulju do zlatno ??ute boje."
                    ],
                    ingredients: [
                        "500 g svinjski odresci bez kostiju",
                        "150 g kajmak ??? umesto toga mo??ete koristiti krem sir",
                        "2 jaja",
                        "brasno",
                        "prezle",
                        "so"
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
                    ],
                    difficulty: 3
                }
            ];

            localStorage.setItem("glavno_jelo", JSON.stringify(glavno_jelo));
        }

        if (localStorage.getItem("dezert") != null)
            dezert = JSON.parse(localStorage.getItem("dezert"));
        else {
            dezert = [
                {
                    head: "Vanilice",
                    prep: "1 hr",
                    cook: "15 mins",
                    portions: "60 Kolaca",
                    steps: [
                        "Nekoliko dana pre pravljenja kola??ic??a, pome??ajte ??ec??er poslasti??ara sa zrnom vanile u maloj ??iniji sa ??vrstim poklopcem. Ovo je va?? vanilin ??ec??er. ??uvati na suvom mestu.",
                        "U mikseru sa lopaticom istucite svinjsku mast sa granuliranim ??ec??erom dok ne postane kremasta. Umutite jaje, ??umanca, limunov sok i koricu limuna. Dodajte orahe i bra??no i mutite dok se ne formira jednoli??no testo. Pokrijte testo i ostavite u fri??ideru najmanje 3 sata ili preko noc??i.",
                        "Prethodno zagrejte rernu na 325 ?? F (konvekciono pe??enje na 350 ?? F). Stavite testo na radnu povr??inu posutu bra??nom i razvaljajte ga u okruglu debljinu 1/4 in??a. Dva pleha oblo??ite papirom za pe??enje. Koristec??i mali okrugli reza?? za kola??ic??e (ja koristim reza??e veli??ine 1 in??a ili ??etvrtine), istisnite kola??ic??e i rasporedite ih jedan po jedan na plehove za pe??enje.",
                        "Pecite oko 12 minuta, tako da kolutic??i ostanu beli. Ostavite kola??ic??e da se ohlade na plehovima 5 minuta, a zatim ih prebacite na re??etku ili ravnu povr??inu da se potpuno ohlade.",
                        "Kad se kola??ic??i ohlade, uzimajte jednu po jednu kola??icu, prema??ite marmeladom i prelijte drugom okruglom.",
                        "Svaki sendvi?? sa kola??ic??ima obilno uvaljajte u vanilin ??ec??er. Stavite kola??ic??e u limenu kutiju i sa??ekajte jedan do dva dana pre serviranja."
                    ],
                    ingredients: [
                        "200 grama ??ec??era za poslasti??are",
                        "1 zrno vanile, ise??eno na komade od 1/2 in??a",
                        "300 grama masti (idealno list masti)",
                        "250 grama secera u prahu",
                        "1 celo jaje",
                        "2 zumanceta",
                        "Sok od limuna",
                        "1 limunove kore",
                        "250 grama sitnjenog lesnika",
                        "600 grama brasna",
                        "D??em od ??ipka ili kajsije"
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
                    ],
                    difficulty: 5
                },{
                    head: "Pita od jabuka",
                    prep: "1 hr 30 mins",
                    cook: "45 mins",
                    portions: "6 Porcija",
                    steps: [
                        "Zagrejati rernu na 375 ??. U maloj ??iniji pome??ajte ??ec??er, bra??no i za??ine; ostaviti po strani. U veliku ??iniju prelijte jabuke limunovim sokom. Dodajte me??avinu ??ec??era; bacati premazati.",
                        "Na blago pobra??njenoj povr??ini razvaljajte polovinu testa u krug debljine 1/8 in??a; transfer na 9-in. tanjir za pitu. Obre??ite ??ak i sa obodom. Dodajte punjenje; ta??ka sa puterom. Preostalo testo razvaljajte u krug debljine 1/8 in??a. Prepunite mesto. Trim, zaptivka i ivica kanelure. Isecite proreze na vrhu. Istucite belanca do pene; ??etkom preko kore. Pospite ??ec??erom. Lagano pokrijte ivicu folijom.",
                        "Pecite 25 minuta. Uklonite foliju; pecite dok kora ne postane zlatno braon i punjenje ne postane mehuric??e, 20-25 minuta du??e. Ohladite na re??etki."
                    ],
                    ingredients: [
                        "1/2 solja secera",
                        "1/2 solja braon secera",
                        "3 kasika brasna",
                        "1 kasicica cimeta",
                        "1/4 kasicica djumbira",
                        "1/4 kasicica mu??katni ora????ic??",
                        "6 do 7 ??olje tanko narezanih olju??tenih tart jabuka",
                        "1 ka??ika limunovog soka",
                        "Testo za pitu sa dvostrukom korom",
                        "1 ka??ika putera",
                        "1 veliko jaje",
                        "Dodatno secera"
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
                    difficulty: 3
                },{
                    head: "Pita s visnjama",
                    prep: "2 hrs",
                    cook: "1 hr",
                    portions: "12 - 16 Porcije",
                    steps: [
                        "Stavite tre??nje bez ko??tica u posudu za me??anje bez mrlja; prstima dvaput proverite da li ima jama. Dodajte tapioku, koricu limuna i ka??iku ??ec??era za poslasti??are; prome??ajte da se temeljito unese. Ostavite sme??u na sobnoj temperaturi 15 minuta, a za to vreme voc??ni sokovi c??e se zgusnuti.",
                        "U me??uvremenu odmotajte listove filo testa. Odmah ih prekrijte ??istim, blago vla??nim pe??kirom. Postavite re??etke za pec??nicu u gornju i donju trec??inu pec??nice; zagrejati na 350 stepeni.",
                        "Pome??ajte biljno ulje, maslinovo ulje i puter u ??oljici za merenje te??nosti. Nakapajte malo me??avine ulja/maslaca na veliki pleh sa obodom, pa zagrejte lim u rerni 2 ili 3 minuta. Postavite lim za pe??enje sa ??irokom stranom okrenutom prema vama, stavljajuc??i ga izme??u ??inije sa voc??em i gomile filo testa.",
                        "Polo??ite dva lista filo testa na lim za pe??enje tako da donji bude premazan uljima/puterom. Brzo ih preokrenite, a zatim nanesite jo?? dva lista. Gornji list filo testa prelijte sa malo me??avine ulja/maslaca.",
                        "Ostavljajuc??i marginu od 1 in??a, rasporedite 1/4 kisele pavlake u ??irini od 1 in??a du?? ivice fila koji vam je najbli??i, a zatim rasporedite jednu ??etvrtinu me??avine vi??anja u paralelnu liniju i in??a od pavlake. Za raznovrsnost ili ako vam ponestane tre??anja, pospite voc??e suvim brusnicama, ribizlom ili gro????icama.",
                        "Pokupite uglove filo testa koji su vam najbli??i dok ne??no pravite jedan preklop/kotrljanje od sebe. Prema??ite vrh rolade sa malo me??avine ulja/putera, pa nastavite da se presavijate i kotrljate dok ne do??ete do krajnjeg kraja testa. Ako testo pukne, koristite malo vode ili malo me??avine ulja/maslaca da ga ponovo zalepite.",
                        "Ponovite postupak da biste napravili jo?? tri filovana fila, koristec??i preostalu me??avinu pavlake i vi??nje, ostavljajuc??i dovoljno sme??e ulja/maslaca za poslednje ??etkanje. Neiskori??c??eni listovi filo testa mogu se ??vrsto umotati u plasti??nu foliju i staviti u fri??ider ili zamrznuti do 2 nedelje. Napunjene filo rolate rasporedite po podmazanom plehu, ravnomerno razmaknute.",
                        "Preostalom me??avinom ulja/maslaca (po potrebi zagrejte) o??etkajte vrhove svake rolne. Pecite 15 minuta na donjoj re??etki, a zatim prebacite na gornju srednju re??etku, okrec??uc??i lim za pe??enje napred prema nazad; pecite 15 do 20 minuta, dok ne porumene i ne hrskaju po ivicama.",
                        "Ohladite na plehu oko 10 minuta. Tankom lopaticom otpustite dna po potrebi. Radec??i po jedan kolut tre??nje, prebacite na dasku za se??enje",
                        "U ovom trenutku, rolne se mogu umotati u aluminijumsku foliju i staviti u fri??ider na jedan dan. Odmotajte, stavite na podmazan pleh i zagrejte u rerni na 300 stepeni dok se ne zagreje.",
                        "Za poslu??ivanje, isecite svaki kolut vi??nje po dijagonali na tri ili 4 jednaka dela i pore??ajte na poslu??avnik. Pomoc??u cedila sa finom mre??icom prosijte ??ec??er slatki??a po vrhu svakog komada."
                    ],
                    ingredients: [
                        "5 do 6 ??oljica sve??e vi??nje bez ko??tica; mo??e zameniti dve tegle od 48 unci bez ko??tica, oce??ene; vidi glavnu bele??ku",
                        "Velikodu??na 1 ka??ika pudinga od tapioke u prahu",
                        "Rendana korica 1 limuna",
                        "1 gomila ka??ike ??ec??era za poslasti??are, plus jo?? za brisanje pra??ine",
                        "1 funta tankog filo testa, po??eljno marke Apollo",
                        "1/4 ??olja biljnog ulja",
                        "1/4 ??olja blagog/svetlog maslinovog ulja",
                        "8 ka??ike (1 ??tapic??) nesoljenog putera, rastopljenog i toplog",
                        "1/2 ??olje obi??ne ili nemasne pavlake",
                        "Osu??ene nezasla??ene brusnice, ribizla ili gro????ice (opciono)",
                        "Voda"
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
                    ],
                    difficulty: 7
                }
            ];

            localStorage.setItem("dezert", JSON.stringify(dezert));
        }

        if (localStorage.getItem("uzina") != null)
            uzina = JSON.parse(localStorage.getItem("uzina"));
        else {
            uzina = [
                {
                    head: "Komplet lepinja",
                    prep: "15 mins",
                    cook: "10 mins",
                    portions: "1 Porcija",
                    steps: [
                        "Isecite lepinju horizontalno, stvarajuc??i blago udubljenje u sredini, tako da lepinja podsec??a na lonac sa poklopcem. Prema??ite kajmak preko donjeg dela lepinje. Umutite jaje i rasporedite ga po kajmaku. Zatim stavite donji deo lepinje u zagrejanu rernu i pecite oko 10 minuta (u zavisnosti koliko hrskava volite lepinju). Gornji deo lepinje stavite u ??poret neposredno pre nego ??to izvadite donji tako da i ona bude lepa i topla. Nakon ??to ih ispe??ete, uzmite lepinje i prelijte ih vrelim pretopom."
                    ],
                    ingredients: [
                        "Sve??a ravna lepinja",
                        "Kajmak",
                        "Jedno jaje",
                        "Pretop"
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
                    ],
                    difficulty: 8
                },
                {
                    head: "Kajmak",
                    prep: "10 mins",
                    cook: "/",
                    portions: "1 Porcija",
                    steps: [
                        "U ??iniji umutite vilju??kom maslac dok ne postane penast. Dodajte izmrvljeni feta sir i pavlaku. Sve to dobro izme??ajte. Napomena: Kajmaku nije potrebno dodavati sol jer je feta sir sam po sebi slan. Ako volite bla??i kajmak, dodajte malo pavlake. Ovaj petominutni kajmak pravi divan namaz i odli??no se sla??e sa c??avapsima."
                    ],
                    ingredients: [
                        "100 g putera",
                        "100 g feta sira",
                        "100 gr pavlaka"
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
                    ],
                    difficulty: 3
                },
                {
                    head: "Vocna salata",
                    prep: "15 mins",
                    cook: "/",
                    portions: "10 Porcija",
                    steps: [
                        "Sok od pomorand??e, sok od limuna, sme??i ??ec??er, koricu narand??e i koricu limuna prokuvajte u ??erpi na srednje jakoj vatri. Smanjite vatru na srednje nisku i pirjajte dok se malo ne zgusne, oko 5 minuta. Sklonite sa vatre i ume??ajte ekstrakt vanile. Ostavite sa strane da se ohladi.",
                        "Stavite voc??e u veliku, prozirnu staklenu ??iniju ovim redosledom: ananas, jagode, kivi, banane, pomorand??e, gro????e i borovnice. Ohla??en sos prelijte preko voc??a. Pokrijte i ostavite u fri??ideru 3 do 4 sata pre slu??enja."
                    ],
                    ingredients: [
                        "??? ??olja sve??eg soka od pomorand??e",
                        "?? ??olja i 1 ka??ika i 1 ka??i??ica sve??eg limunovog soka",
                        "?? ??olja i 1 ka??ika i 1 ka??i??ica pakovanog sme??eg ??ec??era",
                        "?? ka??i??ica naribane korice pomorand??e",
                        "?? ka??i??ica naribane korice limuna",
                        "1 ka??i??ice ekstrakta vanile",
                        "2 ??olje iseckanog sve??eg ananasa",
                        "2 ??olje jagoda, olju??tene i narezane",
                        "3 kivi, oguljen i narezan",
                        "3 banane, ise??ene",
                        "2 pomorand??e, oguljene i ise??ene",
                        "1 ??olje gro????a bez semena",
                        "2 ??olje borovnica"
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
                    ],
                    difficulty: 8
                }
            ];

            localStorage.setItem("uzina", JSON.stringify(uzina));
        }
    }

    function get_random_recipes() {

        let language = localStorage.getItem("language");

        while(found_recipes.length < 2) {
            let recipe_picked = Math.floor(Math.random() * 4);

            if (language == "eng") {
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
            else {
                switch (recipe_picked) {
                    case 0: {
                        let current_recipe = predjelo[Math.floor(Math.random() * predjelo.length)];
                        if (!found_recipes.includes(current_recipe))
                            found_recipes.push(current_recipe);
    
                        break;
                    }
                    case 1: {
                        let current_recipe = glavno_jelo[Math.floor(Math.random() * glavno_jelo.length)];
                        if (!found_recipes.includes(current_recipe))
                            found_recipes.push(current_recipe);
    
                        break;
                    }
                    case 2: {
                        let current_recipe = dezert[Math.floor(Math.random() * dezert.length)];
                        if (!found_recipes.includes(current_recipe))
                            found_recipes.push(current_recipe);
    
                        break;
                    }
                    case 3: {
                        let current_recipe = uzina[Math.floor(Math.random() * uzina.length)];
                        if (!found_recipes.includes(current_recipe))
                            found_recipes.push(current_recipe);
    
                        break;
                    }
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

    $(".recipe-button").click(function() {
        localStorage.setItem("recipe-to-show", JSON.stringify(found_recipes[parseInt($(this).attr("id")) - 1]));
        window.open("receipe-post.html", "_self");
    });

    $(".flag").click(function() {
        let lang = $(this).attr("id");
        window.open("index-" + lang + ".html", "_self");
    });
});
