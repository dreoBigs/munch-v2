// Remove or comment out unused imports from the default Vite template if they were there
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css' // Ensure App.css is empty or not imported if it causes conflicts

// Import your RecipeCard component
// Adjust the path if your RecipeCard.tsx is located elsewhere (e.g., directly in components)
import { RecipeCard } from './components/RecipeCard'; // Assuming RecipeCard.tsx is in src/components/

function App() {
  return (
    // You can add some basic page layout styling here if needed for better viewing
    // For example, to center the card on the page for testing:
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      {/* Render the RecipeCard. Since no 'recipe' prop is passed,
          it will use the 'defaultRecipe' mock data defined within RecipeCard.tsx */}
      <RecipeCard />

      {/* You can add another instance to see how multiple cards look, or a card with specific props if needed */}
      {/*
      <div className="mt-8">
        <RecipeCard recipe={{
          id: "another-mock",
          name: "Another Test Dish",
          description: "A different description for testing variations.",
          imageUrl: "https://placehold.co/600x400/3498db/FFF?text=Dish+2!",
          difficulty: "Medium",
          prepTime: 15,
          cookTime: 30,
          servings: 2,
          calories: 400,
          ingredients: [],
          instructions: [],
          tags: ["test"]
        }} />
      </div>
      */}
    </div>
  );
}

export default App;
