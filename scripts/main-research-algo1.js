/********** Data import **********/
import { searchInput } from "./script.js";
import { recipeCards } from "./script.js";
import { filteredIngredientsList } from "./advanced-search.js";
import { filteredAppliancesList } from "./advanced-search.js";
import { filteredUstensilsList } from "./advanced-search.js";

/********** Algorithm 1: Array methods ***********/

export function searchRecipe1() {
  const searchInputLowerCase = searchInput.value.toLowerCase();
  //recipeCards: [object Nodelist]

  if (searchInputLowerCase.length >= 3) {
    // recipeCards.forEach((card) => {
    //   const title = card
    //     .querySelector(".recipe-card__details h2")
    //     .textContent.toLowerCase();
    //   const ingredients = Array.from(
    //     card.querySelectorAll(".ingredients-section__item__title")
    //   )
    //     .map((ingredient) => ingredient.textContent.toLowerCase())
    //     .join(" ");
    //   const description = card
    //     .querySelector(".recipe-card__details__process p")
    //     .textContent.toLowerCase();

    //   if (
    //     title.includes(searchInputLowerCase) ||
    //     ingredients.includes(searchInputLowerCase) ||
    //     description.includes(searchInputLowerCase)
    //   ) {
    //     // card.style.display = "block";
    //     card.classList.add("visible");
    //     filteredIngredientsList();
    //   } else {
    //     // card.style.display = "none";
    //     card.classList.remove("visible");
    //   }
    // });
    visibleCards();
  } else {
    recipeCards.forEach((card) => {
      card.classList.add("visible");
    });
  }
  filteredIngredientsList();
  filteredAppliancesList();
  filteredUstensilsList();
}

function visibleCards() {
  const searchInputLowerCase = searchInput.value.toLowerCase();
  recipeCards.forEach((card) => {
    const title = card
      .querySelector(".recipe-card__details h2")
      .textContent.toLowerCase();
    const ingredients = Array.from(
      card.querySelectorAll(".ingredients-section__item__title")
    )
      .map((ingredient) => ingredient.textContent.toLowerCase())
      .join(" ");
    const description = card
      .querySelector(".recipe-card__details__process p")
      .textContent.toLowerCase();

    if (
      title.includes(searchInputLowerCase) ||
      ingredients.includes(searchInputLowerCase) ||
      description.includes(searchInputLowerCase)
    ) {
      // card.style.display = "block";
      card.classList.add("visible");
      // filteredIngredientsList();
    } else {
      // card.style.display = "none";
      card.classList.remove("visible");
    }
  });
}