import React, { useState } from 'react'
import './app.css'
import axios from 'axios'
import {
  TextField,
  Button,
  Container,
  Box,
  Typography,
  Link,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '100%',
      maxWidth: 600,
    },
  },
  link: {
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
  button: {
    margin: theme.spacing(1),
  },
}))

const App = () => {
  const classes = useStyles()
  const [url, setUrl] = useState('')
  const [shortUrl, setShortUrl] = useState('')

  const onSubmit = async () => {
    const { data: shortenedUrl } = await axios.post('/api/shortenUrl', {
      url,
    })

    if (shortenedUrl) {
      setShortUrl(shortenedUrl)
      console.log(shortenedUrl)
    }
  }

  return (
    <Container className={classes.root}>
      <TextField
        display="block"
        fullWidth
        variant="outlined"
        onChange={(e) => setUrl(e.target.value)}
        id="url"
        label="URL"
        type="text"
      />
      <Typography className={classes.link}>
        <Link
          hidden={!shortUrl}
          href="https://github.com/JiscSD/0-3-innovation-tech-test"
          target="_blank"
          rel="noreferrer"
        >
          Short URL
        </Link>
      </Typography>
      <Box component="span" display="block">
        <Button
          className={classes.button}
          type="submit"
          variant="contained"
          color="primary"
          onClick={onSubmit}
        >
          Submit
        </Button>
      </Box>
    </Container>
  )
}

export default App
