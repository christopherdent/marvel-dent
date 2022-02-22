import React from 'react';
import { Col } from 'react-bootstrap';
import Tile from '../components/Tile'

const ComicsList = (props) => {


    

  const list =   
  props.comics.comics.map(comic => { 
    if (comic.thumbnail.path !== 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available') {
    return (
            <Col sm={6} md={4} lg={4}>
              <Tile 
                key = {comic.id}      
                title = {comic.title}       
                image = { comic.thumbnail.path + "." + comic.thumbnail.extension }
                creators = { comic.creators.items[0] ? comic.creators.items[0].name + " et al." : null }
                moreinfo = { comic.urls[0].url}
              />
          </Col>     
      );
    } else { 
      return (  
              <Col sm={6} md={4} lg={4}>
                <Tile 
                key = {comic.id}      
                title = {comic.title}       
                image = 'https://i5.walmartimages.com/asr/7c39143f-6d73-4f81-8c4e-9418804f47f2_1.0a075aa7294b8a62fe99895a82618550.jpeg'
                creators = { comic.creators.items[0] ? comic.creators.items[0].name + " et al." : null }
                moreinfo = { comic.urls[0].url}
                />
              </Col>   
        )}
      }
    )
    
 
    return (
      <>     
       { list }
      </>
      )
     }
      





 export default ComicsList