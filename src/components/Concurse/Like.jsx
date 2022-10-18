import React, {useState, useEffect} from 'react';
import { AiFillHeart } from "react-icons/ai";
import swal from 'sweetalert'
import { useLikeDislikeMutation } from '../../features/actions/ConcurseAPI'
import { useNavigate } from "react-router-dom";

const Like = (props) => {

    const navigate = useNavigate()
    const [likeDislike] = useLikeDislikeMutation()
    const [like, setLike] = useState('white')
    const [likeCount, setLikeCount] = useState(props.like.length)

    useEffect(() => {
        if (props.like.includes(props.userId)) {
            setLike('red')
        }else{
          setLike('white')
        }
    }, [props.like, props.userId])

    const handleLike = () => {
        if(props.userId !== null){
          if (like === 'white') {
            setLike('red')
            setLikeCount(likeCount + 1)
            const like = {
              postId: props.postId,
              userId: props.userId
            }
            likeDislike(like)
          } else {
            setLike('white')
            setLikeCount(likeCount - 1)
            const like = {
              postId: props.postId,
              userId: props.userId
            }
            likeDislike(like)
          }
        }else{
          swal({
            title: "Inicia sesion para poder votar!",
            icon: "warning",
            buttons:{
              ok: 'Ok!',
              iniciarSesion: {
                text: "Inicia Sesion!",
                value: "singIn"
              },
            }
          }).then((value) => {
            switch (value) {
           
              case "singIn":
                navigate('/signin')
                break;
           
              default:
                console.log('');
            }
          });
        }
    }

  return (
    <div className='likesContainer'>
        <p>{likeCount}</p>
        <AiFillHeart className={like} size='35' style={{position: 'relative', zIndex:'100', cursor: "pointer"}} onClick={handleLike}/>
    </div>
  );
}

export default Like;
