// import { useQuery } from "@tanstack/react-query"; // Commented out for UI testing
import { RecipeCard } from "../components/RecipeCard"; // Assuming this path is correct in munch-ai-v2
// import { supabase } from "@/integrations/supabase/client"; // Commented out
import type { Recipe } from "@/types/recipe"; // Keep type import

// Define some mock recipes for display if RecipeCard doesn't use its internal default
// or if you want to show multiple different cards.
// For simplicity, we'll rely on RecipeCard's internal defaultRecipe for now,
// and just render a few instances of it.
// If RecipeCard's defaultRecipe is not exported, you might need to define a similar mock here.

const mockRecipesForDisplay: Partial<Recipe>[] = [ // Using Partial<Recipe> for flexibility if defaultRecipe is complex
  { id: "mock-1", name: "First Mock Recipe" }, // RecipeCard will fill in the rest with its default
  { id: "mock-2", name: "Second Awesome Mock Dish" },
  { id: "mock-3", name: "Third Test Recipe" },
  // Add more if you want to test grid layout with more items
  { id: "mock-4", name: "Fourth Mock Delight" },
  { id: "mock-5", name: "Fifth Mock Creation" },
  { id: "mock-6", name: "Sixth Mock Special" },
];


const Index = () => {
//   const { data: recipes, isLoading } = useQuery({ // Commented out backend data fetching
//     queryKey: ['recipes'],
//     queryFn: async () => {
//       const { data: recipesData, error: recipesError } = await supabase
//         .from('recipies')
//         .select(`
//           *,
//           ingredients:ingredients(name, quantity),
//           instructions:instructions(instruction)
//         `);
//       if (recipesError) throw recipesError;
//       return recipesData.map((recipe): Recipe => ({
//         id: recipe.id,
//         name: recipe.name || '',
//         description: recipe.description || '',
//         ingredients: recipe.ingredients.map((ing: any) => ({
//           name: ing.name || '',
//           quantity: ing.quantity || '',
//           unit: ''
//         })),
//         instructions: recipe.instructions.map((inst: any) => inst.instruction || ''),
//         prepTime: Math.floor((recipe.total_time || 0) / 2),
//         cookTime: Math.floor((recipe.total_time || 0) / 2),
//         servings: recipe.serving_size || 0,
//         calories: recipe.calories || 0,
//         difficulty: "Medium",
//         imageUrl: recipe.image_url || '/placeholder.svg',
//         tags: []
//       }));
//     }
//   });

  // For UI testing, we'll use a flag or directly render mock data
  const isLoading = false; // Simulate loading finished
  const recipes = mockRecipesForDisplay as Recipe[]; // Use mock data, cast to Recipe[]

  return (
    <div className="min-h-screen"> {/* Preserving your original layout structure */}
      <section className="bg-secondary py-16 mb-12">
        <div className="container mx-auto"> {/* Added mx-auto to container for centering */}
          <div className="max-w-2xl mx-auto text-center space-y-4">
            <h1 className="text-6xl font-extrabold bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent drop-shadow-md">
              munch
            </h1>
            <p className="text-xl text-muted-foreground">
              Discover recipes that are both tasty and good for you
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto py-8"> {/* Added mx-auto */}
        <h2 className="font-display text-3xl mb-8 text-center sm:text-left">Featured Recipes</h2> {/* Added text-center for small screens, sm:text-left for larger */}
        {isLoading ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((n) => (
              <div key={n} className="animate-pulse">
                <div className="aspect-video bg-muted rounded-lg mb-4"></div>
                <div className="h-4 bg-muted rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-muted rounded w-1/2"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 justify-items-center"> {/* Added justify-items-center */}
            {/* Render RecipeCard using its internal defaultRecipe or by passing partial mock data */}
            {recipes?.map((recipe) => (
              // If your RecipeCard uses its internal defaultRecipe when no recipe prop is passed,
              // you can just do <RecipeCard key={recipe.id} />
              // Or, pass the partial mock data to override parts of the default
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
            {/* If recipes array is empty or undefined, and you want to show at least one for UI testing: */}
            {(!recipes || recipes.length === 0) && <RecipeCard />}
          </div>
        )}
      </section>
    </div>
  );
};

export default Index;