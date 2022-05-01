import React, { useContext, useEffect } from 'react'

import { ThemeContext } from './features/ThemeContext'

import { Grid, Button, IconButton, Divider, Typography, Container } from '@mui/material'
import { AddShoppingCart, ShoppingCartCheckout, Delete, Send, Cancel, Check, ThumbUp, Grade, Save } from '@mui/icons-material'
import LoadingButton from '@mui/lab/LoadingButton'
import { blue } from '@mui/material/colors'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { a11yDark, prism } from 'react-syntax-highlighter/dist/esm/styles/prism'

import './App.scss'

function App() {
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode

  const [loading, setLoading] = React.useState(false)
  const [loaded, setLoaded] = React.useState(false)

  const handleLoadingClick = () => setLoading(true)

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false)
        setLoaded(true)
        setTimeout(() => {
          setLoaded(false)
        }, 1000)
      }, 2000)
    }
  }, [loading, loaded])

  return (
    <Container>
      <Grid container spacing={2} sx={{ textAlign: 'center', maxWidth: 'lg' }}>
        {/* Variants */}
        <Grid item xs={12} lg={12}>
          <Divider textAlign="left" sx={{ pt: '1rem' }}>
            <Typography variant="h5" component="h2" align="left" color="textPrimary">
              {'Variants'}
            </Typography>
          </Divider>
        </Grid>
        {/* Contained */}
        <Grid item xs={12} lg={6}>
          <Button variant="contained" color="primary">
            Default
          </Button>
          <SyntaxHighlighter language="jsx" style={darkMode ? a11yDark : prism}>
            {'<Button />'}
          </SyntaxHighlighter>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Button disabled variant="contained" color="primary">
            Default
          </Button>
          <SyntaxHighlighter language="jsx" style={darkMode ? a11yDark : prism}>
            {'<Button disabled />'}
          </SyntaxHighlighter>
        </Grid>

        {/* Outline */}
        <Grid item xs={12} lg={6}>
          <Button variant="outlined" color="primary">
            Outlined
          </Button>
          <SyntaxHighlighter language="jsx" style={darkMode ? a11yDark : prism}>
            {'<Button variant="outlined" />'}
          </SyntaxHighlighter>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Button variant="outlined" color="primary" disabled>
            Outlined
          </Button>
          <SyntaxHighlighter language="jsx" style={darkMode ? a11yDark : prism}>
            {'<Button variant="outlined" disabled />'}
          </SyntaxHighlighter>
        </Grid>

        {/* Text */}
        <Grid item xs={12} lg={6}>
          <Button variant="text" color="primary">
            Text
          </Button>
          <SyntaxHighlighter language="jsx" style={darkMode ? a11yDark : prism}>
            {'<Button variant="text" />'}
          </SyntaxHighlighter>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Button variant="text" color="primary" disabled>
            Text
          </Button>
          <SyntaxHighlighter language="jsx" style={darkMode ? a11yDark : prism}>
            {'<Button variant="text" disabled />'}
          </SyntaxHighlighter>
        </Grid>

        {/* Size */}
        <Grid item xs={12} lg={12}>
          <Divider textAlign="left" sx={{ pt: '1rem' }}>
            <Typography variant="h5" component="h2" align="left" color="textPrimary">
              {'Size'}
            </Typography>
          </Divider>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Button variant="contained" size="small">
            Default
          </Button>
          <SyntaxHighlighter language="jsx" style={darkMode ? a11yDark : prism}>
            {'<Button variant="contained" size="small" />'}
          </SyntaxHighlighter>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Button variant="contained" size="medium">
            Default
          </Button>
          <SyntaxHighlighter language="jsx" style={darkMode ? a11yDark : prism}>
            {'<Button variant="contained" size="medium" />'}
          </SyntaxHighlighter>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Button variant="contained" size="large">
            Default
          </Button>
          <SyntaxHighlighter language="jsx" style={darkMode ? a11yDark : prism}>
            {'<Button variant="contained" size="large" />'}
          </SyntaxHighlighter>
        </Grid>

        {/* Disable shadow */}
        <Grid item xs={12} lg={12}>
          <Divider textAlign="left" sx={{ pt: '1rem' }}>
            <Typography variant="h5" component="h2" align="left" color="textPrimary">
              {'Disable shadow'}
            </Typography>
          </Divider>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Button variant="contained" color="primary" disableElevation>
            Text
          </Button>
          <SyntaxHighlighter language="jsx" style={darkMode ? a11yDark : prism}>
            {'<Button variant="contained" disableElevation />'}
          </SyntaxHighlighter>
        </Grid>

        {/* Icons */}
        <Grid item xs={12} lg={12}>
          <Divider textAlign="left" sx={{ pt: '1rem' }}>
            <Typography variant="h5" component="h2" align="left" color="textPrimary">
              {'Icons'}
            </Typography>
          </Divider>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Button variant="contained" color="primary" startIcon={<AddShoppingCart />}>
            Add to cart
          </Button>
          <SyntaxHighlighter language="jsx" style={darkMode ? a11yDark : prism}>
            {'<Button variant="contained" startIcon={<AddShoppingCart />} />'}
          </SyntaxHighlighter>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Button variant="contained" color="primary" endIcon={<ShoppingCartCheckout />}>
            Checkout
          </Button>
          <SyntaxHighlighter language="jsx" style={darkMode ? a11yDark : prism}>
            {'<Button variant="contained" endIcon={<ShoppingCartCheckout />} />'}
          </SyntaxHighlighter>
        </Grid>

        {/* Colors */}
        <Grid item xs={12} lg={12}>
          <Divider textAlign="left" sx={{ pt: '1rem' }}>
            <Typography variant="h5" component="h2" align="left" color="textPrimary">
              {'Colors'}
            </Typography>
          </Divider>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Button variant="contained" color="error" endIcon={<Delete />}>
            Delete
          </Button>
          <SyntaxHighlighter language="jsx" style={darkMode ? a11yDark : prism}>
            {'<Button variant="contained" color="error" endIcon={<Delete />} />'}
          </SyntaxHighlighter>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Button variant="contained" color="success" endIcon={<Send />}>
            Send
          </Button>
          <SyntaxHighlighter language="jsx" style={darkMode ? a11yDark : prism}>
            {'<Button variant="contained" color="success" endIcon={<Send />} />'}
          </SyntaxHighlighter>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Button variant="outlined" color="secondary" endIcon={<Cancel />}>
            Cancel
          </Button>
          <SyntaxHighlighter language="jsx" style={darkMode ? a11yDark : prism}>
            {'<Button variant="outlined" color="secondary" endIcon={<Cancel />} />'}
          </SyntaxHighlighter>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Button variant="contained" color="secondary" endIcon={<Check />}>
            Confirm
          </Button>
          <SyntaxHighlighter language="jsx" style={darkMode ? a11yDark : prism}>
            {'<Button variant="contained" color="secondary" endIcon={<Check />} />'}
          </SyntaxHighlighter>
        </Grid>

        {/* Icon only with custom color */}
        <Grid item xs={12} lg={12}>
          <Divider textAlign="left" sx={{ pt: '1rem' }}>
            <Typography variant="h5" component="h2" align="left" color="textPrimary">
              {'Icon only with custom color'}
            </Typography>
          </Divider>
        </Grid>
        <Grid item xs={12} lg={6}>
          <IconButton sx={{ color: blue[500] }} aria-label="Like">
            <ThumbUp />
          </IconButton>
          <SyntaxHighlighter language="jsx" style={darkMode ? a11yDark : prism}>
            {`<IconButton sx={{ color: blue[500] }}>
  <ThumbUp />
</IconButton>`}
          </SyntaxHighlighter>
        </Grid>
        <Grid item xs={12} lg={6}>
          <IconButton sx={{ color: 'rgba(255, 193, 7, 0.8)' }} aria-label="rate">
            <Grade />
          </IconButton>
          <SyntaxHighlighter language="jsx" style={darkMode ? a11yDark : prism}>
            {`<IconButton sx={{ color: 'rgba(255, 193, 7, 0.8)' }}>
  <Grade />
</IconButton>`}
          </SyntaxHighlighter>
        </Grid>

        {/* Loading */}
        <Grid item xs={12} lg={12}>
          <Divider textAlign="left" sx={{ pt: '1rem' }}>
            <Typography variant="h5" component="h2" align="left" color="textPrimary">
              {'Loading'}
            </Typography>
          </Divider>
        </Grid>
        <Grid item xs={12} lg={6}>
          <LoadingButton variant="contained" color={loaded ? 'success' : 'primary'} onClick={handleLoadingClick} loading={loading} loadingPosition="end" endIcon={loaded ? <Check /> : <Send />}>
            {loaded ? 'Sent!' : loading ? 'Sending...' : 'Send'}
          </LoadingButton>
          <SyntaxHighlighter language="jsx" style={darkMode ? a11yDark : prism}>
            {`<LoadingButton
  variant="contained"
  color={loaded ? 'success' : 'primary'}
  onClick={handleLoadingClick}
  loading={loading}
  loadingPosition="end"
  endIcon={loaded ? <Check /> : <Send />}
>
  {loaded ? 'Sent!' : loading ? 'Sending...' : 'Send'}
</LoadingButton>`}
          </SyntaxHighlighter>
        </Grid>
        <Grid item xs={12} lg={6}>
          <LoadingButton variant="contained" color={loaded ? 'success' : 'secondary'} onClick={handleLoadingClick} loading={loading} loadingPosition="start" startIcon={loaded ? <Check /> : <Save />}>
            {loaded ? 'Saved!' : loading ? 'Saving...' : 'Save'}
          </LoadingButton>
          <SyntaxHighlighter language="jsx" style={darkMode ? a11yDark : prism}>
            {`<LoadingButton
  variant="contained"
  color={loaded ? 'success' : 'secondary'}
  onClick={handleLoadingClick}
  loading={loading}
  loadingPosition="start"
  startIcon={loaded ? <Check /> : <Save />}
>
  {loaded ? 'Saved!' : loading ? 'Saving...' : 'Save'}
</LoadingButton>`}
          </SyntaxHighlighter>
        </Grid>
      </Grid>
    </Container>
  )
}

export default App
