import React, {useState} from 'react';
import { useTopThreeQuery } from '../../features/actions/ConcurseAPI'
import './cardsTop.css'
import { useSelector } from 'react-redux';
import Like from './Like'



const TopThree = () => {

  const userID = useSelector(state => state.user.id)

  const {
    data : info,
    isSuccess,
    isError
  } = useTopThreeQuery();


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
    <div className=''>
      <h2 style={{width: '100%', textAlign: "center"}}>TOP 3 más votados:</h2>
      <div className='topThreeContainer'>
        {isSuccess ? info.response.map(generateCards) : null}
      </div>
    </div>
  );
}

export default TopThree;
