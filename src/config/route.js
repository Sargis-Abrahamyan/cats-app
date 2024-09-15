import Cats from '../pages/cats';

// Define the paths in a separate array
const catPaths = ['/boxes', '/clothes', '/hats', '/sinks', '/space', '/sunglasses', '/ties'];

// Create a single map to generate route config based on the paths
export const configRoutes = catPaths.map((path, index) => ({
  id: index + 1, // Generate unique id based on index
  path: path,
  element: <Cats />, // Reuse the same Cats component
}));
