// src/components/RecipeCard.tsx
import React from 'react'; // Ensure React is imported for JSX
import type { Recipe } from "@/types/recipe"; // Updated path based on your previous query
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from "./ui/card"; // Assuming this path is correct
import { Badge } from "./ui/badge";    // Assuming this path is correct
import { Clock, Users } from "lucide-react";
import { Link } from "react-router-dom";

// Define a default/mock recipe object
const defaultRecipe: Recipe = {
  id: "mock-recipe-123",
  name: "Delicious Mock Pasta",
  description: "A wonderfully crafted mock pasta dish that will tantalize your taste buds. Perfect for UI testing and development purposes.",
  imageUrl: "https://placehold.co/600x400/E07A5F/FFF?text=Pasta!", // Placeholder image
  difficulty: "Easy",
  prepTime: 10, // Changed to number
  cookTime: 20, // Changed to number
  servings: 4,
  calories: 550,
  ingredients: [ // Add some mock ingredients if your type expects them
    { name: "Mock Pasta", quantity: "200", unit: "g" },
    { name: "Mock Sauce", quantity: "1", unit: "jar" },
  ],
  instructions: [ // Add some mock instructions
    "Boil mock water.",
    "Add mock pasta.",
    "Serve with mock sauce."
  ],
  tags: ["mock", "pasta", "easy"], // Add some mock tags
};

interface RecipeCardProps {
  recipe?: Recipe; // Make the recipe prop optional
}

export const RecipeCard = ({ recipe = defaultRecipe }: RecipeCardProps) => {
  // Use the provided recipe or the defaultRecipe if none is passed
  const displayRecipe = recipe;

  // Calculate total time, now directly using numbers.
  // Ensure prepTime and cookTime are numbers in your Recipe type.
  // Provide fallbacks if they might be undefined or null.
  const prepTimeMinutes = displayRecipe.prepTime || 0;
  const cookTimeMinutes = displayRecipe.cookTime || 0;
  const totalCookTime = prepTimeMinutes + cookTimeMinutes;

  return (
    // For UI testing, you might temporarily remove the Link or point it to "#"
    // <Link to={`/recipe/${displayRecipe.id}`} className="block group">
    <div className="block group w-full max-w-sm mx-auto"> {/* For isolated testing, add width constraints */}
      <Card className="recipe-card overflow-hidden h-full flex flex-col group-hover:shadow-xl transition-shadow duration-300">
        <div className="aspect-video relative overflow-hidden">
          <img
            src={displayRecipe.imageUrl || 'https://placehold.co/600x400/cccccc/000000?text=No+Image'} // Fallback for imageUrl too
            alt={displayRecipe.name}
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <CardHeader>
          <div className="flex justify-between items-start gap-2">
            <CardTitle className="font-display text-xl group-hover:text-primary transition-colors">
              {displayRecipe.name}
            </CardTitle>
            <Badge variant="secondary" className="shrink-0">{displayRecipe.difficulty}</Badge>
          </div>
          <CardDescription className="line-clamp-2 mt-1">
            {displayRecipe.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <div className="flex justify-between text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{totalCookTime > 0 ? `${totalCookTime} mins` : 'N/A'}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>{displayRecipe.servings || 'N/A'} servings</span>
            </div>
            <div>{displayRecipe.calories ? `${displayRecipe.calories} cal` : 'N/A'}</div>
          </div>
        </CardContent>
      </Card>
    </div>
    // </Link>
  );
};
