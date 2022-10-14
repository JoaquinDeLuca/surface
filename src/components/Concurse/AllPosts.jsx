import React from 'react';
import Like from './Like'
import { useReadAllQuery } from '../../features/actions/ConcurseAPI'
import { useSelector } from 'react-redux';
import './cardsTop.css'


const AllPosts = () => {

  const userID = useSelector(state => state.user.id)
  const {
    data : info,
    isSuccess,
    isError
  } = useReadAllQuery();

  function generateCards(data){
    return(
      <div class="card">
        <div class="card-img">
          <img src={data.photo} alt={'foto del curso: ' + data.course}/>
        </div>
        <div class="card-info">
          <p class="text-title">{data.college} {data.course}</p>
          <p class="text-body">{data.description}</p>
          <div class="card-button">
            <img style={{width: '50px'}} src={data.name.photo} alt={data.name.name}/>
            <p>{data.name.name}</p>
            <Like like={data.likes} postId={data._id} userId={userID}/>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='posts'>
      <h2 className='postsTitle'>Todos los post:</h2>
      <div className="PostsContainer">
        {isSuccess ? info.concurses.map(generateCards) : null}
      </div>
    </div>
  );
}

export default AllPosts;
