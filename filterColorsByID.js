const filterColorsByID = (colors, id) =>
  //  colors.filter(color => color.id !== id);
  {
    if (id) {
      return colors.filter(color => color.id !== id);
    }
    return [];
  };

export default filterColorsByID;
