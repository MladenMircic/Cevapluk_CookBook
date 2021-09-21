$(document).ready(function() {

    let language = localStorage.getItem("language");

    $(".send-recipe-info").click(function() {
        let food_type = $("#food-type").val();
        let food_name = $("#food-name").val();
        let preparation_time = $("#preparation-time").val();
        let cooking_time = $("#cooking-time").val();
        let portions = $("#portions").val();
        let steps = $("#steps").val();
        let ingredients = $("#ingredients").val();
        let difficulty = $("#difficulty").val();

        if (food_type == '' ||
            food_name == '' || 
            preparation_time == '' || 
            cooking_time == '' || 
            portions == '' || 
            steps == '' || 
            ingredients == '' || 
            difficulty == '') {
                localStorage.setItem("failed", 1);
                return;
            }

        let food_type_eng;
        let food_type_srb;
        switch (food_type) {
            case 'Predjelo':
            case 'Appetizer': {
                food_type_eng = JSON.parse(localStorage.getItem("appetizer"));
                food_type_srb = JSON.parse(localStorage.getItem("predjelo"));
                break;
            }
            case 'Glavno jelo':
            case 'Main course': {
                food_type_eng = JSON.parse(localStorage.getItem("main_course"));
                food_type_srb = JSON.parse(localStorage.getItem("glavno_jelo"));
                break;
            }
            case 'Dezert':
            case 'Dessert': {
                food_type_eng = JSON.parse(localStorage.getItem("dessert"));
                food_type_srb = JSON.parse(localStorage.getItem("dezert"));
                break;
            }
            case 'Uzina':
            case 'Snack': {
                food_type_eng = JSON.parse(localStorage.getItem("snack"));
                food_type_srb = JSON.parse(localStorage.getItem("uzina"));
                break;
            }
        }
        

        let steps_arr = steps.split("\n").filter(function(value, index, arr) {
            return value != '';
        });
        let ingredients_arr = ingredients.split("\n").filter(function(value, index, arr) {
            return value != '';
        });
        
        let new_recipe = {
            head: food_name,
            prep: preparation_time,
            cook: cooking_time,
            portions: portions,
            steps: steps_arr,
            ingredients: ingredients_arr,
            stars: 1,
            comments: [],
            video: 'https://www.youtube.com/embed/MtN1YnoL46Q',
            difficulty: difficulty
        };

        food_type_eng.push(new_recipe);
        food_type_srb.push(new_recipe);        
        switch (food_type) {
            case 'Predjelo':
            case 'Appetizer': {
                localStorage.setItem("appetizer", JSON.stringify(food_type_eng));
                localStorage.setItem("predjelo", JSON.stringify(food_type_srb));
                break;
            }
            case 'Glavno jelo':
            case 'Main course': {
                localStorage.setItem("main_course", JSON.stringify(food_type_eng));
                localStorage.setItem("glavno_jelo", JSON.stringify(food_type_srb));
                break;
            }
            case 'Dezert':
            case 'Dessert': {
                localStorage.setItem("dessert", JSON.stringify(food_type_eng));
                localStorage.setItem("dezert", JSON.stringify(food_type_srb));
                break;
            }
            case 'Uzina':
            case 'Snack': {
                localStorage.setItem("snack", JSON.stringify(food_type_eng));
                localStorage.setItem("uzina", JSON.stringify(food_type_srb));
                break;
            }
        }

        let my_account = JSON.parse(localStorage.getItem("my-account"));
        my_account.recipes.push(new_recipe);
        localStorage.setItem("my-account", JSON.stringify(my_account));
    });

});