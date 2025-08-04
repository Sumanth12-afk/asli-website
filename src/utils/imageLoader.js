// Utility function to load images from the unified /images/ folder based on prefixes

export const loadImagesByPrefix = (prefix) => {
  // Define image lists for each category based on prefix
  const imageDatabase = {
    ambience: [
      { filename: 'ambience01.jpg', title: 'Main Dining Hall', description: 'Elegant dining space with traditional Indian motifs and warm lighting' },
      { filename: 'ambience02.jpg', title: 'Private Lounge', description: 'Intimate setting perfect for special occasions and celebrations' },
      { filename: 'ambience03.jpg', title: 'Royal Bar Area', description: 'Sophisticated bar featuring premium spirits and handcrafted cocktails' },
      { filename: 'ambience04.jpg', title: 'Garden Terrace', description: 'Open-air dining experience under the stars with Indian garden aesthetics' },
      { filename: 'ambience05.jpg', title: 'Royal Suite', description: 'Exclusive dining experience fit for royalty with ornate decorations' },
      { filename: 'ambience06.jpg', title: 'Chef\'s Table', description: 'Watch our master chefs create culinary art in our open kitchen' },
      { filename: 'ambience07.jpg', title: 'Wine Cellar', description: 'Curated selection of fine wines in our temperature-controlled cellar' }
    ],
    food: [
      { filename: 'food01.jpg', title: 'Karnataka Military Mutton Pulao', description: 'Aromatic basmati rice with tender mutton, cooked in traditional military style with authentic Karnataka spices', category: 'Main Course', ingredients: 'Basmati Rice, Mutton, Karnataka Spices, Saffron' },
      { filename: 'food02.jpg', title: 'Murgh Kalmi', description: 'Tender chicken drumettes marinated in aromatic spices and grilled to perfection', category: 'Appetizer', ingredients: 'Chicken Drumettes, Yogurt, Spices, Herbs' },
      { filename: 'food03.jpg', title: 'Yakhni Ghost Pulao', description: 'Fragrant rice dish with succulent mutton cooked in aromatic yakhni stock', category: 'Main Course', ingredients: 'Basmati Rice, Mutton, Yakhni Stock, Whole Spices' },
      { filename: 'food04.jpg', title: 'Shahi Shadoot Tukda and Gulkand Aur Chocolate', description: 'Royal bread pudding with rich cream and rose-chocolate fusion dessert', category: 'Dessert', ingredients: 'Bread, Milk, Sugar, Gulkand, Chocolate, Nuts' },
      { filename: 'food05.jpg', title: 'Garlic Naan', description: 'Soft, fluffy bread topped with fresh garlic and herbs, baked in tandoor', category: 'Bread', ingredients: 'Flour, Yogurt, Garlic, Butter, Herbs' },
      { filename: 'food06.jpg', title: 'Jhol Momo', description: 'Steamed dumplings served in flavorful spiced broth', category: 'Appetizer', ingredients: 'Wheat Flour, Filling, Spiced Broth, Vegetables' },
      { filename: 'food07.jpg', title: 'Filter Kaapi Biscoot', description: 'Traditional South Indian filter coffee served with crispy biscuits', category: 'Dessert', ingredients: 'Coffee Powder, Milk, Sugar, Butter Biscuits' }
    ],
          menu: [
        { filename: 'menu front page 1.png', title: '', description: '' },
        { filename: 'menu 2nd page 2.png', title: '', description: '' },
        { filename: 'soups 3.png', title: 'soups', description: '' },
        { filename: 'appetisers 4.png', title: 'appetisers', description: '' },
        { filename: 'kebabs and grills 5.png', title: 'kebabs and grills', description: '' },
        { filename: 'main course 6.png', title: 'main course', description: '' },
        { filename: 'main course 7.png', title: 'main course', description: '' },
        { filename: 'biryani and pulaos 8.png', title: 'biryani and pulaos', description: '' },
        { filename: 'asli signatures 9.png', title: 'asli signatures', description: '' },
        { filename: 'breads and dosas 10.png', title: 'breads and dosas', description: '' },
        { filename: 'rice and desserts 11.png', title: 'rice and desserts', description: '' },
        { filename: 'beverages 12.png', title: 'beverages', description: '' },
        { filename: 'menu last page 13.png', title: '', description: '' }
      ]
  };

  const images = imageDatabase[prefix] || [];
  
  return images.map((image, index) => ({
    ...image,
    src: `/images/${image.filename}`,
    id: index + 1
  }));
};

// Function to create fallback SVG for missing images
export const createFallbackSVG = (title, width = 400, height = 300) => {
  return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${width}' height='${height}' viewBox='0 0 ${width} ${height}'%3E%3Crect width='${width}' height='${height}' fill='%23FAF4EC'/%3E%3Ctext x='${width/2}' y='${height/2}' font-family='serif' font-size='18' fill='%23D4AF37' text-anchor='middle' dominant-baseline='middle'%3E${encodeURIComponent(title)}%3C/text%3E%3C/svg%3E`;
};

// Function to preload images
export const preloadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
};

// Function to lazy load images with intersection observer
export const createLazyImageObserver = (callback) => {
  const options = {
    root: null,
    rootMargin: '50px',
    threshold: 0.1
  };

  return new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        callback(entry.target);
      }
    });
  }, options);
};