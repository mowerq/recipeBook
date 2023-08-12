function readRecipes(){
    return data["recipes"];
}

function showRandomRecipe(){
    return data["recipes"][Math.floor((Math.random() * 12))];
}

function getRecipeDetails(htmlUrl) {
    for (let i = 0; i < data["recipes"].length; i++) {
        if (data["recipes"][i]["htmlUrl"] === htmlUrl) {
            return data["recipes"][i];
        }
    }
    return alert("Recipe Could not found!");

}

function getRecipesByWord(word){
    return data["recipes"].filter(e => 
        e["name"].toLowerCase().includes(word.toLowerCase())
    );
}