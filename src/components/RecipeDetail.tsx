// src/components/RecipeDetail.tsx
import React from 'react';
import type { Recipe } from "@/types/recipe"; // Use type-only import and assuming aliased path
import { Badge } from "./ui/badge";
import { Clock, Users, ChefHat } from "lucide-react";
import { Separator } from "./ui/separator";
import { Card } from "./ui/card"; // Used for individual instruction steps

// Define a default/mock recipe object for RecipeDetail
const defaultRecipeDetail: Recipe = {
  id: "mock-detail-456",
  name: "Detailed Mock Chicken Curry",
  description: "An aromatic and flavorful mock chicken curry, perfect for testing detailed recipe layouts. This dish brings a taste of mock spices and joy.",
  imageUrl: "https://placehold.co/800x600/F3A847/FFF?text=Chicken+Curry!",
  difficulty: "Medium",
  prepTime: 20, // Number
  cookTime: 40, // Number
  servings: 4,
  calories: 650,
  ingredients: [
    { name: "Mock Chicken Breast", quantity: "2", unit: "pieces" },
    { name: "Mock Curry Powder", quantity: "2", unit: "tbsp" },
    { name: "Mock Coconut Milk", quantity: "400", unit: "ml" },
    { name: "Mock Onion", quantity: "1", unit: "large" },
    { name: "Mock Garlic", quantity: "3", unit: "cloves" },
  ],
  instructions: [
    "Sauté mock onion and garlic.",
    "Add mock chicken and brown.",
    "Stir in mock curry powder, then add mock coconut milk. Simmer until cooked.",
    "Serve hot with mock rice or naan."
  ],
  tips: [ // Added optional tips
    "For extra flavor, marinate the mock chicken beforehand.",
    "A squeeze of mock lime at the end brightens the dish."
  ],
  tags: ["mock", "curry", "chicken", "detailed"],
};

interface RecipeDetailProps {
  recipe?: Recipe; // Make the recipe prop optional
}

export const RecipeDetail = ({ recipe = defaultRecipeDetail }: RecipeDetailProps) => {
  const displayRecipe = recipe;

  const totalCookTime = (displayRecipe.prepTime || 0) + (displayRecipe.cookTime || 0);

  return (
    <article className="max-w-4xl mx-auto p-4 sm:p-6 space-y-8 animate-fade-in"> {/* Added sm:p-6 for responsiveness */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2"> {/* Responsive flex direction */}
          <h1 className="font-display text-3xl sm:text-4xl">{displayRecipe.name}</h1>
          <Badge variant="secondary" className="text-base sm:text-lg mt-2 sm:mt-0 shrink-0"> {/* Responsive text and margin */}
            {displayRecipe.difficulty}
          </Badge>
        </div>
        <p className="text-lg text-muted-foreground">{displayRecipe.description}</p>
        <div className="flex flex-wrap gap-4 sm:gap-6 text-muted-foreground"> {/* Added flex-wrap and responsive gap */}
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            <span>{totalCookTime > 0 ? `${totalCookTime} mins` : 'N/A'}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5" />
            <span>{displayRecipe.servings || 'N/A'} servings</span>
          </div>
          <div className="flex items-center gap-2">
            <ChefHat className="w-5 h-5" />
            <span>{displayRecipe.calories ? `${displayRecipe.calories} calories` : 'N/A'}</span>
          </div>
        </div>
      </div>

      {displayRecipe.imageUrl && ( // Conditionally render image section
        <div className="aspect-video w-full overflow-hidden rounded-lg shadow-md"> {/* Added shadow */}
          <img
            src={displayRecipe.imageUrl}
            alt={displayRecipe.name}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h2 className="font-display text-2xl border-b pb-2">Ingredients</h2> {/* Added border-b */}
          <ul className="space-y-2 pl-2"> {/* Added pl-2 for slight indent */}
            {displayRecipe.ingredients?.map((ingredient, index) => (
              <li key={index} className="flex justify-between items-center py-1"> {/* Added items-center and py-1 */}
                <span>{ingredient.name}</span>
                <span className="text-muted-foreground">
                  {ingredient.quantity} {ingredient.unit}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="font-display text-2xl border-b pb-2">Instructions</h2> {/* Added border-b */}
          <ol className="space-y-6">
            {displayRecipe.instructions?.map((instruction, index) => (
              <li key={index}>
                <Card className="p-4 shadow-sm"> {/* Added shadow-sm */}
                  <div className="flex gap-4 items-start"> {/* Added items-start */}
                    <span className="font-display text-accent text-lg shrink-0 pt-0.5"> {/* Added shrink-0 and pt for alignment */}
                      {index + 1}.
                    </span>
                    <div className="space-y-2 flex-1">
                      <p>{instruction}</p>
                      {displayRecipe.tips?.[index] && (
                        <p className="text-sm text-muted-foreground bg-muted/50 p-3 rounded-md italic"> {/* Adjusted bg opacity, padding, and italic */}
                          💡 Tip: {displayRecipe.tips[index]}
                        </p>
                      )}
                    </div>
                  </div>
                </Card>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {displayRecipe.tags && displayRecipe.tags.length > 0 && ( // Conditionally render tags section
        <>
          <Separator />
          <div className="space-y-2">
            <h3 className="font-display text-xl">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {displayRecipe.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </>
      )}
    </article>
  );
};
