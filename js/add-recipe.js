$(document).ready(function() {

    $(".send-recipe-info").click(function() {
        let food_type = $("#food-type").val();
        let food_name = $("#food-name").val();
        let preparation_time = $("#preparation-time").val();
        let cooking_time = $("#cooking-time").val();
        let portions = $("#portions").val();
        let steps = $("#steps").val();
        let ingredients = $("#ingredients").val();
        let stars = $("#stars").val();

        if (food_type == '' ||
            food_name == '' || 
            preparation_time == '' || 
            cooking_time == '' || 
            portions == '' || 
            steps == '' || 
            ingredients == '' || 
            stars == '') {
                localStorage.setItem("failed", 1);
            }

        food_type = food_type.toLowerCase().replace(' ', '_');
        let food_type_arr = JSON.parse(localStorage.getItem(food_type));

        let steps_arr = steps.split("\n");
        let ingredients_arr = ingredients.split("\n");
        alert(steps_arr);
        alert(ingredients_arr);

        let new_recipe = {
            head: food_name,
            prep: preparation_time,
            cook: cooking_time,
            portions: portions,
            steps: steps,
            ingredients: ingredients,
            stars: stars
        };

        food_type_arr.push(new_recipe);
        localStorage.setItem(food_type, JSON.stringify(food_type_arr));
    });

});