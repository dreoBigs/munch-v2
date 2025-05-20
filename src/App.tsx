// // Remove or comment out unused imports from the default Vite template if they were there
// // import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// // import './App.css' // Ensure App.css is empty or not imported if it causes conflicts

// // Import your RecipeCard component
// // Adjust the path if your RecipeCard.tsx is located elsewhere (e.g., directly in components)
// import { RecipeCard } from './components/RecipeCard'; // Assuming RecipeCard.tsx is in src/components/

// function App() {
//   return (
//     // You can add some basic page layout styling here if needed for better viewing
//     // For example, to center the card on the page for testing:
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
//       {/* Render the RecipeCard. Since no 'recipe' prop is passed,
//           it will use the 'defaultRecipe' mock data defined within RecipeCard.tsx */}
//       <RecipeCard />

//       {/* You can add another instance to see how multiple cards look, or a card with specific props if needed */}
//       {/*
//       <div className="mt-8">
//         <RecipeCard recipe={{
//           id: "another-mock",
//           name: "Another Test Dish",
//           description: "A different description for testing variations.",
//           imageUrl: "https://placehold.co/600x400/3498db/FFF?text=Dish+2!",
//           difficulty: "Medium",
//           prepTime: 15,
//           cookTime: 30,
//           servings: 2,
//           calories: 400,
//           ingredients: [],
//           instructions: [],
//           tags: ["test"]
//         }} />
//       </div>
//       */}
//     </div>
//   );
// }

// export default App;


import React from 'react';
// Removed deprecated Toaster: import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner"; // Ensure path is correct
import { TooltipProvider } from "./components/ui/tooltip";   // Ensure path is correct
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Link as RouterLink } from "react-router-dom";

// Import your page components
// Ensure these paths are correct for your munch-ai-v2 project structure
import IndexPage from './pages/Index';
import RecipeDetailPage from './pages/RecipePage';

// Ensure App.css is either empty or not imported if it was causing conflicts during minimal testing
// import './App.css';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter>
          {/* Basic Navigation - You can replace this with a more sophisticated Nav component later */}
          <nav style={{ padding: '1rem', backgroundColor: '#f0f0f0', textAlign: 'center', marginBottom: '1rem', borderBottom: '1px solid #ddd' }}>
            <RouterLink to="/" style={{ marginRight: '1rem', color: '#007bff', textDecoration: 'none' }}>
              Home
            </RouterLink>
            {/* You can add a direct link to a mock recipe detail for quick testing if needed */}
            
            {/* <RouterLink to="/recipe/mock-detail-456" style={{ color: '#007bff', textDecoration: 'none' }}>
              Test Recipe Detail
            </RouterLink> */}
          </nav>

          <main className="app-content"> {/* Optional: Wrapper for main content area */}
            <Routes>
              <Route path="/" element={<IndexPage />} />
              <Route path="/recipe/:recipeId" element={<RecipeDetailPage />} />
              {/* Optional: Catch-all route for 404 pages */}
              <Route path="*" element={
                <div className="text-center p-10">
                  <h1 className="text-3xl font-bold mb-4">404 - Page Not Found</h1>
                  <RouterLink to="/" className="text-blue-600 hover:underline">
                    Go to Homepage
                  </RouterLink>
                </div>
              } />
            </Routes>
          </main>

        </BrowserRouter>
        {/* Removed deprecated <Toaster /> */}
        <Sonner /> {/* This is the correct Toaster (aliased as Sonner) */}
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;