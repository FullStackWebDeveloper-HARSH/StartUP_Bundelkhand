import React from 'react';


const categories = [
    { name: 'DIRECT TO CONSUMER', icon: '📦' },
    { name: 'CLIMATE TECH', icon: '🌍' },
    { name: 'CRYPTO', icon: '🪙' },
    { name: 'EDUCATION', icon: '📚' },
    { name: 'FASHION', icon: '👗' },
    { name: 'FEMALE FOUNDERS', icon: '💡' },
    { name: 'FINTECH', icon: '💰' },
    { name: 'FOOD & BEVERAGE', icon: '🍽️' },
    { name: 'GOVERNMENT', icon: '🏛️' },
    { name: 'HARDWARE', icon: '🔧' },
    { name: 'HEALTH TECH', icon: '⚕️' },
    { name: 'SaaS', icon: '💻' },
    { name: 'SPORTS & FITNESS', icon: '🏀' },
    { name: 'VETERANS', icon: '🎖️' },
    { name: '+ MORE', icon: '➕' }
];

function CategoryGrid() {
    return (
        <div className="category-grid">
            {categories.map((category, index) => (
                <div key={index} className="category-item">
                    <span className="category-icon">{category.icon}</span>
                    <span className="category-name">{category.name}</span>
                </div>
            ))}
        </div>
    );
}

export default CategoryGrid;