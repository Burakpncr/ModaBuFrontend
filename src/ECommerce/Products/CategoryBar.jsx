import React from 'react';
import './Category.css';

const CategoryBar = ({
  selectedColors,
  selectedGenders,
  selectedCategories,
  onColorChange,
  onGenderChange,
  onCategoryChange
}) => {
    const colors = [
      { id: 1, name: "Kırmızı" },
      { id: 2, name: "Sarı" },
      { id: 3, name: "Mavi" },
      { id: 5, name: "Siyah" },
      { id: 6, name: "Beyaz" },
    ]
    
    const types = [
      { id: 1, name: "Pantolon" },
      { id: 2, name: "Tişört" },
      { id: 3, name: "Gömlek" },
      { id: 4, name: "Atlet" },
      { id: 5, name: "Ceket" },
      { id: 6, name: "Mont" },
    ]
    
    const genders = ["Erkek", "Kadın", "Unisex"]
    
 /* const [Renk, setRenk] = useState([
    { id: 1, renk:"Kırmızı" },
    { id: 2, renk:"Sarı" },
    { id: 3, renk:"Mavi" },
    { id: 4, renk:"Mavi" },
    { id: 5, renk:"Siyah" },
    { id: 6, renk:"Beyaz" }
  ]);
  const [TurList, setTur] = useState([
    { id: 1, tur:"Pantolon" },
    { id: 2, tur:"Tişört" },
    { id: 3, tur:"Gömlek" },
    { id: 4, tur:"Atlet" },
    { id: 5, tur:"Ceket" },
    { id: 6, tur:"Mont" }
  ]);*/
  return (
    <div className="category-bar" style={{marginTop:"20px"}}>
      <div style={{borderBottom:"solid", borderLeftWidth: "1px" }}>
        <h2>Filtrele</h2>
      </div>
      
      <div className="filter-box" style={{marginTop:"30px"}}>
      <p className="filter-title">Renk</p>
      {colors.map(c => (
  <label key={c.id} className="filter-option">
    <input
      type="checkbox"
      value={c.id}
      checked={selectedColors.includes(c.id)}
      onChange={e => onColorChange(c.id, e.target.checked)}
    />
    <span>{c.name}</span>
  </label>
))}
    </div>
    <div className="filter-box">
      <p className="filter-title"> Cinsiyet</p>
      
      <p className="filter-title">Cinsiyet</p>
{genders.map(g => (
  <label key={g} className="filter-option">
    <input
      type="checkbox"
      value={g}
      checked={selectedGenders.includes(g)}
      onChange={e => onGenderChange(g, e.target.checked)}
    />
    <span>{g}</span>
  </label>
))}
    </div>
    <div className="filter-box">
      <p className="filter-title">Giyim Türü</p>
      <p className="filter-title">Giyim Türü</p>
{types.map(t => (
  <label key={t.id} className="filter-option">
    <input
      type="checkbox"
      value={t.id}
      checked={selectedCategories.includes(t.id)}
      onChange={e => onCategoryChange(t.id, e.target.checked)}
    />
    <span>{t.name}</span>
  </label>
))}
       
    </div>
    </div>
  );
};

export default CategoryBar;
