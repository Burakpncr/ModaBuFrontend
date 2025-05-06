import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../../Header/index'
import Footer from '../../Footer/index'
import {
  Card,
  CardContent,
  Typography,
  Grid,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';

export default function PaymentForm({ onSubmit }) {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.items);
  const total = items.reduce((sum, item) => sum + item.productPrice * item.quantity, 0);

  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    e.preventDefault()
    console.log('📨 Form submit edildi') // ✅ Bunu EKELE
  
    if (!cardNumber || !cardName || !expiry || !cvv) {
      setError('Lütfen tüm alanları doldurun.');
      return;
    }
    setError('');
    // Ödeme bilgileri ve sepet verilerini gönderme
    if (onSubmit) {
      console.log('📦 onSubmit fonksiyonu çağrılıyor') 
      onSubmit({ cardNumber, cardName, expiry, cvv, items, total });
    }
    // Sepeti temizle
  };

  return (
    <div>
        <Header />
  <Card sx={{ maxWidth: 600, margin: '2rem auto', padding: '1rem' }}>
      <CardContent>
        {/* Sepet Detayları */}
        <Typography variant="h5" gutterBottom>
          Sepetiniz
        </Typography>
        {items.length === 0 ? (
          <Typography>Sepetinizde ürün bulunmamaktadır.</Typography>
        ) : (
          <List>
            {items.map(item => (
              <ListItem key={item.id} disableGutters>
                <ListItemText
                  primary={`${item.productName} x ${item.quantity}`}
                  secondary={`₺${item.productPrice * item.quantity}`}
                />
              </ListItem>
            ))}
            <Divider />
            <ListItem disableGutters>
              <ListItemText primary="Toplam" />
              <Typography variant="subtitle1">₺{total}</Typography>
            </ListItem>
          </List>
        )}

        {/* Ödeme Formu */}
        <Typography variant="h5" gutterBottom sx={{ marginTop: '1.5rem' }}>
          Ödeme Bilgileri
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Kart Numarası"
                value={cardNumber}
                onChange={e => setCardNumber(e.target.value)}
                fullWidth
                inputProps={{ maxLength: 19 }}
                placeholder="XXXX XXXX XXXX XXXX"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Kart Sahibi Ad Soyad"
                value={cardName}
                onChange={e => setCardName(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Son Geçerlilik Tarihi (MM/YY)"
                value={expiry}
                onChange={e => setExpiry(e.target.value)}
                fullWidth
                placeholder="MM/YY"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="CVV"
                value={cvv}
                onChange={e => setCvv(e.target.value)}
                fullWidth
                placeholder="XXX"
                inputProps={{ maxLength: 4 }}
              />
            </Grid>
            {error && (
              <Grid item xs={12}>
                <Typography color="error">{error}</Typography>
              </Grid>
            )}
            <Grid item xs={12} sx={{ textAlign: 'right' }}>
              <Button type="submit" variant="contained">
                Ödemeyi Tamamla
              </Button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
    <Footer />
    </div>
  
  );
}
