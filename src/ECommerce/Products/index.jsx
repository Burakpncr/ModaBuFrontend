import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchProducts } from "../../features/products/productsSlice";
import { addItem } from '../../features/cart/cartSlice'
import CategoryBar from './CategoryBar'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import Header from '../../Header/index'
import Footer from '../../Footer/index'
import "./Product.css"
function Products() {

  const dispatch = useDispatch()
  const { list: products, loading, error } = useSelector(state => state.products)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedColors, setSelectedColors] = useState([])
  const [selectedGenders, setSelectedGenders] = useState([])
  const [selectedCategories, setSelectedCategories] = useState([])
  
  const handleAddToCart = (product) => {
    console.log('🛒 Sepete ekle tetiklendi, gelen ürün:', product)
    dispatch(addItem({
      id: product.productId,
      productName: product.productName,
      productPrice: product.productPrice,
      productDescription: product.productDescription,
      imageUrl: `/assets/img/${product.imageUrl}`,
      quantity: 1
    }))
    // hemen sonrası için:
    console.log('▶️ LocalStorage sonrası cart:', localStorage.getItem('cart'))
  }

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  if (loading) return <p>Ürünler yükleniyor…</p>
  if (error)   return <p>Hata: {error}</p>
  const bySearch = products.filter(p =>
    p.productName.toLowerCase().includes(searchTerm.toLowerCase())
  )
  const byColor = selectedColors.length
  ? bySearch.filter(p => selectedColors.includes(p.colorId))  // colorId'yi filtreliyoruz
  : bySearch

  // 3) Cinsiyet filtresi
  const byGender = selectedGenders.length
    ? byColor.filter(p => selectedGenders.includes(p.gender))  // gender'ı filtreliyoruz
    : byColor

  // 4) Kategori filtresi
  const finalList = selectedCategories.length
  ? byGender.filter(p => selectedCategories.includes(p.categoryId))  // categoryId'yi filtreliyoruz
  : byGender

  return (
    <div>
    <Header />
    <div className="layout-container">
      <div className="left-column">
        <CategoryBar 
         selectedColors={selectedColors}
         selectedGenders={selectedGenders}
         selectedCategories={selectedCategories}
         onColorChange={(id, checked) => {
           setSelectedColors(prev =>
             checked ? [...prev, id] : prev.filter(c => c !== id)
           )
         }}
         onGenderChange={(gender, checked) => {
           setSelectedGenders(prev =>
             checked ? [...prev, gender] : prev.filter(g => g !== gender)
           )
         }}
         onCategoryChange={(id, checked) => {
           setSelectedCategories(prev =>
             checked ? [...prev, id] : prev.filter(c => c !== id)
           )
         }}
        />
      </div>
      <div className="right-content">
        <div className="top-box">
        <Paper
      onSubmit={e => e.preventDefault()}
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 1100 }}
    >
      <IconButton sx={{ p: '10px' }} aria-label="menu">
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Ürün Ara"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
      
      </IconButton>
    </Paper>
        </div>
        <div className="bottom-box">
        {finalList.map(product => (
          
            <Card sx={{ maxWidth: 255 }} key={product.productId}>
            <CardMedia
              sx={{ height: 140 }}
              image={"/assets/img/"+product.imageUrl}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {product.productName}
              </Typography>
              <Typography variant="body2" sx={{ height:"5vh" }}>
               {product.productDescription}
                             </Typography> <br/>
                             <Typography variant="body2" sx={{ color: 'text.secondary',height:"5vh" }}> 
               {product.productPrice} TL
                             </Typography>
            </CardContent>
            <CardActions>
              <Button size="small"  onClick={() => handleAddToCart(product)}>Sepete ekle</Button>
              <Button
              size="small"
              component={Link}
              to={`/products/${product.productId}`}
            >Ürün detayına git</Button>
            </CardActions>
          </Card>
          
          ))}
        </div>
      </div>
    </div>
   <Footer />
    </div>

  )
}

export default Products