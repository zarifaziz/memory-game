const shuffle = () => {
    // 8 objects that reference the images in the public dir
    const assets = [
        { image: '/assets/cat_1.jpeg' },
        { image: '/assets/cat_2.jpeg' },
        { image: '/assets/cat_3.png' },
        { image: '/assets/cat_4.png' },
        { image: '/assets/cat_5.jpeg' },
        { image: '/assets/cat_6.png' },
        { image: '/assets/cat_7.png' },
        { image: '/assets/cat_8.png' },
    ];
    return [...assets, ...assets]
        .sort(() => Math.random() - 0.5)
        .map((card) => ({ ...card, id: Math.random() }));
};

export default shuffle;