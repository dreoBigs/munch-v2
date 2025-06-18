// src/pages/RecipePage.tsx (Modified for UI Testing)
import React from 'react';
import { useParams, Link } from "react-router-dom";
import { RecipeDetail } from "../components/RecipeDetail"; // Adjust path if necessary
import { Button } from "../components/ui/button";       // Adjust path if necessary
import { ArrowLeft } from "lucide-react";
// import { useQuery } from "@tanstack/react-query"; // Commented out for UI testing
// import { supabase } from "@/integrations/supabase/client"; // Commented out
// import type { Recipe } from "@/types/recipe"; // Recipe type is used by RecipeDetail internally

const RecipePage = () => {
  const { recipeId } = useParams<{ recipeId: string }>(); // Kept to simulate page context and potentially display the ID

  // Simulate states for UI testing without backend
  const isLoading = false; // Set to true to test the loading skeleton below
  const recipeExists = true; // Set to false to test the "Recipe not found" message

  // When not UI testing, 'recipe' would come from the useQuery hook.
  // For UI testing, RecipeDetail will use its internal defaultRecipeDetail
  // because we are not passing a 'recipe' prop to it here.

  if (isLoading) {
    return (
      <div className="container mx-auto py-8">
        <Button asChild variant="outline" className="mb-8">
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to recipes
          </Link>
        </Button>
        {/* Simplified Loading Skeleton for Recipe Detail Page */}
        <div className="animate-pulse space-y-8">
          <div className="h-10 bg-muted rounded w-3/4"></div> {/* Title placeholder */}
          <div className="h-6 bg-muted rounded w-1/2 mt-2"></div> {/* Description placeholder */}
          <div className="flex flex-wrap gap-4 sm:gap-6 mt-4"> {/* Responsive gap */}
            <div className="h-5 bg-muted rounded w-1/4"></div> {/* Stats placeholder */}
            <div className="h-5 bg-muted rounded w-1/4"></div> {/* Stats placeholder */}
            <div className="h-5 bg-muted rounded w-1/4"></div> {/* Stats placeholder */}
          </div>
          <div className="aspect-video bg-muted rounded-lg mt-6"></div> {/* Image placeholder */}
          <div className="grid md:grid-cols-2 gap-8 mt-6">
            <div>
              <div className="h-8 bg-muted rounded w-1/3 mb-4"></div> {/* Ingredients title */}
              <div className="space-y-2">
                {[1, 2, 3, 4].map(n => <div key={n} className="h-4 bg-muted rounded"></div>)}
              </div>
            </div>
            <div>
              <div className="h-8 bg-muted rounded w-1/3 mb-4"></div> {/* Instructions title */}
              <div className="space-y-6">
                {[1, 2, 3].map(n => <div key={n} className="h-20 bg-muted rounded"></div>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!recipeExists) {
    return (
      <div className="container mx-auto py-8 text-center">
        <h1 className="font-display text-3xl mb-4">Recipe Not Found</h1>
        <p className="mb-4 text-muted-foreground">Could not find details for recipe ID: {recipeId || 'Unknown'}</p>
        <Button asChild variant="outline">
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to recipes
          </Link>
        </Button>
      </div>
    );
  }

  // This is the main render path for when the recipe "exists" (using mock data)
  return (
    <div className="container mx-auto py-8">
      <div className="mb-8">
        <Button asChild variant="outline">
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Recipes
          </Link>
        </Button>
      </div>
      {/*
        RecipeDetail component is designed to use its own defaultRecipeDetail (mock data)
        if no 'recipe' prop is passed to it.
        The recipeId from the URL is available if you want to display it or use it for other UI logic.
      */}
      <p className="mb-4 text-sm text-center text-gray-500">(Displaying mock details for UI testing - Recipe ID from URL: {recipeId || 'N/A'})</p>
      <RecipeDetail />
    </div>
  );
};

export default RecipePage;
