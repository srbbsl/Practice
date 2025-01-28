


//const h = '[]';
export const setToLocal = (blogs) => {
    localStorage.setItem('blogs', JSON.stringify(blogs));
};

export const getFromLocal = () => {
    const blogs = localStorage.getItem('blogs');
    return blogs === null ? [] : JSON.parse(blogs);
};