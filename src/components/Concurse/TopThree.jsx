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
    <div className='cardTopContainer'>
      <div className='postContainer'>
        <div className='imgContainer'>
          <img style={{width:'100%'}} src={data.photo} alt={'foto del curso: ' + data.course} />
        </div>
        <div className='courseData'>
          <h3>{`${data.college} ${data.course}`}</h3>
          <p>Descripcion del curso: {data.description}</p>
        </div>
      </div>
      <div className='userCreatorLikes'>
        <div className='userData'>
          <img style={{width: '50px'}} src={data.name.photo} alt={`Perfil de ${data.name.name}}`}/>
          <p>{data.name.name}</p>
        </div>
        <Like like={data.likes} postId={data._id} userId={userID}/>
      </div>
    </div>
    )
  }

  return (
    <>
    <h2 style={{width: '100%', textAlign: "center"}}>Top 3 mas votados:</h2>
    <div className='topThreeContainer'>
      {isSuccess ? info.response.map(generateCards) : null}
    </div>
    </>
  );
}

export default TopThree;
